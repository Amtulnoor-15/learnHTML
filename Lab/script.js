const spreadSheetContainer = document.querySelector("#spreadsheet-container");

const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.column = column;
    this.rowName = rowName;
    this.columnName = columnName;
    this.active = active;
  }
}

// structure everything at oneplace cell to spreadsheet.
function initSpreadSheet() {
  for (let i = 0; i < COLS; i++) {
    let spreadSheetRow = [];
    for (let j = 0; j < COLS; j++) {
      var isHeader = false,
        isDisbaled = false,
        cellData = "",
        rowName,
        columnName;

      if (i===0 && j === 0) {
        cellData = i;
        isHeader = true;
        isDisbaled = true;
      } else if(i === 0) {
        cellData = alphabets[j - 1];
        isHeader = true;
        isDisbaled = true;
      } else if(j===0){
        cellData=i;
        isHeader=true;
        isDisbaled=true;
      }
        if (!cellData) {
        cellData = "";
      }

      const cell = new Cell(
        isHeader,
        isDisbaled,
        cellData,
        i,
        j,
        rowName,
        columnName,
        false
      );
      spreadSheetRow.push(cell);
    }
    spreadsheet.push(spreadSheetRow);
  }
  console.log(spreadsheet);
  drawSheet();
}

initSpreadSheet();

// to print the layout on the body of html
function drawSheet() {
  for (let i = 0; i < spreadsheet.length; i++) {
    const rowContainerElement = document.createElement("div");
    rowContainerElement.className = "cell-row";

    for (let j = 0; j < spreadsheet[i].length; j++) {
      const cell = spreadsheet[i][j];
      rowContainerElement.append(createCellElement(cell));
      console.log(createCellElement(cell));
    }
    spreadSheetContainer.appendChild(rowContainerElement);
  }
}

// cell element dom properties
function createCellElement(cell) {
  const cellElement = document.createElement("input");
  cellElement.className = "cell";
  if(cell.isHeader){
    cellElement.classList.add('cell-header');
  }
  cellElement.value = cell.data;
  cellElement.id = `cell_${cell.row}_${cell.column}`;
  if(!cell.isHeader){
    cellElement.addEventListener("focus", ()=> HighlightHeaders(cell));
  }

  return cellElement;
}
function HighlightHeaders(cell){
  document.querySelectorAll('.highlight').forEach(el =>{el.classList.remove('highlight')});
  const rowheader = document.getElementById(`cell_${cell.row}_0`)
  if(rowheader)rowheader.classList.add('highlight');
  const colheader = document.getElementById(`cell_0_${cell.column}`);
  if(colheader) colheader.classList.add('highlight');
}