const difficultySeconds = {
  3: { easy: 17, medium: 15, hard: 13, expert: 11 },
  4: { easy: 35, medium: 29, hard: 23, expert: 19 },
  5: { easy: 45, medium: 35, hard: 30, expert: 25 },
  6: { easy: 80, medium: 65, hard: 53, expert: 41 },
};

const translations = {
  en: {
    appTitle: "focus grid",
    subtitle: "Find numbers in order. Train focus and visual search.",
    settings: "Settings",
    close: "Close",
    language: "Language",
    music: "Music",
    chooseEnglish: "Switch to English",
    chooseChinese: "Switch to Chinese",
    githubRepository: "GitHub repository",
    gameSettings: "Game settings",
    gridSize: "Grid size",
    difficultyOptions: "Difficulty options",
    schulteGridGame: "Schulte grid game",
    gameStatus: "Game status",
    schulteGrid: "Schulte grid",
    numberLabel: "Number {number}",
    copyright: "Copyright",
    time: "Time",
    progress: "Progress",
    errors: "Errors",
    grid: "Grid",
    difficulty: "Difficulty",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    expert: "Expert",
    countdownSeconds: "Countdown seconds",
    healthReminder: "Healthy reminder",
    healthReminderOptions: "Healthy reminder options",
    reminderOff: "No reminder",
    reminderMinutes: "{minutes}m",
    challenge: "Challenge",
    strong: "Strong",
    trainingLine: "{grid} {difficulty} targets",
    previewTitle: "Preview",
    previewText: "Preview",
    startTitle: "Ready",
    startText: "Tap here to start the timer",
    startHelp:
      "Tap numbers in order starting from 1 as quickly as possible. Tap outside the grid to pause.",
    tutorialTitle: "Tutorial",
    tutorialText: "Follow the flashing number.",
    tutorialCompleteTitle: "Tutorial Complete",
    tutorialCompleteText: "Tap here to start the timed round",
    dismissTutorial: "Skip tutorial next time",
    tutorialMode: "Tutorial mode",
    startTimedGame: "Start game",
    newGameText: "Tap here for a new game",
    pauseTitle: "Paused",
    pauseText: "Tap here to resume",
    breakTitle: "Take a break",
    breakText: "Rest for {time} before the next round",
    breakCompleteTitle: "Break complete",
    breakCompleteText: "Tap here to start a new game",
    finishedTitle: "Finished",
    timeoutTitle: "Time Up",
    finishedMessage: "You completed the full sequence.",
    timeoutMessage: "The countdown ended before the sequence was complete.",
    expertBadge: "Expert result: {elapsed} ≤ {threshold}",
    strongBadge: "Strong result: {elapsed} ≤ {threshold}",
    statGrid: "Grid",
    statDifficulty: "Difficulty",
    statTargetTime: "Target time",
    statElapsed: "Elapsed",
    statRemaining: "Remaining",
    statProgress: "Progress",
    statErrors: "Errors",
    statAvgStep: "Avg step",
    healthBreakPrompt:
      "You have been training for a while. To reduce eye strain and overuse, take a 2-minute break before continuing. Continuing means you understand and accept this healthy-use notice.",
    startBreak: "Start break",
    continueTraining: "Continue training",
  },
  zh: {
    appTitle: "专注格",
    subtitle: "于方格中觅数，在顺序中专注",
    settings: "设置",
    close: "关闭",
    language: "语言",
    music: "背景音乐",
    chooseEnglish: "切换到英文",
    chooseChinese: "切换到中文",
    githubRepository: "GitHub 仓库",
    gameSettings: "游戏设置",
    gridSize: "方格尺寸",
    difficultyOptions: "难度选项",
    schulteGridGame: "舒尔特方格游戏",
    gameStatus: "游戏状态",
    schulteGrid: "舒尔特方格",
    numberLabel: "数字 {number}",
    copyright: "版权",
    time: "时间",
    progress: "进度",
    errors: "错误",
    grid: "方格",
    difficulty: "难度",
    easy: "简单",
    medium: "中等",
    hard: "难",
    expert: "专家",
    countdownSeconds: "倒计时秒数",
    healthReminder: "健康提醒",
    healthReminderOptions: "健康提醒选项",
    reminderOff: "不提醒",
    reminderMinutes: "{minutes} 分钟",
    challenge: "挑战",
    strong: "优秀",
    trainingLine: "{grid} {difficulty}训练目标",
    previewTitle: "预览",
    previewText: "预览",
    startTitle: "准备",
    startText: "点击开始计时",
    startHelp: "从 1 开始尽可能快地按顺序点击数字，点击方格外暂停。",
    tutorialTitle: "教程",
    tutorialText: "跟随闪烁的数字点击。",
    tutorialCompleteTitle: "教程完成",
    tutorialCompleteText: "点击开始正式计时",
    dismissTutorial: "不再显示教程",
    tutorialMode: "教程模式",
    startTimedGame: "开始游戏",
    newGameText: "点击这里开始新游戏",
    pauseTitle: "已暂停",
    pauseText: "点击这里继续",
    breakTitle: "休息一下",
    breakText: "休息 {time} 后再开始下一局",
    breakCompleteTitle: "休息完成",
    breakCompleteText: "点击这里开始新游戏",
    finishedTitle: "完成",
    timeoutTitle: "超时",
    finishedMessage: "你已完成完整序列。",
    timeoutMessage: "倒计时结束前未完成完整序列。",
    expertBadge: "专家达成：{elapsed} ≤ {threshold}",
    strongBadge: "优秀达成：{elapsed} ≤ {threshold}",
    statGrid: "方格",
    statDifficulty: "难度",
    statTargetTime: "目标时间",
    statElapsed: "用时",
    statRemaining: "剩余",
    statProgress: "进度",
    statErrors: "错误",
    statAvgStep: "平均每步",
    healthBreakPrompt:
      "你已经连续训练了一段时间。为了避免眼部疲劳和过度使用，建议休息 2 分钟后再继续。继续使用即表示你理解并接受该健康使用提示。",
    startBreak: "开始休息",
    continueTraining: "继续训练",
  },
};

