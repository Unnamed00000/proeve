const foldersGrid = document.querySelector("#foldersGrid");
const materialsGrid = document.querySelector("#materialsGrid");
const foldersScreen = document.querySelector("#foldersScreen");
const materialsScreen = document.querySelector("#materialsScreen");
const quizScreen = document.querySelector("#quizScreen");
const backButton = document.querySelector("#backButton");
const settingsButton = document.querySelector("#settingsButton");
const settingsModal = document.querySelector("#settingsModal");
const closeSettings = document.querySelector("#closeSettings");
const themeToggle = document.querySelector("#themeToggle");
const languageGrid = document.querySelector("#languageGrid");
const resetButton = document.querySelector("#resetButton");
const screenTitle = document.querySelector("#screenTitle");
const appEyebrow = document.querySelector("#appEyebrow");
const foldersHeading = document.querySelector("#foldersHeading");
const foldersIntro = document.querySelector("#foldersIntro");
const materialsHeading = document.querySelector("#materialsHeading");
const materialsIntro = document.querySelector("#materialsIntro");
const materialLabel = document.querySelector("#materialLabel");
const questionCounter = document.querySelector("#questionCounter");
const scorePill = document.querySelector("#scorePill");
const progressFill = document.querySelector("#progressFill");
const questionText = document.querySelector("#questionText");
const answersList = document.querySelector("#answersList");
const feedbackText = document.querySelector("#feedbackText");
const prevQuestion = document.querySelector("#prevQuestion");
const nextQuestion = document.querySelector("#nextQuestion");
const authorText = document.querySelector("#authorText");

const settingsTitle = document.querySelector("#settingsTitle");
const settingsEyebrow = document.querySelector("#settingsEyebrow");
const themeTitle = document.querySelector("#themeTitle");
const themeDescription = document.querySelector("#themeDescription");
const languageTitle = document.querySelector("#languageTitle");
const languageDescription = document.querySelector("#languageDescription");

const APP_NAME = "EKG repetition";
const AUTHOR_NAME = "Adam Margoev";
const letters = ["A", "B", "C", "D"];

const I18N = {
  da: {
    locale: "da",
    appEyebrow: "Personlig træning",
    foldersHeading: "Mapper",
    foldersIntro: "Vælg en mappe for at åbne emnerne.",
    materialsHeading: "Emner",
    materialsIntro: "Vælg et emne for at starte en ny repetition.",
    settings: "Indstillinger",
    settingsEyebrow: "Kontrolpanel",
    theme: "Tema",
    themeDescription: "Skift mellem lys og mørk visning.",
    language: "Sprog",
    languageDescription: "Vælg appens sprog.",
    reset: "Nulstil",
    resetDone: "Svar og aktuelle forsøg er nulstillet.",
    chooseAnswer: "Vælg svar A, B, C eller D.",
    correct: "Korrekt.",
    incorrect: "Ikke korrekt.",
    rightAnswer: "Det rigtige svar er",
    questionOf: "Spørgsmål {current} af {total}",
    folderCount: "{count} emner",
    questionCount: "{count} spørgsmål",
    previous: "Forrige side",
    next: "Næste side",
    back: "Tilbage",
    close: "Luk",
    author: "Programmet er lavet af Adam Margoev",
    languages: { da: "Dansk", ru: "Русский", ka: "ქართული" }
  },
  ru: {
    locale: "ru",
    appEyebrow: "Личная тренировка",
    foldersHeading: "Папки",
    foldersIntro: "Выберите папку, чтобы открыть темы.",
    materialsHeading: "Темы",
    materialsIntro: "Выберите тему, чтобы начать новое повторение.",
    settings: "Настройки",
    settingsEyebrow: "Панель управления",
    theme: "Тема",
    themeDescription: "Переключение между светлым и тёмным режимом.",
    language: "Язык",
    languageDescription: "Выберите язык приложения.",
    reset: "Сбросить",
    resetDone: "Ответы и текущие попытки сброшены.",
    chooseAnswer: "Выберите ответ A, B, C или D.",
    correct: "Правильно.",
    incorrect: "Неправильно.",
    rightAnswer: "Правильный ответ",
    questionOf: "Вопрос {current} из {total}",
    folderCount: "{count} темы",
    questionCount: "{count} вопросов",
    previous: "Предыдущая страница",
    next: "Следующая страница",
    back: "Назад",
    close: "Закрыть",
    author: "Программа сделана Адамом Маргоевым",
    languages: { da: "Dansk", ru: "Русский", ka: "ქართული" }
  },
  ka: {
    locale: "ka",
    appEyebrow: "პირადი ვარჯიში",
    foldersHeading: "საქაღალდეები",
    foldersIntro: "აირჩიეთ საქაღალდე თემების გასახსნელად.",
    materialsHeading: "თემები",
    materialsIntro: "აირჩიეთ თემა ახალი გამეორების დასაწყებად.",
    settings: "პარამეტრები",
    settingsEyebrow: "მართვის პანელი",
    theme: "თემა",
    themeDescription: "გადართვა ღია და მუქ რეჟიმს შორის.",
    language: "ენა",
    languageDescription: "აირჩიეთ აპლიკაციის ენა.",
    reset: "განულება",
    resetDone: "პასუხები და მიმდინარე მცდელობები განულებულია.",
    chooseAnswer: "აირჩიეთ პასუხი A, B, C ან D.",
    correct: "სწორია.",
    incorrect: "არასწორია.",
    rightAnswer: "სწორი პასუხია",
    questionOf: "კითხვა {current} / {total}",
    folderCount: "{count} თემა",
    questionCount: "{count} კითხვა",
    previous: "წინა გვერდი",
    next: "შემდეგი გვერდი",
    back: "უკან",
    close: "დახურვა",
    author: "პროგრამა შექმნა ადამ მარგოევმა",
    languages: { da: "Dansk", ru: "Русский", ka: "ქართული" }
  }
};

