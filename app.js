const materialsGrid = document.querySelector("#materialsGrid");
const materialsScreen = document.querySelector("#materialsScreen");
const quizScreen = document.querySelector("#quizScreen");
const backToMaterials = document.querySelector("#backToMaterials");
const screenTitle = document.querySelector("#screenTitle");
const materialLabel = document.querySelector("#materialLabel");
const questionCounter = document.querySelector("#questionCounter");
const scorePill = document.querySelector("#scorePill");
const progressFill = document.querySelector("#progressFill");
const questionText = document.querySelector("#questionText");
const answersList = document.querySelector("#answersList");
const feedbackText = document.querySelector("#feedbackText");
const prevQuestion = document.querySelector("#prevQuestion");
const nextQuestion = document.querySelector("#nextQuestion");

const letters = ["A", "B", "C", "D"];
let currentMaterial = null;
let currentQuestionIndex = 0;
let answers = {};

function renderMaterials() {
  materialsGrid.innerHTML = "";

  QUIZ_MATERIALS.forEach((material) => {
    const button = document.createElement("button");
    button.className = "material-card";
    button.type = "button";
    button.innerHTML = `
      <h3>${material.title}</h3>
      <p>${material.description}</p>
      <span class="card-meta">${material.questions.length} spørgsmål</span>
    `;
    button.addEventListener("click", () => openMaterial(material.id));
    materialsGrid.appendChild(button);
  });
}

function openMaterial(materialId) {
  currentMaterial = QUIZ_MATERIALS.find((material) => material.id === materialId);
  currentQuestionIndex = 0;
  answers = loadAnswers(materialId);

  materialsScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  backToMaterials.classList.remove("hidden");
  screenTitle.textContent = currentMaterial.title;

  renderQuestion();
}

function closeMaterial() {
  quizScreen.classList.add("hidden");
  materialsScreen.classList.remove("hidden");
  backToMaterials.classList.add("hidden");
  screenTitle.textContent = "EKG repetition";
}

function renderQuestion() {
  const question = currentMaterial.questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const isAnswered = selectedAnswer !== undefined;

  materialLabel.textContent = currentMaterial.title;
  questionCounter.textContent = `Spørgsmål ${currentQuestionIndex + 1} af ${currentMaterial.questions.length}`;
  questionText.textContent = question.text;
  answersList.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `
      <span class="answer-letter">${letters[optionIndex]}</span>
      <span>${option}</span>
    `;

    if (isAnswered && optionIndex === question.answer) {
      button.classList.add("correct");
    }

    if (isAnswered && optionIndex === selectedAnswer && selectedAnswer !== question.answer) {
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
  answers[currentQuestionIndex] = optionIndex;
  saveAnswers(currentMaterial.id, answers);
  renderQuestion();
}

function renderFeedback(question, selectedAnswer) {
  feedbackText.className = "feedback";

  if (selectedAnswer === undefined) {
    feedbackText.textContent = "Vælg svar A, B, C eller D.";
    return;
  }

  if (selectedAnswer === question.answer) {
    feedbackText.classList.add("good");
    feedbackText.textContent = `Korrekt. ${question.explanation}`;
    return;
  }

  feedbackText.classList.add("bad");
  feedbackText.textContent = `Ikke korrekt. Det rigtige svar er ${letters[question.answer]}. ${question.explanation}`;
}

function renderNavigation() {
  prevQuestion.disabled = currentQuestionIndex === 0;
  nextQuestion.disabled = currentQuestionIndex === currentMaterial.questions.length - 1;
  progressFill.style.width = `${((currentQuestionIndex + 1) / currentMaterial.questions.length) * 100}%`;
}

function renderScore() {
  const answeredIndexes = Object.keys(answers);
  const correctCount = answeredIndexes.filter((index) => {
    const question = currentMaterial.questions[Number(index)];
    return answers[index] === question.answer;
  }).length;

  scorePill.textContent = `${correctCount} / ${currentMaterial.questions.length}`;
}

function saveAnswers(materialId, materialAnswers) {
  localStorage.setItem(`quiz-answers-${materialId}`, JSON.stringify(materialAnswers));
}

function loadAnswers(materialId) {
  const saved = localStorage.getItem(`quiz-answers-${materialId}`);

  if (!saved) {
    return {};
  }

  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
}

prevQuestion.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
});

nextQuestion.addEventListener("click", () => {
  if (currentQuestionIndex < currentMaterial.questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  }
});

backToMaterials.addEventListener("click", closeMaterial);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}

renderMaterials();
