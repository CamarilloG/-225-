
import { Question, QuestionType } from '../types';

export const datingQuestions: Question[] = [
  {
    questionId: "da_1", type: QuestionType.SINGLE, title: "当你们在消费观产生分歧（如：旅游预算、礼物价值）时，对方的处理逻辑？", dimensionIds: ["future", "bound"], weight: 1.8, modes: ["quick", "full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "能站在你的角度共情，尝试寻找一个折中但舒适的方案", score: 10, tags: ["良性协商"] },
      { optionId: "b", text: "虽然口头妥协，但在实际执行中表现出消极抵触", score: 5 },
      { optionId: "c", text: "通过‘消费打压’（如评价你奢侈或吝啬）来试图同化你", score: 1, tags: ["权力博弈"] }
    ]
  },
  {
    questionId: "da_2", type: QuestionType.SINGLE, title: "发生争吵后，对方‘破冰’的潜意识动机观察？", dimensionIds: ["stable"], weight: 1.6, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "旨在解决矛盾根源，不仅和解情绪更要对齐认知", score: 10 },
      { optionId: "b", text: "仅仅是为了逃避当下的压抑感，通过‘翻篇’掩盖矛盾", score: 5 },
      { optionId: "c", text: "通过‘冷暴力’直到你先低头，将其作为控制手段", score: 0 }
    ]
  },
  {
    questionId: "da_3", type: QuestionType.SINGLE, title: "对方在评价你身边的核心社交圈（死党、好友）时的姿态？", dimensionIds: ["bound", "invest"], weight: 1.2, modes: ["quick", "full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "尊重并尝试融入，即便某些人TA并不喜欢", score: 10 },
      { optionId: "b", text: "保持礼貌距离，但很少表达出探索兴趣", score: 6 },
      { optionId: "c", text: "表现出明显的排斥感，甚至试图劝说你远离某些朋友", score: 2, tags: ["孤立倾向"] }
    ]
  },
  {
    questionId: "da_4", type: QuestionType.SCALE, title: "你在对方那里的‘被需要感’评估？", description: "评估对方在遇到困难时，向你寻求支持的坦诚度。", dimensionIds: ["invest", "stable"], weight: 1.5, modes: ["full"], stageIds: ["dating"],
    scale: { min: 0, max: 10, step: 1, minLabel: "完全隔离", maxLabel: "顶级信任" }
  },
  {
    questionId: "da_5", type: QuestionType.SINGLE, title: "关于‘真实自我暴露’：对方是否曾向你坦露过其性格中的缺陷或过往的阴暗面？", dimensionIds: ["invest"], weight: 1.4, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "有过深度坦白，甚至表现出一定的‘灵魂赤裸度’", score: 10, tags: ["深度暴露"] },
      { optionId: "b", text: "维持完美人设，极力掩饰任何不光彩的细节", score: 3 },
      { optionId: "c", text: "完全回避，认为这类话题没有意义", score: 1 }
    ]
  },
  {
    questionId: "da_6", type: QuestionType.SINGLE, title: "在处理‘琐碎生活决策’（如今天吃什么、看什么电影）时，谁拥有更高的决策权？", dimensionIds: ["bound"], weight: 0.9, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "高度均衡，轮流做主或共同商议", score: 10 },
      { optionId: "b", text: "一方极其被动，总是说‘随便’", score: 6 },
      { optionId: "c", text: "一方极其霸道，必须按照其意愿行事", score: 2 }
    ]
  },
  {
    questionId: "da_7", type: QuestionType.SINGLE, title: "关于‘家务/共同责任’：对方在无人提醒下的自觉程度？", dimensionIds: ["invest"], weight: 1.2, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "非常主动，能分担大部分体力或脑力劳动", score: 10 },
      { optionId: "b", text: "像个拨浪鼓，推一下动一下", score: 5 },
      { optionId: "c", text: "完全甩手，甚至以此作为被照顾的‘权力’", score: 1 }
    ]
  },
  {
    questionId: "da_8", type: QuestionType.SINGLE, title: "对方处理‘旧爱联系’或‘前任请求’时的透明度？", dimensionIds: ["bound"], weight: 1.5, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "主动告知并设定严苛边界，给足我安全感", score: 10 },
      { optionId: "b", text: "被动被我发现后才解释，遮遮掩掩", score: 4 },
      { optionId: "c", text: "理直气壮保持暧昧，认为是我‘想多了’", score: 1 }
    ]
  },
  {
    questionId: "da_9", type: QuestionType.SCALE, title: "你们‘手机/社交隐私’的互换程度？", dimensionIds: ["bound"], weight: 1.1, modes: ["full"], stageIds: ["dating"],
    scale: { min: 0, max: 10, step: 1, minLabel: "雷池一步不跨", maxLabel: "指纹互录全开放" }
  },
  {
    questionId: "da_10", type: QuestionType.SINGLE, title: "当你的职业或个人发展需要对方做出小牺牲（如异地、忙碌）时，对方的态度？", dimensionIds: ["future"], weight: 1.4, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "坚定支持并尝试调整生活节奏配合", score: 10 },
      { optionId: "b", text: "言语支持但行动上经常拖后腿，表现出怨气", score: 5 },
      { optionId: "c", text: "坚决反对，要求我必须以其为中心", score: 1 }
    ]
  },
  {
    questionId: "da_11", type: QuestionType.SINGLE, title: "关于‘礼物与纪念日’：对方的用心程度？", dimensionIds: ["invest"], weight: 0.8, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "能精准击中我的需求，展现了深度的观察", score: 10 },
      { optionId: "b", text: "直接打钱或公式化送礼，敷衍了事", score: 6 },
      { optionId: "c", text: "不仅不送，还对我辛苦准备的礼物冷嘲热讽", score: 1 }
    ]
  },
  {
    questionId: "da_12", type: QuestionType.SINGLE, title: "对方在处理‘双方父母’分歧时的站位？", dimensionIds: ["bound", "future"], weight: 1.7, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "作为缓冲垫，优先维护我们这个小家庭的利益", score: 10 },
      { optionId: "b", text: "谁凶听谁的，和稀泥导致矛盾升级", score: 5 },
      { optionId: "c", text: "妈宝或爹宝，无条件顺从原生家庭打压我", score: 0 }
    ]
  },
  {
    questionId: "da_13", type: QuestionType.SINGLE, title: "面对‘无聊的日常’，你们是否有共同创造乐趣的能力？", dimensionIds: ["stable"], weight: 1.0, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "是的，一起下厨、玩游戏也能玩出花样", score: 10 },
      { optionId: "b", text: "平平淡淡，习惯了这种枯燥感", score: 7 },
      { optionId: "c", text: "开始各玩各的，甚至宁愿加班也不回家", score: 2 }
    ]
  },
  {
    questionId: "da_14", type: QuestionType.SINGLE, title: "对方在‘公共场合’由于你的失误而丢脸时的第一反应？", dimensionIds: ["stable"], weight: 1.3, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "幽默解围并紧紧拉住我的手，安抚我的尴尬", score: 10 },
      { optionId: "b", text: "假装不认识我，事后疯狂埋怨我", score: 4 },
      { optionId: "c", text: "当众斥责，让我无地自容", score: 1 }
    ]
  },
  {
    questionId: "da_15", type: QuestionType.SCALE, title: "你对对方‘经济状况与信用度’的透明感？", dimensionIds: ["future"], weight: 1.4, modes: ["full"], stageIds: ["dating"],
    scale: { min: 0, max: 10, step: 1, minLabel: "迷雾重重", maxLabel: "了如指掌" }
  },
  {
    questionId: "da_16", type: QuestionType.SINGLE, title: "你们是否曾经共同‘度过一段艰难时光’（如失业、大病）？", dimensionIds: ["stable", "invest"], weight: 1.9, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "是的，这让我们的连接变得坚不可摧", score: 10 },
      { optionId: "b", text: "虽然度过了，但留下了不小的心理裂痕", score: 6 },
      { optionId: "c", text: "正在遭遇中，对方表现出了明显的嫌弃和退缩", score: 2 }
    ]
  },
  {
    questionId: "da_17", type: QuestionType.SINGLE, title: "对方是否会在朋友圈公开‘表白’或发合照？", dimensionIds: ["invest"], weight: 1.1, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "大方自然，乐于分享我们的幸福", score: 10 },
      { optionId: "b", text: "偶尔，但频率越来越低", score: 6 },
      { optionId: "c", text: "绝无可能，动态里看起来依然像单身", score: 2 }
    ]
  },
  {
    questionId: "da_18", type: QuestionType.SINGLE, title: "关于‘性与亲密’：当一方不想要时，对方的处理？", dimensionIds: ["bound", "stable"], weight: 1.6, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "尊重边界并给予温柔的安抚，不带任何强迫", score: 10 },
      { optionId: "b", text: "表现出明显的低落和冷战，以此实施情感勒索", score: 3 },
      { optionId: "c", text: "强行索取或以此冷嘲热讽，让我感到屈辱", score: 1 }
    ]
  },
  {
    questionId: "da_19", type: QuestionType.SINGLE, title: "对方对你‘身体外貌变化’（如变胖、长痘）的敏感与评价？", dimensionIds: ["invest"], weight: 0.9, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "始终欣赏我的灵魂，并给予外貌肯定的积极暗示", score: 10 },
      { optionId: "b", text: "开带有打压性质的玩笑，自以为幽默", score: 5 },
      { optionId: "c", text: "极度嫌弃并以此作为减少亲密互动的理由", score: 1 }
    ]
  },
  {
    questionId: "da_20", type: QuestionType.SINGLE, title: "关于‘长假规划’：意见不一时的最终导向？", dimensionIds: ["future"], weight: 1.2, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "双向奔赴的妥协，总能找到双方都满意的方案", score: 10 },
      { optionId: "b", text: "总是按照更有主见或更有钱的那一方来定", score: 6 },
      { optionId: "c", text: "经常因为规划不一致而导致假期在争执中泡汤", score: 2 }
    ]
  },
  {
    questionId: "da_21", type: QuestionType.SCALE, title: "你在对方那里的‘心理安全感’综合评分？", dimensionIds: ["stable"], weight: 1.5, modes: ["quick", "full"], stageIds: ["dating"],
    scale: { min: 0, max: 10, step: 1, minLabel: "提心吊胆", maxLabel: "稳坐钓鱼台" }
  },
  {
    questionId: "da_22", type: QuestionType.SINGLE, title: "对方处理‘社交边界’（如同事聚餐、异地出差）的自律性？", dimensionIds: ["bound"], weight: 1.6, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "自律且高透明，我从不需要操心这种事", score: 10 },
      { optionId: "b", text: "比较松散，经常玩消失或产生模糊地带", score: 3 },
      { optionId: "c", text: "以此作为自由的旗号胡作非为，不顾我的感受", score: 1 }
    ]
  },
  {
    questionId: "da_23", type: QuestionType.SINGLE, title: "你们是否拥有‘共同的长期储蓄/投资计划’？", dimensionIds: ["future"], weight: 1.4, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "有，并为之共同努力奋斗", score: 10 },
      { optionId: "b", text: "仅在口头规划过，从未落实到账单上", score: 5 },
      { optionId: "c", text: "各花各的，甚至一方在过度透支另一方", score: 1 }
    ]
  },
  {
    questionId: "da_24", type: QuestionType.SINGLE, title: "当你在工作上受到委屈回家吐槽时，对方的表现？", dimensionIds: ["stable", "invest"], weight: 1.2, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "无条件站在我这边，先处理情绪再理智建议", score: 10 },
      { optionId: "b", text: "理中客，疯狂给我讲大道理甚至帮着外人说话", score: 4 },
      { optionId: "c", text: "表现出厌烦，认为我把负能量带回了家", score: 1 }
    ]
  },
  {
    questionId: "da_25", type: QuestionType.SINGLE, title: "对方是否会在朋友面前‘抬高你’？", dimensionIds: ["invest"], weight: 1.0, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "是的，经常夸奖我的成就，让我倍儿有面子", score: 10 },
      { optionId: "b", text: "客客气气，不夸奖也不贬低", score: 6 },
      { optionId: "c", text: "通过贬低我来展现自己的幽默或优越感", score: 1 }
    ]
  },
  {
    questionId: "da_26", type: QuestionType.SINGLE, title: "关于‘前任送的物品’：对方目前的处理方式？", dimensionIds: ["bound"], weight: 1.1, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "该丢的丢，留下的也是由于实用性且已告知我", score: 10 },
      { optionId: "b", text: "偷偷藏着，被我发现后反应剧烈", score: 3 },
      { optionId: "c", text: "摆在显眼位置，以此作为对我的某种暗示", score: 1 }
    ]
  },
  {
    questionId: "da_27", type: QuestionType.SCALE, title: "你们‘三观’碰撞后的‘愈合力’评分？", dimensionIds: ["stable"], weight: 1.2, modes: ["full"], stageIds: ["dating"],
    scale: { min: 0, max: 10, step: 1, minLabel: "伤痕累累", maxLabel: "化分歧为动力" }
  },
  {
    questionId: "da_28", type: QuestionType.SINGLE, title: "面对对方的‘坏习惯’（如邋遢、迟到），你的包容度现状？", dimensionIds: ["stable"], weight: 1.1, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "对方在努力改正，我能看到诚意并愿意包容", score: 10 },
      { optionId: "b", text: "死猪不怕开水烫，我已经吵累了进入麻木状态", score: 4 },
      { optionId: "c", text: "变本加厉，感觉这是在挑战我的底线", score: 1 }
    ]
  },
  {
    questionId: "da_29", type: QuestionType.SINGLE, title: "如果你们其中一方要‘去另一个城市工作’，对方的行为预设？", dimensionIds: ["future"], weight: 1.8, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "共同协商迁移计划，不惜成本奔向彼此", score: 10 },
      { optionId: "b", text: "开始冷淡，默认异地即是分手的开始", score: 3 },
      { optionId: "c", text: "要求我必须留下来，否则就是‘不爱TA’", score: 2 }
    ]
  },
  {
    questionId: "da_30", type: QuestionType.SINGLE, title: "关于‘秘密’：对方目前是否仍有那种让你感到‘不安的隐瞒’？", dimensionIds: ["stable"], weight: 1.6, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "没有，我们几乎是透明的，感觉很踏实", score: 10 },
      { optionId: "b", text: "隐约感觉有，但不敢捅破这层纸", score: 4 },
      { optionId: "c", text: "有过多次欺骗前科，信任已基本破产", score: 1 }
    ]
  },
  {
    questionId: "da_31", type: QuestionType.SINGLE, title: "在聚餐点菜时，对方是否会自动避开你不吃的忌口？", dimensionIds: ["invest"], weight: 1.0, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "生理性刻在脑子里了，无需提醒", score: 10 },
      { optionId: "b", text: "偶尔需要我提醒，能记住核心忌口", score: 7 },
      { optionId: "c", text: "永远记不住，甚至会点我最讨厌的东西让我‘大度一点’", score: 2 }
    ]
  },
  {
    questionId: "da_32", type: QuestionType.SINGLE, title: "当你们共同的朋友夸奖你时，对方的神态？", dimensionIds: ["invest"], weight: 1.1, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "与有荣焉，开心地分享我的更多优点", score: 10 },
      { optionId: "b", text: "笑笑不说话，甚至觉得朋友是在客套", score: 6 },
      { optionId: "c", text: "表情僵硬，事后酸溜溜地嘲讽我", score: 2 }
    ]
  },
  {
    questionId: "da_33", type: QuestionType.SINGLE, title: "关于‘消费透明’：对方是否会因为怕你反对而偷偷买昂贵的东西？", dimensionIds: ["future", "bound"], weight: 1.3, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "不会，大额支出我们都会提前知会对方", score: 10 },
      { optionId: "b", text: "有过这种情况，被发现后还极力辩解", score: 4 },
      { optionId: "c", text: "经常发生，甚至以此产生了不少秘密账单", score: 1 }
    ]
  },
  {
    questionId: "da_34", type: QuestionType.SINGLE, title: "这段关系的‘掌控感’自评？", dimensionIds: ["bound"], weight: 1.2, modes: ["full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "平等的共治，我们是一支优秀的战队", score: 10 },
      { optionId: "b", text: "我被TA牵着鼻子走，感到有点迷失自我", score: 4 },
      { optionId: "c", text: "我在试图控制TA的一切，这让我感到很累", score: 3 }
    ]
  },
  {
    questionId: "da_35", type: QuestionType.SINGLE, title: "你对这段关系目前处于‘消耗’还是‘滋养’的终极定性？", dimensionIds: ["stable"], weight: 2.0, modes: ["quick", "full"], stageIds: ["dating"],
    options: [
      { optionId: "a", text: "全方位的滋养，让我成为了更好的自己", score: 10 },
      { optionId: "b", text: "滋养与消耗参半，目前收支平衡", score: 6 },
      { optionId: "c", text: "严重的消耗，我感到精疲力竭且无法逃离", score: 1 }
    ]
  }
];
