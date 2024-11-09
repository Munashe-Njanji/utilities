export interface SudokuCell {
  value: number;
  isOriginal: boolean;
  notes: number[];
  isHighlighted: boolean;
  isConflicting: boolean;
}

export type SudokuGrid = SudokuCell[][];

export enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
  Expert = "expert",
}

const DIFFICULTY_REMOVES = {
  [Difficulty.Easy]: 30,
  [Difficulty.Medium]: 45,
  [Difficulty.Hard]: 55,
  [Difficulty.Expert]: 62,
};
function isValid(
  board: number[][] | SudokuGrid,
  row: number,
  col: number,
  num: number
): boolean {
  const getValue = (cell: number | SudokuCell): number => {
    return typeof cell === "number" ? cell : cell.value;
  };

  // Check row
  for (let x = 0; x < 9; x++) {
    if (x !== col && getValue(board[row][x]) === num) return false;
  }

  // Check column
  for (let x = 0; x < 9; x++) {
    if (x !== row && getValue(board[x][col]) === num) return false;
  }

  // Check 3x3 box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        boxRow + i !== row &&
        boxCol + j !== col &&
        getValue(board[boxRow + i][boxCol + j]) === num
      ) {
        return false;
      }
    }
  }

  return true;
}
export function createEmptyGrid(): SudokuGrid {
  return Array.from({ length: 9 }, () =>
    Array.from({ length: 9 }, () => ({
      value: 0,
      isOriginal: false,
      notes: [],
      isHighlighted: false,
      isConflicting: false,
    }))
  );
}

export function generateSudoku(difficulty: Difficulty): SudokuGrid {
  const grid = createEmptyGrid();
  const solvedGrid = Array.from({ length: 9 }, () => Array(9).fill(0));

  // Generate solved puzzle
  fillGrid(solvedGrid);

  // Copy solved grid to our grid structure
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      grid[i][j].value = solvedGrid[i][j];
    }
  }

  // Remove numbers based on difficulty
  const cellsToRemove = DIFFICULTY_REMOVES[difficulty];
  const positions = Array.from({ length: 81 }, (_, i) => ({
    row: Math.floor(i / 9),
    col: i % 9,
  }));

  // Shuffle positions
  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [positions[i], positions[j]] = [positions[j], positions[i]];
  }

  // Remove numbers
  for (let i = 0; i < cellsToRemove; i++) {
    const { row, col } = positions[i];
    grid[row][col].value = 0;
  }

  // Mark original numbers
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      grid[i][j].isOriginal = grid[i][j].value !== 0;
    }
  }

  return grid;
}

function fillGrid(grid: number[][]): boolean {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        // Shuffle numbers for more randomness
        for (let i = numbers.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }

        for (const num of numbers) {
          if (isValid(grid, row, col, num)) {
            grid[row][col] = num;
            if (fillGrid(grid)) return true;
            grid[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

export function checkConflicts(grid: SudokuGrid): boolean[][] {
  const conflicts = Array.from({ length: 9 }, () => Array(9).fill(false));

  // Check rows, columns and boxes
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j].value !== 0) {
        const temp = grid[i][j].value;
        grid[i][j].value = 0;
        if (
          !isValid(
            grid.map((row) => row.map((cell) => cell.value)),
            i,
            j,
            temp
          )
        ) {
          conflicts[i][j] = true;
        }
        grid[i][j].value = temp;
      }
    }
  }

  return conflicts;
}
// Add the missing solveSudoku function
export function solveSudoku(board: number[][]): boolean {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
              return true;
            }
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}
export function getHint(
  grid: SudokuGrid
): { row: number; col: number; value: number } | null {
  const solvedGrid = grid.map((row) => row.map((cell) => cell.value));
  if (solveSudoku(solvedGrid)) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j].value === 0) {
          return { row: i, col: j, value: solvedGrid[i][j] };
        }
      }
    }
  }
  return null;
}
