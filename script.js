const AI_TOOLS = [
  {
    name: 'OpenAI GPT-4',
    industries: ['모든 산업'],
    taskTypes: ['고객 지원', '문서 작성', '기술 지원', '교육', '아이디어 브레인스토밍', '데이터 분석 보조'],
    jobRoles: ['영업', '마케팅', 'R&D', '생산', '기획', '인사', '재무', 'IT', '법무', '홍보'],
    summary: '범용 자연어 모델로 다양한 지식 업무와 커뮤니케이션을 고도화합니다.'
  },
  {
    name: 'Jasper AI',
    industries: ['마케팅', '광고', 'e커머스', '미디어', '출판'],
    taskTypes: ['콘텐츠 마케팅', '광고 문구 생성', 'SNS 관리', '이메일 캠페인 작성'],
    jobRoles: ['마케팅', '영업', '홍보', '기획'],
    summary: '마케팅 팀을 위한 생성형 카피라이팅과 캠페인 자동화 도구입니다.'
  },
  {
    name: 'Canva AI',
    industries: ['디자인', '마케팅', '출판', '교육', '이벤트'],
    taskTypes: ['그래픽 디자인', '영상 제작', '마케팅 자료 디자인', '프레젠테이션 제작'],
    jobRoles: ['마케팅', '홍보', '기획'],
    summary: '비주얼 제작을 자동화하고 브랜드 가이드를 유지하도록 돕는 디자인 도구입니다.'
  },
  {
    name: 'Salesforce Einstein',
    industries: ['IT', '금융', '유통', '제조', '서비스업'],
    taskTypes: ['고객 관계 관리(CRM)', '영업 예측', '마케팅 자동화', '고객 데이터 분석'],
    jobRoles: ['영업', '마케팅', '재무', 'IT'],
    summary: 'CRM 데이터 기반으로 영업/마케팅 의사결정을 자동화하고 예측합니다.'
  },
  {
    name: 'GitHub Copilot',
    industries: ['IT/소프트웨어 개발', '금융', 'R&D'],
    taskTypes: ['소프트웨어 개발', '코드 작성 및 리뷰', '자동화 스크립트 생성'],
    jobRoles: ['IT', 'R&D'],
    summary: '코드를 실시간 제안해 개발 생산성을 높이는 AI 페어 프로그래머입니다.'
  },
  {
    name: 'IBM Watson',
    industries: ['의료', '금융', '제조', '정부', '서비스'],
    taskTypes: ['데이터 분석', '자연어 처리 기반 챗봇', '음성 인식', '문서 자동 분류'],
    jobRoles: ['R&D', '재무', '생산', 'IT', '기획'],
    summary: '대규모 데이터 분석과 자연어 서비스를 통합 제공하는 엔터프라이즈 AI 플랫폼입니다.'
  },
  {
    name: 'AlphaSense',
    industries: ['금융', '제약', '법률', '기술 연구'],
    taskTypes: ['시장 조사', '기술/특허 분석', '리서치 자동화'],
    jobRoles: ['재무', '법무', '기획', 'R&D'],
    summary: '시장과 규제/기술 정보를 통합 탐색하여 빠른 의사결정을 지원합니다.'
  },
  {
    name: 'Microsoft Copilot',
    industries: ['모든 산업'],
    taskTypes: ['문서 작성', '데이터 분석', '프레젠테이션 제작', '이메일 관리'],
    jobRoles: ['영업', '마케팅', '재무', '인사', '기획', '홍보'],
    summary: 'MS 365 전반에서 반복 업무를 줄이는 AI 어시스턴트입니다.'
  },
  {
    name: 'Siemens MindSphere',
    industries: ['제조', '에너지', '산업 설비'],
    taskTypes: ['생산 공정 모니터링', 'IoT 데이터 분석', '설비 유지보수 예측'],
    jobRoles: ['생산', 'R&D', 'IT'],
    summary: '산업 IoT 데이터를 통합해 실시간 모니터링과 예측 유지보수를 지원합니다.'
  },
  {
    name: 'Notion AI',
    industries: ['모든 산업'],
    taskTypes: ['아이디어 정리', '보고서 작성', '팀 협업 문서 관리'],
    jobRoles: ['기획', '마케팅', '인사', '홍보'],
    summary: '협업 문서와 지식 관리를 자동화하는 워크스페이스 내 AI 도우미입니다.'
  },
  {
    name: 'HireVue',
    industries: ['모든 산업'],
    taskTypes: ['영상 면접 평가', '후보자 성향 분석', '채용 자동화'],
    jobRoles: ['인사'],
    summary: 'AI 기반 영상 인터뷰 분석을 제공하는 채용 프로세스 자동화 도구입니다.'
  },
  {
    name: 'LinkedIn Recruiter',
    industries: ['모든 산업'],
    taskTypes: ['채용 후보자 검색', '인재 매칭', '채용 캠페인 관리'],
    jobRoles: ['인사'],
    summary: '전 세계 인재 풀을 분석해 최적의 후보자를 찾는 리크루팅 플랫폼입니다.'
  },
  {
    name: 'Betterworks',
    industries: ['모든 산업'],
    taskTypes: ['목표 관리', '성과 트래킹', '피드백 자동화'],
    jobRoles: ['인사', '기획'],
    summary: 'OKR 중심의 성과 관리와 피드백 자동화를 지원하는 HR 플랫폼입니다.'
  },
  {
    name: 'Eightfold',
    industries: ['IT', '금융', '제조', '서비스'],
    taskTypes: ['인재 매칭', '채용 데이터 분석', '이직 예측'],
    jobRoles: ['인사', 'R&D', '재무'],
    summary: '인재 데이터를 머신러닝으로 분석해 채용 및 내부 이동을 최적화합니다.'
  },
  {
    name: 'SAP AI',
    industries: ['제조', '금융', '유통', '공공'],
    taskTypes: ['재무회계 자동화', '예산 관리', '비용 분석'],
    jobRoles: ['재무', '생산', '기획'],
    summary: 'ERP 데이터 기반으로 재무와 운영 의사결정을 자동화합니다.'
  },
  {
    name: 'Oracle AI',
    industries: ['금융', 'IT', '대기업 전 산업'],
    taskTypes: ['재무 분석', '수익 예측', '경비 처리 자동화'],
    jobRoles: ['재무', '기획', 'IT'],
    summary: '엔터프라이즈 데이터 전반을 분석해 재무와 운영을 고도화합니다.'
  },
  {
    name: 'UiPath',
    industries: ['금융', '보험', '제조', 'IT', '공공'],
    taskTypes: ['업무 자동화(RPA)', '데이터 입력', '반복 작업 처리'],
    jobRoles: ['재무', 'IT', '생산', '기획', '인사'],
    summary: '반복적인 백오피스 업무를 로봇 프로세스로 자동화합니다.'
  },
  {
    name: 'Moveworks',
    industries: ['IT', '기술 서비스', '대기업'],
    taskTypes: ['IT 헬프데스크 자동화', '티켓 분류 및 해결', '직원 지원'],
    jobRoles: ['IT', '인사'],
    summary: '사내 티켓과 FAQ를 자연어로 해결하는 IT·직원 지원 봇입니다.'
  },
  {
    name: 'ServiceNow AI',
    industries: ['IT', '대기업 서비스 운영'],
    taskTypes: ['IT 서비스 관리', '운영 자동화', '워크플로우 관리'],
    jobRoles: ['IT', '기획', '생산'],
    summary: '서비스 운영 전반을 자동화하고 워크플로우를 최적화합니다.'
  },
  {
    name: 'Luminance',
    industries: ['법무', '금융', '대기업 법무팀'],
    taskTypes: ['계약서 분석', '법률문서 검토', '리스크 평가'],
    jobRoles: ['법무', '재무'],
    summary: '계약 및 규제 문서를 고속 분석해 컴플라이언스를 강화합니다.'
  },
  {
    name: 'Harvey AI',
    industries: ['법률', '로펌', '기업 법무부서'],
    taskTypes: ['법률 자문', '판례 검색', '문서 질문 답변'],
    jobRoles: ['법무', '기획'],
    summary: '법률 전문 지식에 최적화된 생성형 AI 어시스턴트입니다.'
  },
  {
    name: 'Casetext',
    industries: ['법률', '학술', '법률 연구기관'],
    taskTypes: ['법률 문서 검색', '사례 요약', '법률 연구'],
    jobRoles: ['법무', 'R&D'],
    summary: '판례와 규제 문서를 빠르게 검색하고 요약합니다.'
  },
  {
    name: 'Fireflies.ai',
    industries: ['모든 산업'],
    taskTypes: ['회의 녹음', '자동 필기', '대화 분석 및 요약'],
    jobRoles: ['영업', '마케팅', '기획', '홍보', '인사'],
    summary: '회의 콘텐츠를 자동 기록하고 요약해 협업 효율을 끌어올립니다.'
  },
  {
    name: 'Gong',
    industries: ['영업', '마케팅', '고객 지원'],
    taskTypes: ['영업 통화 분석', '고객 대화 피드백', '판매 전략 개선'],
    jobRoles: ['영업', '마케팅'],
    summary: '고객 대화를 분석해 영업 전략과 성과를 개선합니다.'
  }
];

