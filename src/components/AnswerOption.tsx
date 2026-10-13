type AnswerOptionProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export default function AnswerOption({
  label,
  selected,
  onSelect,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      className={
        "flex w-full cursor-pointer items-center gap-3.5 rounded-xl border-2 px-[18px] py-[15px] text-left transition " +
        (selected
          ? "border-indigo-600 bg-indigo-50"
          : "border-slate-200 bg-white hover:border-indigo-200 hover:bg-slate-50")
      }
      onClick={onSelect}
      aria-pressed={selected}
    >
      <span
        className={
          "relative box-border h-5 w-5 flex-none rounded-full border-2 " +
          (selected
            ? "border-indigo-600 after:absolute after:inset-[3px] after:rounded-full after:bg-indigo-600"
            : "border-slate-300")
        }
      />
      <span className="text-slate-800">{label}</span>
    </button>
  );
}
