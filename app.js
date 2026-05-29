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
const resetQuizButton = document.querySelector("#resetQuiz");

const letters = ["A", "B", "C", "D"];
let currentMaterial = null;
let currentQuestionIndex = 0;
let answers = {};
let shuffledQuestions = [];

function shuffleArray(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function prepareQuestions(material) {
  return shuffleArray(material.questions).map((question) => {
    const options = question.options.map((option, originalIndex) => ({
      text: option,
      isCorrect: originalIndex === question.answer
    }));

    return {
      text: question.text,
      explanation: question.explanation,
      options: shuffleArray(options)
    };
  });
}

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
  answers = {};
  shuffledQuestions = prepareQuestions(currentMaterial);

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

function resetQuiz() {
  currentQuestionIndex = 0;
  answers = {};
  shuffledQuestions = prepareQuestions(currentMaterial);
  renderQuestion();
}

function renderQuestion() {
  const question = shuffledQuestions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];
  const isAnswered = selectedAnswer !== undefined;

  materialLabel.textContent = currentMaterial.title;
  questionCounter.textContent = `Spørgsmål ${currentQuestionIndex + 1} af ${shuffledQuestions.length}`;
  questionText.textContent = question.text;
  answersList.innerHTML = "";

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.innerHTML = `
      <span class="answer-letter">${letters[optionIndex]}</span>
      <span>${option.text}</span>
    `;

    if (isAnswered && option.isCorrect) {
      button.classList.add("correct");
    }

    if (isAnswered && optionIndex === selectedAnswer && !option.isCorrect) {
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
  renderQuestion();
}

function renderFeedback(question, selectedAnswer) {
  feedbackText.className = "feedback";

  if (selectedAnswer === undefined) {
    feedbackText.textContent = "Vælg svar A, B, C eller D.";
    return;
  }

  const selectedOption = question.options[selectedAnswer];
  const correctIndex = question.options.findIndex((option) => option.isCorrect);

  if (selectedOption.isCorrect) {
    feedbackText.classList.add("good");
    feedbackText.textContent = `Korrekt. ${question.explanation}`;
    return;
  }

  feedbackText.classList.add("bad");
  feedbackText.textContent = `Ikke korrekt. Det rigtige svar er ${letters[correctIndex]}. ${question.explanation}`;
}

function renderNavigation() {
  prevQuestion.disabled = currentQuestionIndex === 0;
  nextQuestion.disabled = currentQuestionIndex === shuffledQuestions.length - 1;
  progressFill.style.width = `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%`;
}

function renderScore() {
  const answeredIndexes = Object.keys(answers);
  const correctCount = answeredIndexes.filter((index) => {
    const question = shuffledQuestions[Number(index)];
    return question.options[answers[index]].isCorrect;
  }).length;

  scorePill.textContent = `${correctCount} / ${shuffledQuestions.length}`;
}

prevQuestion.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
});

nextQuestion.addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  }
});

backToMaterials.addEventListener("click", closeMaterial);
resetQuizButton.addEventListener("click", resetQuiz);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

renderMaterials();
