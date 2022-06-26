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
const nextButton = document.querySelector('#next-question');
let score = parseInt(document.querySelector('#score').innerHTML);
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
nextButton.addEventListener('click', nextQuestion)

function startQuiz() {
    beginButton.classList.add('hide')
    quizContainer.classList.remove('hide')

    shuffledQuestions = trigQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

    nextQuestion()
}   

/**
 * Set the next question in quiz area
 */
function nextQuestion() {
    if (currentQuestionIndex === shuffledQuestions.length) {
        showReview();
    } else {
        resetQuestionArea()
        setQuestion(shuffledQuestions[currentQuestionIndex])

        let next = document.querySelector('#next-question')
        if (!next.classList.contains('hide')){
        next.classList.add('hide');
        }
    }
}

/**
 * Removes options from previous question. Prevents user selecting 
 * multiple options on the one question.
 */
function resetQuestionArea() {
    if (quizQuestionContainer.hasAttribute('chosen')){
        quizQuestionContainer.removeAttribute('chosen')
    }
    
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
            newButton.setAttribute('correct', '')
        }
                
        newButton.addEventListener('click', checkAnswer);
        quizQuestionContainer.appendChild(newButton)
    })

    currentQuestionIndex++;
};

/**
 * Handles quiz response when question is answered. 
 * @param {*} event 
 */
function checkAnswer(event) {
    let selectedButton = event.target

    if (!quizQuestionContainer.hasAttribute('chosen')) {
        if (selectedButton.hasAttribute('correct')) {
            incrementScore();
            selectedButton.classList.add('correct')
        } else {
            selectedButton.classList.add('incorrect')
        }
        quizQuestionContainer.setAttribute('chosen', '')
        nextButton.classList.remove('hide')
    }
}

function incrementScore () {
    document.querySelector('#score').innerHTML = ++score;
}

function showReview() {
    quizContainer.classList.add('hide')
    nextButton.classList.add('hide')
    
    let quizNext = document.querySelector('[data-type="quiz-next"]')
    let complete = document.querySelector('#quiz-complete')
    quizNext.classList.remove('hide')
    complete.classList.remove('hide')

    let scoreReview = document.querySelector('#score-review');
    scoreReview.innerHTML = `
    <h2><span>Score = ${score}  </span><span>   Time = ${time}</span></h2>`
}

function quizReset () {

};