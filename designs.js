window.onload = function () {
    
  function makeGrid() {
      document.getElementById("submit").addEventListener("click", makeGrid);
      
      // deleting the table before submitting a new one
      const pixelCanvas = document.getElementById("pixelCanvas");
      while (pixelCanvas.firstChild)
          pixelCanvas.removeChild(pixelCanvas.firstChild);
      
      // making the rows
      let gridHeight = document.querySelector("#inputHeight").value;
      let gridWidth = document.querySelector("#inputWidth").value;

      for (let i = 0; i < gridHeight; i++) {
          const Row = document.createElement("tr");
          pixelCanvas.appendChild(Row);
          // making the cells of every row
          for (let i = 0; i < gridWidth; i++) {
              const Cell = document.createElement("td");
              Row.appendChild(Cell);
              // function of coloring the cells
              Cell.addEventListener('mousedown', function () {
                  this.style.backgroundColor = document.querySelector("#colorPicker").value;
              });
          }
      }

      // Drag to fast fill
      let down = false;
      pixelCanvas.addEventListener('mousedown', function () {
          down = true; // if mouse down
          pixelCanvas.addEventListener('mouseup', function () {
              down = false; // if mouse up
          });
          pixelCanvas.addEventListener('mouseleave', function () {
              down = false; // if mouse leave grid
          });

          pixelCanvas.addEventListener('mouseover', function (e) {
              if (down) { // if mouse down and moves inside grid cells
                  if (e.target.tagName === 'TD') {
                      e.target.style.backgroundColor = document.querySelector("#colorPicker").value;
                  }
              }
          });
      });

      // remove color at double click
      pixelCanvas.addEventListener('dblclick', e => {
          e.target.style.backgroundColor = null;
      });
  }

  makeGrid();

};