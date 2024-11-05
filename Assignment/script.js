const letters = document.querySelectorAll(".letter");

function animateLetters(index) {
  if (index < letters.length) {
    letters[index].classList.add("show");
   
  }
}

animateLetters(0);
