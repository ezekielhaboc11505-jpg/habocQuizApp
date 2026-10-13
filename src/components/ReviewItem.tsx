import type { Question } from "../types";

type ReviewItemProps = {
  index: number;
  question: Question;
  picked?: string;
};

export default function ReviewItem({
  index,
  question,
  picked,
}: ReviewItemProps) {
  const isRight = picked === question.answer;

  return (
    <div
      className={
        "rounded-xl border border-slate-200 border-l-[5px] bg-white px-4 py-3.5 text-left " +
        (isRight ? "border-l-green-600" : "border-l-red-600")
      }
    >
      <div className="mb-2.5 flex gap-2 text-sm font-bold leading-snug text-slate-800">
        <i className="flex-none font-bold not-italic text-slate-500">
          {index}.
        </i>
        <span>{question.question}</span>
      </div>
      <div className="mt-[5px] flex gap-2 text-[13.5px] leading-normal">
        <em className="flex-none basis-[92px] not-italic text-slate-500">
          Your answer
        </em>
        <b className={"font-semibold " + (isRight ? "text-green-600" : "text-red-600")}>
          {picked || "No answer"}
        </b>
      </div>
      {!isRight && (
        <div className="mt-[5px] flex gap-2 text-[13.5px] leading-normal">
          <em className="flex-none basis-[92px] not-italic text-slate-500">
            Correct answer
          </em>
          <b className="font-semibold text-green-600">{question.answer}</b>
        </div>
      )}
    </div>
  );
}
