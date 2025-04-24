document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('sudoku-container');
    const puzzle = [
      [5, 3, '', '', 7, '', '', '', ''],
      [6, '', '', 1, 9, 5, '', '', ''],
      ['', 9, 8, '', '', '', '', 6, ''],
      [8, '', '', '', 6, '', '', '', 3],
      [4, '', '', 8, '', 3, '', '', 1],
      [7, '', '', '', 2, '', '', '', 6],
      ['', 6, '', '', '', '', 2, 8, ''],
      ['', '', '', 4, 1, 9, '', '', 5],
      ['', '', '', '', 8, '', '', 7, 9]
    ];
  
    const grid = document.createElement('table');
    grid.className = 'sudoku-grid';
  
    for (let i = 0; i < 9; i++) {
      const row = document.createElement('tr');
  
      for (let j = 0; j < 9; j++) {
        const cell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.className = 'sudoku-cell';
  
        if (puzzle[i][j] !== '') {
          input.value = puzzle[i][j];
          input.disabled = true;
          input.classList.add('fixed');
        }
  
        // Permitir apenas números de 1 a 9
        input.addEventListener('input', () => {
          const val = input.value;
          if (!/^[1-9]$/.test(val)) input.value = '';
        });
  
        cell.appendChild(input);
        row.appendChild(cell);
      }
  
      grid.appendChild(row);
    }
  
    container.appendChild(grid);
  });
  