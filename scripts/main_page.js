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

  //Last updated date insert without time
  //document.getElementById("lastUpdated").textContent = document.lastModified; includes time

  const lastModified = new Date(document.lastModified);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("lastUpdated").textContent = lastModified.toLocaleDateString(undefined, options);


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

  //Code for when viewing Project section for JIRA ticket example
  function openModal() {
    document.getElementById('imageModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Disable background scrolling
    }

    function closeModal() {
        document.getElementById('imageModal').style.display = 'none';
        document.body.style.overflow = 'auto'; // Enable background scrolling
    }
    //Allow zooming of image, image font was very small
    function zoomImage(img) {
        const isZoomed = img.style.transform === "scale(2)";
        img.style.transform = isZoomed ? "scale(1)" : "scale(2)";
        img.style.transition = "transform 0.3s ease"; // Smooth transition
    }

    //Update Projects to display years of experience for 7 seconds

    function updateCaption(element, newText) {
        const originalText = element.textContent;
        element.textContent = newText;
    
        // then revert back to original text   
        setTimeout(() => {
            element.textContent = originalText;
        }, 7000);
    }

     // Checks if visit count exists in local storage
     let visitCount = localStorage.getItem('visitCount');

     // If it doesn't exist, initialize it to 0
     if (visitCount === null) {
         visitCount = 0;
     }
 
     // Increment visit count
     visitCount++;
 
     // Store the updated count back in local storage
     localStorage.setItem('visitCount', visitCount);
 
     // Display the visit count
     document.getElementById('visitCount').textContent = visitCount;

  /*Code to implement an email service
    document.getElementById('form-Submit').addEventListener('click', function() {
        // Get form values
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;

        // Simple validation
        if (name && email && message) {
            // You can implement the actual form submission logic here
            console.log('Form submitted:', { name, email, message });

            // Show success message
            document.getElementById('successMessage').style.display = 'block';

            // Clear the form
            document.getElementById('contactName').value = '';
            document.getElementById('contactEmail').value = '';
            document.getElementById('contactMessage').value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

  //Send email code
    (function() {
        emailjs.init("mpitts.engineer@gmail.com"); // Replace with your EmailJS user ID
    })();

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.sendForm('service_dia7s4q', 'template_2foue1e', this)
            .then(function() {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email: ' + JSON.stringify(error));
            });
    });
*/
 