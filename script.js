const bubbleContainer = document.querySelector('.bubble-container');

    function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      const size = Math.random() * 80 + 40;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * window.innerWidth}px`;
      
      bubbleContainer.appendChild(bubble);

      setTimeout(() => bubble.remove(), 12000);
    }

    setInterval(createBubble, 600);