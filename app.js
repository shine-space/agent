const mascot = "https://www.figma.com/api/mcp/asset/01a07a39-7d87-450a-a2d5-004708a5ddf3";
const avatar = "https://www.figma.com/api/mcp/asset/2c4dc6f0-cc3f-4413-b0a6-6af33fdd20ff";
const candidatePhoto = "https://www.figma.com/api/mcp/asset/f3da633e-10f9-48ea-8fec-04e457d1662b";

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
    viewed: "简历完整",
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
    viewed: "刚刚沟通",
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
  dropdown: false,
  mode: "Fast",
  hireType: "社招",
  prompt: "",
  questionOne: "985/211",
  questionTwo: "C、C++、STL",
  selectedCandidate: 0,
  subtitlePlayed: false
};

function icon(name) {
  const icons = {
    bell: "⌕",
    back: "‹",
    add: "+",
    send: "➤",
    more: "···",
    check: "✓",
    settings: "⚙"
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

function home() {
  return `
    <main class="home-view">
      <div class="soft-grid"></div>
      ${topActions()}
      <section class="home-panel">
        <div class="headline">
          <span>Hi，欢迎使用</span>
          <strong>JobAssistant</strong>
        </div>
        <p class="subtitle ${state.subtitlePlayed ? "subtitle-static" : "subtitle-typing"}">岗位智能画像快速匹配简历</p>
        <img class="mascot" src="${mascot}" alt="" />
        <div class="input-card ${state.dropdown ? "focused" : ""}">
          <textarea id="homePrompt" placeholder="请输入您对候选人的详细诉求，输入#选择岗位">${state.prompt}</textarea>
          <div class="input-footer">
            <div class="left-tools">
              <div class="segment">
                ${["社招", "校招"].map(type => `<button class="${state.hireType === type ? "active" : ""}" data-hire="${type}">${type}</button>`).join("")}
              </div>
              <button class="mode-button ${state.dropdown ? "open" : ""}" id="modeButton">${state.mode}<span>⌄</span></button>
              ${state.dropdown ? dropdown() : ""}
            </div>
            <div class="right-tools">
              <button class="icon-button" aria-label="添加附件">${icon("add")}</button>
              <button class="send-button ${state.prompt.trim() ? "send-button-active" : ""}" id="startFast" aria-label="开始匹配">${icon("send")}</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}

function dropdown() {
  const options = ["Fast", "找简历邀约全流程", "混元团队招聘"];
  return `
    <div class="dropdown">
      ${options.map(option => `
        <button class="dropdown-item" data-mode="${option}">
          <span>${option}</span>
          ${state.mode === option ? `<b>${icon("check")}</b>` : ""}
        </button>
      `).join("")}
      <div class="divider"></div>
      <button class="dropdown-item config"><i>${icon("settings")}</i><span>配置自动化流程</span></button>
    </div>
  `;
}

function fastPage(results = false) {
  return `
    <main class="fast-view">
      <header class="app-header">
        <button id="backHome" class="back-button">${icon("back")}</button>
        <h1>${state.hireType}PC客户端开发工程师简历匹配</h1>
        ${topActions()}
      </header>
      ${chatThread(results)}
      ${results ? followupInput() : questionForm()}
      ${results ? resultsPanel() : loadingPanel()}
    </main>
  `;
}

function chatThread(results) {
  if (results) {
    return `
      <aside class="chat-column chat-column-results">
        <div class="bubble user">我想找PC客户端开发工程师</div>
        <div class="assistant-copy">
          根据您提供的JD信息，我已经明确了这是${state.hireType}，岗位是【PC客户端开发工程师】，并且有详细的技术要求。
        </div>
        <div class="bubble user answer-bubble">
          <p>院校或学历偏好：${state.questionOne}</p>
          <p>编程语言：${state.questionTwo}</p>
        </div>
        <div class="assistant-copy result-copy">
          已根据您的补充要求生成候选人画像，并为您匹配到以下候选人。
        </div>
        <div class="complete-status"><span></span>已生成候选人匹配结果</div>
      </aside>
    `;
  }

  return `
    <aside class="chat-column">
      <div class="bubble user">我想找PC客户端开发工程师</div>
      <div class="assistant-copy">
        根据您提供的JD信息，我已经明确了这是${state.hireType}，岗位是【PC客户端开发工程师】，并且有详细的技术要求。<br />
        除了JD中提到的这些要求外，请补充这些信息，我就能为您生成完整的候选人画像了
      </div>
      <div class="waiting"><span></span>等待您的回答</div>
    </aside>
  `;
}

function questionForm() {
  return `
    <section class="question-card">
      <div class="questions">
        ${questionBlock("1、院校或学历偏好？", "questionOne", ["985/211", "本科"], state.questionOne)}
        ${questionBlock("2、编程语言？", "questionTwo", ["C、C++、STL", "本科"], state.questionTwo)}
      </div>
      <button id="submitQuestions" class="primary-pill">提交 <span>${icon("send")}</span></button>
    </section>
  `;
}

function followupInput() {
  return `
    <section class="followup-card">
      <textarea id="followupPrompt" placeholder="请输入您对候选人的补充要求"></textarea>
      <div class="followup-footer">
        <button class="send-button" id="followupSend" aria-label="继续匹配">${icon("send")}</button>
      </div>
    </section>
  `;
}

function questionBlock(title, key, options, value) {
  return `
    <div class="question-block">
      <h2>${title}</h2>
      ${options.map(option => `<button class="answer ${value === option ? "selected" : ""}" data-answer="${key}:${option}">${option}</button>`).join("")}
      <input class="answer-input" data-input="${key}" placeholder="输入你的答案..." value="${options.includes(value) ? "" : value}" />
    </div>
  `;
}

function loadingPanel() {
  return `
    <section class="result-panel empty">
      <button class="more-button">${icon("more")}</button>
      <div class="loader-dots"><span></span><span></span><span></span><span></span><span></span><span></span></div>
      <p>需求确认中 ...</p>
    </section>
  `;
}

function resultsPanel() {
  return `
    <section class="result-panel results">
      <div class="result-head">
        <button class="more-button">${icon("more")}</button>
      </div>
      <div class="candidate-stream">
        ${candidates.map((candidate, index) => candidateCard(candidate, index)).join("")}
      </div>
    </section>
  `;
}

function candidateCard(candidate, index) {
  return `
    <article class="candidate-card ${state.selectedCandidate === index ? "active" : ""}" data-candidate="${index}">
      <div class="candidate-body">
        <div class="candidate-summary">
          <div class="candidate-avatar">
            <img src="${candidatePhoto}" alt="" />
            <span>✓</span>
          </div>
          <div class="candidate-info">
            <div class="candidate-name-row">
              <h3>${candidate.name}</h3>
              <span class="viewed-tag">${candidate.viewed}</span>
            </div>
            <div class="candidate-meta">
              ${candidate.meta.map(item => `<span>${item}</span>`).join("")}
            </div>
          </div>
          <div class="recommend">
            <span class="gem"></span>
            <i></i>
            <div class="rate">
              <span>推荐指数</span>
              <b>${"★".repeat(candidate.score)}</b>
            </div>
          </div>
        </div>
        <div class="candidate-detail-grid">
          <div class="timeline">
            ${candidate.history.filter(item => item.some(Boolean)).map((item, itemIndex, list) => `
              <div class="timeline-row ${itemIndex === list.length - 1 ? "education" : ""}">
                <span class="timeline-icon">${itemIndex === list.length - 1 ? "◆" : itemIndex === 0 ? "▣" : "•"}</span>
                <time>${item[0]}</time>
                <p><span>${item[1]}</span><b></b><span>${item[2]}</span></p>
              </div>
            `).join("")}
          </div>
          <div class="candidate-tags">
            ${candidate.skills.map(skill => `<span>${skill}</span>`).join("")}
          </div>
        </div>
        <div class="match-analysis">
          <strong>匹配分析：</strong>
          <span>${candidate.analysis}</span>
        </div>
      </div>
    </article>
  `;
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = state.view === "home" ? home() : fastPage(state.view === "results");
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-hire]").forEach(button => {
    button.addEventListener("click", () => {
      state.hireType = button.dataset.hire;
      render();
    });
  });

  const prompt = document.getElementById("homePrompt");
  if (prompt) {
    prompt.addEventListener("input", event => {
      state.prompt = event.target.value;
      const startFastButton = document.getElementById("startFast");
      if (startFastButton) {
        startFastButton.classList.toggle("send-button-active", state.prompt.trim().length > 0);
      }
    });
  }

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
      state.mode = button.dataset.mode;
      state.dropdown = false;
      render();
    });
  });

  const startFast = document.getElementById("startFast");
  if (startFast) {
    startFast.addEventListener("click", () => {
      state.view = "fast";
      render();
    });
  }

  const backHome = document.getElementById("backHome");
  if (backHome) {
    backHome.addEventListener("click", () => {
      state.view = "home";
      render();
    });
  }

  document.querySelectorAll("[data-answer]").forEach(button => {
    button.addEventListener("click", () => {
      const [key, value] = button.dataset.answer.split(":");
      state[key] = value;
      render();
    });
  });

  document.querySelectorAll("[data-input]").forEach(input => {
    input.addEventListener("input", event => {
      state[event.target.dataset.input] = event.target.value || state[event.target.dataset.input];
    });
  });

  const submit = document.getElementById("submitQuestions");
  if (submit) {
    submit.addEventListener("click", () => {
      state.view = "results";
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
