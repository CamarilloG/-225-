
import React, { useState } from 'react';
import { Quiz, QuestionType } from '../types';
import { Card, Button } from '../components/Common';
import { ADMIN_PASSWORD } from '../constants';

const AdminPage: React.FC<{ currentQuiz: Quiz; onUpdate: (q: Quiz) => void }> = ({ currentQuiz, onUpdate }) => {
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [jsonInput, setJsonInput] = useState(JSON.stringify(currentQuiz, null, 2));
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthed(true);
    } else {
      alert('密码错误');
    }
  };

  const validateAndSave = () => {
    try {
      const parsed = JSON.parse(jsonInput) as Quiz;
      
      // Basic validation
      if (!parsed.quizId || !parsed.questions || !parsed.dimensions) {
        throw new Error("Missing required root fields: quizId, questions, dimensions");
      }

      parsed.questions.forEach((q, idx) => {
        if (!q.questionId) throw new Error(`Question ${idx} missing questionId`);
        if (![QuestionType.SINGLE, QuestionType.MULTI, QuestionType.SCALE].includes(q.type)) {
          throw new Error(`Question ${q.questionId} has invalid type`);
        }
        if (q.type !== QuestionType.SCALE && (!q.options || q.options.length === 0)) {
          throw new Error(`Question ${q.questionId} of type ${q.type} must have options`);
        }
        q.dimensionIds.forEach(did => {
          if (!parsed.dimensions.find(d => d.dimensionId === did)) {
            throw new Error(`Question ${q.questionId} references non-existent dimension: ${did}`);
          }
        });
      });

      onUpdate(parsed);
      setError(null);
      alert('保存成功并已应用为新版本！');
    } catch (e: any) {
      setError(e.message);
    }
  };

  if (!isAuthed) {
    return (
      <Card className="max-w-sm mx-auto mt-20">
        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-xl font-bold">管理后台登录</h2>
          <input 
            type="password" 
            placeholder="管理员密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <Button className="w-full" type="submit">进入</Button>
        </form>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">题库配置 (JSON 驱动)</h1>
        <div className="text-sm text-slate-400">当前版本: v{currentQuiz.version}</div>
      </div>

      <Card className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-slate-600">编辑 Quiz 结构 (JSON)</label>
          <textarea 
            className="w-full h-[500px] p-4 font-mono text-xs bg-slate-900 text-emerald-400 rounded-xl"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          />
        </div>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
            <strong>校验错误:</strong> {error}
          </div>
        )}

        <div className="flex gap-4">
          <Button onClick={validateAndSave} className="flex-1">
            校验并发布新版本
          </Button>
          <Button variant="outline" onClick={() => setJsonInput(JSON.stringify(currentQuiz, null, 2))} className="flex-1">
            重置更改
          </Button>
        </div>
      </Card>

      <Card className="space-y-4">
        <h3 className="font-bold">导入/导出说明</h3>
        <div className="text-sm text-slate-600 space-y-2">
          <p>• <strong>ID 唯一性</strong>: `quizId` 改变将导致历史结果失效，`version` 建议遵循 SemVer。</p>
          <p>• <strong>权重计算</strong>: 每个题目可单独设置 `weight`，最终百分比会自动基于全集 max/min 进行归一化。</p>
          <p>• <strong>多模式支持</strong>: 在 `questions[].modes` 中指定 `['quick']` 或 `['full']` 控制其可见性。</p>
        </div>
      </Card>
    </div>
  );
};

export default AdminPage;
