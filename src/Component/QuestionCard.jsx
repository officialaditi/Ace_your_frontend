import { BsCodeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";


const QuestionCard = ({ data }) => {
  const difficultyColor = {
    easy: "bg-green-600",
    medium: "bg-yellow-500",
    hard: "bg-red-600",
  };

  return (
    <Link to={`/js-questions/${data.id}`} className="block">
      <div className="bg-slate-700 rounded-lg p-4 hover:cursor-pointer h-36">
        <div className="flex items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-xl sm:text-lg text-white">
            <BsCodeSlash size={20} className="text-blue-500" />
            JS Coding Question
          </h3>
          <span
            className={`${
              difficultyColor[data.difficulty] || "bg-gray-300"
            } px-3 py-1 rounded-full text-sm sm:text-base text-black text-center`}
          >
            {data.difficulty}
          </span>
        </div>

        <p className="text-base sm:text-lg text-white mt-3">{data.text}</p>

      </div>
    </Link>
  );
};

export default QuestionCard;
