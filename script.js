let slideIndex = 1;

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}
document.addEventListener("DOMContentLoaded", function () {
  const passwordPrompt = document.getElementById("passwordPrompt");
  const content = document.getElementById("content");

  window.checkPassword = function () {
      const passwordInput = document.getElementById("password");
      const enteredPassword = passwordInput.value;

      // Replace 'yourStaticPassword' with your desired password
      const correctPassword = '16062023';

      if (enteredPassword === correctPassword) {
          passwordPrompt.style.display = "none";
          content.style.display = "block";
      } else {
          alert("Incorrect password. Please try again.");
      }
  };
});

