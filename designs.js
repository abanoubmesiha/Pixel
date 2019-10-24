window.onload=function(){
  
  document.getElementById("submit").addEventListener("click", makeGrid);
  
  function makeGrid() {
// deleting the table before submiting a new one
    const pixelCanvas = document.getElementById("pixelCanvas");
    const tableRows = pixelCanvas.getElementsByTagName('tr');
    let rowCount = tableRows.length;

    for (let x = rowCount -1; x >= 0 ; x--) {
      pixelCanvas.removeChild(tableRows[x]);
    }
// making the rows
    const gridHeight = document.querySelector("#inputHeight").value ;
    const gridWidth = document.querySelector("#inputWidth").value ;

    for (let i = 0 ; i < gridHeight ; i++){
      const Row = document.createElement("tr");
      const createRow = pixelCanvas.appendChild(Row);
        // making the cells of every row
            for (let i = 0 ; i < gridWidth ; i++){ 
              (function createCell(){
                const Cell = document.createElement("td");
                const createCell = Row.appendChild(Cell);
                // function of coloring the cells
                Cell.addEventListener('mousedown', function() {
                  const color = document.querySelector("#colorPicker").value;
                  this.style.backgroundColor = color;
                })
      })();}}
    }
  }
