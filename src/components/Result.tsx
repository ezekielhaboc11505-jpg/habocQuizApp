import { Navigate, useNavigate } from "react-router-dom";
import ResultCard from "./ResultCard";
import { useQuiz } from "../context/QuizContext";

export default function Result() {
  const { questions, score, finished, retake, reset } = useQuiz();
  const navigate = useNavigate();

  if (!finished || questions.length === 0) {
    return <Navigate to="/" replace />;
  }

  const total = questions.length;
  const correct = score;
  const incorrect = total - correct;
  const percent = Math.round((correct / total) * 100);

  const message =
    percent === 100
      ? "Perfect score! You nailed every question."
      : percent >= 75
      ? "Great job! You have a strong grasp of the basics."
      : percent >= 50
      ? "Not bad. A little more practice and you will ace it."
      : "Keep going. Review the basics and try again.";

  const handleRetake = () => {
    retake();
    navigate("/quiz");
  };

  const handleHome = () => {
    reset();
    navigate("/");
  };

  return (
    <ResultCard
      total={total}
      correct={correct}
      incorrect={incorrect}
      score={score}
      percent={percent}
      message={message}
      onRetake={handleRetake}
      onReview={() => navigate("/review")}
      onHome={handleHome}
    />
  );
}
