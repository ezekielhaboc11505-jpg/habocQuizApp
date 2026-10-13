import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import QuizHeader from "./QuizHeader";
import { useQuiz } from "../context/QuizContext";

export default function Quiz() {
  const { questions, answer, finish } = useQuiz();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState("");

  if (questions.length === 0) {
    return <Navigate to="/" replace />;
  }

  const current = questions[index];
  const isLast = index === questions.length - 1;
  const progress = ((index + 1) / questions.length) * 100;

  const next = () => {
    if (!choice) return;
    answer(choice);

    if (isLast) {
      finish();
      navigate("/result");
      return;
    }
    setIndex(index + 1);
    setChoice("");
  };

  return (
    <div
      key={index}
      className="animate-[rise_0.35s_ease_both] rounded-[20px] border border-slate-200 bg-white px-9 py-10 shadow-[0_20px_45px_rgba(30,41,59,0.12)]"
    >
      <QuizHeader current={index + 1} total={questions.length} />
      <ProgressBar value={progress} />
      <QuestionCard question={current} selected={choice} onSelect={setChoice} />
      <button
        className="mt-6 w-full cursor-pointer rounded-xl bg-indigo-600 px-6 py-[15px] text-base font-bold text-white transition hover:bg-indigo-800 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-45"
        disabled={!choice}
        onClick={next}
      >
        {isLast ? "Finish" : "Next"}
      </button>
    </div>
  );
}
