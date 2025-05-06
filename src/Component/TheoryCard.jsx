import { Link } from "react-router-dom";

const TheoryCard = ({ theory }) => {
  return (
    <Link to={`/theory-question/${theory.id}`}>
      <div className="bg-slate-700 rounded-md p-4 mb-2 md:h-40 ">
        <h1 className="rounded-full px-3 text-white py-1 bg-slate-800 w-fit mb-2">
          {theory.topic}
        </h1>
        <h3 className="font-semibold text-xl text-white ">{theory.question}</h3>
      </div>
    </Link>
  );
};

export default TheoryCard;
