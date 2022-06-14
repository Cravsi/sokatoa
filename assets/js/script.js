/**
 * Load JS content after page is loaded
 */
document.addEventListener('DOMContentLoaded', function () {


    const landingScreen = document.getElementById('landing-screen');
    const learnScreen = document.getElementById('learn-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const reviewScreen = document.getElementById('review-screen');
    let navButtons = document.getElementsByClassName('nav-button');

    for (let button in navButtons) {
        button.addEventListener('click', function(){
            let page = this.getAttribute('data-type');
            goToPage(page);
        })
    }

    function goToPage(page) {
        if (page === 'landing') {
            landingScreen.classList.remove('hide');
            learnScreen.classList.add('hide');
            quizScreen.classList.add('hide');
            reviewScreen.classList.add('hide');

        } else if (page === 'learn') {
            landingScreen.classList.add('hide');
            learnScreen.classList.remove('hide');
            quizScreen.classList.add('hide');
            reviewScreen.classList.add('hide');
            
        } else if (page ==='practice') {
            landingScreen.classList.add('hide');
            learnScreen.classList.add('hide');
            quizScreen.classList.remove('hide');
            reviewScreen.classList.add('hide');

        } else if (page === 'review') {
            landingScreen.classList.add('hide');
            learnScreen.classList.add('hide');
            quizScreen.classList.add('hide');
            reviewScreen.classList.remove('hide');

        } else {
            alert(`Unimplemented page: ${page}`)
            throw `Unimplemented page: ${page}. Aborted!`
        }
    }
})