const heroBrandText = document.getElementById('heroBrandText');
const heroSection = document.getElementById('heroSection');
const matchSection = document.getElementById('matchSection');
const matchWordEl = document.getElementById('matchWord');
const logoTopRight = document.querySelector('.logo-top-right');

const ALL_TASKS = Array.from(new Set(AI_TOOLS.flatMap((tool) => tool.taskTypes))).sort((a, b) =>
  a.localeCompare(b, 'ko')
);

const API_BASE_URL = (window.AIM_API_BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const API_ENDPOINT = `${API_BASE_URL}/api/recommend`;

const JOB_WORDS = [
  'Sales',
  'Marketing',
  'Research',
  'Production',
  'Planning',
  'Finance',
  'Coding',
  'Design',
  'PR'
];
const JOB_WORD_VISIBLE_MS = 2000;
const JOB_WORD_TRANSITION_MS = 350;
let jobWordIndex = 0;
let jobWordTimers = [];

const HERO_TYPING_SEQUENCE = [
  'AIM',
  'AIMA',
  'AIMAT',
  'AIMATC',
  'AIMATCH',
  'AIMATCHE',
  'AIMATCHER',
  'AIMATCHE',
  'AIMATCH',
  'AIMATC',
  'AIMAT',
  'AIMA'
];
const HERO_TYPING_INTERVAL_MS = 260;
let heroTypingIndex = 0;
let heroTypingTimer = null;

function clearJobWordTimers() {
  jobWordTimers.forEach((id) => clearTimeout(id));
  jobWordTimers = [];
}

function cycleJobWord() {
  if (!jobWordEl) return;

  jobWordEl.classList.remove('job-word-active');
  // force reflow to restart transition
  void jobWordEl.offsetWidth;

  jobWordEl.textContent = JOB_WORDS[jobWordIndex];
  jobWordEl.classList.add('job-word-active');

  const holdTimer = setTimeout(() => {
    jobWordEl.classList.remove('job-word-active');

    const transitionTimer = setTimeout(() => {
      jobWordIndex = (jobWordIndex + 1) % JOB_WORDS.length;
      cycleJobWord();
    }, JOB_WORD_TRANSITION_MS);

    jobWordTimers.push(transitionTimer);
  }, JOB_WORD_VISIBLE_MS);

  jobWordTimers.push(holdTimer);
}

function startJobWordCycle() {
  if (!jobWordEl) return;
  clearJobWordTimers();
  jobWordIndex = 0;
  cycleJobWord();
}

const MATCH_WORD_VISIBLE_MS = 2000;
const MATCH_WORD_TRANSITION_MS = 350;
let matchWordIndex = 0;
let matchWordTimers = [];
let matchWordCycleActive = false;

function clearMatchWordTimers() {
  matchWordTimers.forEach((id) => clearTimeout(id));
  matchWordTimers = [];
}

function cycleMatchWord() {
  if (!matchWordEl) return;

  matchWordEl.classList.remove('match-word-active');
  void matchWordEl.offsetWidth;

  matchWordEl.textContent = JOB_WORDS[matchWordIndex];
  matchWordEl.style.minWidth = 'auto';
  
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const wordWidth = matchWordEl.scrollWidth;
      matchWordEl.style.minWidth = `${wordWidth}px`;
      matchWordEl.classList.add('match-word-active');
    });
  });

  const holdTimer = setTimeout(() => {
    matchWordEl.classList.remove('match-word-active');

    const transitionTimer = setTimeout(() => {
      matchWordIndex = (matchWordIndex + 1) % JOB_WORDS.length;
      cycleMatchWord();
    }, MATCH_WORD_TRANSITION_MS);

    matchWordTimers.push(transitionTimer);
  }, MATCH_WORD_VISIBLE_MS);

  matchWordTimers.push(holdTimer);
}