const trainingLineSteps = {
  3: 1,
  4: 3,
  5: 5,
  6: 10,
};

const tightTrainingLineSteps = {
  3: 1,
  4: 2,
  5: 3,
  6: 6,
};

const accidentalDoubleClickMs = 650;
const previewMs = 3000;
const balancedShuffleAttempts = 600;
const maxAdjacentSequentialPairs = 3;
const healthReminderOptions = [0, 5, 10, 15, 20];
const healthBreakMs = 2 * 60 * 1000;
const continueTrainingSnoozeMs = 5 * 60 * 1000;
const preferencesCookieName = "focusGridOptions";
const tutorialDismissedCookieName = "focusGridTutorialDismissed";
const preferencesMaxAge = 60 * 60 * 24 * 365;
const settingsDrawerMediaQuery =
  "(max-width: 820px), (orientation: landscape) and (max-height: 500px) and (max-width: 950px)";

const state = {
  language: "en",
  size: 5,
  difficulty: "medium",
  durationSeconds: 35,
  healthReminderMinutes: 10,
  sessionTrainingMs: 0,
  nextHealthReminderMs: 10 * 60 * 1000,
  breakEndsAt: 0,
  breakIntervalId: 0,
  remainingMs: 35000,
  status: "idle",
  previewTimeoutId: 0,
  previewIntervalId: 0,
  previewEndsAt: 0,
  cells: [],
  nextNumber: 1,
  errors: 0,
  startedAt: 0,
  pausedAt: 0,
  totalPausedMs: 0,
  rafId: 0,
  settingsOpen: false,
  languageMenuOpen: false,
  musicEnabled: true,
  musicAudio: null,
  successAudio: null,
  tutorialDismissed: false,
  tutorialCompletedThisSession: false,
  settingsReturnFocus: null,
  lastCorrectNumber: 0,
  lastCorrectAt: 0,
  tapFeedbackCell: null,
};

let shouldReloadForServiceWorkerUpdate = false;

const elements = {
  gridBoard: document.querySelector("#gridBoard"),
  gridWrap: document.querySelector("#gridWrap"),
  confettiLayer: document.querySelector("#confettiLayer"),
  pauseMask: document.querySelector("#pauseMask"),
  settingsButton: document.querySelector("#settingsButton"),
  closeSettingsButton: document.querySelector("#closeSettingsButton"),
  settingsBackdrop: document.querySelector("#settingsBackdrop"),
  settingsPanel: document.querySelector("#settingsPanel"),
  languagePicker: document.querySelector("#languagePicker"),
  languageToggle: document.querySelector("#languageToggle"),
  languageOptions: document.querySelector("#languageOptions"),
  musicButton: document.querySelector("#musicButton"),
  timerText: document.querySelector("#timerText"),
  progressText: document.querySelector("#progressText"),
  errorText: document.querySelector("#errorText"),
  secondsInput: document.querySelector("#secondsInput"),
  dismissTutorialInput: document.querySelector("#dismissTutorialInput"),
  resultDialog: document.querySelector("#resultDialog"),
  resultTitle: document.querySelector("#resultTitle"),
  resultMessage: document.querySelector("#resultMessage"),
  resultBadge: document.querySelector("#resultBadge"),
  resultStats: document.querySelector("#resultStats"),
  healthBreakPrompt: document.querySelector("#healthBreakPrompt"),
  healthBreakText: document.querySelector("#healthBreakText"),
  startBreakButton: document.querySelector("#startBreakButton"),
  continueTrainingButton: document.querySelector("#continueTrainingButton"),
  closeResultButton: document.querySelector("#closeResultButton"),
  timerItem: document.querySelector(".timer-item"),
  benchmarkTitle: document.querySelector("#benchmarkTitle"),
  benchmarkChallenge: document.querySelector("#benchmarkChallenge"),
  benchmarkStrong: document.querySelector("#benchmarkStrong"),
  benchmarkExpert: document.querySelector("#benchmarkExpert"),
  pauseTitle: document.querySelector("#pauseTitle"),
  pauseText: document.querySelector("#pauseText"),
  pauseHelp: document.querySelector("#pauseHelp"),
  tutorialMode: document.querySelector("#tutorialMode"),
  tutorialStartButton: document.querySelector("#tutorialStartButton"),
  tutorialCompleteActions: document.querySelector("#tutorialCompleteActions"),
  tutorialDismissButton: document.querySelector("#tutorialDismissButton"),
  languageButtons: [...document.querySelectorAll("[data-language]")],
  sizeButtons: [...document.querySelectorAll("[data-size]")],
  difficultyButtons: [...document.querySelectorAll("[data-difficulty]")],
  healthReminderButtons: [
    ...document.querySelectorAll("[data-health-reminder]"),
  ],
};

function t(key, values = {}) {
  const text = translations[state.language][key] ?? translations.en[key] ?? key;

  return text.replaceAll(/\{([^}]+)\}/g, (_, name) => values[name] ?? "");
}

function getSavedPreferences() {
  const cookie = document.cookie
    .split("; ")
    .find((item) => item.startsWith(`${preferencesCookieName}=`));

  if (!cookie) {
    return {};
  }

  try {
    return JSON.parse(decodeURIComponent(cookie.split("=").slice(1).join("=")));
  } catch {
    return {};
  }
}

function isTutorialDismissed() {
  return document.cookie
    .split("; ")
    .includes(`${tutorialDismissedCookieName}=true`);
}

function savePreferences() {
  const preferences = {
    language: state.language,
    size: state.size,
    difficulty: state.difficulty,
    durationSeconds: state.durationSeconds,
    healthReminderMinutes: state.healthReminderMinutes,
  };

  document.cookie = `${preferencesCookieName}=${encodeURIComponent(
    JSON.stringify(preferences),
  )}; max-age=${preferencesMaxAge}; path=/; SameSite=Lax`;
}