const state = {
  language: localStorage.getItem("app-language") || "da",
  theme: localStorage.getItem("app-theme") || "light",
  currentView: "folders",
  currentFolder: null,
  currentMaterial: null,
  currentQuestionIndex: 0,
  sessionQuestions: [],
  answers: {}
};

function t(key) {
  return I18N[state.language][key] || I18N.da[key] || key;
}

function format(template, values) {
  return template.replace(/\{(\w+)}/g, (_, key) => values[key]);
}

function localized(item, field) {
  if (item.i18n && item.i18n[state.language] && item.i18n[state.language][field]) {
    return item.i18n[state.language][field];
  }

  return item[field] || "";
}

function getFolders() {
  if (typeof QUIZ_FOLDERS !== "undefined") {
    return QUIZ_FOLDERS;
  }

  return [
    {
      id: "ekg-repetition",
      title: "EKG repetition",
      description: "PR-interval, AV-blok og Wolff-Parkinson-White.",
      materials: QUIZ_MATERIALS
    }
  ];
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  document.querySelector('meta[name="theme-color"]').setAttribute(
    "content",
    state.theme === "dark" ? "#071923" : "#0f7f95"
  );
  themeToggle.checked = state.theme === "dark";
}

function applyLanguage() {
  document.documentElement.lang = I18N[state.language].locale;
  appEyebrow.textContent = t("appEyebrow");
  foldersHeading.textContent = t("foldersHeading");
  foldersIntro.textContent = t("foldersIntro");
  materialsHeading.textContent = t("materialsHeading");
  materialsIntro.textContent = t("materialsIntro");
  settingsTitle.textContent = t("settings");
  settingsEyebrow.textContent = t("settingsEyebrow");
  themeTitle.textContent = t("theme");
  themeDescription.textContent = t("themeDescription");
  languageTitle.textContent = t("language");
  languageDescription.textContent = t("languageDescription");
  resetButton.textContent = t("reset");
  prevQuestion.textContent = t("previous");
  nextQuestion.textContent = t("next");
  backButton.setAttribute("aria-label", t("back"));
  settingsButton.setAttribute("aria-label", t("settings"));
  closeSettings.setAttribute("aria-label", t("close"));
  authorText.textContent = t("author");
  renderLanguageOptions();
  renderCurrentView();
}

