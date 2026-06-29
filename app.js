const mascot = "./assets/mascot.svg";
const mascotLottie = "./assets/mascot-wink.lottie.json";
const avatar = "./assets/avatar.svg";
const bannerIcon = "./assets/banner-icon.svg";
const meetingIcon = "./assets/meeting.svg";
const radarIcon = "./assets/radar.svg";
const userAvatars = Array.from({ length: 10 }, (_, index) => `./assets/user_avatar/user_avatar_${String(index + 1).padStart(2, "0")}.jpg`);

function shuffleList(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

const candidateAvatarOrder = shuffleList(userAvatars);
const resultsRevealDelay = 3000;
const hashTokenGap = "    ";

function candidateAvatar(index) {
  return candidateAvatarOrder[index % candidateAvatarOrder.length];
}

const candidates = [
  {
    name: "何炜",
    viewed: "3个月内看过",
    score: 4,
    meta: ["28岁", "5年工作经验", "本科", "武汉"],
    title: "PC客户端开发工程师",
    meeting: "6月19日 周五 14:00 - 15:00",
    meetingId: "544 003 223",
    history: [
      ["2022.09 - 至今", "拉萨众智易讯科技有限公司", "PC客户端开发工程师"],
      ["2020.02 - 2022.09", "北京百度股份有限公司", "PC客户端开发工程师"],
      ["2016.06 - 2020.02", "杭州阿里巴巴股份有限公司", "PC客户端开发工程师"],
      ["2012.09 - 2016.06", "北京大学", "本科"]
    ],
    skills: ["985", "1月内面试过", "管理经验", "BAT", "项目负责人"],
    analysis: "TA在UI设计领域的丰富经验和专业技能，在专业技能和项目经验方面表现非常出色，具备很强的竞争力"
  },
  {
    name: "张三三",
    viewed: "1个月内沟通过",
    score: 5,
    meta: ["28岁", "5年工作经验", "本科", "深圳"],
    title: "PC客户端开发工程师",
    meeting: "6月20日 周六 10:00 - 11:00",
    meetingId: "622 118 904",
    history: [
      ["2022.09 - 至今", "拼多多", "PC客户端开发工程师"],
      ["2020.02 - 2022.09", "北京百度股份有限公司", "PC客户端开发工程师"],
      ["2016.06 - 2020.02", "杭州阿里巴巴股份有限公司", "PC客户端开发工程师"],
      ["2012.09 - 2016.06", "北京大学", "本科"]
    ],
    skills: ["985", "C++", "STL", "BAT", "项目负责人"],
    analysis: "客户端工程经验连续，技术栈和岗位画像高度贴合，过往项目里有复杂桌面端性能优化经验"
  },
  {
    name: "李可",
    viewed: "最近活跃",
    score: 4,
    meta: ["30岁", "7年工作经验", "本科", "杭州"],
    title: "桌面端开发工程师",
    meeting: "6月21日 周日 15:30 - 16:30",
    meetingId: "817 430 266",
    history: [
      ["2021.04 - 至今", "腾讯科技", "高级客户端开发"],
      ["2018.03 - 2021.03", "网易", "C++开发工程师"],
      ["2015.09 - 2018.02", "金山办公", "桌面端开发工程师"],
      ["2011.09 - 2015.06", "华中科技大学", "本科"]
    ],
    skills: ["C++", "Qt", "音视频", "工程化", "管理经验"],
    analysis: "C++基础扎实，工程化经验丰富，适合承担复杂客户端模块的稳定性建设"
  }
];

candidates.push(
  {
    name: "王也",
    viewed: "2周内活跃",
    score: 4,
    meta: ["26岁", "4年工作经验", "硕士", "北京"],
    title: "桌面端开发工程师",
    history: [
      ["2022.01 - 至今", "字节跳动", "桌面端开发工程师"],
      ["2020.07 - 2021.12", "金山办公", "客户端开发工程师"],
      ["2018.09 - 2020.06", "北京邮电大学", "硕士"],
      ["2014.09 - 2018.06", "武汉大学", "本科"]
    ],
    skills: ["C++", "Chromium", "调试工具", "硕士", "跨端"],
    analysis: "桌面端开发背景明确，Chromium 相关经验对复杂客户端业务有补充价值，适合进入技术初筛"
  },
  {
    name: "陈晓",
    viewed: "3天内更新",
    score: 5,
    meta: ["29岁", "6年工作经验", "本科", "上海"],
    title: "C++客户端开发工程师",
    history: [
      ["2021.06 - 至今", "哔哩哔哩", "C++客户端开发工程师"],
      ["2019.03 - 2021.05", "携程", "桌面端开发"],
      ["2017.07 - 2019.02", "华为", "软件开发工程师"],
      ["2013.09 - 2017.06", "南京大学", "本科"]
    ],
    skills: ["C++", "Qt", "性能优化", "985", "大型项目"],
    analysis: "具备连续的客户端项目经验，性能优化和桌面端框架能力突出，与岗位关键要求匹配度高"
  },
  {
    name: "刘晨",
    viewed: "HR已收藏",
    score: 4,
    meta: ["31岁", "8年工作经验", "本科", "广州"],
    title: "高级客户端工程师",
    history: [
      ["2020.05 - 至今", "网易", "高级客户端工程师"],
      ["2017.02 - 2020.04", "腾讯", "C++开发工程师"],
      ["2015.07 - 2017.01", "迅雷", "客户端开发"],
      ["2011.09 - 2015.06", "中山大学", "本科"]
    ],
    skills: ["C++", "音视频", "工程化", "BAT", "团队协作"],
    analysis: "大厂客户端履历完整，音视频和工程化经验丰富，可覆盖岗位对复杂客户端模块的交付要求"
  },
  {
    name: "赵敏",
    viewed: "1个月内看过",
    score: 4,
    meta: ["27岁", "5年工作经验", "本科", "成都"],
    title: "PC客户端开发",
    history: [
      ["2022.03 - 至今", "腾讯音乐", "PC客户端开发"],
      ["2019.07 - 2022.02", "完美世界", "C++工程师"],
      ["2018.07 - 2019.06", "创业团队", "客户端开发"],
      ["2014.09 - 2018.06", "四川大学", "本科"]
    ],
    skills: ["C++", "Windows", "UI框架", "游戏工具", "本科"],
    analysis: "Windows 客户端和 UI 框架经验扎实，能够快速承接桌面端功能开发和体验优化工作"
  },
  {
    name: "周洋",
    viewed: "1年前更新",
    score: 3,
    meta: ["25岁", "3年工作经验", "本科", "南京"],
    title: "客户端开发工程师",
    history: [
      ["2023.01 - 至今", "小米", "客户端开发工程师"],
      ["2021.07 - 2022.12", "苏宁科技", "C++开发"],
      ["2017.09 - 2021.06", "东南大学", "本科"],
      ["", "", ""]
    ],
    skills: ["C++", "Qt", "本科", "工具平台", "成长型"],
    analysis: "基础能力与岗位方向一致，项目深度略低于资深候选人，但成长性较好，适合作为备选池跟进"
  },
  {
    name: "孙悦",
    viewed: "7天内看过",
    score: 5,
    meta: ["32岁", "9年工作经验", "硕士", "深圳"],
    title: "客户端技术专家",
    history: [
      ["2019.08 - 至今", "腾讯", "客户端技术专家"],
      ["2016.04 - 2019.07", "百度", "高级客户端工程师"],
      ["2014.07 - 2016.03", "阿里巴巴", "C++工程师"],
      ["2011.09 - 2014.06", "浙江大学", "硕士"]
    ],
    skills: ["BAT", "架构设计", "C++", "管理经验", "硕士"],
    analysis: "履历质量和岗位画像高度一致，兼具架构、工程化和团队协作经验，可作为优先推进候选人"
  },
  {
    name: "吴桐",
    viewed: "2个月内看过",
    score: 4,
    meta: ["28岁", "6年工作经验", "本科", "西安"],
    title: "C++软件工程师",
    history: [
      ["2021.09 - 至今", "金山办公", "C++软件工程师"],
      ["2018.07 - 2021.08", "360", "客户端开发工程师"],
      ["2016.07 - 2018.06", "用友", "软件开发"],
      ["2012.09 - 2016.06", "西安交通大学", "本科"]
    ],
    skills: ["C++", "办公软件", "稳定性", "985", "性能优化"],
    analysis: "办公软件客户端经验与岗位场景接近，稳定性治理和性能优化经历可直接复用到业务中"
  }
);

const state = {
  view: "home",
  phase: "home",
  dropdown: false,
  mode: "Fast",
  activeMode: "Fast",
  hireType: "社招",
  prompt: "",
  submittedPrompt: "",
  questionOne: "",
  questionTwo: "",
  selectedCandidate: 0,
  automationModal: false,
  automationView: "manage",
  automationName: "未命名招聘自动化流程",
  automationAgent: true,
  automationTeam: true,
  agentCallExpanded: true,
  agentTaskStep: 1,
  subtitlePlayed: false,
  hashPickerOpen: false,
  hashPickerQuery: "",
  hashPickerX: 16,
  hashPickerY: 16,
  hashToken: null
};

const jobDictionary = [
  "UI设计师",
  "交互设计师",
  "视觉设计师",
  "产品体验设计师",
  "Android客户端开发",
  "iOS客户端开发",
  "前端客户端开发",
  "客户端性能优化",
  "产品经理",
  "产品运营专员",
  "产品策略分析师",
  "高级产品专家",
  "后端研发工程师",
  "测试研发工程师",
  "大数据研发工程师",
  "算法研发工程师"
];

let flowTimer = null;
let typingTimer = null;
let hashInputComposing = false;
let homePromptComposing = false;

function clearFlowTimer() {
  if (flowTimer) {
    clearTimeout(flowTimer);
    flowTimer = null;
  }
  if (typingTimer) {
    clearInterval(typingTimer);
    typingTimer = null;
  }
}

function schedulePhase(nextPhase, delay) {
  clearFlowTimer();
  flowTimer = setTimeout(() => {
    state.phase = nextPhase;
    if (nextPhase === "results") {
      state.view = "fast";
    }
    render();
  }, delay);
}

function scrollChatToLatest() {
  requestAnimationFrame(() => {
    const chat = document.querySelector(".chat-column");
    if (!chat) return;
    chat.scrollTop = chat.scrollHeight;
  });
}

function scheduleAgentTaskAdvance() {
  if (flowTimer) {
    clearTimeout(flowTimer);
    flowTimer = null;
  }
  flowTimer = setTimeout(() => {
    if (!isAgentFlow() || state.phase !== "resultsLoading") return;
    if (state.agentTaskStep < 4) {
      state.agentTaskStep += 1;
      state.agentCallExpanded = state.agentTaskStep === 3;
      render();
      scheduleAgentTaskAdvance();
      return;
    }
    state.agentTaskStep = 4;
    state.agentCallExpanded = false;
    render();
    schedulePhase("results", resultsRevealDelay);
  }, 4000);
}

function startAgentTaskSequence() {
  clearFlowTimer();
  state.phase = "resultsLoading";
  state.agentTaskStep = 1;
  state.agentCallExpanded = false;
  render();
  scheduleAgentTaskAdvance();
}

function phaseDelay(phase) {
  const delays = {
    results: 0
  };
  return delays[phase] || 0;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function submittedPrompt() {
  return state.submittedPrompt || state.prompt.trim() || "我想找PC客户端开发工程师";
}

function jobTitle() {
  const prompt = submittedPrompt()
    .replace(/^我想找/, "")
    .replace(/^招聘/, "")
    .replace(/^寻找/, "")
    .trim();
  if (/^\d+$/.test(prompt)) return "PC客户端开发工程师";
  return prompt || "PC客户端开发工程师";
}

function selectedJobTitle() {
  return state.hashToken?.text || jobTitle();
}

function isAgentFlow() {
  return state.activeMode === "Agent全流程";
}

function pageTaskName() {
  return isAgentFlow() ? "简历匹配邀约" : "简历匹配";
}

function questionSet() {
  const title = selectedJobTitle();
  if (/UI|交互|视觉|体验|设计/.test(title)) {
    return [
      { title: "1、作品集或设计方向偏好？", label: "设计方向", options: ["B端复杂系统", "C端增长体验"] },
      { title: "2、核心设计能力要求？", label: "设计能力", options: ["交互原型与用户研究", "视觉规范与动效表达"] }
    ];
  }
  if (/Android|iOS|前端|客户端|性能优化/.test(title)) {
    return [
      { title: "1、平台或技术栈偏好？", label: "技术栈要求", options: ["Android / iOS 原生", "React / Vue / 跨端"] },
      { title: "2、关键项目经验要求？", label: "项目经验", options: ["性能优化与稳定性", "复杂业务架构经验"] }
    ];
  }
  if (/产品|运营|策略/.test(title)) {
    return [
      { title: "1、业务方向偏好？", label: "业务方向", options: ["AI产品 / 工具平台", "增长 / 商业化"] },
      { title: "2、核心能力要求？", label: "核心能力", options: ["数据分析与策略判断", "需求拆解与项目推进"] }
    ];
  }
  if (/算法|机器学习|大数据|后端|测试|研发/.test(title)) {
    return [
      { title: "1、技术方向偏好？", label: "技术方向", options: ["分布式 / 高并发", "算法模型 / 数据处理"] },
      { title: "2、工程经验要求？", label: "工程经验", options: ["大型项目落地经验", "开源或论文产出"] }
    ];
  }
  return [
    { title: "1、行业或业务背景偏好？", label: "业务背景", options: ["互联网产品经验", "企业服务经验"] },
    { title: "2、核心能力要求？", label: "核心能力", options: ["复杂项目推进", "跨团队协作"] }
  ];
}

function majorRequirement() {
  const title = selectedJobTitle();
  if (/UI|交互|视觉|体验|设计/.test(title)) {
    return "视觉传达设计、交互设计、数字媒体艺术、工业设计、心理学、人机交互";
  }
  if (/Android|iOS|前端|客户端|性能优化/.test(title)) {
    return "计算机科学与技术、软件工程、信息工程、网络工程、人工智能、电子信息";
  }
  if (/产品|运营|策略/.test(title)) {
    return "计算机科学与技术、信息管理、工业工程、统计学、心理学、市场营销";
  }
  if (/算法|机器学习|大数据|后端|测试|研发/.test(title)) {
    return "计算机科学与技术、软件工程、人工智能、数据科学、信息安全、自动化";
  }
  return "计算机科学与技术、信息管理、工业工程、心理学、统计学、相关业务专业";
}

function answerSummary() {
  const questions = questionSet();
  const education = state.questionOne.trim();
  const language = state.questionTwo.trim();
  return {
    firstLabel: questions[0].label,
    secondLabel: questions[1].label,
    first: education || questions[0].options[0] || "未填写",
    second: language || questions[1].options[0] || "未填写"
  };
}

function introCopy() {
  return `根据您提供的JD信息，我已经明确了这是${state.hireType}，岗位是【${selectedJobTitle()}】，并且有详细的技术要求。\n除了JD中提到的这些要求外，请补充这些信息，我就能为您生成完整的候选人画像了`;
}

function profileIntroCopy() {
  return `根据您提供的JD信息，我已经明确了这是${state.hireType}，岗位是【${selectedJobTitle()}】，并且有详细的技术要求。\n我先为您生成理想候选人画像，请确认搜索条件是否需要调整：`;
}

function questionPromptCopy() {
  return "画像已确认。为了让匹配更精准，我再补充确认两个筛选条件：";
}

function profileCopy() {
  return "理想候选人画像已生成，请确认您的搜索条件是否需要调整：";
}

function startTypewriter(targetId, nextPhase) {
  const target = document.getElementById(targetId);
  if (!target || typingTimer) return;
  const text = target.dataset.text || "";
  let index = 0;
  target.textContent = "";
  typingTimer = setInterval(() => {
    index += 1;
    target.textContent = text.slice(0, index);
    scrollChatToLatest();
    if (index >= text.length) {
      clearInterval(typingTimer);
      typingTimer = null;
      state.phase = nextPhase;
      render();
    }
  }, 32);
}

function startIntroTypewriter() {
  startTypewriter("introTypewriter", "questions");
}

function startProfileTypewriter() {
  startTypewriter("profileTypewriter", "profile");
}

function startAgentIntroTypewriter() {
  const target = document.getElementById("agentIntroTypewriter");
  if (!target || typingTimer) return;
  const text = target.dataset.text || "";
  let index = 0;
  target.textContent = "";
  typingTimer = setInterval(() => {
    index += 1;
    target.textContent = text.slice(0, index);
    scrollChatToLatest();
    if (index >= text.length) {
      clearInterval(typingTimer);
      typingTimer = null;
      startAgentTaskSequence();
    }
  }, 32);
}

function icon(name) {
  const icons = {
    bell: '<i class="iconfont icon-notification-btn"></i>',
    back: '<i class="iconfont icon-back"></i>',
    add: '<i class="iconfont icon-add"></i>',
    send: '<i class="iconfont icon-icon-submit"></i>',
    more: '<i class="iconfont icon-more"></i>',
    stop: '<i class="iconfont icon-stop"></i>',
    check: "✓",
    settings: '<i class="iconfont icon-operation"></i>'
  };
  return icons[name] || "";
}

function topActions() {
  return `
    <div class="top-actions">
      <button class="icon-button quiet" aria-label="通知">${icon("bell")}</button>
      <img class="avatar" src="${avatar}" alt="" />
    </div>
  `;
}

function homeSubtitle() {
  return state.mode === "Agent全流程"
    ? "我精准筛选适配人才，Agent自动完成全流程面试邀约"
    : "我凭借智能岗位画像，快速精准匹配简历";
}

function hashPickerSuggestions() {
  const query = state.hashPickerQuery.trim();
  if (!query) return [];
  const matched = jobDictionary.filter(item => item.includes(query));
  return (matched.length ? matched : jobDictionary).slice(0, 4);
}

function highlightSuggestion(text) {
  const query = state.hashPickerQuery.trim();
  const safeText = escapeHtml(text);
  if (!query) return safeText;
  const index = text.indexOf(query);
  if (index < 0) return safeText;
  const before = escapeHtml(text.slice(0, index));
  const match = escapeHtml(text.slice(index, index + query.length));
  const after = escapeHtml(text.slice(index + query.length));
  return `${before}<span>${match}</span>${after}`;
}

function updateHashPickerPosition(textarea, hashIndex) {
  const card = textarea.closest(".input-card");
  if (!card) return;
  const beforeHash = textarea.value.slice(0, hashIndex);
  const mirror = document.createElement("div");
  const marker = document.createElement("span");
  const styles = window.getComputedStyle(textarea);
  mirror.style.position = "fixed";
  mirror.style.left = "-9999px";
  mirror.style.top = "0";
  mirror.style.width = `${textarea.clientWidth}px`;
  mirror.style.minHeight = `${textarea.clientHeight}px`;
  mirror.style.whiteSpace = "pre-wrap";
  mirror.style.overflowWrap = "break-word";
  mirror.style.font = styles.font;
  mirror.style.fontSize = styles.fontSize;
  mirror.style.fontFamily = styles.fontFamily;
  mirror.style.fontWeight = styles.fontWeight;
  mirror.style.lineHeight = styles.lineHeight;
  mirror.style.letterSpacing = styles.letterSpacing;
  mirror.style.padding = styles.padding;
  mirror.style.border = "0";
  mirror.textContent = beforeHash || "";
  marker.textContent = "\u200b";
  mirror.appendChild(marker);
  document.body.appendChild(mirror);
  const markerRect = marker.getBoundingClientRect();
  const mirrorRect = mirror.getBoundingClientRect();
  const x = textarea.offsetLeft + markerRect.left - mirrorRect.left;
  const y = textarea.offsetTop + markerRect.top - mirrorRect.top;
  state.hashPickerX = Math.max(0, Math.min(x, textarea.offsetLeft + textarea.clientWidth - 140));
  state.hashPickerY = Math.max(textarea.offsetTop, y);
  mirror.remove();
}

function hashJobPicker() {
  if (!state.hashPickerOpen) return "";
  const query = state.hashPickerQuery;
  const suggestions = hashPickerSuggestions();
  return `
    <div class="hash-job-picker ${query ? "has-query" : ""}" style="--hash-picker-x:${state.hashPickerX}px; --hash-picker-y:${state.hashPickerY}px;">
      <div class="hash-job-token">
        <input id="hashJobInput" type="text" value="${escapeHtml(query)}" placeholder="请输入岗位名称" />
      </div>
      ${query && suggestions.length ? `
        <div class="hash-job-menu">
          ${suggestions.map(item => `
            <button class="hash-job-option" data-hash-job="${escapeHtml(item)}">${highlightSuggestion(item)}</button>
          `).join("")}
        </div>
      ` : ""}
    </div>
  `;
}

function hashSelectedToken() {
  if (!state.hashToken) return "";
  return `
    <div class="hash-job-selected" style="--hash-picker-x:${state.hashToken.x}px; --hash-picker-y:${state.hashToken.y}px;">
      <span>${escapeHtml(state.hashToken.text)}</span>
    </div>
  `;
}

function homePlaceholder() {
  const placeholders = state.hireType === "校招"
    ? [
        "请输入您对候选人的详细诉求，输入#选择岗位",
        "找#产品经理实习生，2027年毕业，有AI项目经验，985优先",
        "找#技术研究-机器学习方向，2027年毕业，有开源项目贡献经验，工作地点深圳"
      ]
    : [
        "请输入您对候选人的详细诉求，输入#选择岗位",
        "找#应用研究岗位，有AI大模型项目经验，985优先，能英语沟通",
        "找#游戏3D设计师，5+年工作经验，985美术专业，3A项目优先"
      ];
  return `
    <div class="home-placeholder" aria-hidden="true">
      ${placeholders.map((text, index) => `<span style="--placeholder-index:${index}">${escapeHtml(text)}</span>`).join("")}
    </div>
  `;
}

function home() {
  const subtitle = homeSubtitle();
  return `
    <main class="home-view">
      <div class="soft-grid"></div>
      ${topActions()}
      <section class="home-panel">
        <div class="headline">
          <span>Hi，欢迎使用</span>
          <strong>JobAssistant</strong>
        </div>
        <p class="subtitle ${state.subtitlePlayed ? "subtitle-static" : "subtitle-typing"}" style="--subtitle-chars:${subtitle.length}; --subtitle-steps:${subtitle.length};">${subtitle}</p>
        <div class="input-card ${state.dropdown ? "focused" : ""} ${state.prompt.trim() ? "has-content" : ""}">
          ${mascotAnimation()}
          <textarea id="homePrompt" class="${state.hashToken ? "has-hash-token" : ""}" placeholder="">${state.prompt}</textarea>
          ${homePlaceholder()}
          ${hashSelectedToken()}
          ${hashJobPicker()}
          <div class="input-footer">
            <div class="left-tools">
              <div class="segment" data-active="${state.hireType === "社招" ? "0" : "1"}">
                ${["社招", "校招"].map(type => `<button class="${state.hireType === type ? "active" : ""}" data-hire="${type}">${type}</button>`).join("")}
              </div>
              <button class="mode-button ${state.dropdown ? "open" : ""}" id="modeButton">${state.mode}<i class="iconfont icon-chevron-down"></i></button>
              ${state.dropdown ? dropdown() : ""}
            </div>
            <div class="right-tools">
              <button class="icon-button" aria-label="添加附件">${icon("add")}</button>
              <button class="send-button ${state.prompt.trim() ? "send-button-active" : ""}" id="startFast" aria-label="开始匹配">${icon("send")}</button>
            </div>
          </div>
        </div>
      </section>
      <a class="home-credit" href="http://ttian.top/" target="_blank" rel="noopener noreferrer">By TTian.top</a>
      ${state.automationModal ? automationModal() : ""}
    </main>
  `;
}

function mascotAnimation() {
  return `
    <div class="mascot mascot-lottie" data-lottie-src="${mascotLottie}" aria-hidden="true">
      <div class="mascot-tip">
        <span>等你问我</span>
        <span>坐等派活</span>
      </div>
      <img src="${mascot}" alt="" />
      <svg viewBox="0 0 155 94" focusable="false">
        <ellipse class="mascot-wink-cover" cx="124.3" cy="25.2" rx="8" ry="11" />
        <path class="mascot-wink-line" d="M119.2 25 C121 26.8 122.4 30.2 123.8 28.1 C125.5 30.1 127.3 27.3 129.2 25.5" />
        <path class="mascot-wink-line mascot-wink-lash" d="M128 22.8 L130.6 20.5" />
        <path class="mascot-heart" d="M134.5 20.61 C132.96 19.62 131.64 20.28 131.86 18.74 C132.08 17.2 131.53 16.32 133.07 16.54 C134.28 16.65 133.9 16.76 134.5 17.915 C135.1 16.76 135.72 16.32 135.93 16.54 C137.47 16.32 136.92 17.2 137.14 18.74 C137.36 20.28 136.04 19.62 134.5 20.61 Z" />
      </svg>
    </div>
  `;
}

function dropdown() {
  const officialOptions = [
    { label: "Fast", icon: "icon-lightning" },
    { label: "Agent全流程", icon: "icon-robox" }
  ];
  const customOptions = ["混元自定义招聘"];
  return `
    <div class="dropdown">
      <div class="dropdown-title">官方</div>
      ${officialOptions.map(option => `
        <button class="dropdown-item" data-mode="${option.label}">
          <span class="dropdown-label"><i class="iconfont ${option.icon}"></i>${option.label}</span>
          ${state.mode === option.label ? `<i class="iconfont icon-confirm"></i>` : ""}
        </button>
      `).join("")}
      <div class="dropdown-title">自定义</div>
      ${customOptions.map(option => `
        <button class="dropdown-item" data-mode="${option}">
          <span class="dropdown-label dropdown-label-text">${option}</span>
          ${state.mode === option ? `<i class="iconfont icon-confirm"></i>` : ""}
        </button>
      `).join("")}
      <div class="divider"></div>
      <button class="dropdown-item config" id="openAutomationModal">${icon("settings")}<span>配置自动化流程</span></button>
    </div>
  `;
}

function automationModal() {
  return `
    <div class="modal-layer" id="automationModal" role="dialog" aria-modal="true" aria-labelledby="automationTitle">
      <div class="modal-backdrop" id="closeAutomationBackdrop"></div>
      <section class="automation-modal ${state.automationView === "create" ? "show-create" : "show-manage"}" id="automationPanel">
        <div class="automation-viewport">
          <div class="automation-pages">
            <div class="automation-page automation-page-manage">
              ${automationManagePanel()}
            </div>
            <div class="automation-page automation-page-create">
              ${automationCreatePanel()}
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function automationSwitch(checked, disabled = false, key = "") {
  return `
    <button class="automation-switch ${checked ? "checked" : ""} ${disabled ? "disabled" : ""}" ${disabled ? "disabled" : ""} ${key ? `data-automation-toggle="${key}"` : ""} aria-label="开关">
      <span></span>
    </button>
  `;
}

function automationManagePanel() {
  return `
    <header class="automation-header">
      <h2 id="automationTitle">招聘自动化流程</h2>
      <button class="modal-close" data-close-automation aria-label="关闭"></button>
    </header>
    <div class="automation-list">
      <div class="automation-toggle-item">
        <div class="automation-item-head">
          <strong>Fast</strong>
          ${automationSwitch(true, true)}
        </div>
        <p>依托岗位画像，AI 自动精准筛选、智能匹配简历，快速锁定适配候选人</p>
      </div>
      <div class="automation-toggle-item">
        <div class="automation-item-head">
          <strong>Agent全流程</strong>
          ${automationSwitch(state.automationAgent, false, "agent")}
        </div>
        <p>AI 精准匹配人才，Agent 自动化全流程面试邀约</p>
      </div>
      <div class="automation-toggle-item compact">
        <div class="automation-item-head">
          <strong>混元自定义招聘</strong>
          ${automationSwitch(state.automationTeam, false, "team")}
        </div>
      </div>
      <button class="create-flow-button" id="createAutomationFlow">
        <i class="iconfont icon-add"></i>
        <span>创建自动化流程</span>
      </button>
    </div>
  `;
}

function automationCreatePanel() {
  const steps = [
    ["#3464e0", "icon-icon-resume-search", "简历搜索", "输入规则，如：学历=博士，工作地=深圳", ""],
    ["#ffa948", "icon-icon-evaluation-wrapper", "评估规则", "输入规则", ""],
    ["#ff7548", "icon-icon-phone", "AI外呼", "输入规则，如：岗位介绍，部门信息", "去配置"],
    ["#20c584", "icon-icon-email", "邀约规则", "输入规则，如：@选择面试官，邮件/短信通知方式", ""],
    ["#f81d22", "icon-icon-output", "结果输出", "", ""]
  ];
  return `
    <header class="automation-header">
      <div class="automation-title-row">
        <button class="automation-back" id="backAutomationManage" aria-label="返回"><i class="iconfont icon-back"></i></button>
        <input class="automation-name-input" id="automationNameInput" type="text" value="${escapeHtml(state.automationName)}" aria-label="自动化流程名称" />
      </div>
      <button class="modal-close" data-close-automation aria-label="关闭"></button>
    </header>
    <div class="flow-builder">
      <div class="flow-scroll">
        ${steps.map(([color, iconClass, title, placeholder, action], index) => `
          <div class="flow-step">
            <div class="flow-step-head">
              <span class="flow-step-icon" style="--step-color:${color}"><i class="iconfont ${iconClass}"></i></span>
              <strong>${title}</strong>
              ${action ? `<button>${action}</button>` : ""}
            </div>
            ${placeholder ? `
              <div class="flow-input-line">
                <i class="iconfont icon-btn-edit"></i>
                <input type="text" placeholder="${placeholder}" />
              </div>
            ` : ""}
          </div>
          ${index < steps.length - 1 ? `
            <div class="flow-connector">
              <span></span>
              <button><i class="iconfont icon-add-node"></i></button>
              <span></span>
            </div>
          ` : ""}
        `).join("")}
      </div>
    </div>
    <footer class="automation-create-footer">
      <button class="text-action" id="cancelAutomationCreate">取消</button>
      <button class="primary-pill" id="confirmAutomationCreate">创建 <i class="iconfont icon-enter-send"></i></button>
    </footer>
  `;
}

function fastPage() {
  const title = escapeHtml(selectedJobTitle());
  return `
    <main class="fast-view phase-${state.phase} ${isAgentFlow() ? "agent-flow" : "fast-flow"}">
      <header class="app-header">
        <button id="backHome" class="back-button">${icon("back")}</button>
        <div class="header-title-group">
          <h1>${state.hireType}${title}${pageTaskName()}</h1>
          <span class="mode-tag">${escapeHtml(state.activeMode)}</span>
        </div>
        ${topActions()}
      </header>
      ${chatThread()}
      ${bottomPanel()}
      ${mainPanel()}
    </main>
  `;
}

function chatThread() {
  const prompt = escapeHtml(submittedPrompt());
  const title = escapeHtml(selectedJobTitle());
  const profileIntro = escapeHtml(profileIntroCopy()).replace(/\n/g, "<br />");
  if (isAgentFlow()) return agentChatThread(prompt, title);
  if (state.phase === "confirming") {
    return `
      <aside class="chat-column">
        <div class="bubble user">${prompt}</div>
      </aside>
    `;
  }

  if (state.phase === "questionsTyping") {
    const copy = escapeHtml(questionPromptCopy());
    return `
      <aside class="chat-column chat-column-results">
        <div class="bubble user">${prompt}</div>
        <div class="assistant-copy">${profileIntro}</div>
        ${profileConfirmCard(false, "profile-summary-card")}
        <div class="assistant-copy typewriter-fast" id="introTypewriter" data-text="${copy}"></div>
      </aside>
    `;
  }

  if (state.phase === "questions") {
    const copy = escapeHtml(questionPromptCopy()).replace(/\n/g, "<br />");
    return `
      <aside class="chat-column chat-column-results">
        <div class="bubble user">${prompt}</div>
        <div class="assistant-copy">${profileIntro}</div>
        ${profileConfirmCard(false, "profile-summary-card")}
        <div class="assistant-copy result-copy">${copy}</div>
        <div class="waiting"><span></span>等待您的回答</div>
      </aside>
    `;
  }

  if (state.phase === "profileTyping" || state.phase === "profile") {
    const isTyping = state.phase === "profileTyping";
    return `
      <aside class="chat-column chat-column-results">
        <div class="bubble user">${prompt}</div>
        <div class="assistant-copy">${profileIntro}</div>
        ${isTyping
          ? `<div class="assistant-copy result-copy typewriter-fast" id="profileTypewriter" data-text="${escapeHtml(profileCopy())}"></div>`
          : `<div class="assistant-copy result-copy">${profileCopy()}</div>`}
        ${isTyping ? "" : `<div class="waiting"><span></span>等待您的回答</div>`}
      </aside>
    `;
  }

  if (state.phase === "resultsLoading" || state.phase === "results") {
    const answers = answerSummary();
    const candidateCount = sortedCandidates().length;
    return `
      <aside class="chat-column chat-column-results">
        <div class="bubble user">${prompt}</div>
        <div class="assistant-copy">${profileIntro}</div>
        <div class="result-copy">候选人画像最终确认</div>
        ${profileConfirmCard(false, "profile-summary-card")}
        <div class="asked-summary">已补充2个筛选条件 <i class="iconfont icon-chevron-down"></i></div>
        <div class="qa-answer-card">
          <strong>1、${escapeHtml(answers.firstLabel)}？</strong>
          <p>${escapeHtml(answers.first)}</p>
          <strong>2、${escapeHtml(answers.secondLabel)}？</strong>
          <p>${escapeHtml(answers.second)}</p>
        </div>
        ${state.phase === "results"
          ? `
            <div class="result-copy">已为您匹配到${candidateCount}份候选人简历。</div>
            <div class="matched-entry">
              <span class="matched-icon"><img src="${bannerIcon}" alt="" /></span>
              <div>
                <strong>${title}的匹配简历</strong>
                <p>${candidateCount}份简历</p>
              </div>
              <i class="iconfont icon-arrow"></i>
            </div>
          `
          : `<div class="waiting"><span></span>正在匹配候选人</div>`}
      </aside>
    `;
  }

  return `
    <aside class="chat-column">
      <div class="bubble user">${prompt}</div>
      <div class="assistant-copy">
        根据您提供的JD信息，我已经明确了这是${state.hireType}，岗位是【${title}】，并且有详细的技术要求。<br />
        除了JD中提到的这些要求外，请补充这些信息，我就能为您生成完整的候选人画像了
      </div>
      <div class="waiting"><span></span>等待您的回答</div>
    </aside>
  `;
}

function agentTaskItem(label, status = "done", open = false, detail = "", active = open) {
  const isCallTask = label === "AI外呼候选人";
  const statusIcon = status === "done"
    ? '<i class="iconfont icon-confirm"></i>'
    : status === "pending"
      ? '<i class="iconfont icon-more"></i>'
      : "";
  return `
    <div class="agent-task-item ${open ? "open" : ""} ${active ? "active" : ""}">
      <div class="agent-task-head" ${isCallTask ? 'data-agent-task-toggle="call"' : ""}>
        <span class="agent-task-check ${status}">${statusIcon}</span>
        <strong>${label}</strong>
        <i class="iconfont icon-chevron-down"></i>
      </div>
      ${detail && open ? `<div class="agent-task-detail">${detail}</div>` : ""}
    </div>
  `;
}

function agentStepTask(label, index, detail = "") {
  if (state.agentTaskStep < index) return "";
  const current = state.agentTaskStep === index && state.phase === "resultsLoading";
  return agentTaskItem(label, current ? "pending" : "done", current, current ? detail : "", current);
}

function agentChatThread(prompt, title) {
  const titleBubble = prompt;
  const agentTitle = selectedJobTitle();
  const introText = `我来为您的需求规划任务，然后逐步实现。根据您提供的JD信息，我已经明确了这是${state.hireType}，岗位是【${agentTitle}】，并且有详细的技术要求。\n除了JD中提到的这些要求外，让我先问几个关键问题。`;
  const intro = escapeHtml(introText).replace(/\n/g, "<br />");
  const callDetail = state.phase === "results"
    ? `
    <p>根据匹配的20份简历，为您AI已外呼</p>
    <button><i class="iconfont icon-icon-phone"></i><span>外呼张三</span><i class="iconfont icon-chevron-right"></i></button>
    <button><i class="iconfont icon-icon-phone"></i><span>外呼李四</span><i class="iconfont icon-chevron-right"></i></button>
  `
    : `
    <p>根据匹配的20份简历，为您AI已外呼</p>
    <button><i class="iconfont icon-icon-phone"></i><span>外呼张三</span><i class="iconfont icon-chevron-right"></i></button>
    <button><span class="mini-loading"></span><span>外呼李四</span><i class="iconfont icon-chevron-right"></i></button>
  `;

  if (state.phase === "agentIntroTyping") {
    return `
      <aside class="chat-column agent-chat">
        <div class="bubble user">${titleBubble}</div>
        <div class="assistant-copy typewriter-fast" id="agentIntroTypewriter" data-text="${escapeHtml(introText)}"></div>
      </aside>
    `;
  }

  if (state.phase === "resultsLoading") {
    return `
      <aside class="chat-column agent-chat">
        <div class="bubble user">${titleBubble}</div>
        <div class="assistant-copy">${intro}</div>
        ${agentStepTask("分析需求，确认候选人画像", 1)}
        ${agentStepTask("匹配候选人简历", 2)}
        ${agentStepTask("AI外呼候选人", 3, callDetail)}
        ${agentStepTask("确认面试意向候选人", 4)}
      </aside>
    `;
  }

  if (state.phase === "results") {
    return `
      <aside class="chat-column agent-chat">
        <div class="bubble user">${titleBubble}</div>
        <div class="assistant-copy">${intro}</div>
        ${agentTaskItem("分析需求，确认候选人画像")}
        ${agentTaskItem("匹配候选人简历")}
        ${agentTaskItem("AI外呼候选人", "done", state.agentCallExpanded, callDetail, false)}
        ${agentTaskItem("确认面试意向候选人")}
        <div class="matched-entry invite-entry">
          <span class="matched-icon"><img src="${bannerIcon}" alt="" /></span>
          <div>
            <strong>${title}的已邀约候选人</strong>
            <p>2位候选人</p>
          </div>
          <i class="iconfont icon-arrow"></i>
        </div>
      </aside>
    `;
  }

  return `
    <aside class="chat-column agent-chat">
      <div class="bubble user">${titleBubble}</div>
    </aside>
  `;
}

function questionForm() {
  const canSubmit = state.questionOne.trim() || state.questionTwo.trim();
  const questions = questionSet();
  return `
    <section class="question-card">
      <div class="questions">
        ${questionBlock(questions[0].title, "questionOne", questions[0].options, state.questionOne)}
        ${questionBlock(questions[1].title, "questionTwo", questions[1].options, state.questionTwo)}
      </div>
      <div class="question-actions">
        <button id="cancelQuestions" class="text-action">取消</button>
        <button id="submitQuestions" class="primary-pill ${canSubmit ? "" : "disabled"}">提交 <i class="iconfont icon-enter-send"></i></button>
      </div>
    </section>
  `;
}

function followupInput(stop = false) {
  return `
    <section class="followup-card">
      <textarea id="followupPrompt" placeholder="请输入您对候选人的补充要求"></textarea>
      <div class="followup-footer">
        <button class="send-button ${stop ? "send-button-active stop-button" : ""}" id="${stop ? "stopFlow" : "followupSend"}" aria-label="${stop ? "停止" : "继续匹配"}">${stop ? icon("stop") : icon("send")}</button>
      </div>
    </section>
  `;
}

function profileConfirmCard(withActions = true, extraClass = "") {
  const answers = answerSummary();
  const profileTitle = selectedJobTitle();
  const majors = majorRequirement();
  return `
    <section class="profile-confirm-card ${extraClass}">
      <h2>理想候选人画像</h2>
      <dl>
        <div><dt>岗位名称：</dt><dd>${escapeHtml(profileTitle)}</dd></div>
        <div><dt>${escapeHtml(answers.firstLabel)}：</dt><dd>${escapeHtml(answers.first)}</dd></div>
        <div><dt>专业要求：</dt><dd>${escapeHtml(majors)}</dd></div>
        <div><dt>${escapeHtml(answers.secondLabel)}：</dt><dd>${escapeHtml(answers.second)}</dd></div>
        <div><dt>客户端开发：</dt><dd>客户端开发、调试技能</dd></div>
      </dl>
      ${withActions ? `
        <div class="question-actions">
          <button id="cancelProfile" class="text-action">取消</button>
          <button id="confirmProfile" class="primary-pill">提交 <i class="iconfont icon-enter-send"></i></button>
        </div>
      ` : ""}
    </section>
  `;
}

function bottomPanel() {
  if (isAgentFlow()) return followupInput(state.phase !== "results");
  if (state.phase === "confirming" || state.phase === "questionsTyping" || state.phase === "profileTyping" || state.phase === "resultsLoading") return followupInput(true);
  if (state.phase === "questions") return `${followupInput(false)}${questionForm()}`;
  if (state.phase === "profile") return `${followupInput(false)}${profileConfirmCard(true)}`;
  return followupInput(false);
}

function agentLoadingText() {
  const texts = {
    0: "需求规划中 ...",
    1: "分析需求，确认候选人画像 ...",
    2: "匹配候选人简历 ...",
    3: "AI外呼候选人 ...",
    4: "确认面试意向候选人 ..."
  };
  return texts[state.agentTaskStep] || "处理中 ...";
}

function mainPanel() {
  if (state.phase === "results") return resultsPanel();
  if (isAgentFlow()) return loadingPanel(agentLoadingText());
  if (state.phase === "profileTyping" || state.phase === "profile") return loadingPanel("候选人画像生成中 ...");
  if (state.phase === "resultsLoading") return loadingPanel("大模型正在为您匹配简历 ...");
  return loadingPanel("需求确认中 ...");
}

function questionBlock(title, key, options, value) {
  return `
    <div class="question-block">
      <h2>${title}</h2>
      ${options.map((option, index) => `<button class="answer ${value === option ? "selected" : ""}" data-answer="${key}:${option}"><b>${String.fromCharCode(65 + index)}</b>${option}</button>`).join("")}
      <input class="answer-input" data-input="${key}" placeholder="输入你的答案..." value="${options.includes(value) ? "" : value}" />
    </div>
  `;
}

function loadingPanel(text = "需求确认中 ...", title = "") {
  return `
    <section class="result-panel empty">
      ${title ? `<div class="result-head loading-head"><h2>${title}</h2></div>` : ""}
      <button class="more-button">${icon("more")}</button>
      <div class="loader-stage" aria-hidden="true">
        <div class="loader-dots"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
      </div>
      <p>${text}</p>
    </section>
  `;
}

function sortedCandidates() {
  return [...candidates].sort((left, right) => right.score - left.score);
}

function resultSearchTitle(count) {
  const keyword = selectedJobTitle();
  return `${keyword}匹配的${count}份简历`;
}

function syncQuestionCard() {
  const canSubmit = state.questionOne.trim() || state.questionTwo.trim();
  const submit = document.getElementById("submitQuestions");
  if (submit) {
    submit.classList.toggle("disabled", !canSubmit);
  }
  document.querySelectorAll("[data-answer]").forEach(button => {
    const [key, value] = button.dataset.answer.split(":");
    const selected = state[key] === value;
    button.classList.toggle("selected", selected);
    if (!selected && document.activeElement === button) button.blur();
  });
  document.querySelectorAll("[data-input]").forEach(input => {
    const key = input.dataset.input;
    const optionValues = Array.from(document.querySelectorAll(`[data-answer^="${key}:"]`)).map(button => button.dataset.answer.split(":").slice(1).join(":"));
    if (optionValues.includes(state[key])) input.value = "";
  });
}

function resultsPanel() {
  if (isAgentFlow()) return agentInviteResultsPanel();
  const resultCandidates = sortedCandidates();
  return `
    <section class="result-panel results ${isAgentFlow() ? "invite-results" : ""}">
      <div class="result-head">
        <h2>${escapeHtml(resultSearchTitle(resultCandidates.length))}</h2>
        <button class="more-button">${icon("more")}</button>
      </div>
      <div class="candidate-stream">
        ${resultCandidates.map((candidate, index) => candidateCard(candidate, index, isAgentFlow())).join("")}
      </div>
    </section>
  `;
}

function agentInviteResultsPanel() {
  return `
    <section class="result-panel results invite-results">
      <div class="result-head">
        <h2>${escapeHtml(selectedJobTitle())}的已邀约候选人</h2>
        <button class="more-button">${icon("more")}</button>
      </div>
      <div class="candidate-stream invite-stream">
        ${sortedCandidates().slice(0, 2).map((candidate, index) => inviteCandidateCard(candidate, index)).join("")}
      </div>
    </section>
  `;
}

function inviteCandidateCard(candidate, index) {
  return candidateCard(candidate, index, true);
}

function evidenceGroup(groups, index) {
  return groups[index % groups.length];
}

function candidateEvidence(candidate, index) {
  const title = selectedJobTitle();
  if (/UI|交互|视觉|体验|设计/.test(title)) {
    return evidenceGroup([
      ["作品集匹配", "复杂系统", "项目完整度高", "信息架构", "设计规范", "跨端协作"],
      ["用户研究", "体验洞察", "原型表达", "可用性测试", "业务理解", "设计落地"],
      ["视觉一致性", "动效表达", "组件规范", "品牌理解", "细节打磨", "协作顺畅"],
      ["C端增长", "转化优化", "数据意识", "活动设计", "快速迭代", "目标导向"]
    ], index);
  }
  if (/Android|iOS|前端|客户端|性能优化/.test(title)) {
    return evidenceGroup([
      ["岗位经验连续", "稳定性建设", "技术栈贴合", "工程化经验", "跨端适配", "复杂项目"],
      ["性能优化", "启动提速", "内存治理", "崩溃分析", "监控体系", "质量保障"],
      ["架构拆分", "组件化", "CI流程", "代码规范", "多人协作", "交付稳定"],
      ["平台适配", "端侧体验", "调试能力", "工具建设", "业务承接", "版本迭代"]
    ], index);
  }
  if (/产品|运营|策略/.test(title)) {
    return evidenceGroup([
      ["业务理解强", "策略推进", "项目闭环经验", "用户洞察", "跨团队推进", "商业判断"],
      ["数据分析", "指标拆解", "增长实验", "需求优先级", "复盘意识", "落地推进"],
      ["AI产品", "工具平台", "场景抽象", "需求建模", "体验意识", "方案表达"],
      ["运营策略", "用户分层", "活动策划", "转化提升", "资源协调", "目标管理"]
    ], index);
  }
  if (/算法|机器学习|大数据|后端|测试|研发/.test(title)) {
    return evidenceGroup([
      ["工程经验扎实", "系统架构", "复杂项目经验", "性能优化", "数据处理", "稳定性建设"],
      ["模型落地", "特征工程", "离线评估", "线上实验", "算法调优", "业务理解"],
      ["高并发", "服务治理", "链路追踪", "容量规划", "容灾设计", "接口设计"],
      ["测试体系", "自动化覆盖", "质量度量", "缺陷分析", "发布保障", "风险识别"]
    ], index);
  }
  return evidenceGroup([
    [candidate.skills[0] || "经验匹配", candidate.skills[1] || "能力贴合", "推荐优先", "履历完整", "沟通活跃", "岗位贴合"],
    ["行业经验", "项目完整", "近期活跃", "沟通顺畅", "稳定履历", "可快速推进"],
    ["核心能力", "业务理解", "协作经验", "成长潜力", "风险较低", "可进入初筛"],
    ["经验连续", "能力互补", "目标匹配", "背景接近", "推荐跟进", "适配度高"]
  ], index);
}

function candidateAnalysis(candidate, index) {
  const title = selectedJobTitle();
  if (/UI|交互|视觉|体验|设计/.test(title)) {
    return evidenceGroup([
      `候选人在${title}方向具备复杂系统和信息架构经验，作品集完整度较高，适合优先进入作品集复核。`,
      `候选人的用户研究和体验洞察能力较突出，能够支撑从问题识别到原型验证的设计闭环。`,
      `候选人在视觉规范、组件体系和动效表达上有连续实践，适合需要设计系统落地的团队。`,
      `候选人有增长场景和快速迭代经验，对转化目标与体验平衡有理解，可作为业务型设计候选人跟进。`
    ], index);
  }
  if (/Android|iOS|前端|客户端|性能优化/.test(title)) {
    return evidenceGroup([
      `候选人的${title}履历连续，技术栈和工程化经验与岗位要求贴合，适合进入技术初筛。`,
      `候选人在性能优化、内存治理和稳定性排查方面经验明确，可重点验证端侧质量建设能力。`,
      `候选人具备架构拆分和组件化经验，能承接复杂业务迭代，适合需要长期工程治理的团队。`,
      `候选人有平台适配、调试工具和版本交付经验，能较快融入高频发布节奏。`
    ], index);
  }
  if (/产品|运营|策略/.test(title)) {
    return evidenceGroup([
      `候选人在${title}相关方向具备业务理解和项目闭环经验，适合优先沟通业务判断与推进方式。`,
      `候选人的数据分析和指标拆解能力较强，能够支持增长实验和需求优先级判断。`,
      `候选人有AI产品或工具平台经验，对场景抽象和方案表达较完整，适合复杂产品方向。`,
      `候选人在运营策略、用户分层和资源协调上有经验，可验证其目标管理和转化提升能力。`
    ], index);
  }
  if (/算法|机器学习|大数据|后端|测试|研发/.test(title)) {
    return evidenceGroup([
      `候选人具备${title}岗位关注的工程实现和系统架构经验，适合进入技术能力深挖。`,
      `候选人有模型落地、特征工程和线上实验经验，可重点验证算法效果和业务结合能力。`,
      `候选人在高并发、服务治理和容量规划方面经验明确，适合后端复杂系统方向推进。`,
      `候选人具备测试体系、自动化覆盖和发布保障经验，可作为质量工程方向优先候选人。`
    ], index);
  }
  return evidenceGroup([
    `候选人履历完整、核心经历与${title}岗位要求接近，近期活跃度和能力标签均具备跟进价值。`,
    `候选人行业经验和项目经历较稳定，与${title}的关键能力要求有较好交集，建议进入初筛。`,
    `候选人能力结构较均衡，背景与岗位画像接近，可作为补充候选人纳入对比池。`,
    `候选人经验连续且沟通活跃，整体适配度较高，适合进一步确认岗位动机和到岗意愿。`
  ], index);
}

function candidateCard(candidate, index, inviteMode = false) {
  const activity = index % 3 === 1 ? "1个月内沟通过" : index % 3 === 2 ? "最近活跃" : "本周活跃";
  const meetingDates = ["6月18日 周四 14:00 - 15:00", "6月19日 周五 14:00 - 15:00"];
  const searchJobTitle = selectedJobTitle();
  const evidence = candidateEvidence(candidate, index);
  const analysis = candidateAnalysis(candidate, index);
  return `
    <article class="candidate-card ${inviteMode ? "invite-card invitation-resume-card" : ""} ${!inviteMode && state.selectedCandidate === index ? "active" : ""}" data-candidate="${index}">
      ${inviteMode ? `
        <div class="invite-card-top">
          <strong>${meetingDates[index] || candidate.meeting || meetingDates[0]}</strong>
          <a class="meeting-id" href="javascript:void(0)" aria-label="查看会议 ${candidate.meetingId || "544 003 223"}"><img src="${meetingIcon}" alt="" /><span>${candidate.meetingId || "544 003 223"}</span></a>
          <div>
            <button>修改面试</button>
            <button>取消安排</button>
          </div>
        </div>
      ` : ""}
      <div class="candidate-body">
        <div class="candidate-summary">
          <div class="candidate-avatar">
            <img src="${candidateAvatar(index)}" alt="" />
            <span><i class="iconfont icon-male"></i></span>
          </div>
          <div class="candidate-info">
            <div class="candidate-name-row">
              <h3>${candidate.name}</h3>
              <span class="viewed-tag ${inviteMode ? "viewed-tag-green" : ""}">${inviteMode ? activity : candidate.viewed}</span>
              ${inviteMode ? `<span class="active-text">活跃</span>` : ""}
            </div>
            <div class="candidate-meta">
              ${candidate.meta.map(item => `<span>${item}</span>`).join("")}
            </div>
          </div>
          <div class="recommend">
            <img class="radar-icon" src="${radarIcon}" alt="" />
          </div>
        </div>
        <div class="candidate-detail-grid">
          <div class="timeline">
            ${candidate.history.filter(item => item.some(Boolean)).map((item, itemIndex, list) => `
              <div class="timeline-row ${itemIndex === list.length - 1 ? "education" : ""}">
                <span class="timeline-icon">${itemIndex === list.length - 1 ? '<i class="iconfont icon-cap"></i>' : itemIndex === 0 ? '<i class="iconfont icon-architecture"></i>' : "•"}</span>
                <time>${item[0]}</time>
                <p><span>${item[1]}</span><b></b><span>${itemIndex === list.length - 1 ? item[2] : searchJobTitle}</span></p>
              </div>
            `).join("")}
          </div>
          <div class="candidate-tags">
            <div class="candidate-tags-list">
              ${candidate.skills.map(skill => `<span>${skill}</span>`).join("")}
            </div>
            <div class="candidate-actions">
              <button class="interview-button">发起面试</button>
              <button class="ai-invite-button"><i class="iconfont icon-magic"></i>AI 邀约</button>
              <button class="resume-more-button" aria-label="更多"><i class="iconfont icon-more"></i></button>
            </div>
          </div>
        </div>
        <div class="match-analysis">
          <div class="analysis-head">
            <i class="iconfont icon-magic"></i>
            <strong>匹配分析</strong>
            <b class="analysis-rating">${Array.from({ length: candidate.score }, () => '<i class="iconfont icon-star-filled"></i>').join("")}</b>
          </div>
          <div class="analysis-evidence">${evidence.map(item => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          <span class="analysis-copy">${escapeHtml(analysis)}</span>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = state.view === "home" ? home() : fastPage();
  bindEvents();
  if (state.view !== "home") scrollChatToLatest();
  if (state.phase === "questionsTyping") {
    startIntroTypewriter();
  }
  if (state.phase === "profileTyping") {
    startProfileTypewriter();
  }
  if (state.phase === "agentIntroTyping") {
    startAgentIntroTypewriter();
  }
  const delay = phaseDelay(state.phase);
  if (delay) {
    const next = state.phase === "questionsTyping" ? "questions" : state.phase === "profile" ? "results" : "";
    if (next) schedulePhase(next, delay);
  }
}

function bindEvents() {
  document.querySelectorAll("[data-hire]").forEach(button => {
    button.addEventListener("click", () => {
      if (state.hireType === button.dataset.hire) return;
      state.hireType = button.dataset.hire;
      render();
    });
  });

  const prompt = document.getElementById("homePrompt");
  if (prompt) {
    const syncHomePromptValue = (textarea, caretPosition = textarea.value.length, shouldRender = true) => {
      state.prompt = textarea.value;
      if (state.hashToken) {
        const tokenStillExists = state.prompt.slice(state.hashToken.start, state.hashToken.end) === state.hashToken.text;
        if (!tokenStillExists) state.hashToken = null;
      }
      const hashIndex = state.prompt.lastIndexOf("#");
      const hashText = hashIndex >= 0 ? state.prompt.slice(hashIndex + 1) : "";
      const shouldOpenHashPicker = hashIndex >= 0 && !/\s/.test(hashText);
      state.hashPickerOpen = shouldOpenHashPicker;
      state.hashPickerQuery = shouldOpenHashPicker ? hashText : "";
      if (shouldOpenHashPicker) {
        updateHashPickerPosition(textarea, hashIndex);
      }
      const startFastButton = document.getElementById("startFast");
      if (startFastButton) {
        startFastButton.classList.toggle("send-button-active", state.prompt.trim().length > 0);
      }
      if (!shouldRender) return;
      render();
      requestAnimationFrame(() => {
        const nextHashInput = document.getElementById("hashJobInput");
        const nextPrompt = document.getElementById("homePrompt");
        if (nextHashInput) {
          nextHashInput.focus();
          nextHashInput.selectionStart = nextHashInput.selectionEnd = nextHashInput.value.length;
        } else if (nextPrompt) {
          nextPrompt.focus();
          const nextCaret = Math.min(caretPosition, state.prompt.length);
          nextPrompt.selectionStart = nextPrompt.selectionEnd = nextCaret;
        }
      });
    };
    prompt.addEventListener("compositionstart", () => {
      homePromptComposing = true;
    });
    prompt.addEventListener("compositionend", event => {
      homePromptComposing = false;
      syncHomePromptValue(event.target, event.target.selectionStart || event.target.value.length);
    });
    prompt.addEventListener("input", event => {
      const caretPosition = event.target.selectionStart || event.target.value.length;
      if (homePromptComposing || event.isComposing) {
        syncHomePromptValue(event.target, caretPosition, false);
        return;
      }
      syncHomePromptValue(event.target, caretPosition);
    });
    prompt.addEventListener("keydown", event => {
      if (!state.hashToken || event.key !== "Backspace") return;
      const start = event.target.selectionStart || 0;
      const end = event.target.selectionEnd || start;
      const tokenStart = state.hashToken.start;
      const tokenEnd = state.hashToken.end;
      const tokenGapEnd = tokenEnd + (state.prompt.slice(tokenEnd).match(/^\s*/)?.[0].length || 0);
      const touchesToken = start === end
        ? start > tokenStart && start <= tokenGapEnd
        : start < tokenEnd && end > tokenStart;
      if (!touchesToken) return;
      event.preventDefault();
      state.prompt = `${state.prompt.slice(0, tokenStart)}${state.prompt.slice(tokenEnd).replace(/^\s+/, "")}`;
      state.hashToken = null;
      state.hashPickerOpen = false;
      state.hashPickerQuery = "";
      render();
      requestAnimationFrame(() => {
        const nextPrompt = document.getElementById("homePrompt");
        if (nextPrompt) {
          nextPrompt.focus();
          nextPrompt.selectionStart = nextPrompt.selectionEnd = tokenStart;
        }
      });
    });
  }

  const hashInput = document.getElementById("hashJobInput");
  if (hashInput) {
    const syncHashInputValue = value => {
      const hashIndex = state.prompt.lastIndexOf("#");
      state.hashPickerQuery = value;
      state.prompt = hashIndex >= 0
        ? `${state.prompt.slice(0, hashIndex + 1)}${value}`
        : `#${value}`;
      render();
      requestAnimationFrame(() => {
        const nextHashInput = document.getElementById("hashJobInput");
        if (nextHashInput) {
          nextHashInput.focus();
          nextHashInput.selectionStart = nextHashInput.selectionEnd = nextHashInput.value.length;
        }
      });
    };
    hashInput.addEventListener("compositionstart", () => {
      hashInputComposing = true;
    });
    hashInput.addEventListener("compositionend", event => {
      hashInputComposing = false;
      syncHashInputValue(event.target.value);
    });
    hashInput.addEventListener("input", event => {
      if (hashInputComposing || event.isComposing) {
        return;
      }
      syncHashInputValue(event.target.value);
    });
    hashInput.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        state.hashPickerOpen = false;
        state.hashPickerQuery = "";
        render();
      }
    });
  }

  document.querySelectorAll("[data-hash-job]").forEach(button => {
    button.addEventListener("click", () => {
      const selected = button.dataset.hashJob || "";
      const hashIndex = state.prompt.lastIndexOf("#");
      const tokenX = state.hashPickerX;
      const tokenY = state.hashPickerY;
      const tokenStart = Math.max(0, hashIndex);
      const beforeToken = hashIndex >= 0 ? state.prompt.slice(0, hashIndex) : "";
      const afterToken = hashIndex >= 0 ? state.prompt.slice(hashIndex + state.hashPickerQuery.length + 1) : "";
      const normalizedAfterToken = afterToken.replace(/^\s+/, "");
      state.prompt = `${beforeToken}${selected}${hashTokenGap}${normalizedAfterToken}`;
      state.hashToken = {
        text: selected,
        start: tokenStart,
        end: tokenStart + selected.length,
        x: tokenX,
        y: tokenY
      };
      state.hashPickerOpen = false;
      state.hashPickerQuery = "";
      render();
      requestAnimationFrame(() => {
        const nextPrompt = document.getElementById("homePrompt");
        if (nextPrompt) {
          nextPrompt.focus();
          const caretAfterToken = state.hashToken ? state.hashToken.end + hashTokenGap.length : state.prompt.length;
          nextPrompt.selectionStart = nextPrompt.selectionEnd = caretAfterToken;
        }
      });
    });
  });

  const subtitle = document.querySelector(".subtitle-typing");
  if (subtitle) {
    subtitle.addEventListener("animationend", event => {
      if (event.animationName === "subtitle-type") {
        state.subtitlePlayed = true;
        subtitle.classList.remove("subtitle-typing");
        subtitle.classList.add("subtitle-static");
      }
    }, { once: true });
  }

  const modeButton = document.getElementById("modeButton");
  if (modeButton) {
    modeButton.addEventListener("click", () => {
      state.dropdown = !state.dropdown;
      render();
    });
  }

  document.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => {
      const nextMode = button.dataset.mode;
      if (state.mode !== nextMode) {
        state.subtitlePlayed = false;
      }
      state.mode = nextMode;
      state.dropdown = false;
      render();
    });
  });

  const openAutomationModal = document.getElementById("openAutomationModal");
  if (openAutomationModal) {
    openAutomationModal.addEventListener("click", () => {
      state.dropdown = false;
      state.automationModal = true;
      state.automationView = "manage";
      render();
    });
  }

  const closeAutomation = () => {
    state.automationModal = false;
    render();
  };

  document.querySelectorAll("[data-close-automation]").forEach(button => {
    button.addEventListener("click", closeAutomation);
  });

  const closeAutomationBackdrop = document.getElementById("closeAutomationBackdrop");
  if (closeAutomationBackdrop) {
    closeAutomationBackdrop.addEventListener("click", closeAutomation);
  }

  document.querySelectorAll("[data-automation-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const key = button.dataset.automationToggle;
      if (key === "agent") state.automationAgent = !state.automationAgent;
      if (key === "team") state.automationTeam = !state.automationTeam;
      button.classList.toggle("checked", key === "agent" ? state.automationAgent : state.automationTeam);
    });
  });

  const switchAutomationView = view => {
    state.automationView = view;
    const panel = document.getElementById("automationPanel");
    if (panel) {
      panel.classList.toggle("show-create", view === "create");
      panel.classList.toggle("show-manage", view === "manage");
    }
  };

  const createAutomationFlow = document.getElementById("createAutomationFlow");
  if (createAutomationFlow) {
    createAutomationFlow.addEventListener("click", () => {
      switchAutomationView("create");
    });
  }

  const backAutomationManage = document.getElementById("backAutomationManage");
  if (backAutomationManage) {
    backAutomationManage.addEventListener("click", () => {
      switchAutomationView("manage");
    });
  }

  const automationNameInput = document.getElementById("automationNameInput");
  if (automationNameInput) {
    automationNameInput.addEventListener("input", event => {
      state.automationName = event.target.value;
    });
    automationNameInput.addEventListener("focus", event => {
      event.target.select();
    }, { once: true });
  }

  const cancelAutomationCreate = document.getElementById("cancelAutomationCreate");
  if (cancelAutomationCreate) {
    cancelAutomationCreate.addEventListener("click", () => switchAutomationView("manage"));
  }

  const confirmAutomationCreate = document.getElementById("confirmAutomationCreate");
  if (confirmAutomationCreate) {
    confirmAutomationCreate.addEventListener("click", closeAutomation);
  }

  if (state.automationModal) {
    document.onkeydown = event => {
      if (event.key === "Escape") closeAutomation();
    };
  } else {
    document.onkeydown = null;
  }

  const startFast = document.getElementById("startFast");
  if (startFast) {
    startFast.addEventListener("click", () => {
      if (!state.prompt.trim()) return;
      clearFlowTimer();
      state.submittedPrompt = state.prompt.trim();
      state.activeMode = state.mode;
      state.questionOne = "";
      state.questionTwo = "";
      state.selectedCandidate = 0;
      state.agentCallExpanded = true;
      state.agentTaskStep = 1;
      state.view = "fast";
      if (state.activeMode === "Agent全流程") {
        state.phase = "agentIntroTyping";
        state.agentTaskStep = 0;
        state.agentCallExpanded = false;
        render();
        return;
      }
      state.phase = "confirming";
      render();
      schedulePhase("profileTyping", 1000);
    });
  }

  const backHome = document.getElementById("backHome");
  if (backHome) {
    backHome.addEventListener("click", () => {
      clearFlowTimer();
      state.view = "home";
      state.phase = "home";
      render();
    });
  }

  document.querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      const [key, value] = button.dataset.answer.split(":");
      state[key] = value;
      const input = document.querySelector(`[data-input="${key}"]`);
      if (input) input.value = "";
      syncQuestionCard();
    });
  });

  document.querySelectorAll("[data-input]").forEach(input => {
    input.addEventListener("focus", event => {
      const key = event.target.dataset.input;
      if (!event.target.value.trim()) {
        state[key] = "";
        document.querySelectorAll(`[data-answer^="${key}:"]`).forEach(button => button.blur());
        syncQuestionCard();
      }
    });
    input.addEventListener("input", event => {
      state[event.target.dataset.input] = event.target.value;
      document.querySelectorAll(`[data-answer^="${event.target.dataset.input}:"]`).forEach(button => button.blur());
      syncQuestionCard();
    });
  });

  const submit = document.getElementById("submitQuestions");
  if (submit) {
    submit.addEventListener("click", () => {
      if (!state.questionOne.trim() && !state.questionTwo.trim()) return;
      clearFlowTimer();
      state.phase = "resultsLoading";
      render();
      schedulePhase("results", resultsRevealDelay);
    });
  }

  document.querySelectorAll("[data-agent-task-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      if (button.dataset.agentTaskToggle === "call") {
        state.agentCallExpanded = !state.agentCallExpanded;
        render();
      }
    });
  });

  const stopFlow = document.getElementById("stopFlow");
  if (stopFlow) {
    stopFlow.addEventListener("click", () => {
      clearFlowTimer();
      state.view = "home";
      state.phase = "home";
      render();
    });
  }

  const cancelQuestions = document.getElementById("cancelQuestions");
  if (cancelQuestions) {
    cancelQuestions.addEventListener("click", () => {
      state.questionOne = "";
      state.questionTwo = "";
      render();
    });
  }

  const cancelProfile = document.getElementById("cancelProfile");
  if (cancelProfile) {
    cancelProfile.addEventListener("click", () => {
      clearFlowTimer();
      state.phase = "home";
      state.view = "home";
      render();
    });
  }

  const confirmProfile = document.getElementById("confirmProfile");
  if (confirmProfile) {
    confirmProfile.addEventListener("click", () => {
      clearFlowTimer();
      state.phase = "questionsTyping";
      render();
    });
  }

  const followupPrompt = document.getElementById("followupPrompt");
  if (followupPrompt) {
    followupPrompt.addEventListener("input", event => {
      const followupSend = document.getElementById("followupSend");
      if (followupSend) {
        followupSend.classList.toggle("send-button-active", event.target.value.trim().length > 0);
      }
    });
  }

  document.querySelectorAll("[data-candidate]").forEach(button => {
    button.addEventListener("click", () => {
      state.selectedCandidate = Number(button.dataset.candidate);
      render();
    });
  });
}

render();
