type QuizHeaderProps = {
  current: number;
  total: number;
};

export default function QuizHeader({ current, total }: QuizHeaderProps) {
  return (
    <div className="mb-3.5 flex items-baseline justify-between">
      <span className="text-[13px] font-bold uppercase tracking-[0.06em] text-indigo-600">
        Question {current}
      </span>
      <span className="text-[13px] text-slate-500">
        {current} / {total}
      </span>
    </div>
  );
}
