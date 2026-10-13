import { isString } from "../types";
import type { Question } from "../types";

const questionBank: Question[] = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Tool Machine Language",
      "High Text Machine Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "What does JS stand for?",
    options: ["Java Source", "Just Script", "JavaScript", "JSON Style"],
    answer: "JavaScript",
  },
  {
    question: "What is TypeScript?",
    options: [
      "A database",
      "A JavaScript superset with types",
      "A CSS framework",
      "A browser",
    ],
    answer: "A JavaScript superset with types",
  },
  {
    question: "Which method adds an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "slice()"],
    answer: "push()",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Syntax",
      "Colorful Style System",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which hook stores state in a function component?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    question: "Which HTML tag creates a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<nav>"],
    answer: "<a>",
  },
  {
    question: "Which symbol starts a CSS class selector?",
    options: ["#", ".", "@", "*"],
    answer: ".",
  },
  {
    question: "Which keyword declares a block-scoped variable in JavaScript?",
    options: ["var", "let", "define", "dim"],
    answer: "let",
  },
  {
    question: "What does JSX let you write inside JavaScript?",
    options: [
      "SQL queries",
      "HTML-like markup",
      "CSS rules",
      "Shell commands",
    ],
    answer: "HTML-like markup",
  },
];

export const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

export const loadQuestions = (): Question[] =>
  shuffle(questionBank).filter((item) => isString(item.question));
