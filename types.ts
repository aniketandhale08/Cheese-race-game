
export enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

export enum Operation {
  Addition = 'Addition',
  Subtraction = 'Subtraction',
  Multiplication = 'Multiplication',
  Division = 'Division',
}

export interface GameSettings {
  difficulty: Difficulty;
  operations: Operation[];
}

export interface Question {
  text: string;
  answer: number;
  options: number[];
}

export interface Stats {
  [key: string]: {
    correct: number;
    total: number;
  };
}

export enum GameStatus {
  Playing = 'Playing',
  Won = 'Won',
  Lost = 'Lost',
  Home = 'Home',
  Result = 'Result'
}
