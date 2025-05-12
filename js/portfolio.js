document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('light-mode-toggle');
    const icon = toggleButton.querySelector('i');
    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            document.body.classList.toggle('light-mode');
            document.querySelector('.navbar').classList.toggle('light-mode');
            document.querySelector('.about-me').classList.toggle('light-mode');
            document.querySelector('.call-to-action').classList.toggle('light-mode');
            document.querySelector('.ice-breaker').classList.toggle('light-mode');
            document.querySelector('footer').classList.toggle('light-mode');

            // Apply light-mode class to all .question elements
            document.querySelectorAll('.question').forEach(function (question) {
                question.classList.toggle('light-mode');
            });
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
