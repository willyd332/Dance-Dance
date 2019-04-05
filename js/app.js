


// here will be where you link in the other js files




const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');


const animateEverything = () => {
  // here you will call a bunch of functions that are animations
      // you will define the if/elses
      // within the other functions
  // You will define everything within those functions...

  // think of this simply as an interval for any animation function you go
  // on to create
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  animateEverything()
  window.requestAnimationFrame(animate);
}
