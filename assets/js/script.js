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
        let direction = navButtons[i].getAttribute('direction');

        navButtons[i].addEventListener('click', goToPage(page, direction))
    }

    /**
     * Function to select the correct page section on the HTML when the
     * corresponding button is pressed.
     */
    function goToPage(page, direction) {
        if (!page) return;  // Guard clause

        switch (page, direction) {
            case 'landing':
                if (landingScreen.classList.contains('hide')) {
                    landingScreen.classList.remove('hide'); 
                }
                break;
            case 'learn':
                if (direction === 'next') {
                    landingScreen.classList.add('hide');
                    learnScreen.classList.remove('hide');
                    break;
                }
                quizScreen.classList.add('hide');
                learnScreen.classList.remove('hide');
                break;
            case 'practice':
                if (direction === 'next') {
                    quizScreen.classList.add('hide');
                    practiceScreen.classList.remove('hide');
                    break;
                }
                reviewScreen.classList.add('hide');
                practiceScreen.classList.remove('hide');
                break;
            case 'review':
                if (reviewScreen.classList.contains('hide')) {
                    reviewScreen.classList.remove('hide'); 
                }
                break;
            default:
                break;
        }
    }
})