import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { loadQuestions } from "../data/questions";
import type { Question } from "../types";

type QuizValue = {
  questions: Question[];
  answers: string[];
  score: number;
  finished: boolean;
  start: () => void;
  answer: (choice: string) => void;
  finish: () => void;
  retake: () => void;
  reset: () => void;
};

const QuizContext = createContext<QuizValue | null>(null);

export function QuizProvider({ children }: { children: ReactNode }) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  const score = questions.filter(
    (item, i) => answers[i] === item.answer
  ).length;

  const start = () => {
    setQuestions(loadQuestions());
    setAnswers([]);
    setFinished(false);
  };

  const answer = (choice: string) => setAnswers((prev) => [...prev, choice]);
  const finish = () => setFinished(true);

  const retake = () => {
    setQuestions(loadQuestions());
    setAnswers([]);
    setFinished(false);
  };

  const reset = () => {
    setQuestions([]);
    setAnswers([]);
    setFinished(false);
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        answers,
        score,
        finished,
        start,
        answer,
        finish,
        retake,
        reset,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used inside QuizProvider");
  }
  return context;
}
