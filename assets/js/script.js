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
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let question = document.getElementById('question');
let quizImage = document.getElementById('quiz-image');
let gameStart


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

/**
 * Gets a random question from the getQuestion() function
 * in quiz.js and populates the quiz grid.
 */
function quizQuestion() {
    let questionObject = getQuestion();
    let answer = questionObject.trigAnswer;

    question.innerHTML = questionObject.trigQuestion;
    option1.innerHTML = questionObject.trigOptions[0];
    option2.innerHTML = questionObject.trigOptions[1];
    option3.innerHTML = questionObject.trigOptions[2];
    option4.innerHTML = questionObject.trigOptions[3];
    quizImage.setAttribute('src', trigImage);

    return answer;
};

function toggleQuiz () {

};

function quizReset () {

};