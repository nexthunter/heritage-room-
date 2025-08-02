document.addEventListener('DOMContentLoaded', function() {
    // Get the marquee elements
    const marqueeContent = document.querySelector('.marquee-content');
    const marqueeContainer = document.querySelector('.marquee-container');
    const collectionItems = document.querySelectorAll('.collection-item');
    
    // Function to duplicate items for infinite scrolling
    function duplicateItems() {
        // Clone all collection items
        collectionItems.forEach(item => {
            const clone = item.cloneNode(true);
            marqueeContent.appendChild(clone);
        });
        
        // Calculate and adjust animation properties
        adjustAnimation();
    }
    
    // Function to adjust animation based on content width
    function adjustAnimation() {
        // Get the total width of all original items
        const contentWidth = marqueeContent.offsetWidth;
        const containerWidth = marqueeContainer.offsetWidth;
        
        // Calculate animation duration based on content width
        // Larger content = slower animation to maintain consistent speed
        const baseDuration = 2; // seconds
        const calculatedDuration = (contentWidth / 500) * baseDuration;
        const finalDuration = Math.max(calculatedDuration, 15); // Minimum 15 seconds
        
        // Update the animation duration
        marqueeContent.style.animationDuration = `${finalDuration}s`;
        
        // Update the keyframes end position
        // We want to move exactly half the content width for seamless looping
        const itemsWidth = contentWidth / 2;
        updateKeyframes(itemsWidth);
    }
    
    // Function to update the keyframes for the scroll animation
    function updateKeyframes(distance) {
        // Create a stylesheet for our dynamic keyframes
        const styleSheet = document.createElement('style');
        styleSheet.id = 'marquee-keyframes';
        
        // Define the keyframes with calculated distance
        const keyframes = `
            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-${distance}px);
                }
            }
        `;
        
        styleSheet.textContent = keyframes;
        
        // Remove any existing keyframes style and add the new one
        const existingStyle = document.getElementById('marquee-keyframes');
        if (existingStyle) {
            existingStyle.remove();
        }
        
        document.head.appendChild(styleSheet);
    }
    
    // Initialize the marquee
    duplicateItems();
    
    // Handle window resize for responsive behavior
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            adjustAnimation();
        }, 250); // Debounce resize events
    });
    
    // Add hover effect for individual items
    document.querySelectorAll('.collection-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add a subtle highlight effect
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            // Reset to original shadow
            this.style.boxShadow = '';
        });
    });
});