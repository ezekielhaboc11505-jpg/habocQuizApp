type ResultCardProps = {
  total: number;
  correct: number;
  incorrect: number;
  score: number;
  percent: number;
  message: string;
  onRetake: () => void;
  onReview: () => void;
  onHome: () => void;
};

export default function ResultCard({
  total,
  correct,
  incorrect,
  score,
  percent,
  message,
  onRetake,
  onReview,
  onHome,
}: ResultCardProps) {
  return (
    <div className="animate-[rise_0.35s_ease_both] rounded-[20px] border border-slate-200 bg-white px-9 py-10 text-center shadow-[0_20px_45px_rgba(30,41,59,0.12)]">
      <div
        className="relative mx-auto mb-[22px] mt-1.5 grid h-[150px] w-[150px] place-items-center rounded-full before:absolute before:inset-3 before:rounded-full before:bg-white"
        style={{
          background: `conic-gradient(#4f46e5 ${percent}%, #eef2ff 0)`,
        }}
      >
        <div className="relative">
          <strong className="text-[34px] text-indigo-600">{percent}%</strong>
          <small className="block text-xs font-semibold text-slate-500">
            {score} / {total} correct
          </small>
        </div>
      </div>

      <h1 className="mb-2.5 text-3xl font-bold text-slate-800">Well done!</h1>
      <p className="mx-auto max-w-[420px] text-[15px] leading-relaxed text-slate-500">
        {message}
      </p>

      <div className="my-1 flex justify-center gap-[30px] border-y border-slate-200 py-[18px]">
        <div className="text-center">
          <b className="block text-[22px] text-slate-800">{total}</b>
          <span className="text-xs uppercase tracking-[0.06em] text-slate-500">
            Total
          </span>
        </div>
        <div className="text-center">
          <b className="block text-[22px] text-green-600">{correct}</b>
          <span className="text-xs uppercase tracking-[0.06em] text-slate-500">
            Correct
          </span>
        </div>
        <div className="text-center">
          <b className="block text-[22px] text-red-600">{incorrect}</b>
          <span className="text-xs uppercase tracking-[0.06em] text-slate-500">
            Incorrect
          </span>
        </div>
      </div>

      <p className="mt-[18px] text-[15px] text-slate-500">
        Final score: <b className="text-slate-800">{score}</b> / {total}
      </p>

      <button
        className="mt-6 w-full cursor-pointer rounded-xl bg-indigo-600 px-6 py-[15px] text-base font-bold text-white transition hover:bg-indigo-800 active:translate-y-px"
        onClick={onRetake}
      >
        Retake Quiz
      </button>
      <button
        className="mt-3 w-full cursor-pointer rounded-xl border-2 border-indigo-600 bg-white px-6 py-[15px] text-base font-bold text-indigo-600 transition hover:bg-indigo-50 active:translate-y-px"
        onClick={onReview}
      >
        Review Answers
      </button>
      <button
        className="mt-3 w-full cursor-pointer rounded-xl border-2 border-indigo-600 bg-white px-6 py-[15px] text-base font-bold text-indigo-600 transition hover:bg-indigo-50 active:translate-y-px"
        onClick={onHome}
      >
        Return Home
      </button>
    </div>
  );
}
