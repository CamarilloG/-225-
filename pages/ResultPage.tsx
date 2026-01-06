
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Quiz, QuizResult, QuizMode, UserAnswer } from '../types';
import { calculateResult } from '../engine/scoring';
import { SentimentRadar } from '../components/RadarChart';
import { Card, Button } from '../components/Common';
import { GoogleGenAI } from "@google/genai";

const ResultPage: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [rawAnswers, setRawAnswers] = useState<UserAnswer[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [loadingText, setLoadingText] = useState("正在启动 AI 专家系统...");

  useEffect(() => {
    const raw = localStorage.getItem('last_result_input');
    if (raw) {
      try {
        const { mode, answers } = JSON.parse(raw);
        setRawAnswers(answers);
        const res = calculateResult(quiz, mode as QuizMode, answers as UserAnswer[]);
        setResult(res);
      } catch (e) {
        console.error("Result calculation error", e);
      }
    } else {
      navigate('/');
    }
  }, [quiz, navigate]);

  const handleAIAnalysis = async () => {
    if (!result || !rawAnswers.length) return;
    setIsAnalyzing(true);
    
    const loadingMessages = [
      "正在解析您的情感微反应...",
      "正在扫描依恋模式深度...",
      "正在构建个性化关系画像...",
      "正在匹配心理学行为基准...",
      "正在生成深度专业建议..."
    ];
    
    let msgIndex = 0;
    const interval = setInterval(() => {
      msgIndex = (msgIndex + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[msgIndex]);
    }, 2000);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const answerContext = rawAnswers.map(ans => {
        const q = quiz.questions.find(q => q.questionId === ans.questionId);
        if (!q) return null;
        let choiceText = "";
        if (q.options) {
          if (Array.isArray(ans.value)) {
            choiceText = ans.value.map(vid => q.options?.find(o => o.optionId === vid)?.text).join(", ");
          } else {
            choiceText = q.options.find(o => o.optionId === ans.value)?.text || String(ans.value);
          }
        } else {
          choiceText = String(ans.value);
        }
        return `问: ${q.title}\n答: ${choiceText}`;
      }).filter(Boolean).join("\n\n");

      const prompt = `你是一位世界顶级的亲密关系心理学家。
基于以下测评结果和用户的具体答题内容，请提供一份深度的、具有洞察力的专业分析。

测评标题: ${quiz.title}
用户得分: ${result.totalPercent}/100
等级: ${result.levelName}
维度得分: ${result.dimensions.map(d => `${d.name}: ${d.percent}%`).join(", ")}

具体答题详情:
${answerContext}

请按照以下结构输出：
1. 【核心洞察】：简练地指出这段关系目前最本质的心理状态（200字以内）。
2. 【潜在风险】：基于答案中的细节，指出未来可能面临的隐性危机。
3. 【AI 专家建议】：提供 2 条极具可操作性的“非模版化”深度建议。

注意：语气要专业、冷静但充满共情。不要使用笼统的废话。`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "你是一个专业的心理咨询师，擅长从细微的行为数据中分析情感逻辑。你的语言风格优雅、深邃且富有启发性。",
          temperature: 0.8,
        }
      });

      setAiInsight(response.text || "无法生成分析，请稍后再试。");
    } catch (error) {
      console.error("AI Analysis failed:", error);
      setAiInsight("AI 分析暂时不可用，可能是网络波动或 API 限制。");
    } finally {
      clearInterval(interval);
      setIsAnalyzing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        alert('测评报告已成功复制到剪贴板！');
      }).catch(() => {
        prompt('复制失败，请手动复制以下内容：', text);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert('测评报告已成功复制到剪贴板！');
      } catch (err) {
        prompt('复制失败，请手动复制以下内容：', text);
      }
      document.body.removeChild(textArea);
    }
  };

  const handleShare = () => {
    if (!result) return;

    // Construct the concise report string
    let reportText = `【HeartLink 心动信号·专业深度测评报告】\n\n`;
    reportText += `测评项目：${quiz.title}\n`;
    reportText += `匹配指数：${result.totalPercent}%\n`;
    reportText += `评价等级：${result.levelName}\n\n`;
    reportText += `核心摘要：${result.summary}\n\n`;

    if (aiInsight) {
      // Extract just the Core Insight part if possible for brevity
      const coreInsightMatch = aiInsight.match(/【核心洞察】([\s\S]*?)(?=【|$)/);
      const extractedAI = coreInsightMatch ? coreInsightMatch[1].trim() : aiInsight.substring(0, 200) + "...";
      reportText += `✨ AI 专家深度洞察：\n${extractedAI}\n\n`;
    }

    reportText += `查看完整报告与 AI 解析：${window.location.origin}${window.location.pathname}`;

    copyToClipboard(reportText);
  };

  if (!result) return <div className="p-8 text-center text-slate-400">计算结果中...</div>;

  return (
    <div className="flex flex-col gap-6 w-full animate-in slide-in-from-bottom-8 duration-700">
      <Card className="text-center space-y-6 overflow-hidden relative border-none ring-1 ring-slate-100">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
        
        <div className="pt-4 space-y-2">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">测评结果：{result.levelName}</h3>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-purple-700">
              {result.totalPercent}
            </span>
            <span className="text-2xl font-bold text-indigo-400">%</span>
          </div>
          <p className="text-slate-600 font-medium px-4">{result.summary}</p>
        </div>

        <div className="flex justify-center gap-2">
          {result.topHighlights.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">
              #{tag}
            </span>
          ))}
        </div>
      </Card>

      <Card className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-bold text-slate-800 border-l-4 border-indigo-500 pl-3">维度分析</h4>
          <span className="text-[10px] text-slate-400 font-medium">DIMENSIONAL RADAR</span>
        </div>
        <SentimentRadar data={result.dimensions.map(d => ({ name: d.name, value: d.percent }))} />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {result.dimensions.map(d => (
            <div key={d.dimensionId} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-[10px] text-slate-400 font-bold uppercase truncate">{d.name}</div>
              <div className="text-lg font-black text-slate-700">{d.percent}%</div>
            </div>
          ))}
        </div>
      </Card>

      {/* AI Analysis Section */}
      <div className="relative">
        {!aiInsight && !isAnalyzing ? (
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-center text-white shadow-xl shadow-indigo-200">
            <div className="text-3xl mb-4">✨</div>
            <h4 className="text-xl font-bold mb-2">解锁专业 AI 深度解析</h4>
            <p className="text-indigo-100 text-sm mb-6 opacity-90">
              基于您的全部答题细节，由 HeartLink AI 实验室提供专属心理学报告。
            </p>
            <Button 
              onClick={handleAIAnalysis}
              className="w-full bg-white text-indigo-700 hover:bg-indigo-50 border-none font-bold"
            >
              立即解锁 (由 Gemini 3.0 提供动力)
            </Button>
          </div>
        ) : isAnalyzing ? (
          <Card className="flex flex-col items-center justify-center py-16 space-y-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-indigo-600">AI</div>
            </div>
            <p className="text-indigo-600 font-medium animate-pulse">{loadingText}</p>
          </Card>
        ) : (
          <Card className="space-y-6 border-2 border-indigo-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase rounded-bl-xl tracking-tighter">
              AI Professional Insight
            </div>
            <h4 className="font-bold text-slate-800 border-l-4 border-indigo-600 pl-3">AI 深度专家报告</h4>
            <div className="prose prose-sm text-slate-600 max-w-none space-y-4">
              {aiInsight?.split('\n').map((line, i) => {
                if (line.startsWith('【')) {
                  return <h5 key={i} className="text-indigo-700 font-bold mt-4 mb-2">{line}</h5>;
                }
                return <p key={i} className="text-sm leading-relaxed">{line}</p>;
              })}
            </div>
            <div className="pt-4 border-t border-slate-50 text-[10px] text-slate-400 italic">
              *此报告由人工智能根据您的答题倾向生成，仅供深度探索自我使用。
            </div>
          </Card>
        )}
      </div>

      <Card className="space-y-6">
        <div className="space-y-4">
          <h4 className="font-bold text-slate-800 border-l-4 border-emerald-500 pl-3">标准模型解读</h4>
          {result.analysis.map((para, i) => (
            <p key={i} className="text-sm text-slate-600 leading-relaxed indent-4">
              {para}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-slate-800 border-l-4 border-amber-500 pl-3">行动建议</h4>
          <ul className="space-y-3">
            {result.suggestions.map((sug, i) => (
              <li key={i} className="flex gap-3 items-start text-sm text-slate-600 bg-amber-50 p-3 rounded-lg border border-amber-100 shadow-sm">
                <span className="text-amber-500 font-bold">{i+1}.</span>
                <span>{sug}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <div className="flex flex-col gap-3 pb-12">
        <Button onClick={handleShare} className="w-full">
          复制精简报告并分享
        </Button>
        <Button variant="outline" onClick={() => navigate('/')} className="w-full">
          返回首页
        </Button>
      </div>
    </div>
  );
};

export default ResultPage;
