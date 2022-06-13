/**
 * Load JS content after page is loaded
 */
document.addEventListener('DOMContentLoaded', function () {
    
    const landingScreen = document.getElementById('landing-screen');
    const learnScreen = document.getElementById('learn-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const reviewScreen = document.getElementById('review-screen');

    goToLanding();
    /**
     * Function to hide all other screens and show landing screen
     */
    function goToLanding() {
        landingScreen.classList.remove('hide');
        learnScreen.classList.add('hide');
        quizScreen.classList.add('hide');
        reviewScreen.classList.add('hide');
    }

    /**
     * Function to hide all other screens and show learn screen
     */
    function learnScreen() {

    }

    /**
     * Function to hide all other screens and show practice screen
     */
    function practiceScreen() {

    }

    /**
     * Function to hide all other screens and show review screen
     */
    function reviewScreen() {

    }
})