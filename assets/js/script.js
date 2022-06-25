/**
 * Declaration of global constants and variables.
 */
const landingScreen = document.querySelector('#landing-screen');
const learnScreen = document.querySelector('#learn-screen');
const quizScreen = document.querySelector('#quiz-screen');
const reviewScreen = document.querySelector('#review-screen');
const navButtons = Array.from(document.querySelectorAll('.nav-button'));
const beginButton = document.querySelector('#quiz-begin');
const quizContainer = document.querySelector('#quiz-grid')
const quizQuestion = document.querySelector('#quiz-grid-question')
const quizQuestionContainer = document.querySelector('#quiz-buttons')
const quizImage = document.querySelector('#quiz-image');
let shuffledQuestions
let currentQuestionIndex

/**
 * Nav button event listeners
 * @param {object} navButtons
 */
navButtons.forEach(button => {
    button.addEventListener('click', function (event){
        event.preventDefault()
        console.log(this.dataset.type)
        goToPage(this.dataset.type)
    })
})

/**
 * Navigational buttons 
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
    beginButton.classList.add('hide')
    quizContainer.classList.remove('hide')

    shuffledQuestions = trigQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    nextQuestion()
}   

// async function getJSON() {
//     const response = await fetch('./assets/js/quiz.json');
//     const questions = await response.json();
//     console.log(questions);
//     return questions;
// }

// function getJSON() {
//     fetch('./assets/js/quiz.json')
//         .then((res) => res.json())
//         .then((data) => {
//             return data
//         })
// }

/**
 * Set the next question in quiz area
 */
function nextQuestion() {
    resetQuestionArea()
    setQuestion(shuffledQuestions[currentQuestionIndex])
}

/**
 * Removes options from previous question.
 */
function resetQuestionArea() {
    while (quizQuestionContainer.firstChild) {
        quizQuestionContainer.removeChild(quizQuestionContainer.firstChild)
    }
}

/**
 * Sets the question provided in the quiz screen section. Options from each question
 * object are shuffled and a button is created for each option. The "correct" dataset
 * is added to the correct option.
 */
function setQuestion(question) {
    quizQuestion.innerHTML = question.trigQuestion
    quizImage.setAttribute('src', question.trigImage)
    let shuffleOptions = question.trigOptions.sort(() => Math.floor(Math.random() * 4))

    shuffleOptions.forEach(option => {
        const newButton = document.createElement('button')
        newButton.innerHTML = option
        newButton.classList.add('q-buttons')

        if (option === question.trigAnswer) {
            newButton.dataset.correct
        }

        quizQuestionContainer.appendChild(newButton)

    })
    
};

function quizReset () {

};