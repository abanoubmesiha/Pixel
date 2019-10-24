window.onload=function(){
  
  //console.log(gridHeight,gridWidth);
  
  document.getElementById("submit").addEventListener("click", makeGrid);
  
  function makeGrid() {
    let gridHeight = document.querySelector( "#inputHeight" ).value ;
    let gridWidth = document.querySelector( "#inputWidth" ).value ;
    for (let i = 0 ; i < gridHeight ; i++){
    const pixelCanvas = document.getElementById("pixelCanvas");
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
