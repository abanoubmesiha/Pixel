window.onload=function(){
  
  //console.log(gridHeight,gridWidth);
  
  document.getElementById("submit").addEventListener("click", makeGrid);
  
  function makeGrid(height,width) {
    const gridHeight = document.querySelector( "#inputHeight" ).value ;
    const gridWidth = document.querySelector( "#inputWidth" ).value ;
    const pixelCanvas = document.getElementById("pixelCanvas");
    let Row = document.createElement("tr");
    let createRow = pixelCanvas.appendChild(Row);
      (function createCell(){
        let Cell = document.createElement("td");
        let createCell = Row.appendChild(Cell);
        let data = document.createTextNode(gridWidth+gridHeight);
        Cell.appendChild(data);
      })();
    }
  }
