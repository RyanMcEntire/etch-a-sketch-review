const size = 16;
const gridSize = size * size;

const gridFrame = document.querySelector(".gridFrame");
for (let i = 0; i < gridSize; i++) {
  const gridSquare = document.createElement("div");
  gridFrame.appendChild(gridSquare);
}

gridFrame.style.cssText = `grid-template-columns: repeat(${size}, auto)`;

let mouseIsDown = false;

document.addEventListener("mousedown", () => {
  mouseIsDown = true;
});

document.addEventListener("mouseup", () => {
  mouseIsDown = false;
});

const boxes = document.querySelectorAll(".gridFrame > div");

boxes.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    if (!mouseIsDown) {
      return;
    }
    e.target.style.backgroundColor = "green";
  });
});

/* gridFrame.children.addEventListener(
  "mouseover",
  (e) => {
    if (!mouseIsDown) {
      return;
    }
    e.target.style.backgroundColor = "green";
  },
  
); */
