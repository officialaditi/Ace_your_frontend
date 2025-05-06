import { useParams, Link } from "react-router-dom";
import { Theory_Questions } from "../data/TheoryQuestion";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const SingleTheoryQuestionScreen = () => {
  const [showAns, setShowAns] = useState(false);
  const handleAnsToggle = () => {
    setShowAns(!showAns);
  };

  const { id } = useParams();

  const theory = Theory_Questions.find((theory) => theory.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="min-h-screen">
        <Link
          to="/theory-question"
          className=" flex items-center gap-2 mx-10 py-8 text-blue-300 hover:text-blue-500 transition-colors duration-150 "
        >
          <FaArrowLeftLong />
          Back to JavaScript Question
        </Link>
        <div className=" text-white flex flex-col gap-4 mx-10 bg-slate-700 rounded-md px-5 py-3">
          <div className="flex  items-center justify-between">
            <h1 className="flex items-center text-base lg:text-2xl gap-3">
              Theory Questions
            </h1>
            <span className="bg-slate-800 rounded-full px-4 py-1">
              {theory.topic}
            </span>
          </div>

          <h3 className="text-xl">{theory.question}</h3>

         <div className="flex items-end justify-end">
         <button
            className="bg-blue-600 hover:bg-blue-700 text-lg lg:text-xl px-3 py-1 rounded-xl w-fit flex items-center gap-3"
            onClick={handleAnsToggle}
          >
            {showAns ? "Hide Answer" : "Show Answer"}
          </button>
         </div>
          {showAns && (
            <div>
              <h1 className="text-2xl">{theory.answer}</h1>
            </div>
          )}
        </div>
        <div className="text-white mt-10 w-1/2 flex flex-col gap-4 mx-10 bg-slate-700 rounded-md px-5 py-3">
          <h1 className="font-bold text-3xl">Resources:-</h1>
          <h3 className="font-semibold">Useful Links:</h3>
          <Link
            to="https://react.dev/"
            target="_blank"
            className="text-blue-500"
          >
            React Dev
          </Link>
          <Link
            to="https://www.w3schools.com/react/default.asp"
            target="_blank"
            className="text-blue-500"
          >
            W3Schools (for quick beginners)
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SingleTheoryQuestionScreen;
