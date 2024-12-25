const table = document.getElementById('table');
const selectedColorPicker = document.getElementById('selectedColor');
const variantNumber = 25; 


let number = 1;
for (let i = 0; i < 6; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell();
    cell.textContent = number;
    cell.dataset.number = number;


    if (number === variantNumber) {
      cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = getRandomColor();
      });


      cell.addEventListener('click', () => {
        cell.style.backgroundColor = selectedColorPicker.value;
      });

  
      cell.addEventListener('dblclick', () => {
        const columnIndex = cell.cellIndex;
        for (let rowIndex = cell.parentElement.rowIndex; rowIndex < table.rows.length; rowIndex += 2) {
          table.rows[rowIndex].cells[columnIndex].style.backgroundColor = selectedColorPicker.value;
        }
      });
    }

    number++;
  }
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}