import { useParams, Link } from "react-router-dom";
import { Theory_Questions } from "../data/TheoryQuestion";
import { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const SingleTheoryQuestionScreen = () => {
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
        <div className="bg-slate-700 text-white rounded-md md:h-40 mx-10 flex items-center justify-center">
          <h2 className="text-semibold text-xl md:text-3xl mx-10 py-2  ">
            {theory.answer}
          </h2>
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
