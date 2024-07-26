document.addEventListener('DOMContentLoaded', function() {
    const bg = document.getElementById('page1background');
    const p1Elements = document.getElementsByClassName('P1');
    const p2Element = document.querySelector('.p2');
    const p3Element = document.querySelector('.P3');
    const footElement = document.getElementById('foot');
    const p4Element = document.querySelector('.p4');
    const p5Element = document.querySelector('.p5');
    const p6Element = document.querySelector('.p6');
    const lipsElement = document.getElementById('lips');
    const p7Element = document.querySelector('.p7');
    const p8Element = document.querySelector('.p8');
    const hickeyElement = document.getElementById('hickey');
    const audio = document.getElementById('backgroundAudio');
    
    // Play audio on user interaction
    document.body.addEventListener('click', function() {
        audio.play();
    }, { once: true });


    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
     );
    }
    

    function handleScroll() {
      if (isElementInViewport(bg)) {
        if (!bg.classList.contains('visible')) {
          bg.classList.add('visible');
          
          // Add visible class to P1 elements after a short delay
          setTimeout(() => {
            Array.from(p1Elements).forEach(el => {
              el.classList.add('visible');
            });
          }, 1000); // 1 second delay
  
          // Add glow class to P1 elements after another delay
          setTimeout(() => {
            Array.from(p1Elements).forEach(el => {
              el.classList.add('glow');
            });
          }, 2000); // 2 seconds delay
        }
      } else {
        // Reset animations when out of viewport
        bg.classList.remove('visible');
        Array.from(p1Elements).forEach(el => {
          el.classList.remove('visible', 'glow');
        });
      }

      // Handle p2 fade-in
      if (isElementInViewport(p2Element)) {
        p2Element.classList.add('visible');
      } else {
        p2Element.classList.remove('visible');
      }

      if (isElementInViewport(p3Element)) {
        p3Element.classList.add('visible');
    } else {
        p3Element.classList.remove('visible');
    }
    if (isElementInViewport(footElement)) {
        footElement.classList.add('visible');
    } else {
        footElement.classList.remove('visible');
    }
    if (isElementInViewport(p4Element)) {
        p4Element.classList.add('visible');
      } else {
        p4Element.classList.remove('visible');
      }
      if (isElementInViewport(p5Element)) {
        p5Element.classList.add('visible');
      } else {
        p5Element.classList.remove('visible');
      }
      if (isElementInViewport(p6Element)) {
        p6Element.classList.add('visible');
      } else {
        p6Element.classList.remove('visible');
      }
      if (isElementInViewport(lipsElement)) {
        lipsElement.classList.add('visible');
    } else {
        lipsElement.classList.remove('visible');
    }
    if (isElementInViewport(p7Element)) {
        p7Element.classList.add('visible');
      } else {
        p7Element.classList.remove('visible');
      }
    if (isElementInViewport(p8Element)) {
        p8Element.classList.add('visible');
      } else {
        p8Element.classList.remove('visible');
      }
      if (isElementInViewport(hickeyElement)) {
        hickeyElement.classList.add('visible');
    } else {
        hickeyElement.classList.remove('visible');
    }
    }

    // Throttle function to limit how often the scroll event fires
    function throttle(func, limit) {
      let inThrottle;
      return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      }
    }
  
    // Add event listener with throttled handleScroll
    window.addEventListener('scroll', throttle(handleScroll, 100));
    
    // Call handleScroll once to check initial position
    handleScroll();
});