import { BsCodeSlash } from "react-icons/bs";
import { IoBulbOutline } from "react-icons/io5";
const HeroCard = () => {
  const heroData = [
    {
      id: 1,
      title: "Real-World Problems",
      description: "Solve industry asked questions",
      icon: <IoBulbOutline />,
    },
    {
      id: 2,
      title: "Complete Solution",
      description: "Access the complete solution code",
      icon: <BsCodeSlash />,
    },
    {
      id: 3,
      title: "Various Difficulty Levels",
      description: "From beginner to advanced challenges",
      icon: <IoBulbOutline />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-4 py-10">
      {heroData.map((data) => (
        <div
          key={data.id}
          className="bg-slate-700 px-8 py-6  rounded-lg hover:cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out delay-100 text-white flex flex-col items-center"
        >
          <span className="text-blue-600 text-3xl py-2">{data.icon}</span>
          <h1 className="text-center text-2xl font-bold text-blue-100">
            {data.title}
          </h1>
          <h3 className="text-xl mt-2 text-center">{data.description}</h3>
        </div>
      ))}
    </div>
  );
};

export default HeroCard;