function saveTutorialDismissed() {
  state.tutorialDismissed = true;
  document.cookie = `${tutorialDismissedCookieName}=true; max-age=${preferencesMaxAge}; path=/; SameSite=Lax`;
  elements.dismissTutorialInput.checked = true;
}

function clearTutorialDismissed() {
  state.tutorialDismissed = false;
  document.cookie = `${tutorialDismissedCookieName}=; max-age=0; path=/; SameSite=Lax`;
  elements.dismissTutorialInput.checked = false;
}

function setTutorialDismissed(dismissed) {
  if (dismissed) {
    saveTutorialDismissed();
    return;
  }

  clearTutorialDismissed();
}

function shouldShowTutorial() {
  return !state.tutorialDismissed && !state.tutorialCompletedThisSession;
}

function isValidLanguage(language) {
  return Object.hasOwn(translations, language);
}

function isValidSize(size) {
  return Object.hasOwn(difficultySeconds, size);
}

function isValidDifficulty(difficulty) {
  return Object.hasOwn(difficultySeconds[state.size], difficulty);
}

function isValidHealthReminder(minutes) {
  return healthReminderOptions.includes(Number(minutes));
}

function clampSeconds(seconds) {
  return Math.min(300, Math.max(3, Number(seconds) || 3));
}

function getHealthReminderMs() {
  if (state.healthReminderMinutes <= 0) {
    return Infinity;
  }

  return state.healthReminderMinutes * 60 * 1000;
}

function resetHealthReminderSchedule() {
  state.nextHealthReminderMs = state.sessionTrainingMs + getHealthReminderMs();
}

function loadPreferences() {
  const preferences = getSavedPreferences();
  state.tutorialDismissed = isTutorialDismissed();

  if (isValidLanguage(preferences.language)) {
    state.language = preferences.language;
  }

  if (isValidSize(preferences.size)) {
    state.size = Number(preferences.size);
  }

  if (isValidDifficulty(preferences.difficulty)) {
    state.difficulty = preferences.difficulty;
  }

  if (preferences.durationSeconds !== undefined) {
    state.durationSeconds = clampSeconds(preferences.durationSeconds);
    state.remainingMs = state.durationSeconds * 1000;
  } else {
    applyRecommendedSeconds();
  }

  if (isValidHealthReminder(preferences.healthReminderMinutes)) {
    state.healthReminderMinutes = Number(preferences.healthReminderMinutes);
  }

  resetHealthReminderSchedule();

  elements.secondsInput.value = String(state.durationSeconds);
  elements.dismissTutorialInput.checked = state.tutorialDismissed;
  updatePressedState(elements.languageButtons, state.language, "language");
  updatePressedState(elements.sizeButtons, state.size, "size");
  updatePressedState(
    elements.difficultyButtons,
    state.difficulty,
    "difficulty",
  );
  updatePressedState(
    elements.healthReminderButtons,
    state.healthReminderMinutes,
    "healthReminder",
  );
}

