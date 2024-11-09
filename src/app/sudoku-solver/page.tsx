import { Shell } from "@/components/shells/shell";
import SudokuGame from "@/components/sudoku-solver/sudoku-game";

export const metadata = {
  title: "Sudoku Game | Utilities",
  description: "Interactive Sudoku puzzle game with multiple difficulty levels and a user-friendly interface.",
};

export default function SudokuGamePage() {
  return (
    <Shell>
      <SudokuGame />
    </Shell>
  );
}
