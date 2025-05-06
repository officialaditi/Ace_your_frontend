import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import HeroCard from "../Component/HeroCard";

const HomeScreen = () => {
  return (
    <div className="bg-slate-800 text-white min-h-screen">
      <div>
        <h1 className="font-bold text-center pt-20 text-3xl md:text-6xl lg:text-6xl">
          Ace Your Frontend
        </h1>
        <h3 className="font-semibold text-center py-4 md:py-10 px-6 lg:py-8 text-xl md:text-4xl lg:text-3xl">
          Build Confidence by solving questions and real-world challenges
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10 ">
        <Link
          to="/js-questions"
          className="group flex items-center gap-2 bg-blue-700 hover:bg-blue-600 transition-colors duration-300 text-white px-6 py-3 lg:px-3 lg:py-3 rounded-lg text-2xl md:text-4xl lg:text-2xl"
        >
          JavaScript Question
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
        <Link
          to="/react-questions"
          className="group flex items-center gap-2 bg-blue-700 hover:bg-blue-600 transition-colors duration-300 text-white px-6 py-3 lg:px-3 lg:py-3 rounded-lg text-2xl md:text-4xl lg:text-2xl"
        >
          React Question
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
        <Link
          to="/theory-question"
          className="group flex items-center gap-2 bg-blue-700 hover:bg-blue-600 transition-colors duration-300 text-white px-6 py-3 lg:px-3 lg:py-3 rounded-lg text-2xl md:text-4xl lg:text-2xl"
        >
          Theory Question
          <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
      <HeroCard />
    </div>
  );
};

export default HomeScreen;
