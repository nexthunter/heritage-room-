document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const progressNumber = document.querySelector(".progress-number");
  const nowElement = document.querySelector(".now");

  // Start loading animation
  let progress = 0;
  const totalDuration = 2500; // 2.5 seconds total loading time (faster)
  const interval = 25; // Update every 25ms (faster)
  const increment = 100 / (totalDuration / interval);

  // Flash animation for "NOW" text
  function animateNow() {
    setTimeout(() => {
      nowElement.style.opacity = "0.2";
      setTimeout(() => {
        nowElement.style.opacity = "1";
        animateNow();
      }, 500); // Faster flashing (500ms)
    }, 500); // Faster flashing (500ms)
  }

  // Start the loading counter
  const loadingTimer = setInterval(() => {
    progress += increment;

    if (progress >= 100) {
      progress = 100;
      clearInterval(loadingTimer);

      setTimeout(() => {
        console.log('Loading complete!');
        
        // Add fade-out effect
        document.body.style.transition = 'opacity 0.95s ease-out';
        document.body.style.opacity = '0';
        
        // Wait for fade-out to complete, then redirect
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 400);
        
    }, 1000);
    
    }

    // Update the progress number
    progressNumber.textContent = Math.floor(progress);

    // Optional: Update other visual elements based on progress
    updateVisuals(progress);
  }, interval);

  // Update visual elements based on progress
  function updateVisuals(progress) {
    // Example: Change opacity or scale of elements based on progress
    if (progress > 80) {
      document.querySelector(".now").style.fontWeight = "bold";
      document.querySelector(".now").style.letterSpacing = "0.05em";
    }
  }

  // Reset animation for demo purposes
  function resetAnimation() {
    progress = 0;
    progressNumber.textContent = "0";

    // Reset any visual changes
    document.querySelector(".now").style.fontWeight = "300";
    document.querySelector(".now").style.letterSpacing = "normal";

    // Start the counter again
    const loadingTimer = setInterval(() => {
      progress += increment;

      if (progress >= 100) {
        progress = 100;
        clearInterval(loadingTimer);

        setTimeout(() => {
          resetAnimation();
        }, 2000);
      }

      progressNumber.textContent = Math.floor(progress);
      updateVisuals(progress);
    }, interval);
  }

  // Start the flashing animation for NOW
  animateNow();
});
