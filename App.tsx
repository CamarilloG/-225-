
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { SAMPLE_QUIZ } from './constants';
import { Quiz } from './types';

// Pages
import Landing from './pages/Landing';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import AdminPage from './pages/AdminPage';

const App: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz>(SAMPLE_QUIZ);

  // 加载本地缓存（为了在演示中持久化管理后台的修改）
  useEffect(() => {
    const saved = localStorage.getItem('current_quiz');
    if (saved) {
      try {
        setCurrentQuiz(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load saved quiz", e);
      }
    }
  }, []);

  const handleQuizUpdate = (newQuiz: Quiz) => {
    setCurrentQuiz(newQuiz);
    localStorage.setItem('current_quiz', JSON.stringify(newQuiz));
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* 顶部导航，解决原生链接跳转被拦截的问题 */}
        <header className="py-4 px-6 border-b border-slate-100 bg-white sticky top-0 z-50 flex justify-between items-center shadow-sm">
          <Link to="/" className="text-xl font-bold text-indigo-600 tracking-tight flex items-center gap-2">
            <span className="text-2xl">🔗</span> HeartLink
          </Link>
          <div className="flex gap-4">
             <Link to="/admin" className="text-slate-400 hover:text-indigo-500 text-xs font-medium transition-colors py-1 px-3 border border-slate-200 rounded-lg">
               管理后台
             </Link>
          </div>
        </header>

        <main className="flex-grow flex flex-col items-center">
          <div className="w-full max-w-2xl px-4 py-8">
            <Routes>
              <Route path="/" element={<Landing quiz={currentQuiz} />} />
              <Route path="/quiz/:mode" element={<QuizPage quiz={currentQuiz} />} />
              <Route path="/result" element={<ResultPage quiz={currentQuiz} />} />
              <Route path="/admin" element={<AdminPage currentQuiz={currentQuiz} onUpdate={handleQuizUpdate} />} />
            </Routes>
          </div>
        </main>
        
        <footer className="py-8 text-center text-slate-400 text-xs border-t border-slate-100 mt-12">
          <p>© 2024 HeartLink Sentiment Pro. 仅供娱乐，不作为专业心理建议。</p>
          <p className="mt-2">题库驱动文件: <code className="bg-slate-100 px-1 rounded text-slate-500">constants.ts</code></p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
