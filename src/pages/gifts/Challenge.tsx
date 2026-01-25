import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";
import LolitaButton from "@/components/LolitaButton";

// Valid complete Sudoku solution
const SOLUTION = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

// Fixed positions to remove for consistent medium difficulty
const CELLS_TO_REMOVE = [
  [0,1], [0,3], [0,5], [0,7],
  [1,0], [1,2], [1,4], [1,6], [1,8],
  [2,1], [2,3], [2,5], [2,7],
  [3,0], [3,2], [3,4], [3,6], [3,8],
  [4,1], [4,3], [4,5], [4,7],
  [5,0], [5,2], [5,4], [5,6], [5,8],
  [6,1], [6,3], [6,5], [6,7],
  [7,0], [7,2], [7,4], [7,6], [7,8],
  [8,1], [8,3], [8,5], [8,7],
];

const generatePuzzle = () => {
  const puzzle = SOLUTION.map(row => [...row]);
  const originalCells = new Set<string>();
  
  CELLS_TO_REMOVE.forEach(([row, col]) => {
    puzzle[row][col] = 0;
  });
  
  // Track which cells are original (not removed)
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (puzzle[r][c] !== 0) {
        originalCells.add(`${r}-${c}`);
      }
    }
  }
  
  return { puzzle, originalCells };
};

