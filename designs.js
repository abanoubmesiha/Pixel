window.onload=function(){
  
  //console.log(gridHeight,gridWidth);
  
  document.getElementById("submit").addEventListener("click", makeGrid);
  
  function makeGrid() {
    const pixelCanvas = document.getElementById("pixelCanvas");
    let tableRows = pixelCanvas.getElementsByTagName('tr');
    let rowCount = tableRows.length;

    for (let x = rowCount -1; x >= 0 ; x--) {
      pixelCanvas.removeChild(tableRows[x]);
    }
    let gridHeight = document.querySelector("#inputHeight").value ;
    let gridWidth = document.querySelector("#inputWidth").value ;
    for (let i = 0 ; i < gridHeight ; i++){
    let Row = document.createElement("tr");
    let createRow = pixelCanvas.appendChild(Row);
    for (let i = 0 ; i < gridWidth ; i++){
      (function createCell(){
        let Cell = document.createElement("td");
        let createCell = Row.appendChild(Cell);
        let data = document.createTextNode("X");
        Cell.appendChild(data);
      })();}}
    }
  }
