const QUESTIONS_API_BASE_URL = 'https://www.algoexpert.io/api/fe/questions';

async function fetchQuestions() {
  try {
    const response = await fetch(QUESTIONS_API_BASE_URL);
    const questions = await response.json();

    return questions;
  } catch (err) {
    console.log("🚀 ~ file: problem-1.js ~ line 8 ~ fetchQuestions ~ err", err);
  }
}

function groupQuestionsByCategories(questions = []) {
  const questionsByCategories = {};
  questions.forEach(question => {
    if (questionsByCategories.hasOwnProperty(question.category)) {
      questionsByCategories[question.category].push(question);
    } else {
      questionsByCategories[question.category] = [question];
    }
  });

  return questionsByCategories;
}

function createCategory(categoryName = '', questions = []) {
  const categoryDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  
  categoryDiv.classList.add('category');
  h2.textContent = categoryName;

  categoryDiv.append(h2);

  questions.forEach(question => {
    const h3 = document.createElement('h3');
    const questionDiv = document.createElement('div');

    questionDiv.classList.add('question');
    h3.textContent = question.name;

    questionDiv.append(h3);
    categoryDiv.append(questionDiv);
  });

  return categoryDiv;
}

async function fetchAndAppendQuestions() {
  const wrapper = document.getElementById('wrapper');
  const questions = await fetchQuestions();
  const questionsByCategories = groupQuestionsByCategories(questions);

  for (const [category, questions] of Object.entries(questionsByCategories)) {
    const categoryElement = createCategory(category, questions);
    wrapper.append(categoryElement);
  }
}