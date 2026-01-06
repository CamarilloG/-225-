
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Quiz } from '../types';
import { Button, Card } from '../components/Common';

const Landing: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
          Sentiment Pro v{quiz.version}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          {quiz.title}
        </h1>
        <p className="text-slate-500 text-lg max-w-md mx-auto">
          {quiz.description}
        </p>
      </div>

      <Card className="flex flex-col gap-6 items-center border-t-4 border-t-indigo-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <button 
            onClick={() => navigate('/quiz/quick')}
            className="flex flex-col items-start p-6 rounded-xl border-2 border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all text-left"
          >
            <span className="text-indigo-600 font-bold text-lg mb-1">快速测试</span>
            <span className="text-slate-500 text-sm">约 3-5 分钟 | 核心指标探测</span>
          </button>
          <button 
            onClick={() => navigate('/quiz/full')}
            className="flex flex-col items-start p-6 rounded-xl border-2 border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all text-left"
          >
            <span className="text-emerald-600 font-bold text-lg mb-1">深度评估</span>
            <span className="text-slate-500 text-sm">约 10-15 分钟 | 全方位关系诊断</span>
          </button>
        </div>

        <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex gap-3 items-start">
          <span className="text-amber-500 text-xl">⚠️</span>
          <div className="text-xs text-amber-800 leading-relaxed">
            <strong>免责声明：</strong>
            本测试基于通用心理学维度，旨在提供趣味性的关系观察角度。结果受主观填答影响，不代表绝对客观事实。关系是流动的，沟通才是解决问题的唯一途径。
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-4 text-center">
        {quiz.dimensions.slice(0, 3).map(dim => (
          <div key={dim.dimensionId} className="space-y-1">
            <div className="text-indigo-600 font-bold">{dim.name}</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider">核心维度</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
