import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

export default function Home() {
  const { start } = useQuiz();
  const navigate = useNavigate();

  const handleStart = () => {
    start();
    navigate("/quiz");
  };

  return (
    <div className="rounded-[20px] border border-slate-200 bg-white px-9 py-10 shadow-[0_20px_45px_rgba(30,41,59,0.12)]">
      <span className="mb-[18px] inline-block rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] transition hover:bg-indigo-800 hover:text-indigo-100">
        Quiz App
      </span>
      <h1 className="mb-3 text-3xl font-bold leading-tight text-slate-800 text-center">
        Test your coding knowledge
      </h1>
      <p className="text-[15px] leading-relaxed text-slate-500 text-center font-bold">
         Ezekiel Haboc
      </p>

      <button
        className="mt-7 w-full cursor-pointer rounded-xl border-2 border-transparent bg-indigo-600 px-6 py-[15px] text-base font-bold text-white transition hover:border-blue-800 hover:bg-white hover:text-blue-800 active:translate-y-px"
        onClick={handleStart}
      >
        Start Quiz
      </button>
    </div>
  );
}
