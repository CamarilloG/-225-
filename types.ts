
export type QuizMode = 'quick' | 'full';

export enum QuestionType {
  SINGLE = 'single',
  MULTI = 'multi',
  SCALE = 'scale'
}

export interface Dimension {
  dimensionId: string;
  name: string;
  weight: number;
  description: string;
}

export interface Option {
  optionId: string;
  text: string;
  score: number;
  tags?: string[];
}

export interface ScaleConfig {
  min: number;
  max: number;
  step: number;
  minLabel: string;
  maxLabel: string;
}

export interface Question {
  questionId: string;
  type: QuestionType;
  title: string;
  description?: string;
  dimensionIds: string[];
  weight: number;
  modes: QuizMode[];
  stageIds?: string[]; // 支持的阶段：crush, dating, committed (不填则为通用题)
  isBackground?: boolean; // 是否为前置背景题
  reverse?: boolean;
  options?: Option[];
  scale?: ScaleConfig;
  required?: boolean;
}

export interface ResultRule {
  minPercent: number;
  maxPercent: number;
  resultKey: string;
  levelName: string;
  summary: string;
  analysis: string[];
  suggestions: string[];
  shareText: string;
}

export interface Quiz {
  quizId: string;
  title: string;
  description: string;
  version: string;
  dimensions: Dimension[];
  questions: Question[];
  resultRules: ResultRule[];
}

export interface QuizResult {
  totalPercent: number;
  levelName: string;
  summary: string;
  analysis: string[];
  suggestions: string[];
  dimensions: {
    dimensionId: string;
    name: string;
    percent: number;
  }[];
  topHighlights: string[];
  shareText: string;
  aiAnalysis?: string; // New field for AI generated insights
}

export interface UserAnswer {
  questionId: string;
  value: string | string[] | number;
}
