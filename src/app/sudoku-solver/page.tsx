"use client"

import { useState, useEffect } from 'react';
import { SudokuGrid } from '@/components/sudoku-solver/SudokuGrid';
import { GameControls } from '@/components/sudoku-solver/GameControls';
import {
  generateSudoku,
  Difficulty,
  SudokuGrid as SudokuGridType,
  checkConflicts,
  getHint
} from '@/utils/sudoku';
import { useToast } from '@/hooks/use-toast';
import confetti from 'canvas-confetti';

export default function HomePage() {
  const [grid, setGrid] = useState<SudokuGridType>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.Medium);
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
  const [hintsRemaining, setHintsRemaining] = useState(3);
  const [isNotesMode, setIsNotesMode] = useState(false);
  const [history, setHistory] = useState<SudokuGridType[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const { toast } = useToast();

  useEffect(() => {
    startNewGame(difficulty);
  }, [difficulty]);

  const startNewGame = (diff: Difficulty) => {
    const newGrid = generateSudoku(diff);
    setGrid(newGrid);
    setDifficulty(diff);
    setHintsRemaining(3);
    setHistory([newGrid]);
    setHistoryIndex(0);
  };
  const handleCellFocus = (row: number, col: number) => {
    setSelectedCell({ row, col });
  };
  const handleCellChange = (row: number, col: number, value: number) => {
    if (grid[row][col].isOriginal) return;

    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[row][col].value = value;

    // Check for conflicts
    const conflicts = checkConflicts(newGrid);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        newGrid[i][j].isConflicting = conflicts[i][j];
      }
    }

    setGrid(newGrid);
    addToHistory(newGrid);

    // Check if puzzle is solved
    if (isPuzzleSolved(newGrid)) {
      confetti();
      toast({
        title: "Congratulations!",
        description: "You've solved the puzzle!",
        variant: "destructive"
      });
    }
  };

  const handleHint = () => {
    if (hintsRemaining === 0) return;

    const hint = getHint(grid);
    if (hint) {
      const newGrid = JSON.parse(JSON.stringify(grid));
      newGrid[hint.row][hint.col].value = hint.value;
      setGrid(newGrid);
      setHintsRemaining(prev => prev - 1);
      addToHistory(newGrid);
    }
  };

  const handleNotesChange = (row: number, col: number, notes: number[]) => {
    if (grid[row][col].isOriginal) return;

    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[row][col].notes = notes;
    setGrid(newGrid);
    addToHistory(newGrid);
  };

  const addToHistory = (newGrid: SudokuGridType) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newGrid);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1);
      setGrid(history[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(prev => prev + 1);
      setGrid(history[historyIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">Sudoku Master</h1>

      <div className="bg-gray-600 rounded-lg shadow-xl p-6">
        <GameControls
          onNewGame={startNewGame}
          onHint={handleHint}
          onUndo={handleUndo}
          onRedo={handleRedo}
          hintsRemaining={hintsRemaining}
          onToggleNotes={() => setIsNotesMode(!isNotesMode)}
          isNotesMode={isNotesMode}
        />

        <SudokuGrid
          grid={grid}
          onChange={handleCellChange}
          onCellFocus={handleCellFocus}
          selectedCell={selectedCell}
          onNotesChange={handleNotesChange}
          isNotesMode={isNotesMode}
        />
      </div>
    </div>
  );
}

function isPuzzleSolved(grid: SudokuGridType): boolean {
  // Check if all cells are filled and there are no conflicts
  return grid.every(row =>
    row.every(cell => cell.value !== 0 && !cell.isConflicting)
  );
}