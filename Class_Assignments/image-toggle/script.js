const images = document.querySelectorAll('#image-container img');
let currentImageIndex = 0;

function toggleImages() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
}
images[currentImageIndex].style.display = 'block';
setInterval(toggleImages, 2500);
// function imageToggler() {
//     let isTrue = false;
  
//     setInterval(() => {
//       if (isTrue) {
//         image.setAttribute(
//           "src",
//           "https://images.unsplash.com/photo-1608889336076-13c5c2dc1ee7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
//         );
//       } else {
//         image.setAttribute(
//           "src",
//           "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
//         );
//       }
//       isTrue = !isTrue;
//     }, 2000);
//   }
//   imageToggler();