function shuffle(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function getCellPosition(index, size) {
  return {
    x: index % size,
    y: Math.floor(index / size),
  };
}

function getChebyshevDistance(firstIndex, secondIndex, size) {
  const first = getCellPosition(firstIndex, size);
  const second = getCellPosition(secondIndex, size);

  return Math.max(Math.abs(first.x - second.x), Math.abs(first.y - second.y));
}

function getIndexesByNumber(numbers) {
  const indexesByNumber = new Map();

  numbers.forEach((number, index) => {
    indexesByNumber.set(number, index);
  });

  return indexesByNumber;
}

function getSequentialAdjacencies(numbers, size) {
  const indexesByNumber = getIndexesByNumber(numbers);
  const adjacencies = [];

  for (let number = 1; number < numbers.length; number += 1) {
    const currentIndex = indexesByNumber.get(number);
    const nextIndex = indexesByNumber.get(number + 1);

    adjacencies.push(getChebyshevDistance(currentIndex, nextIndex, size) < 2);
  }

  return adjacencies;
}

function countAdjacentSequentialNumbers(numbers, size) {
  const adjacencies = getSequentialAdjacencies(numbers, size);
  return adjacencies.filter(Boolean).length;
}

function countClusteredSequentialTriples(adjacencies) {
  let clusteredTriples = 0;

  for (let index = 0; index < adjacencies.length - 1; index += 1) {
    if (adjacencies[index] && adjacencies[index + 1]) {
      clusteredTriples += 1;
    }
  }

  return clusteredTriples;
}

function getLongestSequentialAdjacencyRun(adjacencies) {
  let longestRun = 0;
  let currentRun = 0;

  adjacencies.forEach((isAdjacent) => {
    if (isAdjacent) {
      currentRun += 1;
      longestRun = Math.max(longestRun, currentRun);
      return;
    }

    currentRun = 0;
  });

  return longestRun;
}

function scoreGridNumbers(numbers, size) {
  const adjacencies = getSequentialAdjacencies(numbers, size);
  const adjacentCount = countAdjacentSequentialNumbers(numbers, size);
  const adjacentOverflow = Math.max(
    0,
    adjacentCount - maxAdjacentSequentialPairs,
  );
  const clusteredTriples = countClusteredSequentialTriples(adjacencies);
  const longestRun = getLongestSequentialAdjacencyRun(adjacencies);

  return (
    adjacentOverflow * 1000 +
    Math.abs(adjacentCount - maxAdjacentSequentialPairs) * 4 +
    clusteredTriples * 60 +
    Math.max(0, longestRun - 1) * 40
  );
}

function generateBalancedNumbers(size) {
  const numbers = Array.from({ length: size * size }, (_, index) => index + 1);
  let bestNumbers = shuffle(numbers);
  let bestScore = scoreGridNumbers(bestNumbers, size);

  for (let attempt = 1; attempt < balancedShuffleAttempts; attempt += 1) {
    const candidate = shuffle(numbers);
    const score = scoreGridNumbers(candidate, size);

    if (score < bestScore) {
      bestNumbers = candidate;
      bestScore = score;
    }

    if (bestScore === 0) {
      break;
    }
  }

  return bestNumbers;
}

function generateCells(size) {
  return generateBalancedNumbers(size).map((number) => ({
    number,
  }));
}

function formatTime(milliseconds) {
  const safeMs = Math.max(0, milliseconds);
  const totalSeconds = Math.ceil(safeMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function exactSeconds(milliseconds) {
  return `${(milliseconds / 1000).toFixed(2)}s`;
}

function updatePressedState(buttons, activeValue, dataKey) {
  buttons.forEach((button) => {
    const isActive = button.dataset[dataKey] === String(activeValue);
    button.setAttribute("aria-checked", String(isActive));

    if (button.getAttribute("role") !== "radio") {
      button.setAttribute("aria-pressed", String(isActive));
    }
  });
}

function updateHealthReminderLabels() {
  elements.healthReminderButtons.forEach((button) => {
    const minutes = Number(button.dataset.healthReminder);
    button.textContent =
      minutes === 0 ? t("reminderOff") : t("reminderMinutes", { minutes });
  });
}

function updateStatus() {
  const completed = state.nextNumber - 1;
  const total = state.size * state.size;
  const warningLimit = state.durationSeconds * 1000 * 0.2;
  const isTutorial =
    state.status === "tutorial" || state.status === "tutorialComplete";
  const isBreak = state.status === "break";

  elements.timerText.textContent = isBreak
    ? formatTime(state.breakEndsAt - Date.now())
    : isTutorial
      ? "--:--"
      : formatTime(state.remainingMs);
  elements.progressText.textContent = `${completed}/${total}`;
  elements.errorText.textContent = `× ${state.errors}`;
  elements.errorText.hidden = state.errors === 0;
  elements.secondsInput.value = String(state.durationSeconds);
  elements.tutorialMode.hidden = !isTutorial;

  elements.timerItem.classList.toggle(
    "warning",
    !isBreak && state.remainingMs <= warningLimit,
  );
  elements.timerItem.classList.toggle(
    "danger",
    !isBreak && state.remainingMs <= 10000,
  );
  elements.pauseMask.hidden =
    state.status !== "paused" &&
    state.status !== "idle" &&
    state.status !== "preview" &&
    state.status !== "break" &&
    state.status !== "breakComplete" &&
    state.status !== "tutorialComplete" &&
    state.status !== "success" &&
    state.status !== "timeout";
  elements.pauseMask.classList.toggle(
    "preview-mask",
    state.status === "preview",
  );
  elements.pauseMask.tabIndex =
    elements.pauseMask.hidden || state.status === "preview" || isBreak ? -1 : 0;
  updateMaskText();
}

function updateMaskText() {
  elements.tutorialCompleteActions.hidden = true;

  if (state.status === "preview") {
    const remainingMs = Math.max(0, state.previewEndsAt - Date.now());
    const remainingSeconds = Math.max(1, Math.ceil(remainingMs / 1000));
    elements.pauseTitle.textContent = String(remainingSeconds);
    elements.pauseText.textContent = t("previewText");
    elements.pauseMask.setAttribute(
      "aria-label",
      `${remainingSeconds}. ${t("previewText")}`,
    );
    elements.pauseHelp.hidden = true;
    return;
  }

  if (state.status === "idle") {
    elements.pauseTitle.textContent = t("startTitle");
    elements.pauseText.textContent = t("startText");
    elements.pauseHelp.textContent = t("startHelp");
    elements.pauseMask.setAttribute(
      "aria-label",
      `${t("startTitle")}. ${t("startText")}. ${t("startHelp")}`,
    );
    elements.pauseHelp.hidden = false;
    return;
  }

  if (state.status === "break") {
    const time = formatTime(state.breakEndsAt - Date.now());
    elements.pauseTitle.textContent = t("breakTitle");
    elements.pauseText.textContent = t("breakText", { time });
    elements.pauseMask.setAttribute(
      "aria-label",
      `${t("breakTitle")}. ${t("breakText", { time })}`,
    );
    elements.pauseHelp.hidden = true;
    return;
  }

  if (state.status === "breakComplete") {
    elements.pauseTitle.textContent = t("breakCompleteTitle");
    elements.pauseText.textContent = t("breakCompleteText");
    elements.pauseMask.setAttribute(
      "aria-label",
      `${t("breakCompleteTitle")}. ${t("breakCompleteText")}`,
    );
    elements.pauseHelp.hidden = true;
    return;
  }

  if (state.status === "success" || state.status === "timeout") {
    elements.pauseTitle.textContent =
      state.status === "success" ? t("finishedTitle") : t("timeoutTitle");
    elements.pauseText.textContent = t("newGameText");
    elements.pauseMask.setAttribute(
      "aria-label",
      `${elements.pauseTitle.textContent}. ${t("newGameText")}`,
    );
    elements.pauseHelp.hidden = true;
    return;
  }

  if (state.status === "tutorialComplete") {
    elements.pauseTitle.textContent = t("tutorialCompleteTitle");
    elements.pauseText.textContent = t("tutorialCompleteText");
    elements.pauseMask.setAttribute(
      "aria-label",
      `${t("tutorialCompleteTitle")}. ${t("tutorialCompleteText")}`,
    );
    elements.pauseHelp.hidden = true;
    elements.tutorialCompleteActions.hidden = false;
    return;
  }

  elements.pauseTitle.textContent = t("pauseTitle");
  elements.pauseText.textContent = t("pauseText");
  elements.pauseMask.setAttribute(
    "aria-label",
    `${t("pauseTitle")}. ${t("pauseText")}`,
  );
  elements.pauseHelp.hidden = true;
}

function applyTranslations() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const label = t(element.dataset.i18nAria);
    element.setAttribute("aria-label", label);

    if (element.hasAttribute("title")) {
      element.setAttribute("title", label);
    }
  });
  updateHealthReminderLabels();
  updateMaskText();
}

