document.addEventListener("DOMContentLoaded", function() {
  // Code runs after HTML is fully loaded
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
  let degree = 0;
  const targetDegree = parseInt(circle.getAttribute("data-degree")); // e.g., 25
  const color = circle.getAttribute("data-color"); // e.g., #ff2972
  const numberElement = circle.querySelector(".number"); // The % text

  const interval = setInterval(() => {
    degree++;
    if (degree > targetDegree) clearInterval(interval); // Stop at target

    // Update progress fill
    circle.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;

    // Update displayed number
    numberElement.textContent = degree;
  }, 20); // Runs every 20ms (smooth animation)
});
});