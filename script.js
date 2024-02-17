function startCountdown(duration, element) {
    let timer = duration, hours, minutes, seconds;

    const interval = setInterval(() => {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        element.textContent = `${hours}:${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            element.textContent = "Deal expired";
        }
    }, 1000);
}

// Start countdown timers
document.addEventListener('DOMContentLoaded', () => {
    // Assuming you want a 24 hour countdown
    const twentyFourHours = 24 * 60 * 60;
    const countdownElements = document.querySelectorAll('.timer');

    countdownElements.forEach((el, index) => {
        // Start a countdown for each timer element
        startCountdown(twentyFourHours, el);
    });
});

async function loadData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // Process and display data
  }
  