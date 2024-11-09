import React from 'react';
import { motion } from 'framer-motion';
import { SudokuCell } from '@/utils/sudoku';
import { useTheme } from 'next-themes';

type SudokuGridType = SudokuCell[][];

interface CellPosition {
  row: number;
  col: number;
}

interface SudokuGridProps {
  grid: SudokuGridType;
  onChange: (row: number, col: number, value: number) => void;
  onCellFocus: (row: number, col: number) => void;
  selectedCell: CellPosition | null;
  onNotesChange: (row: number, col: number, notes: number[]) => void;
  isNotesMode: boolean;
}

export const SudokuGrid: React.FC<SudokuGridProps> = ({
  grid,
  onChange,
  onCellFocus,
  selectedCell,
  onNotesChange,
  isNotesMode
}: SudokuGridProps) => {
  const { theme } = useTheme();

  const handleCellClick = (rowIndex: number, colIndex: number): void => {
    onCellFocus(rowIndex, colIndex);
  };

  const handleCellKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    rowIndex: number,
    colIndex: number,
    cell: SudokuCell
  ): void => {
    if (cell.isOriginal) return;

    const key = event.key;
    const numberKey = parseInt(key);

    if (key === 'Backspace' || key === 'Delete') {
      if (isNotesMode) {
        onNotesChange(rowIndex, colIndex, []);
      } else {
        onChange(rowIndex, colIndex, 0);
      }
      return;
    }

    if (numberKey >= 1 && numberKey <= 9) {
      if (isNotesMode) {
        const newNotes = cell.notes.includes(numberKey)
          ? cell.notes.filter(n => n !== numberKey)
          : [...cell.notes, numberKey].sort((a, b) => a - b);
        onNotesChange(rowIndex, colIndex, newNotes);
      } else {
        onChange(rowIndex, colIndex, numberKey);
      }
    }
  };

  const getCellClassName = (
    cell: SudokuCell,
    rowIndex: number,
    colIndex: number,
    selectedCell: CellPosition | null
  ): string => {
    return `
      relative flex items-center justify-center w-12 h-12 
      ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
      ${cell.isOriginal ? 'font-bold' : ''}
      ${cell.isHighlighted ? (theme === 'dark' ? 'bg-blue-900' : 'bg-blue-50') : ''}
      ${cell.isConflicting ? (theme === 'dark' ? 'bg-red-900' : 'bg-red-50') : ''}
      ${selectedCell?.row === rowIndex && selectedCell?.col === colIndex
        ? (theme === 'dark' ? 'ring-2 ring-blue-400' : 'ring-2 ring-blue-500')
        : ''
      }
      ${(rowIndex + 1) % 3 === 0 ? (theme === 'dark' ? 'border-b-2 border-gray-600' : 'border-b-2 border-gray-800') : ''}
      ${(colIndex + 1) % 3 === 0 ? (theme === 'dark' ? 'border-r-2 border-gray-600' : 'border-r-2 border-gray-800') : ''}
      hover:${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}
      focus:outline-none focus:ring-2 focus:ring-blue-500
    `;
  };

  return (
    <div className={`grid grid-cols-9 gap-[1px] ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} p-[1px]`}>
      {grid.map((row: SudokuCell[], rowIndex: number) =>
        row.map((cell: SudokuCell, colIndex: number) => (
          <motion.div
            key={`${rowIndex}-${colIndex}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: (rowIndex * 9 + colIndex) * 0.01 }}
            className={getCellClassName(cell, rowIndex, colIndex, selectedCell)}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            onKeyDown={(e) => handleCellKeyDown(e, rowIndex, colIndex, cell)}
            tabIndex={0}
            role="button"
            aria-label={`Cell ${rowIndex + 1},${colIndex + 1}`}
          >
            {cell.value === 0 ? (
              <div className={`grid grid-cols-3 gap-[2px] p-[2px] text-[8px] ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {cell.notes.map((note: number, index: number) => (
                  <div key={index} className="flex items-center justify-center">
                    {note}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-xl">
                {cell.value}
              </div>
            )}
          </motion.div>
        ))
      )}
    </div>
  );
};
