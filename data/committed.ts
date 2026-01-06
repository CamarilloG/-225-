
import { Question, QuestionType } from '../types';

export const committedQuestions: Question[] = [
  {
    questionId: "co_1", type: QuestionType.MULTI, title: "你们目前在哪些‘核心资产/愿景’上已经达成了显性契约（多选）？", dimensionIds: ["future", "invest"], weight: 2.2, modes: ["quick", "full"], stageIds: ["committed"],
    options: [
      { optionId: "m1", text: "具备法律效应的财产共享或风险分担计划", score: 5, tags: ["经济并入"] },
      { optionId: "m2", text: "对未来十年定居城市的绝对一致性规划", score: 4 },
      { optionId: "m3", text: "对双方原生家庭赡养责任的量化共识", score: 3 },
      { optionId: "m4", text: "关于生育或生活方式（如宠物、旅居）的底层协议", score: 4 }
    ]
  },
  {
    questionId: "co_2", type: QuestionType.SINGLE, title: "面对‘生活枯燥期’，对方展现出的情感创造力？", dimensionIds: ["stable", "invest"], weight: 1.5, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "能通过小仪式或深度交谈，主动将‘习惯’转化为‘依恋’", score: 10 },
      { optionId: "b", text: "默认现状即是合理的，虽然无趣但追求稳定", score: 7 },
      { optionId: "c", text: "开始向外寻找刺激，表现出明显的注意力漂移", score: 1 }
    ]
  },
  {
    questionId: "co_3", type: QuestionType.SINGLE, title: "在应对一方家庭的‘过度干预’时，对方的立场选择？", dimensionIds: ["bound", "future"], weight: 2.0, modes: ["quick", "full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "坚定与你站在统一战线，共同维护两人的核心主权", score: 10, tags: ["健康边界"] },
      { optionId: "b", text: "作为‘传话筒’试图两头讨好，最终导致信息失真与矛盾升级", score: 4 },
      { optionId: "c", text: "无条件服从其原生家庭，要求你做出无底线的牺牲", score: 0 }
    ]
  },
  {
    questionId: "co_4", type: QuestionType.SCALE, title: "这段关系在面临‘突发极端负面事件’（如：重病、巨额债务）时的韧性评分？", dimensionIds: ["stable", "future"], weight: 2.5, modes: ["full"], stageIds: ["committed"],
    scale: { min: 0, max: 10, step: 1, minLabel: "脆弱易碎", maxLabel: "生死与共" }
  },
  {
    questionId: "co_5", type: QuestionType.SINGLE, title: "你们是否拥有只有彼此懂的‘私密语言’或高度重合的价值观底层代码？", dimensionIds: ["stable"], weight: 1.8, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "拥有极其丰富的默契，甚至能预判对方的行为选择", score: 10, tags: ["灵魂同频"] },
      { optionId: "b", text: "沟通流畅但仍停留于表层，缺乏深刻的认知契合", score: 6 },
      { optionId: "c", text: "感到灵魂分居，即便住在一起也像陌生人", score: 1 }
    ]
  },
  {
    questionId: "co_6", type: QuestionType.SINGLE, title: "关于‘遗愿/生命末端假设’：你们是否曾深度交流过这类话题？", dimensionIds: ["future"], weight: 1.6, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "有过，我们非常清楚对方希望被如何对待", score: 10 },
      { optionId: "b", text: "认为不吉利，刻意避开此类话题", score: 5 },
      { optionId: "c", text: "完全不在意，觉得到时候再说", score: 2 }
    ]
  },
  {
    questionId: "co_7", type: QuestionType.SINGLE, title: "对方在处理‘你的缺点’时的最终姿态？", dimensionIds: ["stable"], weight: 1.4, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "温柔的接纳，将其视为我生命完整性的一部分", score: 10 },
      { optionId: "b", text: "终身试图改造我，不成功就抱怨不休", score: 4 },
      { optionId: "c", text: "冷漠的容忍，但伴随着情感的逐年撤资", score: 1 }
    ]
  },
  {
    questionId: "co_8", type: QuestionType.SCALE, title: "你们在‘经济完全并入’（如联名账户、无差别分享）上的执行度？", dimensionIds: ["future"], weight: 1.7, modes: ["full"], stageIds: ["committed"],
    scale: { min: 0, max: 10, step: 1, minLabel: "各自为政", maxLabel: "经济共同体" }
  },
  {
    questionId: "co_9", type: QuestionType.SINGLE, title: "如果其中一方‘失去了劳动能力或致残’，对方最可能的表现？", dimensionIds: ["stable", "invest"], weight: 2.2, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "坚守到底，履行终身照顾的承诺", score: 10 },
      { optionId: "b", text: "尽到基本的法律责任，但情感会枯竭", score: 5 },
      { optionId: "c", text: "迅速切割，寻找解脱的路径", score: 0 }
    ]
  },
  {
    questionId: "co_10", type: QuestionType.SINGLE, title: "关于‘自由度’：进入长期稳定期后，对方对你个人发展的态度变化？", dimensionIds: ["bound"], weight: 1.3, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "支持我探索新的领域，不以稳定之名绑架我", score: 10 },
      { optionId: "b", text: "变得保守，不希望我折腾，认为安稳最重要", score: 6 },
      { optionId: "c", text: "嫉妒我的进步，认为这威胁到了关系的稳定", score: 2 }
    ]
  },
  {
    questionId: "co_11", type: QuestionType.SINGLE, title: "面对‘诱惑（中年危机/桃花）’，对方展现出的自律性？", dimensionIds: ["stable"], weight: 2.0, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "极度自律，深知背叛的代价无法承受", score: 10 },
      { optionId: "b", text: "精神出轨或边缘徘徊，被发现后痛哭流涕", score: 3 },
      { optionId: "c", text: "习以为常，认为这只是生活的调味剂", score: 0 }
    ]
  },
  {
    questionId: "co_12", type: QuestionType.SINGLE, title: "你们是否曾经‘共同投资’过一个长期项目（如买房、创业）？", dimensionIds: ["future"], weight: 1.8, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "是的，这极大地增强了我们的联结深度", score: 10 },
      { optionId: "b", text: "有过想法，但因为信任度不足而夭折", score: 4 },
      { optionId: "c", text: "对方坚决要求我出钱但只写TA的名", score: 0 }
    ]
  },
  {
    questionId: "co_13", type: QuestionType.SCALE, title: "你感知到的对方对你‘衰老’的真实接纳度？", dimensionIds: ["invest"], weight: 1.4, modes: ["full"], stageIds: ["committed"],
    scale: { min: 0, max: 10, step: 1, minLabel: "颜控到死", maxLabel: "爱你苍老的容颜" }
  },
  {
    questionId: "co_14", type: QuestionType.SINGLE, title: "关于‘沟通深度’：现在你们还能进行超过 2 小时的深夜长谈吗？", dimensionIds: ["stable"], weight: 1.2, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "经常，我们依然有聊不完的话题", score: 10 },
      { optionId: "b", text: "偶尔，大多是为了孩子或琐事", score: 6 },
      { optionId: "c", text: "基本没有，一开口就是吵架或冷战", score: 1 }
    ]
  },
  {
    questionId: "co_15", type: QuestionType.SINGLE, title: "对于‘对方原生家庭的资产继承或养老责任’，你们的共识度？", dimensionIds: ["future"], weight: 1.5, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "完全对齐，将其视为我们共同的责任", score: 10 },
      { optionId: "b", text: "各自负责，互不干涉", score: 6 },
      { optionId: "c", text: "为了这些事已经闹到要离婚的程度", score: 1 }
    ]
  },
  {
    questionId: "co_16", type: QuestionType.SINGLE, title: "当你在外面获得巨大的‘荣誉’时，对方在私下的真实反应？", dimensionIds: ["invest"], weight: 1.2, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "由衷的赞叹，甚至流露出崇拜之情", score: 10 },
      { optionId: "b", text: "理所应当，表现出一种‘淡定’", score: 6 },
      { optionId: "c", text: "极力找茬，以此来平衡由于我的成功带来的心理落差", score: 2 }
    ]
  },
  {
    questionId: "co_17", type: QuestionType.SINGLE, title: "关于‘仪式感’：现在你们还庆祝各种纪念日吗？", dimensionIds: ["invest"], weight: 0.8, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "是的，这是保持情感流动的重要途径", score: 10 },
      { optionId: "b", text: "简化了，吃顿饭就算过了", score: 6 },
      { optionId: "c", text: "完全取消，甚至认为这是一种累赘", score: 2 }
    ]
  },
  {
    questionId: "co_18", type: QuestionType.SINGLE, title: "对方是否会在‘重大的生命决策’（如是否生孩子、是否移居）上尊重你的否决权？", dimensionIds: ["bound", "future"], weight: 2.1, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "绝对尊重，认为任何一方的违心都是悲剧的开始", score: 10 },
      { optionId: "b", text: "通过情感绑架试图让我屈服", score: 4 },
      { optionId: "c", text: "独裁决定，我只有告知权没有建议权", score: 1 }
    ]
  },
  {
    questionId: "co_19", type: QuestionType.SCALE, title: "你对‘死后合葬’或‘生命交融’的渴望程度？", dimensionIds: ["future"], weight: 1.3, modes: ["full"], stageIds: ["committed"],
    scale: { min: 0, max: 10, step: 1, minLabel: "各归其处", maxLabel: "生同衾死同穴" }
  },
  {
    questionId: "co_20", type: QuestionType.SINGLE, title: "在对方的‘朋友圈/社交媒体’中，你的存在感现状？", dimensionIds: ["invest"], weight: 1.0, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "我是TA生命中最重要的主角，这一点从未改变", score: 10 },
      { optionId: "b", text: "背景板，偶尔出现，更多是孩子或生活的琐事", score: 6 },
      { optionId: "c", text: "被隐藏了，甚至有新朋友以为TA单身", score: 0 }
    ]
  },
  {
    questionId: "co_21", type: QuestionType.SINGLE, title: "当你们在‘孩子教育’上产生极端分歧时，谁最后做决定？", dimensionIds: ["bound", "future"], weight: 1.4, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "能基于专业意见或逻辑达成共识，不存在谁压倒谁", score: 10 },
      { optionId: "b", text: "强势的一方决定，弱势的一方只能背后抱怨", score: 5 },
      { optionId: "c", text: "永远争吵不休，导致教育计划瘫痪", score: 2 }
    ]
  },
  {
    questionId: "co_22", type: QuestionType.SINGLE, title: "对方是否曾因为‘为了保护你’而得罪其核心亲属？", dimensionIds: ["bound", "stable"], weight: 1.9, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "有过，TA是我的坚强后盾", score: 10 },
      { optionId: "b", text: "没有，TA总是让我忍气吞声", score: 3 },
      { optionId: "c", text: "TA反而是带头攻击我的那个人", score: 0 }
    ]
  },
  {
    questionId: "co_23", type: QuestionType.SINGLE, title: "关于‘幽默感’：在经历了漫长岁月后，你们还能互开玩笑吗？", dimensionIds: ["stable"], weight: 0.9, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "是的，我们是彼此最有趣的玩伴", score: 10 },
      { optionId: "b", text: "变得刻板和无趣，说话都要字斟句酌", score: 5 },
      { optionId: "c", text: "开玩笑经常演变成人身攻击", score: 2 }
    ]
  },
  {
    questionId: "co_24", type: QuestionType.SINGLE, title: "如果你由于‘重大过错’（非原则性）导致家庭资产损失，对方的反应？", dimensionIds: ["stable"], weight: 1.7, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "先确认我的安全和情绪，然后共同承担债务", score: 10 },
      { optionId: "b", text: "疯狂埋怨多年，作为以后压制我的把柄", score: 4 },
      { optionId: "c", text: "立刻止损并提出分居或离婚", score: 1 }
    ]
  },
  {
    questionId: "co_25", type: QuestionType.SINGLE, title: "对方对你‘退休生活’的规划里是否有具体细节？", dimensionIds: ["future"], weight: 1.5, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "有，非常详尽，包括去哪旅居、养什么狗", score: 10 },
      { optionId: "b", text: "泛泛而谈，还没想那么远", score: 6 },
      { optionId: "c", text: "TA的规划里似乎只有TA自己或TA的原生家庭", score: 1 }
    ]
  },
  {
    questionId: "co_26", type: QuestionType.SINGLE, title: "面对‘长期的性冷淡或生理机能下降’，对方的态度？", dimensionIds: ["invest", "stable"], weight: 1.6, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "能通过多种非性亲密方式维持连接，充满温情", score: 10 },
      { optionId: "b", text: "以此为借口向外寻找，或者冷嘲热讽", score: 2 },
      { optionId: "c", text: "彼此逃避，成为名副其实的邻居", score: 4 }
    ]
  },
  {
    questionId: "co_27", type: QuestionType.SCALE, title: "你对对方‘忠诚度’的底层心理信任评分？", dimensionIds: ["stable"], weight: 2.3, modes: ["quick", "full"], stageIds: ["committed"],
    scale: { min: 0, max: 10, step: 1, minLabel: "草木皆兵", maxLabel: "金石之坚" }
  },
  {
    questionId: "co_28", type: QuestionType.SINGLE, title: "对方是否会因为怕你辛苦而‘主动推掉’一些对其有利但费时的社交？", dimensionIds: ["invest"], weight: 1.4, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "经常，家庭在TA心里的优先级永远是第一", score: 10 },
      { optionId: "b", text: "基本不会，事业才是最重要的", score: 5 },
      { optionId: "c", text: "TA不仅不去，还要求我也得拼命工作供TA享受", score: 0 }
    ]
  },
  {
    questionId: "co_29", type: QuestionType.SINGLE, title: "关于‘共创’：你们是否有长期坚持的‘两人专属习惯’？", dimensionIds: ["stable"], weight: 1.1, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "有，如每周的电影日、早晨的拥抱等", score: 10 },
      { optionId: "b", text: "断断续续，很难坚持下来", score: 6 },
      { optionId: "c", text: "完全没有，甚至觉得这些很肉麻和没必要", score: 2 }
    ]
  },
  {
    questionId: "co_30", type: QuestionType.SINGLE, title: "对方在处理‘你的职场危机’时的角色扮演？", dimensionIds: ["future", "invest"], weight: 1.4, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "军师与后盾，能给出极具价值的建议", score: 10 },
      { optionId: "b", text: "听听就算了，感觉帮不上忙", score: 6 },
      { optionId: "c", text: "落井下石，认为是我活该", score: 1 }
    ]
  },
  {
    questionId: "co_31", type: QuestionType.SINGLE, title: "你们是否曾经共同‘面对过死亡’（如挚友去世）并因此深度整合了人生观？", dimensionIds: ["stable"], weight: 1.3, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "是的，这让我们更珍惜当下的每一天", score: 10 },
      { optionId: "b", text: "只是情绪上的悲伤，没有升华到认知层面", score: 6 },
      { optionId: "c", text: "互相埋怨对方在丧礼上表现不够好", score: 2 }
    ]
  },
  {
    questionId: "co_32", type: QuestionType.SINGLE, title: "关于‘财富继承’：对方目前的意向？", dimensionIds: ["future"], weight: 1.5, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "全部留给对方和孩子，确保我们的遗产在爱中延续", score: 10 },
      { optionId: "b", text: "全部给TA自家的亲戚，视我为外人", score: 1 },
      { optionId: "c", text: "根本不考虑这种事，挥霍殆尽", score: 3 }
    ]
  },
  {
    questionId: "co_33", type: QuestionType.SINGLE, title: "对方在你们结婚/确立关系周年纪念日的自发表现？", dimensionIds: ["invest"], weight: 0.8, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "极其重视，充满了创意的惊喜", score: 10 },
      { optionId: "b", text: "公式化走过场，甚至需要我提醒", score: 5 },
      { optionId: "c", text: "故意忘记以此来贬低这份关系的价值", score: 1 }
    ]
  },
  {
    questionId: "co_34", type: QuestionType.SINGLE, title: "你对‘下辈子再续前缘’的真实渴望度？", dimensionIds: ["stable"], weight: 1.5, modes: ["full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "如有来生，必不相负", score: 10 },
      { optionId: "b", text: "这辈子够了，下辈子换个活法", score: 6 },
      { optionId: "c", text: "下辈子希望永远不要遇到这个人", score: 0 }
    ]
  },
  {
    questionId: "co_35", type: QuestionType.SINGLE, title: "这段关系的‘终极稳定性’定性？", dimensionIds: ["stable"], weight: 2.0, modes: ["quick", "full"], stageIds: ["committed"],
    options: [
      { optionId: "a", text: "如磐石般稳固，任何外力都无法撼动", score: 10 },
      { optionId: "b", text: "大震不倒，小震常有，依然坚韧", score: 7 },
      { optionId: "c", text: "金玉其外，败絮其中，随时可能崩塌", score: 2 },
      { optionId: "d", text: "已经是废墟，只是为了孩子或利益勉强维持", score: 0 }
    ]
  }
];