function updateTrainingLine() {
  const { challenge, strong, expert } = getTrainingLine();
  const grid = `${state.size}x${state.size}`;
  const difficulty = t(state.difficulty);

  elements.benchmarkTitle.textContent = t("trainingLine", { grid, difficulty });
  elements.benchmarkChallenge.textContent = `${challenge}s`;
  elements.benchmarkStrong.textContent = `${strong}s`;
  elements.benchmarkExpert.textContent = `${expert}s`;
}

function getTrainingLine() {
  const challenge = state.durationSeconds;
  const usesTightStep =
    state.difficulty === "hard" || state.difficulty === "expert";
  const step = usesTightStep
    ? tightTrainingLineSteps[state.size]
    : trainingLineSteps[state.size];

  return {
    challenge,
    strong: Math.max(1, challenge - step),
    expert: Math.max(1, challenge - step * 2),
  };
}

function scrollGridToViewportTop() {
  requestAnimationFrame(() => {
    const rect = elements.gridWrap.getBoundingClientRect();
    const isFullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isFullyVisible) {
      return;
    }

    const top = rect.top + window.scrollY;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
}

function usesSettingsDrawer() {
  return window.matchMedia(settingsDrawerMediaQuery).matches;
}

function updateSettingsPanelInteractivity() {
  const shouldHideFromFocus = usesSettingsDrawer() && !state.settingsOpen;
  elements.settingsPanel.inert = shouldHideFromFocus;

  if (shouldHideFromFocus) {
    elements.settingsPanel.setAttribute("aria-hidden", "true");
    return;
  }

  elements.settingsPanel.removeAttribute("aria-hidden");
}

function openSettings() {
  state.settingsOpen = true;
  state.settingsReturnFocus = document.activeElement;
  updateSettingsPanelInteractivity();
  elements.settingsBackdrop.hidden = false;
  elements.settingsButton.setAttribute("aria-expanded", "true");
  document.body.classList.add("settings-open");
  elements.closeSettingsButton.focus();
}

function closeSettings() {
  if (!state.settingsOpen) {
    return;
  }

  state.settingsOpen = false;
  elements.settingsButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("settings-open");

  window.setTimeout(() => {
    if (!state.settingsOpen) {
      elements.settingsBackdrop.hidden = true;
    }
  }, 220);

  if (state.settingsReturnFocus instanceof HTMLElement) {
    state.settingsReturnFocus.focus();
  }

  updateSettingsPanelInteractivity();
}

function openLanguageMenu() {
  state.languageMenuOpen = true;
  elements.languageOptions.hidden = false;
  elements.languageToggle.setAttribute("aria-expanded", "true");
}

function closeLanguageMenu() {
  state.languageMenuOpen = false;
  elements.languageOptions.hidden = true;
  elements.languageToggle.setAttribute("aria-expanded", "false");
}

function toggleLanguageMenu() {
  if (state.languageMenuOpen) {
    closeLanguageMenu();
    return;
  }

  openLanguageMenu();
}

function ensureMusicAudio() {
  if (state.musicAudio) {
    return state.musicAudio;
  }

  state.musicAudio = new Audio("assets/free-run.mp3");
  state.musicAudio.loop = true;
  state.musicAudio.volume = 0.45;
  state.musicAudio.preload = "auto";
  return state.musicAudio;
}

function ensureSuccessAudio() {
  if (state.successAudio) {
    return state.successAudio;
  }

  state.successAudio = new Audio("assets/hurrah.mp3");
  state.successAudio.volume = 0.75;
  state.successAudio.preload = "auto";
  return state.successAudio;
}

function playSuccessAudio() {
  if (!state.musicEnabled) {
    return;
  }

  const audio = ensureSuccessAudio();
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function stopMusic({ rewind = false } = {}) {
  if (!state.musicAudio) {
    return;
  }

  state.musicAudio.pause();

  if (rewind) {
    state.musicAudio.currentTime = 0;
  }
}

function clearHealthBreakTimer() {
  window.clearInterval(state.breakIntervalId);
  state.breakIntervalId = 0;
}

function shouldShowHealthBreakPrompt() {
  return (
    Number.isFinite(state.nextHealthReminderMs) &&
    state.sessionTrainingMs >= state.nextHealthReminderMs
  );
}

function hideHealthBreakPrompt() {
  elements.healthBreakPrompt.hidden = true;
}

function completeHealthBreak() {
  clearHealthBreakTimer();
  state.status = "breakComplete";
  state.sessionTrainingMs = 0;
  resetHealthReminderSchedule();
  updateStatus();
}

function updateHealthBreakCountdown() {
  if (state.status !== "break") {
    clearHealthBreakTimer();
    return;
  }

  if (Date.now() >= state.breakEndsAt) {
    completeHealthBreak();
    return;
  }

  updateStatus();
}

function startHealthBreak() {
  hideHealthBreakPrompt();
  state.status = "break";

  if (elements.resultDialog.open) {
    elements.resultDialog.close();
  }

  clearConfetti();
  stopMusic({ rewind: true });
  state.breakEndsAt = Date.now() + healthBreakMs;
  clearHealthBreakTimer();
  state.breakIntervalId = window.setInterval(updateHealthBreakCountdown, 250);
  document.body.classList.remove("game-focus-scroll");
  renderGrid();
  updateStatus();
}

function continueTrainingAfterHealthPrompt() {
  state.nextHealthReminderMs =
    state.sessionTrainingMs + continueTrainingSnoozeMs;
  hideHealthBreakPrompt();

  if (elements.resultDialog.open) {
    elements.resultDialog.close();
  }
}

function isMusicPlaybackStatus() {
  return state.status === "running" || state.status === "tutorial";
}

function startMusic({ restart = false } = {}) {
  if (!state.musicEnabled || !isMusicPlaybackStatus()) {
    return;
  }

  const audio = ensureMusicAudio();

  if (restart) {
    audio.currentTime = 0;
  }

  audio.play().catch(() => {});
}

function updateMusicButton() {
  elements.musicButton.setAttribute("aria-pressed", String(state.musicEnabled));
}

function toggleMusic() {
  state.musicEnabled = !state.musicEnabled;
  updateMusicButton();

  if (state.musicEnabled) {
    startMusic();
    return;
  }

  stopMusic();
}

function handleMusicGestureUnlock() {
  if (state.status === "tutorial") {
    startMusic();
  }
}

function shouldReduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clearConfetti() {
  elements.confettiLayer.replaceChildren();
}

function burstConfetti(level) {
  if (shouldReduceMotion()) {
    return;
  }

  const fragment = document.createDocumentFragment();
  const count = level === "expert" ? 38 : 26;
  const colors = [
    "var(--accent)",
    "var(--accent-strong)",
    "var(--strong-border)",
    "var(--warning)",
    "var(--ink)",
  ];

  elements.resultDialog.append(elements.confettiLayer);
  clearConfetti();

  for (let index = 0; index < count; index += 1) {
    const piece = document.createElement("i");
    const drift = Math.round((Math.random() - 0.5) * 260);
    const fall = Math.round(220 + Math.random() * 320);
    const spin = Math.round((Math.random() - 0.5) * 540);
    const delay = Math.round(Math.random() * 280);
    const duration = Math.round(1400 + Math.random() * 700);
    const startX = Math.round(18 + Math.random() * 64);

    piece.style.setProperty("--confetti-x", `${startX}%`);
    piece.style.setProperty("--confetti-drift", `${drift}px`);
    piece.style.setProperty("--confetti-fall", `${fall}px`);
    piece.style.setProperty("--confetti-spin", `${spin}deg`);
    piece.style.setProperty("--confetti-delay", `${delay}ms`);
    piece.style.setProperty("--confetti-duration", `${duration}ms`);
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);
    fragment.append(piece);
  }

  elements.confettiLayer.append(fragment);
  window.setTimeout(clearConfetti, 2600);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
    return;
  }

  window.addEventListener("load", () => {
    const wasControlled = Boolean(navigator.serviceWorker.controller);

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!shouldReloadForServiceWorkerUpdate || !wasControlled) {
        return;
      }

      shouldReloadForServiceWorkerUpdate = false;
      window.location.reload();
    });

    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => {
        if (wasControlled) {
          shouldReloadForServiceWorkerUpdate = true;
          registration.update().catch(() => {});
        }

        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState !== "visible") {
            return;
          }

          shouldReloadForServiceWorkerUpdate = true;
          registration.update().catch(() => {});
        });
      })
      .catch(() => {});
  });
}

