
import { Quiz } from './types';
import { commonQuestions } from './data/common';
import { crushQuestions } from './data/crush';
import { datingQuestions } from './data/dating';
import { committedQuestions } from './data/committed';

export const ADMIN_PASSWORD = 'admin';

export const SAMPLE_QUIZ: Quiz = {
  quizId: "heartlink-professional-v3",
  title: "心动信号·225题全景关系诊断",
  description: "基于‘依恋理论’与‘社会交换理论’，通过 200+ 个核心行为观测点，深度解析你们关系的底层逻辑。由资深情感分析师团队构建题目矩阵。",
  version: "3.0.0",
  dimensions: [
    { dimensionId: "init", name: "主动性", weight: 1.0, description: "评估个体推进关系深化的内在动力。" },
    { dimensionId: "invest", name: "投入度", weight: 1.2, description: "评估资源（时间、金钱、情绪）的实质性并入。" },
    { dimensionId: "stable", name: "稳定性", weight: 1.0, description: "评估情感的可预测性与情绪调节成熟度。" },
    { dimensionId: "future", name: "未来规划", weight: 1.5, description: "评估双方在长期生命愿景上的对齐深度。" },
    { dimensionId: "bound", name: "边界健康", weight: 0.9, description: "评估在亲密中保持独立与尊重他人的能力。" }
  ],
  // 合并所有题库模块
  questions: [
    ...commonQuestions,
    ...crushQuestions,
    ...datingQuestions,
    ...committedQuestions
  ],
  resultRules: [
    {
      minPercent: 0, maxPercent: 35, resultKey: "critical", levelName: "【警戒级】负熵运作状态",
      summary: "225 道行为点扫描显示，你们的关系正处于高频消耗的‘熵增’过程，修复难度极高。",
      analysis: ["沟通陷入了‘指责-防御’的恶性循环。","核心维度的投入极度不对等，单方透支明显。","缺乏共同的愿景基石，信任成本极高。"],
      suggestions: ["立即停止一切形式的单向‘情感乞讨’。","寻求物理空间的适度隔离，重新找回自我边界。","如有必要，开启一段严肃的‘止损对话’。"],
      shareText: "HeartLink 深度测评结论：爱是流动的能量，当它不再流向我，我选择先爱自己。"
    },
    {
      minPercent: 36, maxPercent: 65, resultKey: "fluctuation", levelName: "【观测级】动态平衡状态",
      summary: "好感依然存在，但在现实适配的深层观测点上出现了大量的信号中断。",
      analysis: ["你们在琐碎生活的配合度上表现尚可，但在大决策共识上存在断层。","依恋风格存在明显的‘追逃’错位，安全感供给不足。","缺乏深度的灵魂共振，更多靠习惯或外部压力维持。"],
      suggestions: ["增加共同解决‘生存级难题’的经历。","主动进行一次不设防的‘财务与未来规划’对齐。","观察对方在利益受损时的第一反应。"],
      shareText: "225 题测评结果：我们的关系还在博弈中，每一个选择都在改写终局。"
    },
    {
      minPercent: 66, maxPercent: 88, resultKey: "maturity", levelName: "【成熟级】稳健共生状态",
      summary: "高水平的适配度。展现了成熟的情感契约精神与极强的抗风险韧性。",
      analysis: ["建立了自洽的冲突处理机制，沟通成本极低且效率极高。","在核心维度的分值表现非常均衡，展现了双向奔赴的特征。","具备高度的并入意识，未来规划对齐度极高。"],
      suggestions: ["防止长久稳定带来的‘情感懒政’，持续保持对另一半的好奇心。","可以开始推进更高层级的‘联合投资’（如置业、共同抚养计划）。","享受这种罕见的安全感。"],
      shareText: "深度测评结果：66% 以上的稳健适配。这就是高质量关系的现实范本！"
    },
    {
      minPercent: 89, maxPercent: 100, resultKey: "legendary", levelName: "【殿堂级】灵魂合伙人状态",
      summary: "罕见的生命共同体。在 200 多个观测点上均展现出顶级的默契与跨时空的共鸣。",
      analysis: ["实现了近乎完美的心理并入，对方即是你的‘终极充电站’。","信任成本几乎为零，彼此是对方最可靠的后盾。","生命愿景高度重合，互为彼此最强大的赋能中心。"],
      suggestions: ["这种级别的连接是稀缺资源，请务必将其作为生命首位资产进行经营。","共同向外界释放你们的正向能量场。","保持敬畏，珍惜这份命中注定的同频。"],
      shareText: "震撼！225 题深度测评测出了‘灵魂合伙人’，这就是我的天选关系❤️"
    }
  ]
};