function startMatchWordCycle() {
  if (!matchWordEl || matchWordCycleActive) return;
  matchWordCycleActive = true;
  clearMatchWordTimers();
  matchWordIndex = 0;
  cycleMatchWord();
}

function stopMatchWordCycle() {
  matchWordCycleActive = false;
  clearMatchWordTimers();
  if (matchWordEl) {
    matchWordEl.classList.remove('match-word-active');
    matchWordEl.textContent = '';
    matchWordEl.style.minWidth = '';
  }
}

function scheduleNextHeroTypingStep() {
  heroTypingTimer = setTimeout(runHeroTypingStep, HERO_TYPING_INTERVAL_MS);
}

function runHeroTypingStep() {
  if (!heroBrandText) return;
  heroBrandText.textContent = HERO_TYPING_SEQUENCE[heroTypingIndex];
  heroTypingIndex = (heroTypingIndex + 1) % HERO_TYPING_SEQUENCE.length;
  scheduleNextHeroTypingStep();
}

function startHeroTypingLoop() {
  if (!heroBrandText) return;
  if (heroTypingTimer) {
    clearTimeout(heroTypingTimer);
  }
  heroBrandText.textContent = HERO_TYPING_SEQUENCE[0];
  heroTypingIndex = 1 % HERO_TYPING_SEQUENCE.length;
  scheduleNextHeroTypingStep();
}

