document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('light-mode-toggle');
    const icon = toggleButton.querySelector('i');
    if (toggleButton) {
                // ...existing code...
        toggleButton.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            const navbar = document.querySelector('.navbar');
            if (navbar) navbar.classList.toggle('light-mode');
            const aboutMe = document.querySelector('.about-me');
            if (aboutMe) aboutMe.classList.toggle('light-mode');
            const callToAction = document.querySelector('.call-to-action');
            if (callToAction) callToAction.classList.toggle('light-mode');
            const iceBreaker = document.querySelector('.ice-breaker');
            if (iceBreaker) iceBreaker.classList.toggle('light-mode');
            const hobbies = document.querySelector('.hobbies');
            if (hobbies) hobbies.classList.toggle('light-mode');
            const hobbyList = document.querySelector('.hobby-list');
            if (hobbyList) hobbyList.classList.toggle('light-mode');
            const footer = document.querySelector('footer');
            if (footer) footer.classList.toggle('light-mode');
        
            // ...rest of your code...
        });;

            document.querySelector('footer').classList.toggle('light-mode');

            // Apply light-mode class to all .question elements
            document.querySelectorAll('.question').forEach(function (question) {
                question.classList.toggle('light-mode');
            document.querySelectorAll('.ice-breaker-title').forEach(function (title) {
                title.classList.toggle('light-mode');
            });

            // Change the icon based on the current mode
            if (document.body.classList.contains('light-mode')) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            } else {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }

            // Save the user's preference in localStorage
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });

        // Apply the saved theme on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            document.querySelector('.navbar').classList.add('light-mode');
            document.querySelector('.about-me').classList.add('light-mode');
            document.querySelector('.call-to-action').classList.add('light-mode');
            document.querySelector('.ice-breaker').classList.add('light-mode');
            document.querySelector('.hobbies').classList.add('light-mode');
            document.querySelector('.hobby-list').classList.add('light-mode');
            document.querySelector('footer').classList.add('light-mode');

            // Apply light-mode class to all .question elements
            document.querySelectorAll('.question').forEach(function (question) {
                question.classList.add('light-mode');
            });
            document.querySelectorAll('.ice-breaker-title').forEach(function (title) {
                title.classList.add('light-mode');
            });

            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    } else {
        console.error("Toggle button with ID 'light-mode-toggle' not found.");
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Edg')) { // Detect Microsoft Edge
        console.log('User is using Edge browser');

        // Remove all content from the page
        document.body.innerHTML = '';
        document.body.style.backgroundColor = 'black';

        // Optionally, display a message
        const edgeMessage = document.createElement('div');
        edgeMessage.textContent = 'This site is not supported on Microsoft Edge. Please use a different browser.';
        edgeMessage.style.color = 'white';
        edgeMessage.style.textAlign = 'center';
        edgeMessage.style.fontSize = '2rem';
        edgeMessage.style.padding = '2rem';
        document.body.appendChild(edgeMessage);
    } else if (userAgent.includes('Chrome')) { // Detect Chrome browser
        console.log('User is using Chrome browser');
    } else if (userAgent.includes('Firefox')) { // Detect Firefox browser
        console.log('User is using Firefox browser');
    } else {
        console.log('User is not using Edge');
    }
});

//random fact logic
    const facts = [
        "I did stage tech for every year of high school.",
        "I have enough chickens that I actually sell eggs.",
        "I collect plastic spoons from cafeterias.",
        "I have an odd obsession with the number 7. Though one of my friends says it's an overated number.",
        "My Ass is NOT listnening!",
        "I love purple so much it's basically my brand.",
        "I can name all the country flags, every single one",
        "I may or may not be crazy, since i talk to myself",
        "When i'm swimming, i enjoy the pain",
        "HELP! HELP ME! HELP!",
        "I have the flag of Nepal hanging up in my room, though i have no relations to Nepal",
        "Sharks in 1962 watching the cuban missile crisis",
        "I have never seen the movie 'Back to the Future'",
        "I play poker with my friends",
        "My cat has three legs",
        "You smell"
    ];
    const factElement = document.getElementById('random-fact-text');
    if (factElement) {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factElement.textContent = facts[randomIndex];
    }
