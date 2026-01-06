
import { Question, QuestionType } from '../types';

export const commonQuestions: Question[] = [
  {
    questionId: "bq_1", type: QuestionType.SINGLE, title: "定义你们当前的关系状态？", dimensionIds: ["stable"], weight: 0, modes: ["quick", "full"], isBackground: true,
    options: [
      { optionId: "b1", text: "相互试探的‘心动暧昧期’", score: 0 },
      { optionId: "b2", text: "正在适应的‘深度磨合期’", score: 0 },
      { optionId: "b3", text: "彼此承诺的‘长期稳定期’", score: 0 }
    ]
  },
  {
    questionId: "bq_stage", type: QuestionType.SINGLE, title: "您希望开启哪个深度的测评分支？", description: "系统将动态调取对应阶段的深度题库。", dimensionIds: ["future"], weight: 0, modes: ["quick", "full"], isBackground: true,
    options: [
      { optionId: "crush", text: "【心意指向】解析暗恋/暧昧中的博弈信号", score: 0 },
      { optionId: "dating", text: "【适配机制】解析交往中的权力分配与冲突修复", score: 0 },
      { optionId: "committed", text: "【生命共生】解析长期契约与灵魂并入深度", score: 0 }
    ]
  },
  {
    questionId: "bq_dist", type: QuestionType.SINGLE, title: "物理距离对你们互动频率的影响？", dimensionIds: ["stable"], weight: 0.5, modes: ["quick", "full"], isBackground: true,
    options: [
      { optionId: "d1", text: "近在咫尺，随时可以产生线下链接", score: 10 },
      { optionId: "d2", text: "同城但通勤成本高，见面需要提前预约", score: 7 },
      { optionId: "d3", text: "异地状态，主要依靠数字信号维持", score: 4 }
    ]
  },
  {
    questionId: "gen_1", type: QuestionType.SCALE, title: "这段关系带给你的‘心理确定性’评分？", description: "0代表极度焦虑，10代表完全心安。", dimensionIds: ["stable"], weight: 1.5, modes: ["quick", "full"],
    scale: { min: 0, max: 10, step: 1, minLabel: "如履薄冰", maxLabel: "稳如磐石" }
  },
  {
    questionId: "gen_2", type: QuestionType.SINGLE, title: "在不考虑外界压力的情况下，你对这段关系的‘自发投入欲望’？", dimensionIds: ["invest"], weight: 1.2, modes: ["quick", "full"],
    options: [
      { optionId: "a", text: "渴望倾其所有，包括时间与稀缺资源", score: 10 },
      { optionId: "b", text: "量力而行，保持对等投入", score: 7 },
      { optionId: "c", text: "存在防御性保留，害怕投入后受损", score: 3 }
    ]
  },
  {
    questionId: "gen_3", type: QuestionType.SINGLE, title: "当你感到脆弱或遭遇职场挫败时，你第一时间想找对方倾诉的原始冲动？", dimensionIds: ["stable", "invest"], weight: 1.4, modes: ["quick", "full"],
    options: [
      { optionId: "a", text: "首选对象，感觉只有对方能给到核心支撑", score: 10 },
      { optionId: "b", text: "会考虑，但更倾向于先自我消化", score: 6 },
      { optionId: "c", text: "不太会，甚至担心表现脆弱会遭到对方轻视", score: 1 }
    ]
  },
  {
    questionId: "gen_4", type: QuestionType.MULTI, title: "你认为目前关系中最大的‘阻力源’（多选）？", dimensionIds: ["stable"], weight: 1.0, modes: ["full"],
    options: [
      { optionId: "m1", text: "性格差异导致的无效沟通", score: -2 },
      { optionId: "m2", text: "家庭环境或长辈期待的偏差", score: -2 },
      { optionId: "m3", text: "职业发展路径的分歧", score: -2 },
      { optionId: "m4", text: "过往情感经历留下的信任创伤", score: -3 },
      { optionId: "m5", text: "基本不存在显著阻力", score: 5 }
    ]
  },
  {
    questionId: "gen_5", type: QuestionType.SCALE, title: "你们的‘幽默感/梗’的共鸣频次？", dimensionIds: ["stable"], weight: 0.8, modes: ["quick", "full"],
    scale: { min: 0, max: 10, step: 1, minLabel: "完全冷场", maxLabel: "同频共振" }
  },
  {
    questionId: "gen_6", type: QuestionType.SINGLE, title: "在对方长时间（>6小时）未回复信息时，你的心理默认预设？", dimensionIds: ["stable"], weight: 1.2, modes: ["full"],
    options: [
      { optionId: "a", text: "TA肯定在忙，忙完自然会找我", score: 10 },
      { optionId: "b", text: "开始怀疑自己是不是说错了话或对方冷淡了", score: 4 },
      { optionId: "c", text: "极度焦虑，反复查看手机，产生愤怒感", score: 1 }
    ]
  },
  {
    questionId: "gen_7", type: QuestionType.SINGLE, title: "你们在‘核心价值观’（如金钱观、生命观）上的重合程度？", dimensionIds: ["future"], weight: 1.5, modes: ["quick", "full"],
    options: [
      { optionId: "a", text: "高度一致，几乎不需要磨合", score: 10 },
      { optionId: "b", text: "大方向一致，细节处有分歧", score: 7 },
      { optionId: "c", text: "分歧严重，经常因此产生无效争吵", score: 2 }
    ]
  },
  {
    questionId: "gen_8", type: QuestionType.SCALE, title: "你们冲突后的‘情感修复效率’评分？", description: "从发生不快到完全恢复亲密的时长与质量。", dimensionIds: ["stable"], weight: 1.3, modes: ["full"],
    scale: { min: 0, max: 10, step: 1, minLabel: "冷战终结者", maxLabel: "即时修复大师" }
  },
  {
    questionId: "gen_9", type: QuestionType.SINGLE, title: "当你们在公共场合时，你感知到的对方对你的‘认同感’？", dimensionIds: ["invest"], weight: 1.1, modes: ["full"],
    options: [
      { optionId: "a", text: "表现出明显的亲昵与自豪，愿意公开关联", score: 10 },
      { optionId: "b", text: "表现得客气但疏离，刻意保持物理距离", score: 4 },
      { optionId: "c", text: "尽量避免共同在场，或表现出尴尬", score: 1 }
    ]
  },
  {
    questionId: "gen_10", type: QuestionType.SINGLE, title: "这段关系是否让你变得比‘单身时’更有生命活力？", dimensionIds: ["stable"], weight: 1.4, modes: ["quick", "full"],
    options: [
      { optionId: "a", text: "是的，我感到被赋能，更有动力面对生活", score: 10 },
      { optionId: "b", text: "差不多，生活节奏没有太大变化", score: 6 },
      { optionId: "c", text: "不是，我感到被消耗，变得倦怠和自闭", score: 1 }
    ]
  },
  {
    questionId: "gen_11", type: QuestionType.MULTI, title: "你们共同体验过的‘深度行为’（多选）？", dimensionIds: ["invest", "future"], weight: 1.2, modes: ["full"],
    options: [
      { optionId: "m1", text: "为期一周以上的深度旅行", score: 3 },
      { optionId: "m2", text: "共同承担一笔不小的经济支出", score: 4 },
      { optionId: "m3", text: "见过对方最重要的直系亲属", score: 3 },
      { optionId: "m4", text: "在对方极度失意时进行过整夜陪伴", score: 5 }
    ]
  },
  {
    questionId: "gen_12", type: QuestionType.SINGLE, title: "你对对方‘社交圈’的融入意愿与实际深度？", dimensionIds: ["bound"], weight: 1.0, modes: ["full"],
    options: [
      { optionId: "a", text: "非常了解且能自然融入其朋友圈", score: 10 },
      { optionId: "b", text: "仅知道名字，几乎没有实质接触", score: 5 },
      { optionId: "c", text: "对方刻意隔离其社交圈，不让我触碰", score: 1 }
    ]
  },
  {
    questionId: "gen_13", type: QuestionType.SCALE, title: "你们在‘生理吸引力/亲密度’上的默契程度？", dimensionIds: ["stable"], weight: 1.2, modes: ["full"],
    scale: { min: 0, max: 10, step: 1, minLabel: "相敬如宾", maxLabel: "灵肉合一" }
  },
  {
    questionId: "gen_14", type: QuestionType.SINGLE, title: "面对诱惑（如出现优秀的追求者）时，对方的‘边界感’表现？", dimensionIds: ["bound", "stable"], weight: 1.6, modes: ["full"],
    options: [
      { optionId: "a", text: "清晰透明，主动切断可能的误解信号", score: 10 },
      { optionId: "b", text: "维持暧昧平衡，享受被追求的感觉", score: 3 },
      { optionId: "c", text: "经常以此作为打压你或让你吃醋的手段", score: 1 }
    ]
  },
  {
    questionId: "gen_15", type: QuestionType.SINGLE, title: "关于‘道歉’：当对方做错事时，TA的态度？", dimensionIds: ["stable"], weight: 1.3, modes: ["full"],
    options: [
      { optionId: "a", text: "真诚道歉并给出实际补救方案", score: 10 },
      { optionId: "b", text: "嘴硬不认错，通过对你好来变相求和", score: 6 },
      { optionId: "c", text: "永远不道歉，反而推卸责任到你身上", score: 1 }
    ]
  },
  {
    questionId: "gen_16", type: QuestionType.SINGLE, title: "关于‘赞美’：对方夸奖你的频率与真心程度？", dimensionIds: ["invest"], weight: 0.9, modes: ["full"],
    options: [
      { optionId: "a", text: "经常夸奖细节，能看到我的独特价值", score: 10 },
      { optionId: "b", text: "较少赞美，认为平淡才是真", score: 5 },
      { optionId: "c", text: "以打压、嫌弃为主，美其名曰‘为你好’", score: 1 }
    ]
  },
  {
    questionId: "gen_17", type: QuestionType.SINGLE, title: "当你们对‘未来职业规划’产生冲突时，第一倾向？", dimensionIds: ["future"], weight: 1.4, modes: ["full"],
    options: [
      { optionId: "a", text: "共同商讨，寻求两全其美的策略", score: 10 },
      { optionId: "b", text: "各行其是，不干涉也不支持", score: 5 },
      { optionId: "c", text: "必须牺牲一方来成就另一方", score: 2 }
    ]
  },
  {
    questionId: "gen_18", type: QuestionType.SCALE, title: "你对这段关系‘持续时长’的直觉预期？", dimensionIds: ["future"], weight: 1.5, modes: ["quick", "full"],
    scale: { min: 0, max: 10, step: 1, minLabel: "随缘吧", maxLabel: "奔着一辈子" }
  },
  {
    questionId: "gen_19", type: QuestionType.SINGLE, title: "关于‘倾听’：你说话时，对方的专注度？", dimensionIds: ["invest"], weight: 1.1, modes: ["full"],
    options: [
      { optionId: "a", text: "全神贯注，能记住我提到的细节", score: 10 },
      { optionId: "b", text: "一边玩手机一边听，偶尔回应", score: 5 },
      { optionId: "c", text: "经常打断我，只顾表达自己", score: 2 }
    ]
  },
  {
    questionId: "gen_20", type: QuestionType.SINGLE, title: "在遇到外部重大危机（如家庭变故）时，对方的行为？", dimensionIds: ["stable", "invest"], weight: 1.8, modes: ["full"],
    options: [
      { optionId: "a", text: "坚定守候，是我的定海神针", score: 10 },
      { optionId: "b", text: "言语安慰较多，实际行动较少", score: 5 },
      { optionId: "c", text: "权衡利弊后，有退缩或离开迹象", score: 1 }
    ]
  },
  {
    questionId: "gen_21", type: QuestionType.SINGLE, title: "关于‘独立空间’：你们给彼此留白的自由度？", dimensionIds: ["bound"], weight: 1.2, modes: ["full"],
    options: [
      { optionId: "a", text: "恰到好处，既亲密又自由", score: 10 },
      { optionId: "b", text: "过度依赖，一方几乎没有私人生活", score: 4 },
      { optionId: "c", text: "过度疏离，像合租室友多过像恋人", score: 3 }
    ]
  },
  {
    questionId: "gen_22", type: QuestionType.SINGLE, title: "你们的‘能量水平’匹配度？", description: "一方是极度开朗，另一方是极度内向等能量差异。", dimensionIds: ["stable"], weight: 0.8, modes: ["full"],
    options: [
      { optionId: "a", text: "相互互补，能产生正向共振", score: 10 },
      { optionId: "b", text: "基本持平，相安无事", score: 7 },
      { optionId: "c", text: "落差巨大，常让对方感到疲惫", score: 3 }
    ]
  },
  {
    questionId: "gen_23", type: QuestionType.SINGLE, title: "关于‘惊喜与仪式感’：在这段关系中的存续情况？", dimensionIds: ["invest"], weight: 0.7, modes: ["full"],
    options: [
      { optionId: "a", text: "经常有不经意的关怀与小礼物", score: 10 },
      { optionId: "b", text: "仅在重大节日才有公式化表现", score: 6 },
      { optionId: "c", text: "完全没有，甚至对此感到厌烦", score: 2 }
    ]
  },
  {
    questionId: "gen_24", type: QuestionType.SINGLE, title: "对方对你‘身体健康’的关注程度？", dimensionIds: ["invest"], weight: 1.0, modes: ["full"],
    options: [
      { optionId: "a", text: "体贴入微，生病时会实质照顾", score: 10 },
      { optionId: "b", text: "口头多喝热水，没有实际行动", score: 5 },
      { optionId: "c", text: "无动于衷，甚至觉得我生病是累赘", score: 1 }
    ]
  },
  {
    questionId: "gen_25", type: QuestionType.SCALE, title: "你在对方心里的‘不可替代性’自评？", dimensionIds: ["stable"], weight: 1.4, modes: ["full"],
    scale: { min: 0, max: 10, step: 1, minLabel: "路人甲", maxLabel: "生命唯一" }
  },
  {
    questionId: "gen_26", type: QuestionType.SINGLE, title: "对方在处理‘异性好友’问题上的透明度？", dimensionIds: ["bound"], weight: 1.3, modes: ["full"],
    options: [
      { optionId: "a", text: "坦诚公开，从不以此隐瞒或诱发我的不安全感", score: 10 },
      { optionId: "b", text: "含糊其辞，经常被我发现模糊的互动", score: 3 },
      { optionId: "c", text: "极端控制，TA可以我有异性朋友但我不可以有", score: 1 }
    ]
  },
  {
    questionId: "gen_27", type: QuestionType.SINGLE, title: "关于‘成长’：你们是否觉得对方让彼此成为了更好的人？", dimensionIds: ["stable", "future"], weight: 1.6, modes: ["quick", "full"],
    options: [
      { optionId: "a", text: "绝对是的，我们是最佳进化伙伴", score: 10 },
      { optionId: "b", text: "有一定进步，但主要是靠自我驱动", score: 6 },
      { optionId: "c", text: "不是，我感到自己在倒退，甚至失去了自信", score: 1 }
    ]
  },
  {
    questionId: "gen_28", type: QuestionType.SINGLE, title: "你们的‘争吵逻辑’更多是？", dimensionIds: ["stable"], weight: 1.2, modes: ["full"],
    options: [
      { optionId: "a", text: "对事不对人，追求问题的解决", score: 10 },
      { optionId: "b", text: "发泄情绪，互相翻旧账攻击对方人格", score: 3 },
      { optionId: "c", text: "单方面冷战，直到一方妥协", score: 2 }
    ]
  },
  {
    questionId: "gen_29", type: QuestionType.SINGLE, title: "对方在‘理财/消费’习惯上给你的信任感？", dimensionIds: ["future"], weight: 1.1, modes: ["full"],
    options: [
      { optionId: "a", text: "稳健可靠，能共同规划财富", score: 10 },
      { optionId: "b", text: "大手大脚或极度吝啬，让我感到不安", score: 4 },
      { optionId: "c", text: "存在隐瞒债务或财务欺骗行为", score: 0 }
    ]
  },
  {
    questionId: "gen_30", type: QuestionType.SINGLE, title: "如果明天就是‘世界末日’，你是否愿意和对方待在一起？", dimensionIds: ["stable"], weight: 1.5, modes: ["full"],
    options: [
      { optionId: "a", text: "唯一的选择，死而无憾", score: 10 },
      { optionId: "b", text: "可能会考虑，但也想陪陪家人", score: 7 },
      { optionId: "c", text: "不想，我宁愿独自度过或换个人", score: 1 }
    ]
  },
  {
    questionId: "gen_31", type: QuestionType.SCALE, title: "你在关系中的‘自尊感’保持情况？", dimensionIds: ["bound"], weight: 1.1, modes: ["full"],
    scale: { min: 0, max: 10, step: 1, minLabel: "卑微入土", maxLabel: "高尊严自主" }
  },
  {
    questionId: "gen_32", type: QuestionType.SINGLE, title: "对方对你‘梦想/爱好’的支持态度？", dimensionIds: ["invest"], weight: 1.0, modes: ["full"],
    options: [
      { optionId: "a", text: "无条件支持，甚至愿意为此付出成本", score: 10 },
      { optionId: "b", text: "漠不关心，不参与也不评价", score: 5 },
      { optionId: "c", text: "冷嘲热讽，认为我是在浪费时间", score: 1 }
    ]
  },
  {
    questionId: "gen_33", type: QuestionType.SINGLE, title: "关于‘眼神交流’：你们对视时的心理反馈？", dimensionIds: ["stable"], weight: 0.9, modes: ["full"],
    options: [
      { optionId: "a", text: "充满爱意与安全感，感觉灵魂在对话", score: 10 },
      { optionId: "b", text: "习惯性掠过，没有太多波澜", score: 6 },
      { optionId: "c", text: "感到尴尬或想回避，眼神里有防御性", score: 2 }
    ]
  },
  {
    questionId: "gen_34", type: QuestionType.SINGLE, title: "对方是否会在你们之间引入‘竞争感’？", dimensionIds: ["bound"], weight: 1.2, modes: ["full"],
    options: [
      { optionId: "a", text: "不会，TA希望我过得比TA还好", score: 10 },
      { optionId: "b", text: "偶有攀比，例如谁赚得多谁说了算", score: 4 },
      { optionId: "c", text: "严重嫉妒我的成功，甚至故意设绊子", score: 1 }
    ]
  },
  {
    questionId: "gen_35", type: QuestionType.SINGLE, title: "这段关系目前的‘综合体感’最接近？", dimensionIds: ["stable"], weight: 2.0, modes: ["quick", "full"],
    options: [
      { optionId: "a", text: "如沐春风的温暖森林", score: 10 },
      { optionId: "b", text: "不温不火的温水游泳池", score: 6 },
      { optionId: "c", text: "如履薄冰的荒野雪地", score: 2 },
      { optionId: "d", text: "狂风暴雨中的破碎孤岛", score: 0 }
    ]
  }
];
