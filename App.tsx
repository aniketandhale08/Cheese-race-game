
import React, { useState, useCallback } from 'react';
import HomeScreen from './components/HomeScreen';
import GameScreen from './components/GameScreen';
import ResultScreen from './components/ResultScreen';
import { GameSettings, GameStatus, Difficulty, Operation } from './types';
import { Background } from './components/assets';

const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Home);
  const [gameSettings, setGameSettings] = useState<GameSettings>({
    difficulty: Difficulty.Easy,
    operations: [Operation.Addition],
  });
  const [finalScore, setFinalScore] = useState(0);

  const handleStartGame = useCallback((settings: GameSettings) => {
    if (settings.operations.length > 0) {
      setGameSettings(settings);
      setGameStatus(GameStatus.Playing);
    } else {
      alert("Please select at least one math operation to start the game.");
    }
  }, []);

  const handleGameEnd = useCallback((score: number, won: boolean) => {
    setFinalScore(score);
    setGameStatus(won ? GameStatus.Won : GameStatus.Lost);
  }, []);

  const handleRestart = useCallback(() => {
    setGameStatus(GameStatus.Home);
  }, []);

  const renderScreen = () => {
    switch (gameStatus) {
      case GameStatus.Playing:
        return <GameScreen settings={gameSettings} onGameEnd={handleGameEnd} />;
      case GameStatus.Won:
        return <ResultScreen won={true} score={finalScore} onRestart={handleRestart} />;
      case GameStatus.Lost:
        return <ResultScreen won={false} score={finalScore} onRestart={handleRestart} />;
      case GameStatus.Home:
      default:
        return <HomeScreen onStartGame={handleStartGame} />;
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#4a4a4a] overflow-hidden flex items-center justify-center">
      <Background />
      <div className="relative z-10 w-full max-w-6xl h-full">
        {renderScreen()}
      </div>
    </div>
  );
};

export default App;
