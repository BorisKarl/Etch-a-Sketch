const drawBtn = document.getElementById("draw");
const clearBtn = document.getElementById("clear");
const sizeInput = document.getElementById("size_input");
const num = document.querySelector(".num");
const rangeSlider = document.querySelector(".range_slider");
const grid = document.getElementById("grid");

function makeGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.appendChild(div).classList.add("items");
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  }
}

const emptyGrid = () => {
  grid.innerHTML = "";
};

const removeSlider = () => {
  rangeSlider.classList.add("hide");
};

const showSize = () => {
  num.textContent = sizeInput.value;
};

function clear() {
  const gridItems = document.querySelectorAll(".items");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "white";
  });
  rangeSlider.classList.remove("hide");
  emptyGrid();
}

sizeInput.addEventListener("input", showSize);

drawBtn.addEventListener("click", () => {
  makeGrid(sizeInput.value);
  removeSlider();
});

clearBtn.addEventListener("click", clear);
