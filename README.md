# React Quiz App

A quiz app built with React, TypeScript, JSX, React Router, Tailwind CSS and Vite.

## Screens and routes

| Route     | Screen   | Purpose                                                             |
| --------- | -------- | ------------------------------------------------------------------- |
| `/`       | Home     | Title, description and Start Quiz button                            |
| `/quiz`   | Quiz     | Shuffled multiple-choice questions with progress bar and Next button |
| `/result` | Result   | Total, correct, incorrect, final score, percentage and actions      |
| `/review` | Review   | Every question with your answer and the correct answer              |

## Requirements

- Node.js 18 or newer
- VS Code (recommended extensions: ESLint, Prettier)

## Run it in VS Code

1. Unzip the folder and open it in VS Code: **File → Open Folder…**
2. Open the built-in terminal (**Ctrl + `**).
3. Install dependencies:

   ```
   npm install
   ```

4. Start the dev server:

   ```
   npm run dev
   ```

5. Open the URL it prints, usually http://localhost:5173

## Other commands

```
npm run build     type-check and build for production
npm run preview   preview the production build
```

## Project structure

```
react-quiz-app/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ src/
   ├─ main.tsx                    router and provider setup
   ├─ App.tsx                     route definitions
   ├─ index.css                   Tailwind CSS import, theme and base styles
   ├─ types.ts                    Question type and IsString conditional type
   ├─ data/
   │  └─ questions.ts             12 questions, shuffle and loader
   ├─ context/
   │  └─ QuizContext.tsx          shared state for questions, answers, score
   └─ components/
      ├─ Home.tsx                 page
      ├─ Quiz.tsx                 page
      ├─ Result.tsx               page
      ├─ Review.tsx               page
      ├─ QuizHeader.tsx           reusable
      ├─ ProgressBar.tsx          reusable
      ├─ QuestionCard.tsx         reusable
      ├─ AnswerOption.tsx         reusable
      ├─ ResultCard.tsx           reusable
      └─ ReviewItem.tsx           reusable
```

## How state is managed

The quiz state lives in `QuizContext`, so it survives navigation between routes.
`QuizContext` tracks the shuffled questions, the selected answers and whether the
quiz is finished. The score is derived from the answers, and the result and review
screens read it from the same context.

## Styling

The UI is styled with Tailwind CSS v4, wired in through the `@tailwindcss/vite`
plugin. `src/index.css` imports Tailwind and defines the base background and the
`rise` entrance animation used by the cards.
