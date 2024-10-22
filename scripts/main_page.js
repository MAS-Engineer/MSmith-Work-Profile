  const numStars = 300; // Number of stars
  const stars = [];

  // Create stars
  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 3 + 2; // Random size between 2 and 5
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;
      document.body.appendChild(star);
      stars.push(star);
  }

  // Mouse move effect
  document.addEventListener('mousemove', (e) => {
      stars.forEach((star) => {
          const starRect = star.getBoundingClientRect();
          const starX = starRect.left + starRect.width / 2;
          const starY = starRect.top + starRect.height / 2;
          const distX = e.clientX - starX;
          const distY = e.clientY - starY;
          const distance = Math.sqrt(distX * distX + distY * distY);

          if (distance < 100) {
              star.style.opacity = 1; // Full opacity when near the mouse
              star.style.transform = `scale(${1 + (100 - distance) / 100})`; // Scale effect
          } else {
              star.style.opacity = 0.8; // Default opacity
              star.style.transform = 'scale(1)'; // Reset scale
          }
      });
  });

  //Send email code
    (function() {
        emailjs.init("mpitts.engineer@gmail.com"); // Replace with your EmailJS user ID
    })();

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email: ' + JSON.stringify(error));
            });
    });