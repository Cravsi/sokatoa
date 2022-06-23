/**
 * Load JS content after page is loaded
 */

/**
 * Declaration of global constants and variables.
 */
const landingScreen = document.getElementById('landing-screen');
const learnScreen = document.getElementById('learn-screen');
const quizScreen = document.getElementById('quiz-screen');
const reviewScreen = document.getElementById('review-screen');
let navButtons = document.getElementsByClassName('nav-button');
const beginButton = document.getElementById('quiz-begin');
const quizContainer = document.getElementById('quiz-grid')
const quizQuestion = document.getElementById('quiz-grid-question')
let shuffledQuestions, currentQuestionIndex

/**
 * Function for navigational buttons located in index.html
 * Adds and removes the .hide class from section.
 * display: none to hide sections
 * display: block to show sections.
 * @param {string} button
 */
function goToPage(button) {

    switch (button) {
        case 'landing-next':
            landingScreen.classList.add('hide');
            learnScreen.classList.remove('hide');
            break;
        case 'learn-next':
            learnScreen.classList.add('hide');
            quizScreen.classList.remove('hide');
            break;
        case 'learn-back':
            learnScreen.classList.add('hide');
            landingScreen.classList.remove('hide');
        break;
        case 'quiz-next':
            quizScreen.classList.add('hide')
            reviewScreen.classList.remove('hide')
            break;
        case 'quiz-back':
            quizScreen.classList.add('hide')
            learnScreen.classList.remove('hide')
        break;
        case 'review-back':
            reviewScreen.classList.add('hide');
            quizScreen.classList.remove('hide');
        break;
        default:
            console.log("Unrecognised button: ", button)
            break;
    }
}

beginButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    beginButton.classList.add('hide')
    quizContainer.classList.remove('hide')

    shuffledQuestions = trigQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    setQuestion()
}

function nextQuestion() {
    setQuestion(shuffledQuestions[currentQuestionIndex])
}

/**
 * Gets a random question from the getQuestion() function
 * in quiz.js and populates the quiz grid.
 */
function setQuestion(question) {
    quizQuestion.innerHTML = question.trigQuestion
};

function quizReset () {

};