import { Link, useParams } from "react-router-dom";
import { JS_Questions } from "../data/JavascriptQuestion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BsCodeSlash } from "react-icons/bs";
import { useEffect } from "react";

const Single_JsQuestionScreen = () => {
  const { id } = useParams();
  const question = JS_Questions.find((ques) => ques.id === Number(id));
  const difficultyColor = {
    easy: "bg-green-600",
    medium: "bg-yellow-500",
    hard: "bg-red-600",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Link
        to="/js-questions"
        className=" flex items-center gap-2 mx-10 py-8 text-blue-300 hover:text-blue-500 transition-colors duration-150 "
      >
        <FaArrowLeftLong />
        Back to JavaScript Question
      </Link>
      <div className=" text-white flex flex-col gap-4 mx-10 bg-slate-700 rounded-md px-5 py-3">
        <div className="flex  items-center justify-between">
          <h1 className="flex items-center text-base lg:text-3xl gap-3">
            <BsCodeSlash className="text-blue-600" size={30} />
            Js Coding Question to solve
          </h1>
          <span
            className={`${
              difficultyColor[question.difficulty]
            } rounded-full px-2 py-1 lg:px-3 lg:py-1 text-black font-semibold `}
          >
            {question.difficulty}
          </span>
        </div>

        <h3 className="text-xl">{question.text}</h3>
        <div className="flex items-end justify-end">
          <Link
            to=""
            className="bg-blue-600 hover:bg-blue-700 text-lg lg:text-2xl px-3 py-1 rounded-xl w-fit flex items-center gap-3"
          >
            View Solution
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
      <div className="text-white mt-10 w-1/2 flex flex-col gap-4 mx-10 bg-slate-700 rounded-md px-5 py-3">
        <h1 className="font-bold text-3xl">Resources:-</h1>
        <h3 className="font-semibold">Useful Links:</h3>
        <Link
          to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          className="text-blue-500"
        >
          MDN Web Docs (by Mozilla)
        </Link>
        <Link to="https://www.w3schools.com/js/default.asp" target="_blank" className="text-blue-500">
          W3Schools (for quick beginners)
        </Link>
      </div>
    </div>
  );
};
export default Single_JsQuestionScreen;