function handleScroll() {
  if (!matchSection) return;

  const rect = matchSection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

  if (isVisible && !matchWordCycleActive) {
    startMatchWordCycle();
  } else if (!isVisible && matchWordCycleActive) {
    stopMatchWordCycle();
  }

  if (logoTopRight) {
    if (isVisible) {
      logoTopRight.style.display = 'none';
    } else {
      logoTopRight.style.display = 'block';
    }
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

if (matchSection) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !matchWordCycleActive) {
          startMatchWordCycle();
        } else if (!entry.isIntersecting && matchWordCycleActive) {
          stopMatchWordCycle();
        }

        if (logoTopRight) {
          if (entry.isIntersecting) {
            logoTopRight.style.display = 'none';
          } else {
            logoTopRight.style.display = 'block';
          }
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(matchSection);
}

startHeroTypingLoop();

function updateTaskSuggestions(jobRole) {
  datalist.innerHTML = '';
  let suggestions = ALL_TASKS;

  if (jobRole) {
    const filteredTasks = new Set();
    AI_TOOLS.forEach((tool) => {
      if (tool.jobRoles.includes(jobRole)) {
        tool.taskTypes.forEach((task) => filteredTasks.add(task));
      }
    });
    if (filteredTasks.size > 0) {
      suggestions = Array.from(filteredTasks).sort((a, b) => a.localeCompare(b, 'ko'));
    }
  }

  suggestions.forEach((task) => {
    const option = document.createElement('option');
    option.value = task;
    datalist.appendChild(option);
  });
}

function filterTools(jobRole, taskType) {
  return AI_TOOLS.filter((tool) => {
    const matchesJob = jobRole ? tool.jobRoles.includes(jobRole) : true;
    const matchesTask = taskType
      ? tool.taskTypes.some((task) => task.includes(taskType) || taskType.includes(task))
      : true;
    return matchesJob && matchesTask;
  }).sort((a, b) => a.name.localeCompare(b.name, 'en'));
}

function renderTools(tools, { jobRole, taskType }) {
  toolList.innerHTML = '';

  if (tools.length === 0) {
    helpText.textContent = '조건에 맞는 툴이 없습니다. 다른 업무 유형을 시도해 보세요.';
    return;
  }

  helpText.textContent = `${tools.length}개의 툴을 찾았어요. 세부 기능과 태그를 확인해 보세요.`;

  tools.forEach((tool) => {
    const card = document.createElement('article');
    card.className = 'tool-card';

    const title = document.createElement('h3');
    title.textContent = tool.name;
    card.appendChild(title);

    const summary = document.createElement('p');
    summary.textContent = tool.summary;
    card.appendChild(summary);

    const industries = document.createElement('p');
    industries.className = 'help-text';
    industries.textContent = `적용 산업: ${tool.industries.join(', ')}`;
    card.appendChild(industries);

    const tagsWrapper = document.createElement('div');
    tagsWrapper.className = 'tags';

    tool.taskTypes.forEach((task) => {
      const tag = document.createElement('span');
      const isHighlight = taskType && (task.includes(taskType) || taskType.includes(task));
      tag.className = `tag${isHighlight ? ' highlight' : ''}`;
      tag.textContent = task;
      tagsWrapper.appendChild(tag);
    });

    if (jobRole) {
      const roleTag = document.createElement('span');
      roleTag.className = 'tag';
      roleTag.textContent = `직무: ${jobRole}`;
      tagsWrapper.appendChild(roleTag);
    }

    card.appendChild(tagsWrapper);
    toolList.appendChild(card);
  });
}

function getTopToolsForPrompt(jobRole, taskType) {
  const filtered = filterTools(jobRole, taskType);
  if (filtered.length > 0) {
    return filtered.slice(0, 5);
  }
  return AI_TOOLS.slice(0, 5);
}

async function requestAIRecommendation({ jobRole, taskType, prompt }) {
  const toolsForRequest = getTopToolsForPrompt(jobRole, taskType);

  const payload = {
    jobRole: jobRole || '미선택',
    taskType: taskType || '미입력',
    prompt,
    tools: toolsForRequest
  };

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => ({}));
      const message = errorPayload?.error || 'AI 추천 API 호출에 실패했습니다.';
      throw new Error(message);
    }

    const data = await response.json();
    return {
      success: true,
      message: data.recommendation || 'AI 응답이 비어 있습니다.'
    };
  } catch (error) {
    return {
      success: false,
      message: `AI 추천 생성 중 오류가 발생했습니다: ${error.message}`
    };
  }
}