function renderGrid() {
  elements.gridBoard.innerHTML = "";
  elements.gridBoard.style.gridTemplateColumns = `repeat(${state.size}, minmax(0, 1fr))`;

  state.cells.forEach((cell) => {
    const button = document.createElement("button");
    button.className = "grid-cell";
    button.type = "button";
    button.textContent = String(cell.number);
    button.dataset.number = String(cell.number);
    button.setAttribute("role", "gridcell");
    button.setAttribute(
      "aria-label",
      t("numberLabel", { number: cell.number }),
    );
    button.disabled =
      state.status === "success" ||
      state.status === "timeout" ||
      state.status === "break" ||
      state.status === "breakComplete" ||
      state.status === "tutorialComplete";
    button.classList.toggle(
      "tutorial-target",
      state.status === "tutorial" && cell.number === state.nextNumber,
    );
    elements.gridBoard.append(button);
  });
}

function resetTimerFromSettings() {
  state.durationSeconds =
    Number(elements.secondsInput.value) || state.durationSeconds;
  state.remainingMs = state.durationSeconds * 1000;
}

function resetRound({ keepGrid = false } = {}) {
  cancelAnimationFrame(state.rafId);
  window.clearTimeout(state.previewTimeoutId);
  window.clearInterval(state.previewIntervalId);
  clearHealthBreakTimer();
  document.body.classList.remove("game-focus-scroll");
  const useTutorial = shouldShowTutorial();
  state.status = useTutorial ? "tutorial" : "preview";
  state.previewEndsAt = useTutorial ? 0 : Date.now() + previewMs;
  state.nextNumber = 1;
  state.errors = 0;
  state.startedAt = 0;
  state.pausedAt = 0;
  state.totalPausedMs = 0;
  state.breakEndsAt = 0;
  state.lastCorrectNumber = 0;
  state.lastCorrectAt = 0;
  resetTimerFromSettings();

  if (!keepGrid) {
    state.cells = generateCells(state.size);
  }

  renderGrid();
  updateStatus();
  updateTrainingLine();
  if (useTutorial) {
    startMusic({ restart: true });
    return;
  }

  stopMusic({ rewind: true });
  state.previewIntervalId = window.setInterval(() => {
    if (state.status !== "preview") {
      window.clearInterval(state.previewIntervalId);
      return;
    }

    updateMaskText();
  }, 250);
  state.previewTimeoutId = window.setTimeout(() => {
    if (state.status !== "preview") {
      return;
    }

    window.clearInterval(state.previewIntervalId);
    state.status = "idle";
    updateStatus();
  }, previewMs);
}

function startNormalRoundFromTutorial() {
  if (state.status !== "tutorial" && state.status !== "tutorialComplete") {
    return;
  }

  state.tutorialCompletedThisSession = true;
  resetRound();
}