function renderLanguageOptions() {
  languageGrid.innerHTML = "";

  Object.keys(I18N).forEach((language) => {
    const button = document.createElement("button");
    button.className = "language-option";
    button.type = "button";
    button.dataset.active = language === state.language;
    button.textContent = I18N[state.language].languages[language];
    button.addEventListener("click", () => {
      state.language = language;
      localStorage.setItem("app-language", language);
      applyLanguage();
    });
    languageGrid.appendChild(button);
  });
}

function renderFolders() {
  foldersGrid.innerHTML = "";

  getFolders().forEach((folder) => {
    const totalQuestions = folder.materials.reduce((sum, material) => sum + material.questions.length, 0);
    const button = document.createElement("button");
    button.className = "material-card folder-card";
    button.type = "button";
    button.innerHTML = `
      <span class="folder-icon" aria-hidden="true">
        <span></span>
      </span>
      <h3>${localized(folder, "title")}</h3>
      <p>${localized(folder, "description")}</p>
      <span class="card-meta">${format(t("folderCount"), { count: folder.materials.length })} · ${format(t("questionCount"), { count: totalQuestions })}</span>
    `;
    button.addEventListener("click", () => openFolder(folder.id));
    foldersGrid.appendChild(button);
  });
}

function renderMaterials() {
  materialsGrid.innerHTML = "";

  state.currentFolder.materials.forEach((material) => {
    const button = document.createElement("button");
    button.className = "material-card";
    button.type = "button";
    button.innerHTML = `
      <h3>${localized(material, "title")}</h3>
      <p>${localized(material, "description")}</p>
      <span class="card-meta">${format(t("questionCount"), { count: material.questions.length })}</span>
    `;
    button.addEventListener("click", () => openMaterial(material.id));
    materialsGrid.appendChild(button);
  });
}

function renderCurrentView() {
  if (state.currentView === "folders") {
    showFolders();
  } else if (state.currentView === "materials") {
    showMaterials();
  } else {
    renderQuestion();
  }
}

function showFolders() {
  state.currentView = "folders";
  foldersScreen.classList.remove("hidden");
  materialsScreen.classList.add("hidden");
  quizScreen.classList.add("hidden");
  backButton.classList.add("hidden");
  screenTitle.textContent = APP_NAME;
  renderFolders();
}

function openFolder(folderId) {
  state.currentFolder = getFolders().find((folder) => folder.id === folderId);
  showMaterials();
}

function showMaterials() {
  state.currentView = "materials";
  foldersScreen.classList.add("hidden");
  materialsScreen.classList.remove("hidden");
  quizScreen.classList.add("hidden");
  backButton.classList.remove("hidden");
  screenTitle.textContent = localized(state.currentFolder, "title");
  renderMaterials();
}

function openMaterial(materialId) {
  state.currentMaterial = state.currentFolder.materials.find((material) => material.id === materialId);
  state.currentQuestionIndex = 0;
  state.answers = {};
  state.sessionQuestions = shuffleArray(state.currentMaterial.questions).map((question) => randomizeQuestion(question));
  state.currentView = "quiz";

  foldersScreen.classList.add("hidden");
  materialsScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  backButton.classList.remove("hidden");
  screenTitle.textContent = localized(state.currentMaterial, "title");

  renderQuestion();
}

function randomizeQuestion(question) {
  const options = question.options.map((option, index) => ({ option, originalIndex: index }));
  const shuffledOptions = shuffleArray(options);

  return {
    ...question,
    displayOptions: shuffledOptions.map((item) => item.option),
    displayAnswer: shuffledOptions.findIndex((item) => item.originalIndex === question.answer)
  };
}

