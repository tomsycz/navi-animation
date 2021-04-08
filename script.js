const menuBars = document.getElementById("menu-bars");
const ovarlay = document.getElementById("ovarlay");
const navElements = [];
for (let i = 1; i < 6; i++ ) {
  navElements.push(document.getElementById(`nav-${i}`));
}
function navAnimation(dir1, dir2) {
  navElements.forEach((el, i) => {
    el.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`);
  });
}
function toggleNav() {
  // Toggle: Menu bars Open/Closed
  menuBars.classList.toggle("change");
  // Toggle: Menu Active
  if (overlay.classList.contains("overlay-slide-left")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}
// Event listeners
menuBars.addEventListener("click", toggleNav);
navElements.forEach(el => el.addEventListener("click", toggleNav));