function beginGame() {
  window.clearTimeout(state.previewTimeoutId);
  window.clearInterval(state.previewIntervalId);
  state.status = "running";
  document.body.classList.add("game-focus-scroll");
  state.startedAt = performance.now();
  state.totalPausedMs = 0;
  tick();
  updateStatus();
  startMusic({ restart: state.nextNumber === 1 });
  scrollGridToViewportTop();
}

function pauseGame() {
  state.status = "paused";
  state.pausedAt = performance.now();
  cancelAnimationFrame(state.rafId);
  stopMusic();
  updateStatus();
}

function resumeGame() {
  if (state.status !== "paused") {
    return;
  }

  state.totalPausedMs += performance.now() - state.pausedAt;
  state.status = "running";
  document.body.classList.add("game-focus-scroll");
  state.pausedAt = 0;
  tick();
  updateStatus();
  startMusic();
  scrollGridToViewportTop();
}

function getElapsedMs(now = performance.now()) {
  return now - state.startedAt - state.totalPausedMs;
}

function tick() {
  if (state.status !== "running") {
    return;
  }

  const elapsedMs = getElapsedMs();
  state.remainingMs = state.durationSeconds * 1000 - elapsedMs;

  if (state.remainingMs <= 0) {
    state.remainingMs = 0;
    finishGame("timeout");
    return;
  }

  updateStatus();
  state.rafId = requestAnimationFrame(tick);
}

function handleCellClick(event) {
  const button = event.target.closest(".grid-cell");
  if (!button || (state.status !== "running" && state.status !== "tutorial")) {
    return;
  }

  if (state.status === "tutorial") {
    startMusic();
  }

  const clickedNumber = Number(button.dataset.number);
  const now = performance.now();

  if (clickedNumber !== state.nextNumber) {
    const isAccidentalDoubleClick =
      clickedNumber === state.lastCorrectNumber &&
      now - state.lastCorrectAt <= accidentalDoubleClickMs;

    if (isAccidentalDoubleClick) {
      return;
    }

    state.errors += 1;
    updateStatus();
    return;
  }

  state.lastCorrectNumber = clickedNumber;
  state.lastCorrectAt = now;
  state.nextNumber += 1;

  if (state.nextNumber > state.size * state.size) {
    if (state.status === "tutorial") {
      state.tutorialCompletedThisSession = true;
      state.status = "tutorialComplete";
      stopMusic({ rewind: true });
      renderGrid();
      updateStatus();
      return;
    }

    finishGame("success");
    return;
  }

  if (state.status === "tutorial") {
    renderGrid();
  }

  updateStatus();
}

function finishGame(result) {
  cancelAnimationFrame(state.rafId);
  window.clearTimeout(state.previewTimeoutId);
  window.clearInterval(state.previewIntervalId);
  stopMusic({ rewind: true });
  const elapsedMs =
    result === "success"
      ? getElapsedMs()
      : state.durationSeconds * 1000 - state.remainingMs;
  const total = state.size * state.size;
  const completed = Math.min(state.nextNumber - 1, total);
  const averageMs = completed > 0 ? elapsedMs / completed : 0;
  state.sessionTrainingMs += elapsedMs;

  state.status = result;
  document.body.classList.remove("game-focus-scroll");
  renderGrid();
  updateStatus();
  elements.resultDialog.classList.remove("result-strong", "result-expert");

  elements.resultTitle.textContent =
    result === "success" ? t("finishedTitle") : t("timeoutTitle");
  elements.resultMessage.textContent =
    result === "success" ? t("finishedMessage") : t("timeoutMessage");
  elements.resultBadge.hidden = true;
  elements.resultBadge.textContent = "";
  elements.healthBreakPrompt.hidden = !shouldShowHealthBreakPrompt();
  elements.healthBreakText.textContent = t("healthBreakPrompt");
  let confettiLevel = state.errors === 0 ? "strong" : "";

  if (result === "success") {
    const { strong, expert } = getTrainingLine();
    const elapsedSeconds = elapsedMs / 1000;

    if (elapsedSeconds <= expert) {
      elements.resultDialog.classList.add("result-expert");
      confettiLevel = "expert";
      elements.resultBadge.hidden = false;
      elements.resultBadge.textContent = t("expertBadge", {
        elapsed: exactSeconds(elapsedMs),
        threshold: `${expert}s`,
      });
    } else if (elapsedSeconds <= strong) {
      elements.resultDialog.classList.add("result-strong");
      confettiLevel = "strong";
      elements.resultBadge.hidden = false;
      elements.resultBadge.textContent = t("strongBadge", {
        elapsed: exactSeconds(elapsedMs),
        threshold: `${strong}s`,
      });
    }
  }

  elements.resultStats.innerHTML = "";
  [
    [t("statGrid"), `${state.size}x${state.size}`],
    [t("statDifficulty"), t(state.difficulty)],
    [t("statTargetTime"), `${state.durationSeconds}s`],
    [t("statElapsed"), exactSeconds(elapsedMs)],
    [t("statRemaining"), exactSeconds(state.remainingMs)],
    [t("statProgress"), `${completed}/${total}`],
    [t("statErrors"), String(state.errors)],
    [t("statAvgStep"), averageMs ? exactSeconds(averageMs) : "-"],
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    row.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    elements.resultStats.append(row);
  });

  elements.resultDialog.showModal();

  if (result === "success" && confettiLevel) {
    burstConfetti(confettiLevel);
  }

  if (result === "success") {
    playSuccessAudio();
  }
}

function applyRecommendedSeconds() {
  state.durationSeconds = difficultySeconds[state.size][state.difficulty];
  state.remainingMs = state.durationSeconds * 1000;
  elements.secondsInput.value = String(state.durationSeconds);
}

function selectSize(size) {
  state.size = size;
  updatePressedState(elements.sizeButtons, size, "size");
  applyRecommendedSeconds();
  savePreferences();
  resetRound();
}

function selectDifficulty(difficulty) {
  state.difficulty = difficulty;
  updatePressedState(elements.difficultyButtons, difficulty, "difficulty");
  applyRecommendedSeconds();
  savePreferences();
  resetRound({ keepGrid: true });
}

