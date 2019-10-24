window.onload=function(){
  
  document.getElementById("submit").addEventListener("click", makeGrid);
  
  function makeGrid() {
// deleting the table before submiting a new one
    const pixelCanvas = document.getElementById("pixelCanvas");
    while (pixelCanvas.firstChild) 
    pixelCanvas.removeChild(pixelCanvas.firstChild);
// making the rows
    let gridHeight = document.querySelector("#inputHeight").value;
    let gridWidth = document.querySelector("#inputWidth").value;

    for (let i = 0 ; i < gridHeight ; i++){
      const Row = document.createElement("tr");
      pixelCanvas.appendChild(Row);
        // making the cells of every row
            for (let i = 0 ; i < gridWidth ; i++){ 
                const Cell = document.createElement("td");
                Row.appendChild(Cell);
                // function of coloring the cells
                Cell.addEventListener('mousedown', function() {
                  const color = document.querySelector("#colorPicker").value;
                  this.style.backgroundColor = color;
                })
      }}
    }
    makeGrid();
  }
