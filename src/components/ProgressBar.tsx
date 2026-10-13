type ProgressBarProps = {
  value: number;
  label?: string;
};

export default function ProgressBar({ value, label }: ProgressBarProps) {
  const width = Math.min(100, Math.max(0, value));

  return (
    <div className="mb-6">
      {label && (
        <div className="mb-2 flex justify-between text-[13px] text-slate-500">
          <span>{label}</span>
          <span>{Math.round(width)}%</span>
        </div>
      )}
      <div className="h-2 overflow-hidden rounded-full bg-indigo-50">
        <div
          className="h-full rounded-full bg-indigo-600 transition-[width] duration-300 ease-out"
          style={{ width: width + "%" }}
        />
      </div>
    </div>
  );
}
