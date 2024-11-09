import React from 'react';
import { Button } from '@/components/ui/button';
import { Difficulty } from '@/utils/sudoku';

interface GameControlsProps {
    onNewGame: (difficulty: Difficulty) => void;
    onHint: () => void;
    onUndo: () => void;
    onRedo: () => void;
    hintsRemaining: number;
    onToggleNotes: () => void;
    isNotesMode: boolean;
}

export const GameControls: React.FC<GameControlsProps> = ({
    onNewGame,
    onHint,
    onUndo,
    onRedo,
    hintsRemaining,
    onToggleNotes,
    isNotesMode
}) => {
    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="flex gap-2">
                {Object.values(Difficulty).map((diff) => (
                    <Button
                        key={diff}
                        onClick={() => onNewGame(diff)}
                        variant="outline"
                        className="capitalize"
                    >
                        {diff}
                    </Button>
                ))}
            </div>

            <div className="flex gap-2">
                <Button onClick={onUndo} variant="ghost">
                    Undo
                </Button>
                <Button onClick={onRedo} variant="ghost">
                    Redo
                </Button>
                <Button
                    onClick={onHint}
                    disabled={hintsRemaining === 0}
                    className="relative"
                >
                    Hint
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                        {hintsRemaining}
                    </span>
                </Button>
                <Button
                    onClick={onToggleNotes}
                    variant={isNotesMode ? "secondary" : "outline"}
                >
                    Notes
                </Button>
            </div>
        </div>
    );
};