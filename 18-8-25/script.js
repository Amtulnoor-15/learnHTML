const spreadsheetContainer = document.querySelector("#spreadsheet-container");

const ROWS = 10;
const COLS = 10;
const spreadsheet = [];

class Cell {
  constructor(
    isheader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isheader = isheader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active;
  }
}
function initspreadsheet() {
  for (let i = 0; i < COLS; i++) {
    let spreadsheetrow = [];
    for (let j = 0; j < COLS; j++) {
      var isheader, isdisabled, celldata='', rowName, columnName;
             if (j === 0){  
        celldata = i;          
      }
      const cell = new Cell(
        isheader,
        isdisabled,
        celldata,
        i,
        j,
        rowName,
        columnName,
        false)
      
    spreadsheetrow.push(cell);}
    
    spreadsheet.push(spreadsheetrow);
  }
  console.log(spreadsheet);
  drawsheet();
}
initspreadsheet();

function drawsheet(){
    for (let i = 0; i < spreadsheet.length; i++) {
    const rowContainerElement = document.createElement("div");
    rowContainerElement.className = "cell-row";
    
    for (let j = 0; j < spreadsheet[i].length; j++) {
      const cell = spreadsheet[i][j];
      rowContainerElement.append(createCellElement(cell));
    }
    spreadsheetContainer.appendChild(rowContainerElement);
  }
}
function createCellElement(cell){
  const cellElement = document.createElement('input');
  cellElement.className = 'cell';
  cellElement.value = cell.data;
  cellElement.id = 'cell_' + cell.row + cell.column;
  cellElement.disabled = cell.disabled;

  return cellElement;
}
