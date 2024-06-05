// document.addEventListener('DOMContentLoaded', function() {
//   const typingText = document.querySelector('.typing-text');

//   // Function to restart the animation with a delay
//   function restartAnimation() {
//     setTimeout(function() {
//       typingText.style.animationPlayState = 'running';
//     }, 3000); // 3000 milliseconds = 3 seconds delay
//   }

//   // Listen for the end of the typing animation
//   typingText.addEventListener('animationend', function(e) {
//     if (e.animationName === 'typing') {
//       restartAnimation();
//     }
//   });
// });