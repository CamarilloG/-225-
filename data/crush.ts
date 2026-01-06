
import { Question, QuestionType } from '../types';

export const crushQuestions: Question[] = [
  {
    questionId: "cr_1", type: QuestionType.SINGLE, title: "当你在社交平台发布一条略带负面情绪的动态时，对方的反馈表现？", dimensionIds: ["init", "invest"], weight: 1.8, modes: ["quick", "full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "第一时间私聊询问原因，表现出实质性的担忧", score: 10, tags: ["强窗口"] },
      { optionId: "b", text: "在评论区互动安抚，但没有进一步私下交流", score: 6 },
      { optionId: "c", text: "仅点赞表示‘已阅’，不做任何文字停留", score: 2 },
      { optionId: "d", text: "完全视而不见，仿佛没有看到该动态", score: 0 }
    ]
  },
  {
    questionId: "cr_2", type: QuestionType.SINGLE, title: "关于‘回复节奏’的潜意识观察：对方是否曾解释过其延迟回复的原因？", dimensionIds: ["invest", "bound"], weight: 1.4, modes: ["quick", "full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "即便你没问，TA也会主动告知刚才在忙什么", score: 10, tags: ["主动报备"] },
      { optionId: "b", text: "在你表现出等待时会解释，否则不解释", score: 6 },
      { optionId: "c", text: "即便回复很慢，也从不解释去向，表现得随心所欲", score: 2 }
    ]
  },
  {
    questionId: "cr_3", type: QuestionType.SINGLE, title: "在面对面相处时，对方的视线停留区域与时长？", dimensionIds: ["init"], weight: 1.6, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "长时间聚焦在你的眉眼及唇部，带有明显的探索感", score: 10 },
      { optionId: "b", text: "眼神柔和但克制，频繁产生短促的眼神对视", score: 8 },
      { optionId: "c", text: "视线多游离于手机或周遭环境，较少与你直接对焦", score: 3 }
    ]
  },
  {
    questionId: "cr_4", type: QuestionType.MULTI, title: "对方是否曾主动提及以下关于你的‘细枝末节’（多选）？", dimensionIds: ["invest"], weight: 2.0, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "m1", text: "你某次随口提到的饮食偏好", score: 3 },
      { optionId: "m2", text: "你某次合照中佩戴的配饰细节", score: 2 },
      { optionId: "m3", text: "你曾分享过的一段童年阴影或尴尬往事", score: 4 },
      { optionId: "m4", text: "你近期工作中的一个小烦恼", score: 1 }
    ]
  },
  {
    questionId: "cr_5", type: QuestionType.SCALE, title: "对方在‘共同时间’的规划上，表现出的优先级？", dimensionIds: ["init", "invest"], weight: 1.5, modes: ["quick", "full"], stageIds: ["crush"],
    scale: { min: 0, max: 10, step: 1, minLabel: "可有可无", maxLabel: "最高优先级" }
  },
  {
    questionId: "cr_6", type: QuestionType.SINGLE, title: "当你在对话中提到其他异性并赞美对方时，TA的反应？", dimensionIds: ["init", "stable"], weight: 1.3, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "表现出微妙的占有欲或反驳，试图将话题引回你们之间", score: 10, tags: ["醋意信号"] },
      { optionId: "b", text: "态度自然，甚至大方附和你的赞美", score: 5 },
      { optionId: "c", text: "完全不在意，表现出一种‘无所谓’的超脱感", score: 1 }
    ]
  },
  {
    questionId: "cr_7", type: QuestionType.SINGLE, title: "关于‘数字遗迹’的互动：对方是否会翻看并点赞你多年前的动态？", dimensionIds: ["invest"], weight: 1.7, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "有过这种深度‘考古’行为，表现出极强的探索欲", score: 10, tags: ["考古式关注"] },
      { optionId: "b", text: "仅互动近期的动态，不触碰过往", score: 5 },
      { optionId: "c", text: "几乎不产生主动互动", score: 1 }
    ]
  },
  {
    questionId: "cr_8", type: QuestionType.SINGLE, title: "在群聊或聚会中，对方的‘注意力分配’？", dimensionIds: ["init"], weight: 1.4, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "频繁寻找我的视线，或总是接我的话茬", score: 10 },
      { optionId: "b", text: "专注于核心人物或话题，偶尔顾及我", score: 6 },
      { optionId: "c", text: "对我表现得比对陌生人还要冷淡或刻意避嫌", score: 2 }
    ]
  },
  {
    questionId: "cr_9", type: QuestionType.SINGLE, title: "对方发起‘深度对话’（关于人生、价值观、情感观）的频率？", dimensionIds: ["invest"], weight: 1.5, modes: ["quick", "full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "经常主动开启，渴望了解我的精神世界", score: 10 },
      { optionId: "b", text: "仅在深夜或喝酒后才有这种流露", score: 6 },
      { optionId: "c", text: "永远停留在天气、食物、八卦等浅层表述", score: 2 }
    ]
  },
  {
    questionId: "cr_10", type: QuestionType.SINGLE, title: "当你们共处一室且气氛陷入短暂沉默时，对方的姿态？", dimensionIds: ["stable"], weight: 1.0, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "神情自若，甚至享受这种静默的张力", score: 10 },
      { optionId: "b", text: "略显尴尬，拼命找话题缓解", score: 7 },
      { optionId: "c", text: "立刻掏出手机，建立物理防线", score: 3 }
    ]
  },
  {
    questionId: "cr_11", type: QuestionType.SINGLE, title: "对方是否曾‘越过社交礼仪’来为你提供帮助？", dimensionIds: ["invest"], weight: 1.8, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "是的，比如深夜接送、处理我复杂的麻烦事", score: 10, tags: ["实质性投入"] },
      { optionId: "b", text: "仅停留在言语问候，实际行动极少", score: 5 },
      { optionId: "c", text: "找借口推辞，划清界限非常明确", score: 1 }
    ]
  },
  {
    questionId: "cr_12", type: QuestionType.SINGLE, title: "关于‘分享欲’：对方发给你的日常（如晚霞、午餐、趣事）频率？", dimensionIds: ["init"], weight: 1.2, modes: ["quick", "full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "每天都有，感觉我参与了TA的全部生活", score: 10 },
      { optionId: "b", text: "断断续续，想起来才发一个", score: 6 },
      { optionId: "c", text: "从不主动分享，除非我问起", score: 2 }
    ]
  },
  {
    questionId: "cr_13", type: QuestionType.SCALE, title: "你在对方身边的‘受宠度’或‘特殊性’感受？", dimensionIds: ["invest"], weight: 1.3, modes: ["full"], stageIds: ["crush"],
    scale: { min: 0, max: 10, step: 1, minLabel: "大众路人", maxLabel: "独一份偏爱" }
  },
  {
    questionId: "cr_14", type: QuestionType.SINGLE, title: "对方在对话中对你‘过往感情史’的试探深度？", dimensionIds: ["init"], weight: 1.4, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "旁敲侧击，非常在意我的空窗期和择偶标准", score: 10 },
      { optionId: "b", text: "仅泛泛而谈，作为社交谈资", score: 6 },
      { optionId: "c", text: "完全不感兴趣，甚至主动打断相关话题", score: 2 }
    ]
  },
  {
    questionId: "cr_15", type: QuestionType.SINGLE, title: "你们的‘聊天结尾’通常是如何结束的？", dimensionIds: ["init"], weight: 1.1, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "对方总是最后回复，或用‘未完待续’的话题钩子", score: 10 },
      { optionId: "b", text: "有来有回，自然断掉", score: 7 },
      { optionId: "c", text: "经常被对方以‘我要去忙了’强行切断且无下文", score: 3 }
    ]
  },
  {
    questionId: "cr_16", type: QuestionType.SINGLE, title: "对方是否曾当着你的面‘拒绝’其他明显的社交邀约？", dimensionIds: ["invest"], weight: 1.6, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "有过，明确表示为了陪我而推掉其他局", score: 10, tags: ["独占时间"] },
      { optionId: "b", text: "没有见过，TA似乎很忙，各种局不断", score: 5 },
      { optionId: "c", text: "我是被TA推掉的那个邀约", score: 1 }
    ]
  },
  {
    questionId: "cr_17", type: QuestionType.SINGLE, title: "当你改变发型或穿着时，对方的察觉速度？", dimensionIds: ["invest"], weight: 0.9, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "秒回，且能给出具体的细节赞美", score: 10 },
      { optionId: "b", text: "需要我主动暗示，TA才会发现", score: 5 },
      { optionId: "c", text: "完全无感，甚至我换了风格很久TA都没发现", score: 1 }
    ]
  },
  {
    questionId: "cr_18", type: QuestionType.SINGLE, title: "对方提到‘我们’这个词的频次（哪怕是无意的假设）？", dimensionIds: ["future"], weight: 1.5, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "很高，经常说‘我们要不要去...’", score: 10 },
      { optionId: "b", text: "偶尔，大多是用‘你’和‘我’界限分明", score: 6 },
      { optionId: "c", text: "从不使用，甚至刻意规避并集", score: 1 }
    ]
  },
  {
    questionId: "cr_19", type: QuestionType.SCALE, title: "你对这段暧昧关系‘变现’为正式关系的信心值？", dimensionIds: ["stable"], weight: 1.4, modes: ["quick", "full"], stageIds: ["crush"],
    scale: { min: 0, max: 10, step: 1, minLabel: "死局已定", maxLabel: "胜券在握" }
  },
  {
    questionId: "cr_20", type: QuestionType.SINGLE, title: "关于‘共情能力’：当你开心时，对方的真实反馈？", dimensionIds: ["invest"], weight: 1.2, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "甚至比我还兴奋，这种快乐是同步的", score: 10 },
      { optionId: "b", text: "礼貌性祝贺，没有太多情绪波动", score: 6 },
      { optionId: "c", text: "表现出冷淡或嫉妒，甚至泼冷水", score: 1 }
    ]
  },
  {
    questionId: "cr_21", type: QuestionType.SINGLE, title: "对方是否曾‘记住’你讨厌的东西并避开？", dimensionIds: ["invest"], weight: 1.4, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "是的，极其细心，甚至我自己都忘了", score: 10 },
      { optionId: "b", text: "偶尔会犯错，但提醒后会改正", score: 6 },
      { optionId: "c", text: "完全不在意，我强调多次依然故我", score: 2 }
    ]
  },
  {
    questionId: "cr_22", type: QuestionType.SINGLE, title: "关于‘深夜’：对方找你的时间分布？", dimensionIds: ["init"], weight: 1.3, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "全天候均匀分布，包括理性清醒的白天", score: 10 },
      { optionId: "b", text: "集中在深夜或寂寞时，感觉是‘情绪垃圾桶’", score: 4 },
      { optionId: "c", text: "基本只有工作时间或有事求我才找我", score: 2 }
    ]
  },
  {
    questionId: "cr_23", type: QuestionType.SINGLE, title: "对方对你‘肢体接触’（如碰触肩膀、手臂）的反应？", dimensionIds: ["init"], weight: 1.7, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "自然接受甚至回馈，身体语言极度开放", score: 10 },
      { optionId: "b", text: "瞬间僵硬或礼貌避开，但神色不反感", score: 6 },
      { optionId: "c", text: "明显反感，迅速拉开安全距离", score: 1 }
    ]
  },
  {
    questionId: "cr_24", type: QuestionType.SINGLE, title: "对方是否会在朋友圈展示带有‘你存在的痕迹’（如两杯咖啡）？", dimensionIds: ["invest"], weight: 1.6, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "有过，带有一种微妙的宣示主权感", score: 10 },
      { optionId: "b", text: "很少，动态里全是单人照或风景", score: 5 },
      { optionId: "c", text: "严防死守，动态里绝对不能出现任何与我有关的信号", score: 1 }
    ]
  },
  {
    questionId: "cr_25", type: QuestionType.SINGLE, title: "当你生病或加班到很晚时，对方的慰问质量？", dimensionIds: ["invest"], weight: 1.4, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "外卖、药品或长篇的安抚，有实质性关心", score: 10 },
      { optionId: "b", text: "一个‘抱抱’表情包或一句‘多喝热水’", score: 5 },
      { optionId: "c", text: "消失不见，事后才问一句‘好点了吗’", score: 1 }
    ]
  },
  {
    questionId: "cr_26", type: QuestionType.SINGLE, title: "关于‘借口’：对方找你帮忙的频率与理由？", dimensionIds: ["init"], weight: 0.8, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "频繁找一些蹩脚的借口，只为了见一面", score: 10, tags: ["创造机会"] },
      { optionId: "b", text: "真的有事才找我，效率极高", score: 6 },
      { optionId: "c", text: "从不求助，表现得极度独立和疏离", score: 4 }
    ]
  },
  {
    questionId: "cr_27", type: QuestionType.SCALE, title: "你感知到的对方对你的‘好奇心’深度？", dimensionIds: ["invest"], weight: 1.2, modes: ["full"], stageIds: ["crush"],
    scale: { min: 0, max: 10, step: 1, minLabel: "漠不关心", maxLabel: "十万个为什么" }
  },
  {
    questionId: "cr_28", type: QuestionType.SINGLE, title: "在讨论到‘某项技能/才华’时，对方的反应？", dimensionIds: ["invest"], weight: 1.0, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "崇拜感满满，经常化身小迷弟/迷妹", score: 10 },
      { optionId: "b", text: "平淡欣赏，认为很正常", score: 6 },
      { optionId: "c", text: "试图竞争或打压，以此证明自己更强", score: 2 }
    ]
  },
  {
    questionId: "cr_29", type: QuestionType.SINGLE, title: "对方是否曾带你进入TA的‘秘密基地’（私藏的小店、景点）？", dimensionIds: ["invest"], weight: 1.5, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "是的，作为一种深度亲密的邀请", score: 10 },
      { optionId: "b", text: "去过，但感觉也是随大众，没有特殊性", score: 6 },
      { optionId: "c", text: "从不邀请，活动范围仅限于商业闹市区", score: 2 }
    ]
  },
  {
    questionId: "cr_30", type: QuestionType.SINGLE, title: "关于‘镜像效应’：对方是否会模仿你的口头禅或表情包？", dimensionIds: ["init"], weight: 1.1, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "非常明显，这是由于潜意识里的高感度", score: 10 },
      { optionId: "b", text: "偶尔，可能是被我同化了", score: 7 },
      { optionId: "c", text: "完全没有，TA有自己独立且坚固的风格", score: 5 }
    ]
  },
  {
    questionId: "cr_31", type: QuestionType.SINGLE, title: "对方提到‘前任’的姿态？", dimensionIds: ["stable"], weight: 1.2, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "释然且简洁，不以此作为博弈手段", score: 10 },
      { optionId: "b", text: "反复控诉或怀念，明显没走出来", score: 3 },
      { optionId: "c", text: "避而不谈，对此极度敏感和隐瞒", score: 2 }
    ]
  },
  {
    questionId: "cr_32", type: QuestionType.SINGLE, title: "对方是否会因为你的一句话而‘立刻行动’（如你想吃某样东西）？", dimensionIds: ["invest"], weight: 1.7, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "有过多次，执行力惊人", score: 10 },
      { optionId: "b", text: "仅在兴致高的时候会表现一下", score: 6 },
      { optionId: "c", text: "从未有过，永远是我在等TA", score: 1 }
    ]
  },
  {
    questionId: "cr_33", type: QuestionType.SINGLE, title: "对方发朋友圈的‘可见权限’对你是否透明？", dimensionIds: ["bound"], weight: 1.3, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "全开放，我可以随时了解TA的全部动态", score: 10 },
      { optionId: "b", text: "三天可见或经常分组屏蔽，我感觉被隔绝了", score: 3 },
      { optionId: "c", text: "完全不发动态，像个幽灵", score: 5 }
    ]
  },
  {
    questionId: "cr_34", type: QuestionType.SINGLE, title: "对方在处理‘你的失误/尴尬’时的第一反应？", dimensionIds: ["stable"], weight: 1.2, modes: ["full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "温柔化解，极力维护我的自尊心", score: 10 },
      { optionId: "b", text: "当众调侃，让我感到更加尴尬", score: 4 },
      { optionId: "c", text: "表现出明显的嫌弃或不耐烦", score: 1 }
    ]
  },
  {
    questionId: "cr_35", type: QuestionType.SINGLE, title: "这段暧昧关系的‘整体温度’感受？", dimensionIds: ["stable"], weight: 2.0, modes: ["quick", "full"], stageIds: ["crush"],
    options: [
      { optionId: "a", text: "稳定升温中，即将沸腾", score: 10 },
      { optionId: "b", text: "忽冷忽热，像在坐过山车", score: 5 },
      { optionId: "c", text: "已经开始降温，明显倦怠了", score: 2 },
      { optionId: "d", text: "一直处于冰点，感觉只是我在独舞", score: 0 }
    ]
  }
];
