
import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Quiz, QuizMode, QuestionType, UserAnswer, Question } from '../types';
import { Button, ProgressBar, Card } from '../components/Common';

const QuizPage: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const { mode } = useParams<{ mode: QuizMode }>();
  const navigate = useNavigate();
  
  // 答题进度控制
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  
  // 阶段过滤
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  // 1. 提取所有题目
  const backgroundQuestions = useMemo(() => quiz.questions.filter(q => q.isBackground), [quiz]);
  const mainQuestionsPool = useMemo(() => quiz.questions.filter(q => !q.isBackground && q.modes.includes(mode || 'quick')), [quiz, mode]);

  // 2. 动态生成的题目列表
  const activeQuestions = useMemo(() => {
    if (!selectedStage) {
      // 如果还没选阶段，只显示背景题
      return backgroundQuestions;
    }
    // 选了阶段后，显示背景题 + 对应阶段的题目
    const filteredMain = mainQuestionsPool.filter(q => !q.stageIds || q.stageIds.includes(selectedStage));
    return [...backgroundQuestions, ...filteredMain];
  }, [backgroundQuestions, mainQuestionsPool, selectedStage]);

  const currentQuestion = activeQuestions[currentIndex];

  const handleAnswer = (val: string | string[] | number) => {
    // 如果是阶段选择题，记录阶段
    if (currentQuestion.questionId === 'bq_stage') {
      setSelectedStage(val as string);
    }

    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(a => a.questionId === currentQuestion.questionId);
    if (existingIndex > -1) {
      newAnswers[existingIndex] = { questionId: currentQuestion.questionId, value: val };
    } else {
      newAnswers.push({ questionId: currentQuestion.questionId, value: val });
    }
    setAnswers(newAnswers);
  };

  const next = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 最终提交
      localStorage.setItem('last_result_input', JSON.stringify({ mode, answers }));
      navigate('/result');
    }
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  if (!currentQuestion) return null;

  const currentAnswer = answers.find(a => a.questionId === currentQuestion.questionId)?.value;

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="space-y-2">
        <div className="flex justify-between items-end text-sm text-slate-400">
          <span className="flex items-center gap-1">
            {currentQuestion.isBackground ? (
              <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded text-[10px] font-bold">前置背景</span>
            ) : (
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-600 rounded text-[10px] font-bold">核心测评</span>
            )}
            {mode === 'quick' ? '快速版' : '深度版'}
          </span>
          <span className="font-mono">
            {currentIndex + 1} / {activeQuestions.length}
          </span>
        </div>
        <ProgressBar progress={((currentIndex + 1) / activeQuestions.length) * 100} />
      </div>

      <Card className="min-h-[400px] flex flex-col justify-between border-b-8 border-b-indigo-500/10">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-800 leading-tight">
              {currentQuestion.title}
            </h2>
            {currentQuestion.description && (
              <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg border-l-4 border-slate-200">
                {currentQuestion.description}
              </p>
            )}
          </div>

          <div className="space-y-3">
            {currentQuestion.type === QuestionType.SINGLE && (
              currentQuestion.options?.map(opt => (
                <button
                  key={opt.optionId}
                  onClick={() => handleAnswer(opt.optionId)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden group ${
                    currentAnswer === opt.optionId 
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm' 
                      : 'border-slate-100 hover:border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between z-10 relative">
                    <span className="font-medium">{opt.text}</span>
                    {currentAnswer === opt.optionId && <span className="text-xl">●</span>}
                  </div>
                  {currentAnswer === opt.optionId && (
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                  )}
                </button>
              ))
            )}

            {currentQuestion.type === QuestionType.MULTI && (
              currentQuestion.options?.map(opt => (
                <button
                  key={opt.optionId}
                  onClick={() => {
                    const current = (currentAnswer as string[]) || [];
                    const newVal = current.includes(opt.optionId)
                      ? current.filter(id => id !== opt.optionId)
                      : [...current, opt.optionId];
                    handleAnswer(newVal);
                  }}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all flex justify-between items-center ${
                    ((currentAnswer as string[]) || []).includes(opt.optionId)
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700 font-medium' 
                      : 'border-slate-100 hover:border-slate-200 text-slate-600'
                  }`}
                >
                  <span>{opt.text}</span>
                  <div className={`w-6 h-6 rounded flex items-center justify-center border-2 ${
                    ((currentAnswer as string[]) || []).includes(opt.optionId) 
                      ? 'bg-indigo-500 border-indigo-500 text-white' 
                      : 'border-slate-200'
                  }`}>
                    {((currentAnswer as string[]) || []).includes(opt.optionId) && "✓"}
                  </div>
                </button>
              ))
            )}

            {currentQuestion.type === QuestionType.SCALE && currentQuestion.scale && (
              <div className="py-12 px-4 space-y-10">
                <div className="relative h-2 bg-slate-200 rounded-full">
                   <div 
                    className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full transition-all"
                    style={{ width: `${(((currentAnswer as number) || currentQuestion.scale.min) / currentQuestion.scale.max) * 100}%` }}
                   />
                   <input 
                    type="range"
                    min={currentQuestion.scale.min}
                    max={currentQuestion.scale.max}
                    step={currentQuestion.scale.step}
                    value={(currentAnswer as number) || currentQuestion.scale.min}
                    onChange={(e) => handleAnswer(parseInt(e.target.value))}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-indigo-500 rounded-full shadow-lg pointer-events-none transition-all"
                    style={{ left: `calc(${(((currentAnswer as number) || currentQuestion.scale.min) / currentQuestion.scale.max) * 100}% - 12px)` }}
                  />
                </div>
                <div className="flex justify-between text-xs font-bold text-slate-400">
                  <span className="w-20 text-left uppercase">{currentQuestion.scale.minLabel}</span>
                  <span className="text-3xl text-indigo-600 font-black">{(currentAnswer as number) ?? currentQuestion.scale.min}</span>
                  <span className="w-20 text-right uppercase">{currentQuestion.scale.maxLabel}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4 mt-12 pt-8 border-t border-slate-50">
          <Button variant="outline" className="flex-1" onClick={prev} disabled={currentIndex === 0}>
            返回
          </Button>
          <Button className="flex-1 shadow-indigo-200 shadow-lg" onClick={next} disabled={currentAnswer === undefined}>
            {currentIndex === activeQuestions.length - 1 ? '揭晓结果' : '下一题'}
          </Button>
        </div>
      </Card>
      
      <p className="text-center text-[10px] text-slate-300 uppercase tracking-[0.2em]">
        End-to-End Sentiment Analysis Driven by Quiz Engine v{quiz.version}
      </p>
    </div>
  );
};

export default QuizPage;