const Challenge = () => {
  const navigate = useNavigate();
  
  const { puzzle, originalCells } = useMemo(() => generatePuzzle(), []);
  
  const [grid, setGrid] = useState<number[][]>(() => puzzle.map(row => [...row]));
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [isRunning, setIsRunning] = useState(true);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [selectedCell, setSelectedCell] = useState<{row: number, col: number} | null>(null);
  const [errors, setErrors] = useState<Set<string>>(new Set());

  // Timer
  useEffect(() => {
    if (!isRunning || gameState !== "playing") return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          setGameState("lost");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, gameState]);

  // Check if puzzle is complete and correct
  const checkWin = useCallback(() => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (grid[i][j] !== SOLUTION[i][j]) {
          return false;
        }
      }
    }
    return true;
  }, [grid]);

  // Check for conflicts
  const checkConflicts = useCallback((row: number, col: number, value: number): boolean => {
    if (value === 0) return false;
    
    // Check row
    for (let c = 0; c < 9; c++) {
      if (c !== col && grid[row][c] === value) return true;
    }
    
    // Check column
    for (let r = 0; r < 9; r++) {
      if (r !== row && grid[r][col] === value) return true;
    }
    
    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) {
        if ((r !== row || c !== col) && grid[r][c] === value) return true;
      }
    }
    
    return false;
  }, [grid]);

  useEffect(() => {
    if (checkWin() && gameState === "playing") {
      setIsRunning(false);
      setGameState("won");
    }
  }, [grid, checkWin, gameState]);

  const handleCellChange = (row: number, col: number, value: string) => {
    const key = `${row}-${col}`;
    if (originalCells.has(key)) return; // Can't change original numbers
    
    const num = parseInt(value) || 0;
    if (num < 0 || num > 9) return;

    const newGrid = grid.map(r => [...r]);
    newGrid[row][col] = num;
    setGrid(newGrid);
    
    // Update errors
    const newErrors = new Set<string>();
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (newGrid[r][c] !== 0) {
          // Temporarily set to 0 to check conflicts
          const val = newGrid[r][c];
          newGrid[r][c] = 0;
          if (checkConflictsInGrid(newGrid, r, c, val)) {
            newErrors.add(`${r}-${c}`);
          }
          newGrid[r][c] = val;
        }
      }
    }
    setErrors(newErrors);
  };

  const checkConflictsInGrid = (checkGrid: number[][], row: number, col: number, value: number): boolean => {
    if (value === 0) return false;
    
    // Check row
    for (let c = 0; c < 9; c++) {
      if (c !== col && checkGrid[row][c] === value) return true;
    }
    
    // Check column
    for (let r = 0; r < 9; r++) {
      if (r !== row && checkGrid[r][col] === value) return true;
    }
    
    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) {
        if ((r !== row || c !== col) && checkGrid[r][c] === value) return true;
      }
    }
    
    return false;
  };

  const handleNumberInput = (num: number) => {
    if (!selectedCell) return;
    handleCellChange(selectedCell.row, selectedCell.col, num.toString());
  };

  const handleClear = () => {
    if (!selectedCell) return;
    handleCellChange(selectedCell.row, selectedCell.col, "0");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const resetGame = () => {
    setGrid(puzzle.map(row => [...row]));
    setTimeLeft(180);
    setIsRunning(true);
    setGameState("playing");
    setSelectedCell(null);
    setErrors(new Set());
  };

  return (
    <div className="min-h-screen bg-dreamy relative overflow-hidden px-4 py-8">
      <FloatingHearts />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6 fade-in-up">
          <span className="text-4xl mb-2 block">🎮</span>
          <h1 className="text-3xl md:text-4xl font-cursive text-gradient mb-2">
            Sudoku Challenge
          </h1>
          <p className="text-muted-foreground font-body text-sm md:text-base">
            Finish this under 3 minutes and I'll send you pics of me 💗
          </p>
        </div>

        {/* Timer */}
        <div className="text-center mb-6">
          <div className={`inline-block lolita-card px-8 py-3 ${timeLeft < 30 ? 'animate-pulse' : ''}`}>
            <span className={`text-4xl font-cursive ${timeLeft < 30 ? 'text-destructive' : 'text-gradient'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        {/* Game State Messages */}
        {gameState === "won" && (
          <div className="text-center mb-6 fade-in-up">
            <div className="lolita-card inline-block px-8 py-6">
              <span className="text-5xl block mb-3">🎉💗</span>
              <p className="text-2xl font-cursive text-gradient mb-2">
                You did it!!!
              </p>
              <p className="text-muted-foreground font-body">
                Time to claim your reward 😘
              </p>
            </div>
          </div>
        )}

        {gameState === "lost" && (
          <div className="text-center mb-6 fade-in-up">
            <div className="lolita-card inline-block px-8 py-6">
              <span className="text-5xl block mb-3">🥺</span>
              <p className="text-2xl font-cursive text-gradient mb-2">
                Time's up!
              </p>
              <p className="text-muted-foreground font-body mb-4">
                But don't worry, you can try again! 💕
              </p>
              <LolitaButton onClick={resetGame}>
                Try Again ♡
              </LolitaButton>
            </div>
          </div>
        )}

        {/* Sudoku Grid */}
        {gameState === "playing" && (
          <>
            <div className="flex justify-center mb-6">
              <div className="lolita-card p-3 md:p-4 inline-block">
                <div className="grid grid-cols-9 gap-0 border-2 border-primary/50 rounded-lg overflow-hidden">
                  {grid.map((row, rowIndex) =>
                    row.map((cell, colIndex) => {
                      const key = `${rowIndex}-${colIndex}`;
                      const isOriginal = originalCells.has(key);
                      const isSelected = selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
                      const hasError = errors.has(key);
                      const borderRight = (colIndex + 1) % 3 === 0 && colIndex < 8;
                      const borderBottom = (rowIndex + 1) % 3 === 0 && rowIndex < 8;

                      return (
                        <button
                          key={key}
                          onClick={() => !isOriginal && setSelectedCell({ row: rowIndex, col: colIndex })}
                          className={`
                            w-8 h-8 md:w-10 md:h-10 text-center text-lg font-bold
                            border border-border/30 transition-all duration-200
                            ${isOriginal ? 'bg-lavender/50 text-foreground cursor-default' : 'bg-soft-white cursor-pointer hover:bg-accent/50'}
                            ${isSelected ? 'ring-2 ring-primary bg-primary/20' : ''}
                            ${hasError ? 'text-destructive bg-destructive/10' : ''}
                            ${!isOriginal && !hasError && cell !== 0 ? 'text-rose' : ''}
                            ${borderRight ? 'border-r-2 border-r-primary/50' : ''}
                            ${borderBottom ? 'border-b-2 border-b-primary/50' : ''}
                          `}
                        >
                          {cell !== 0 ? cell : ''}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Number Input Pad */}
            <div className="flex justify-center mb-6">
              <div className="lolita-card p-4 inline-block">
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleNumberInput(num)}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-soft-white border-2 border-border hover:border-primary hover:bg-accent transition-all duration-200 font-bold text-lg text-foreground"
                    >
                      {num}
                    </button>
                  ))}
                  <button
                    onClick={handleClear}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-rose/20 border-2 border-rose/50 hover:bg-rose/30 transition-all duration-200 font-bold text-sm text-rose"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Tap a cell, then tap a number
                </p>
              </div>
            </div>
          </>
        )}

        {/* Back Button */}
        <div className="text-center fade-in-up">
          <LolitaButton variant="outline" onClick={() => navigate("/gifts")}>
            ← Back to Gifts
          </LolitaButton>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