function renderQuestion() {
  const question = state.sessionQuestions[state.currentQuestionIndex];

  if (!question) {
    return;
  }

  const selectedAnswer = state.answers[state.currentQuestionIndex];
  const isAnswered = selectedAnswer !== undefined;

  screenTitle.textContent = localized(state.currentMaterial, "title");
  materialLabel.textContent = localized(state.currentMaterial, "title");
  questionCounter.textContent = format(t("questionOf"), {
    current: state.currentQuestionIndex + 1,
    total: state.sessionQuestions.length
  });
  questionText.textContent = localized(question, "text");
  answersList.innerHTML = "";

  question.displayOptions.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `
      <span class="answer-letter">${letters[optionIndex]}</span>
      <span>${localized(option, "text") || option}</span>
    `;

    if (isAnswered && optionIndex === question.displayAnswer) {
      button.classList.add("correct");
    }

    if (isAnswered && optionIndex === selectedAnswer && selectedAnswer !== question.displayAnswer) {
      button.classList.add("incorrect");
    }

    button.addEventListener("click", () => chooseAnswer(optionIndex));
    answersList.appendChild(button);
  });

  renderFeedback(question, selectedAnswer);
  renderNavigation();
  renderScore();
}

function chooseAnswer(optionIndex) {
  state.answers[state.currentQuestionIndex] = optionIndex;
  renderQuestion();
}

function renderFeedback(question, selectedAnswer) {
  feedbackText.className = "feedback";

  if (selectedAnswer === undefined) {
    feedbackText.textContent = t("chooseAnswer");
    return;
  }

  if (selectedAnswer === question.displayAnswer) {
    feedbackText.classList.add("good");
    feedbackText.textContent = `${t("correct")} ${localized(question, "explanation")}`;
    return;
  }

  feedbackText.classList.add("bad");
  feedbackText.textContent = `${t("incorrect")} ${t("rightAnswer")}: ${letters[question.displayAnswer]}. ${localized(question, "explanation")}`;
}

function renderNavigation() {
  prevQuestion.disabled = state.currentQuestionIndex === 0;
  nextQuestion.disabled = state.currentQuestionIndex === state.sessionQuestions.length - 1;
  progressFill.style.width = `${((state.currentQuestionIndex + 1) / state.sessionQuestions.length) * 100}%`;
}

function renderScore() {
  const answeredIndexes = Object.keys(state.answers);
  const correctCount = answeredIndexes.filter((index) => {
    const question = state.sessionQuestions[Number(index)];
    return state.answers[index] === question.displayAnswer;
  }).length;

  scorePill.textContent = `${correctCount} / ${state.sessionQuestions.length}`;
}

function resetProgress() {
  Object.keys(localStorage)
    .filter((key) => key.startsWith("quiz-answers-"))
    .forEach((key) => localStorage.removeItem(key));

  state.answers = {};
  if (state.currentView === "quiz" && state.currentMaterial) {
    state.currentQuestionIndex = 0;
    state.sessionQuestions = shuffleArray(state.currentMaterial.questions).map((question) => randomizeQuestion(question));
    renderQuestion();
  }

  resetButton.textContent = t("resetDone");
  setTimeout(() => {
    resetButton.textContent = t("reset");
  }, 1400);
}

function shuffleArray(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

prevQuestion.addEventListener("click", () => {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex -= 1;
    renderQuestion();
  }
});

nextQuestion.addEventListener("click", () => {
  if (state.currentQuestionIndex < state.sessionQuestions.length - 1) {
    state.currentQuestionIndex += 1;
    renderQuestion();
  }
});

backButton.addEventListener("click", () => {
  if (state.currentView === "quiz") {
    showMaterials();
    return;
  }

  showFolders();
});

settingsButton.addEventListener("click", () => {
  settingsModal.classList.remove("hidden");
});

closeSettings.addEventListener("click", () => {
  settingsModal.classList.add("hidden");
});

settingsModal.addEventListener("click", (event) => {
  if (event.target === settingsModal) {
    settingsModal.classList.add("hidden");
  }
});

themeToggle.addEventListener("change", () => {
  state.theme = themeToggle.checked ? "dark" : "light";
  localStorage.setItem("app-theme", state.theme);
  applyTheme();
});

resetButton.addEventListener("click", resetProgress);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

applyTheme();
applyLanguage();
