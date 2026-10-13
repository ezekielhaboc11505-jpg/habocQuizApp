import { Navigate, useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import ReviewItem from "./ReviewItem";
import { useQuiz } from "../context/QuizContext";

export default function Review() {
  const { questions, answers, score, finished, retake, reset } = useQuiz();
  const navigate = useNavigate();

  if (!finished || questions.length === 0) {
    return <Navigate to="/" replace />;
  }

  const percent = Math.round((score / questions.length) * 100);

  const handleRetake = () => {
    retake();
    navigate("/quiz");
  };

  const handleHome = () => {
    reset();
    navigate("/");
  };

  return (
    <div className="animate-[rise_0.35s_ease_both] rounded-[20px] border border-slate-200 bg-white px-9 py-10 shadow-[0_20px_45px_rgba(30,41,59,0.12)]">
      <span className="mb-[18px] inline-block rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-indigo-600">
        Review
      </span>
      <h1 className="mb-3 text-3xl font-bold leading-tight text-slate-800">
        Your answers
      </h1>
      <p className="text-[15px] leading-relaxed text-slate-500">
        Every question, the answer you chose, and the correct one.
      </p>

      <div className="mb-3 mt-6 flex items-baseline justify-between">
        <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-indigo-600">
          Accuracy
        </span>
        <span className="text-[13px] text-slate-500">
          {score} of {questions.length} correct &middot; {percent}%
        </span>
      </div>
      <ProgressBar value={percent} />

      <div className="mt-6 grid gap-3">
        {questions.map((item, i) => (
          <ReviewItem
            key={item.question}
            index={i + 1}
            question={item}
            picked={answers[i]}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-3">
        <button
          className="w-full cursor-pointer rounded-xl bg-indigo-600 px-6 py-[15px] text-base font-bold text-white transition hover:bg-indigo-800 active:translate-y-px"
          onClick={handleRetake}
        >
          Retake Quiz
        </button>
        <button
          className="w-full cursor-pointer rounded-xl border-2 border-indigo-600 bg-white px-6 py-[15px] text-base font-bold text-indigo-600 transition hover:bg-indigo-50 active:translate-y-px"
          onClick={() => navigate("/result")}
        >
          Back to Result
        </button>
        <button
          className="w-full cursor-pointer rounded-xl border-2 border-indigo-600 bg-white px-6 py-[15px] text-base font-bold text-indigo-600 transition hover:bg-indigo-50 active:translate-y-px"
          onClick={handleHome}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
