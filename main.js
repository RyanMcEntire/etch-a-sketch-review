const size = 16;
const gridSize = size * size;

const gridFrame = document.querySelector(".gridFrame");
for (let i = 0; i < gridSize; i++) {
  const gridSquare = document.createElement("div");

  gridFrame.appendChild(gridSquare);
}

gridFrame.style.cssText = `grid-template-columns: repeat(${size}, auto)`;
