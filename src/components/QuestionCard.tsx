import AnswerOption from "./AnswerOption";
import type { Question } from "../types";

type QuestionCardProps = {
  question: Question;
  selected: string;
  onSelect: (choice: string) => void;
};

export default function QuestionCard({
  question,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="mb-1">
      <h2 className="mb-[22px] text-[21px] font-semibold leading-snug text-slate-800">
        {question.question}
      </h2>
      <div className="grid gap-3">
        {question.options.map((option) => (
          <AnswerOption
            key={option}
            label={option}
            selected={selected === option}
            onSelect={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}
