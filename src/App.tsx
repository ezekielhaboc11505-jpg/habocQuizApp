import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Review from "./components/Review";

export default function App() {
  return (
    <div className="flex min-h-screen w-full items-start justify-center p-6">
      <div className="my-auto w-full max-w-[620px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/review" element={<Review />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}
