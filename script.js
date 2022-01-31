document.addEventListener('DOMContentLoaded', () => {

function makeGrid(size){
    for(let i = 0; i < (size * size); i++){
            const div = document.createElement('div');
            grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
            grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
            grid.appendChild(div).classList.add('items');
            div.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = "black";
            })
        
    }
}

function makeRainbow(size) {
    for(let i = 0; i < (size * size); i++){
        const div = document.createElement('div');
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
        grid.appendChild(div).classList.add('items');
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "red";
        })
   }
}

function clear() {
    const gridItems = document.querySelectorAll('.items')
    gridItems.forEach(item => {
    item.style.backgroundColor = "white";
  })
}

const gridBtn = document.getElementById('new')
const clearBtn = document.getElementById('clear')
const rainBow = document.getElementById('rainbow')

clearBtn.addEventListener('click', clear)
gridBtn.addEventListener('click', () => {
   const sizeInput = document.getElementById('size').value
   makeGrid(sizeInput)
})
rainBow.addEventListener('click', () => {
    const sizeInput = document.getElementById('size').value
   makeRainbow(sizeInput)
})
})