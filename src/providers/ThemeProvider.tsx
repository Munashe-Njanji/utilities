// providers/ThemeProvider.tsx
interface SudokuTheme {
    grid: {
        background: string;
    };
    cell: {
        background: string;
        original: string;
        highlighted: string;
        conflicting: string;
        selected: string;
        borderBottom: string;
        borderRight: string;
        interactive: string;
        value: string;
    };
    notes: {
        container: string;
        text: string;
    };
}

const lightTheme: SudokuTheme = {
    grid: {
        background: 'bg-gray-300',
    },
    cell: {
        background: 'bg-white',
        original: 'font-bold text-gray-900',
        highlighted: 'bg-blue-50',
        conflicting: 'bg-red-50',
        selected: 'ring-2 ring-blue-500',
        borderBottom: 'border-b-2 border-gray-800',
        borderRight: 'border-r-2 border-gray-800',
        interactive: 'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300',
        value: 'text-xl text-gray-900',
    },
    notes: {
        container: 'text-[8px]',
        text: 'text-gray-500',
    },
};

const darkTheme: SudokuTheme = {
    grid: {
        background: 'bg-gray-700',
    },
    cell: {
        background: 'bg-gray-800',
        original: 'font-bold text-white',
        highlighted: 'bg-blue-900',
        conflicting: 'bg-red-900',
        selected: 'ring-2 ring-blue-400',
        borderBottom: 'border-b-2 border-gray-600',
        borderRight: 'border-r-2 border-gray-600',
        interactive: 'hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500',
        value: 'text-xl text-white',
    },
    notes: {
        container: 'text-[8px]',
        text: 'text-gray-400',
    },
};