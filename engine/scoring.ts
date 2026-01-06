
import { Quiz, QuizMode, UserAnswer, QuizResult, QuestionType, Question } from '../types';

export function calculateResult(quiz: Quiz, mode: QuizMode, answers: UserAnswer[]): QuizResult {
  // 获取用户在背景题中选择的关系阶段
  const stageAnswer = answers.find(a => a.questionId === 'bq_stage');
  const selectedStage = stageAnswer ? (stageAnswer.value as string) : null;

  // 重要：计算分母时必须使用与答题页完全一致的题目过滤逻辑
  const filteredQuestions = quiz.questions.filter(q => {
    const modeMatch = q.modes.includes(mode);
    // 题目属于背景题，或者没有阶段限制，或者符合用户选择的阶段
    const stageMatch = q.isBackground || !q.stageIds || (selectedStage && q.stageIds.includes(selectedStage));
    return modeMatch && stageMatch;
  });
  
  // 计算原始得分与理论最大/最小值（用于归一化百分比）
  let totalRawScore = 0;
  let totalMaxPossible = 0;
  let totalMinPossible = 0;

  const dimensionStats = quiz.dimensions.map(dim => ({
    ...dim,
    rawScore: 0,
    maxPossible: 0,
    minPossible: 0
  }));

  filteredQuestions.forEach(q => {
    const answer = answers.find(a => a.questionId === q.questionId);
    let qScore = 0;
    let qMax = 0;
    let qMin = 0;

    if (q.type === QuestionType.SINGLE || q.type === QuestionType.MULTI) {
      const options = q.options || [];
      const scores = options.map(o => o.score);
      
      if (q.type === QuestionType.MULTI) {
        // 多选模式：最大值为所有正分项之和，最小值为所有负分项之和
        qMax = options.filter(o => o.score > 0).reduce((sum, o) => sum + o.score, 0);
        qMin = options.filter(o => o.score < 0).reduce((sum, o) => sum + o.score, 0);
      } else {
        // 单选模式：最大值为选项中最高分，最小值为选项中最低分
        qMax = Math.max(...scores);
        qMin = Math.min(...scores);
      }
      
      if (answer) {
        if (Array.isArray(answer.value)) {
          // 多选计分
          qScore = options
            .filter(o => (answer.value as string[]).includes(o.optionId))
            .reduce((sum, o) => sum + o.score, 0);
        } else {
          // 单选计分
          qScore = options.find(o => o.optionId === answer.value)?.score || 0;
        }
      }
    } else if (q.type === QuestionType.SCALE && q.scale) {
      qMax = q.scale.max;
      qMin = q.scale.min;
      if (answer) {
        qScore = typeof answer.value === 'number' ? answer.value : parseFloat(answer.value as string);
        if (q.reverse) {
          qScore = q.scale.max - qScore + q.scale.min;
        }
      }
    }

    const weightedScore = qScore * q.weight;
    const weightedMax = qMax * q.weight;
    const weightedMin = qMin * q.weight;

    totalRawScore += weightedScore;
    totalMaxPossible += weightedMax;
    totalMinPossible += weightedMin;

    q.dimensionIds.forEach(did => {
      const ds = dimensionStats.find(d => d.dimensionId === did);
      if (ds) {
        ds.rawScore += weightedScore;
        ds.maxPossible += weightedMax;
        ds.minPossible += weightedMin;
      }
    });
  });

  // 全局百分比归一化 (0 - 100)
  const range = totalMaxPossible - totalMinPossible;
  const totalPercent = range === 0 ? 0 : Math.max(0, Math.min(100, Math.round(((totalRawScore - totalMinPossible) / range) * 100)));

  // 维度百分比归一化
  const dimensionResults = dimensionStats.map(ds => {
    const dRange = ds.maxPossible - ds.minPossible;
    return {
      dimensionId: ds.dimensionId,
      name: ds.name,
      percent: dRange === 0 ? 0 : Math.max(0, Math.min(100, Math.round(((ds.rawScore - ds.minPossible) / dRange) * 100)))
    };
  });

  // 提取命中标签 (Top Highlights)
  const highlights: string[] = [];
  answers.forEach(ans => {
    const q = filteredQuestions.find(q => q.questionId === ans.questionId);
    if (q?.options) {
      if (Array.isArray(ans.value)) {
        ans.value.forEach(oid => {
          const opt = q.options?.find(o => o.optionId === oid);
          if (opt?.tags) highlights.push(...opt.tags);
        });
      } else {
        const opt = q.options?.find(o => o.optionId === ans.value);
        if (opt?.tags) highlights.push(...opt.tags);
      }
    }
  });

  // 匹配结果规则
  const rule = quiz.resultRules.find(r => totalPercent >= r.minPercent && totalPercent <= r.maxPercent) 
    || quiz.resultRules[quiz.resultRules.length - 1];

  return {
    totalPercent,
    levelName: rule.levelName,
    summary: rule.summary,
    analysis: rule.analysis,
    suggestions: rule.suggestions,
    dimensions: dimensionResults,
    topHighlights: Array.from(new Set(highlights)).slice(0, 3),
    shareText: rule.shareText
  };
}
