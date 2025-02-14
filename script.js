document.addEventListener('DOMContentLoaded', function () {
    let loveLetter = "My Dearest Chrish, I love you beyond words. Will you marry me?";  // Your personalized message
    let index = 0;
    let letterElement = document.getElementById('love-letter');

    // Typewriter effect for love letter
    function typeWriter() {
        if (index < loveLetter.length) {
            letterElement.innerHTML += loveLetter.charAt(index);
            index++;
            setTimeout(typeWriter, 150);  // Adjust speed of typing
        }
    }

    // Start typing the love letter
    typeWriter();

    // Floating hearts effect
    setInterval(function() {
        let heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = '❤️'; // You can change the heart symbol
        document.body.appendChild(heart);
    }, 1000);

    // Final Proposal Moment
    setTimeout(function() {
        let proposalText = document.createElement('h2');
        proposalText.innerText = "Will you marry me?";
        proposalText.classList.add('proposal');
        document.body.appendChild(proposalText);
        proposalText.style.display = 'block';
    }, 5000);  // Proposal text shows 5 seconds after the love letter

});