function smoothScrollTo(element) {
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

jobSelect.addEventListener('change', (event) => {
  updateTaskSuggestions(event.target.value);
});

showDefaultBtn.addEventListener('click', () => {
  const jobRole = jobSelect.value;
  const taskType = taskInput.value.trim();
  const tools = filterTools(jobRole, taskType);
  renderTools(tools, { jobRole, taskType });
});

aiShortcutBtn.addEventListener('click', () => {
  smoothScrollTo(document.querySelector('.ai-consult'));
  aiPrompt.focus();
});

generateInsightBtn.addEventListener('click', async () => {
  const jobRole = jobSelect.value;
  const taskType = taskInput.value.trim();
  const prompt = aiPrompt.value.trim();

  if (!prompt) {
    apiStatus.textContent = '자연어 설명을 입력해 주세요.';
    apiStatus.classList.add('error');
    return;
  }

  apiStatus.textContent = 'AI가 분석 중입니다...';
  apiStatus.classList.remove('error');
  aiRecommendation.hidden = true;

  const result = await requestAIRecommendation({ jobRole, taskType, prompt });

  if (result.success) {
    aiRecommendation.textContent = result.message;
    aiRecommendation.hidden = false;
    apiStatus.textContent = '분석이 완료되었습니다.';
  } else {
    apiStatus.textContent = result.message;
    apiStatus.classList.add('error');
  }
});

// 초기화
updateTaskSuggestions('');
renderTools([], { jobRole: '', taskType: '' });
