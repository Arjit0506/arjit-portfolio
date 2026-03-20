'use client';

import { useState, useEffect } from 'react';

export default function Game2048Demo() {
  const [grid, setGrid] = useState<number[][]>(() => {
    const initialGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    addNewTile(initialGrid);
    addNewTile(initialGrid);
    return initialGrid;
  });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function addNewTile(currentGrid: number[][]) {
    const emptyCells: [number, number][] = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (currentGrid[i][j] === 0) {
          emptyCells.push([i, j]);
        }
      }
    }
    if (emptyCells.length > 0) {
      const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      currentGrid[row][col] = Math.random() < 0.9 ? 2 : 4;
    }
  }

  function moveLeft(currentGrid: number[][]) {
    let moved = false;
    let newScore = 0;
    
    for (let i = 0; i < 4; i++) {
      const row = currentGrid[i].filter(val => val !== 0);
      const merged: number[] = [];
      
      for (let j = 0; j < row.length; j++) {
        if (j < row.length - 1 && row[j] === row[j + 1]) {
          merged.push(row[j] * 2);
          newScore += row[j] * 2;
          j++;
        } else {
          merged.push(row[j]);
        }
      }
      
      const newRow = [...merged, ...Array(4 - merged.length).fill(0)];
      if (JSON.stringify(newRow) !== JSON.stringify(currentGrid[i])) {
        moved = true;
      }
      currentGrid[i] = newRow;
    }
    
    return { moved, newScore };
  }

  function rotateGrid(currentGrid: number[][]) {
    const newGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newGrid[j][3 - i] = currentGrid[i][j];
      }
    }
    return newGrid;
  }

  function move(direction: 'left' | 'right' | 'up' | 'down') {
    if (gameOver) return;
    
    let newGrid = grid.map(row => [...row]);
    let rotations = 0;
    
    switch (direction) {
      case 'right': rotations = 2; break;
      case 'up': rotations = 3; break;
      case 'down': rotations = 1; break;
    }
    
    for (let i = 0; i < rotations; i++) {
      newGrid = rotateGrid(newGrid);
    }
    
    const { moved, newScore } = moveLeft(newGrid);
    
    for (let i = 0; i < (4 - rotations) % 4; i++) {
      newGrid = rotateGrid(newGrid);
    }
    
    if (moved) {
      addNewTile(newGrid);
      setGrid(newGrid);
      setScore(score + newScore);
      checkGameOver(newGrid);
    }
  }

  function checkGameOver(currentGrid: number[][]) {
    // Check for empty cells
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (currentGrid[i][j] === 0) return;
      }
    }
    
    // Check for possible merges
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const current = currentGrid[i][j];
        if ((i < 3 && currentGrid[i + 1][j] === current) ||
            (j < 3 && currentGrid[i][j + 1] === current)) {
          return;
        }
      }
    }
    
    setGameOver(true);
  }

  function getTileColor(value: number) {
    const colors: { [key: number]: string } = {
      0: 'bg-white/10',
      2: 'bg-white/90 text-black',
      4: 'bg-white/80 text-black',
      8: 'bg-orange-500 text-white',
      16: 'bg-orange-600 text-white',
      32: 'bg-orange-700 text-white',
      64: 'bg-red-500 text-white',
      128: 'bg-yellow-500 text-white',
      256: 'bg-yellow-600 text-white',
      512: 'bg-yellow-700 text-white',
      1024: 'bg-green-500 text-white',
      2048: 'bg-green-600 text-white',
    };
    return colors[value] || 'bg-purple-600 text-white';
  }

  function resetGame() {
    const newGrid = Array(4).fill(null).map(() => Array(4).fill(0));
    addNewTile(newGrid);
    addNewTile(newGrid);
    setGrid(newGrid);
    setScore(0);
    setGameOver(false);
  }

  return (
    <div className="bg-black/50 rounded-lg p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white font-semibold">2048 Game</h4>
        <div className="text-right">
          <div className="text-white text-sm font-medium">Score: {score}</div>
          {gameOver && <div className="text-red-400 text-xs">Game Over!</div>}
        </div>
      </div>

      <div className="bg-black/30 rounded-lg p-3 mb-4 border border-white/5">
        <div className="grid grid-cols-4 gap-2">
          {grid.map((row, i) =>
            row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`aspect-square rounded flex items-center justify-center font-bold text-lg ${getTileColor(cell)}`}
              >
                {cell !== 0 && cell}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div></div>
        <button
          onClick={() => move('up')}
          className="bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition"
        >
          ↑
        </button>
        <div></div>
        <button
          onClick={() => move('left')}
          className="bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition"
        >
          ←
        </button>
        <button
          onClick={() => move('down')}
          className="bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition"
        >
          ↓
        </button>
        <button
          onClick={() => move('right')}
          className="bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg transition"
        >
          →
        </button>
      </div>

      <button
        onClick={resetGame}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition"
      >
        New Game
      </button>
    </div>
  );
}
