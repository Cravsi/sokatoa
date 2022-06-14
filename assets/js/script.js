/**
 * Load JS content after page is loaded
 */
window.addEventListener('load', function () {

    const landingScreen = document.getElementById('landing-screen');
    const learnScreen = document.getElementById('learn-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const reviewScreen = document.getElementById('review-screen');
    let navButtons = document.getElementsByClassName('nav-button');

    for (let i = 0; i < navButtons.length; i++) {
        let page = navButtons[i].getAttribute('data-type');

        navButtons[i].addEventListener('click', goToPage(page))
    }

    /**
     * Function to select the correct page section on the HTML when the
     * corresponding button is pressed.
     */
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