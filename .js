import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { generateMaze, Cell } from "@/lib/maze";
import { MazeRenderer } from "@/components/MazeRenderer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Timer, RefreshCw, ArrowLeft } from "lucide-react";

const CELL_SIZE = 25; // px
const INITIAL_TIME = 30; // seconds

export default function Game() {
  const [location, setLocation] = useLocation();
  const [level, setLevel] = useState(1);
  const [maze, setMaze] = useState<Cell[][]>([]);
  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");

  // Generate maze based on level
  const initLevel = useCallback((lvl: number) => {
    // Increase size with level, max 30x20
    const width = Math.min(10 + lvl * 2, 30);
    const height = Math.min(10 + lvl * 2, 20);
    
    const newMaze = generateMaze(width, height);
    setMaze(newMaze);
    setPlayerPos({ x: 0, y: 0 });
    setTimeLeft(Math.max(INITIAL_TIME - (lvl * 2), 10) + (width * height) / 20); // Dynamic time calculation
    setGameState("playing");
  }, []);

  useEffect(() => {
    initLevel(level);
  }, [level, initLevel]);

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setGameState("lost");
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  // Input handling
  useEffect(() => {
    if (gameState !== "playing") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const { x, y } = playerPos;
      const currentCell = maze[y][x];
      
      let nextX = x;
      let nextY = y;

      // Prevent default scrolling for arrow keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }

      if ((e.key === "ArrowUp" || e.key === "w") && !currentCell.top) nextY--;
      if ((e.key === "ArrowRight" || e.key === "d") && !currentCell.right) nextX++;
      if ((e.key === "ArrowDown" || e.key === "s") && !currentCell.bottom) nextY++;
      if ((e.key === "ArrowLeft" || e.key === "a") && !currentCell.left) nextX--;

      if (nextX !== x || nextY !== y) {
        setPlayerPos({ x: nextX, y: nextY });
        
        // Check win condition
        if (nextX === maze[0].length - 1 && nextY === maze.length - 1) {
          setGameState("won");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playerPos, maze, gameState]);

  const nextLevel = () => {
    setLevel(l => l + 1);
  };

  const restart = () => {
    setLevel(1);
    initLevel(1);
  };

  const retry = () => {
    initLevel(level);
  };

  if (!maze.length) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 font-mono relative overflow-hidden">
      {/* HUD */}
      <div className="w-full max-w-4xl flex justify-between items-end mb-6 px-4 z-10">
        <div>
          <h2 className="text-neon-purple text-sm mb-1 tracking-widest uppercase opacity-80">Current Level</h2>
          <div className="text-4xl font-press text-white text-glow">{String(level).padStart(2, '0')}</div>
        </div>
        
        <div className="flex flex-col items-end">
          <h2 className="text-neon-pink text-sm mb-1 tracking-widest uppercase opacity-80">Time Remaining</h2>
          <div className={`text-4xl font-press text-glow ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
            {Math.floor(timeLeft)}s
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative z-10">
        <MazeRenderer maze={maze} cellSize={CELL_SIZE} playerPos={playerPos} />

        {/* Overlays */}
        {gameState !== "playing" && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center rounded-lg z-20">
            <Card className="bg-black border-2 border-white p-8 text-center w-80 shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-in zoom-in-95 duration-300">
              {gameState === "won" ? (
                <>
                  <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
                  <h2 className="text-2xl font-press text-green-400 mb-2">ESCAPED!</h2>
                  <p className="text-gray-400 mb-6 font-mono text-sm">Ready for the next layer?</p>
                  <Button 
                    onClick={nextLevel}
                    className="w-full bg-neon-cyan hover:bg-cyan-400 text-black font-bold font-press text-xs py-6"
                  >
                    NEXT LEVEL
                  </Button>
                </>
              ) : (
                <>
                  <Timer className="w-16 h-16 text-red-500 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <h2 className="text-2xl font-press text-red-500 mb-2">TIME OUT</h2>
                  <p className="text-gray-400 mb-6 font-mono text-sm">The labyrinth claims another.</p>
                  <div className="space-y-3">
                    <Button 
                      onClick={retry}
                      className="w-full bg-white hover:bg-gray-200 text-black font-bold font-press text-xs py-6"
                    >
                      TRY AGAIN
                    </Button>
                    <Button 
                      variant="ghost"
                      onClick={() => setLocation("/")}
                      className="w-full text-gray-500 hover:text-white font-mono text-xs"
                    >
                      Return to Menu
                    </Button>
                  </div>
                </>
              )}
            </Card>
          </div>
        )}
      </div>

      {/* Controls Hint */}
      <div className="mt-8 text-gray-500 font-mono text-xs flex gap-8 opacity-50">
        <span className="flex items-center gap-2"><span className="border border-gray-700 px-2 py-1 rounded">WASD</span> MOVE</span>
        <span className="flex items-center gap-2"><span className="border border-gray-700 px-2 py-1 rounded">ARROWS</span> MOVE</span>
      </div>

      <Button 
        variant="ghost" 
        size="icon"
        className="absolute top-4 left-4 text-gray-500 hover:text-white"
        onClick={() => setLocation("/")}
      >
        <ArrowLeft />
      </Button>
    </div>
  );
}
