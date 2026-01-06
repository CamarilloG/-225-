
import React from 'react';

/**
 * Common Button component
 * Fix: Added type property to interface and default value to resolve TS error in AdminPage
 */
export const Button: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({ onClick, children, variant = 'primary', className = '', disabled, type = 'button' }) => {
  const base = "px-6 py-3 rounded-full font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md",
    secondary: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-md",
    outline: "border-2 border-slate-200 text-slate-600 hover:bg-slate-50"
  };
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${base} ${variants[variant]} ${className}`} 
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
    <div 
      className="bg-indigo-500 h-full transition-all duration-300" 
      style={{ width: `${progress}%` }}
    />
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-6 ${className}`}>
    {children}
  </div>
);