function selectLanguage(language) {
  state.language = language;
  updatePressedState(elements.languageButtons, language, "language");
  applyTranslations();
  renderGrid();
  updateTrainingLine();
  savePreferences();
  closeLanguageMenu();
}

function selectHealthReminder(minutes) {
  state.healthReminderMinutes = Number(minutes);
  updatePressedState(
    elements.healthReminderButtons,
    state.healthReminderMinutes,
    "healthReminder",
  );
  resetHealthReminderSchedule();
  savePreferences();
}

function handleOutsidePointerDown(event) {
  if (state.status !== "running") {
    return;
  }

  if (!elements.gridWrap.contains(event.target)) {
    pauseGame();
  }
}

function getInteractiveGridCell(event) {
  const button = event.target.closest(".grid-cell");

  if (!button || (state.status !== "running" && state.status !== "tutorial")) {
    return null;
  }

  return button;
}

function showGridTapFeedback(event) {
  const button = getInteractiveGridCell(event);

  if (!button) {
    return;
  }

  clearGridTapFeedback();
  state.tapFeedbackCell = button;
  button.classList.add("tap-feedback");
}

function clearGridTapFeedback() {
  if (!state.tapFeedbackCell) {
    return;
  }

  state.tapFeedbackCell.classList.remove("tap-feedback");
  state.tapFeedbackCell = null;
}

function activatePauseMask() {
  if (state.status === "break") {
    return;
  }

  if (state.status === "breakComplete") {
    resetRound();
    return;
  }

  if (state.status === "tutorialComplete") {
    resetRound();
    return;
  }

  if (state.status === "success" || state.status === "timeout") {
    resetRound();
    return;
  }

  if (state.status === "idle") {
    beginGame();
    return;
  }

  resumeGame();
}

function bindEvents() {
  document.addEventListener("pointerdown", handleOutsidePointerDown, true);
  document.addEventListener("pointerdown", handleMusicGestureUnlock, true);
  elements.settingsButton.addEventListener("click", openSettings);
  elements.closeSettingsButton.addEventListener("click", closeSettings);
  elements.settingsBackdrop.addEventListener("click", closeSettings);
  elements.settingsPanel.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  elements.languageToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleLanguageMenu();
  });
  elements.musicButton.addEventListener("click", toggleMusic);
  elements.gridBoard.addEventListener("pointerdown", showGridTapFeedback);
  elements.gridBoard.addEventListener("pointerup", clearGridTapFeedback);
  elements.gridBoard.addEventListener("pointercancel", clearGridTapFeedback);
  elements.gridBoard.addEventListener("pointerleave", clearGridTapFeedback);
  elements.gridBoard.addEventListener("click", handleCellClick);
  elements.pauseMask.addEventListener("click", activatePauseMask);
  elements.pauseMask.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    activatePauseMask();
  });
  elements.tutorialDismissButton.addEventListener("click", (event) => {
    event.stopPropagation();
    saveTutorialDismissed();
    resetRound();
  });
  elements.tutorialStartButton.addEventListener("click", () => {
    startNormalRoundFromTutorial();
  });

  elements.languageButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      selectLanguage(button.dataset.language);
    });
  });

  document.addEventListener("click", (event) => {
    if (
      state.languageMenuOpen &&
      !elements.languagePicker.contains(event.target)
    ) {
      closeLanguageMenu();
    }
  });

  elements.sizeButtons.forEach((button) => {
    button.addEventListener("click", () =>
      selectSize(Number(button.dataset.size)),
    );
  });

  elements.difficultyButtons.forEach((button) => {
    button.addEventListener("click", () =>
      selectDifficulty(button.dataset.difficulty),
    );
  });

  elements.healthReminderButtons.forEach((button) => {
    button.addEventListener("click", () =>
      selectHealthReminder(button.dataset.healthReminder),
    );
  });

  elements.secondsInput.addEventListener("change", () => {
    const nextSeconds = clampSeconds(elements.secondsInput.value);
    state.durationSeconds = nextSeconds;
    state.remainingMs = nextSeconds * 1000;
    savePreferences();
    resetRound({ keepGrid: true });
  });

  elements.dismissTutorialInput.addEventListener("change", () => {
    setTutorialDismissed(elements.dismissTutorialInput.checked);
  });

  elements.startBreakButton.addEventListener("click", startHealthBreak);
  elements.continueTrainingButton.addEventListener(
    "click",
    continueTrainingAfterHealthPrompt,
  );

  elements.closeResultButton.addEventListener("click", () => {
    if (!elements.healthBreakPrompt.hidden) {
      continueTrainingAfterHealthPrompt();
      return;
    }

    elements.resultDialog.close();
  });
  elements.resultDialog.addEventListener("close", () => {
    if (!elements.healthBreakPrompt.hidden && state.status !== "break") {
      state.nextHealthReminderMs =
        state.sessionTrainingMs + continueTrainingSnoozeMs;
      hideHealthBreakPrompt();
    }
  });

  window.addEventListener("keydown", (event) => {
    handleMusicGestureUnlock();

    if (event.key === "Escape" && state.settingsOpen) {
      closeSettings();
      return;
    }

    if (event.key === "Escape" && state.languageMenuOpen) {
      closeLanguageMenu();
      elements.languageToggle.focus();
      return;
    }

    if (event.code === "Space" && event.target === document.body) {
      event.preventDefault();
    }
  });

  window.addEventListener("resize", () => {
    if (!usesSettingsDrawer()) {
      closeSettings();
    }

    updateSettingsPanelInteractivity();
  });
}

function init() {
  loadPreferences();
  state.cells = generateCells(state.size);
  bindEvents();
  registerServiceWorker();
  applyTranslations();
  resetRound({ keepGrid: true });
  updateSettingsPanelInteractivity();
}

init();
