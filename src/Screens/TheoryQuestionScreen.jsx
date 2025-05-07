import { useState } from "react";
import TheoryCard from "../Component/TheoryCard";
import { Theory_Questions } from "../data/TheoryQuestion";

const TheoryQuestionScreen = () => {
  const [selectTopic, setSelectedTopic] = useState('ALL');

  const filteredTopic = Theory_Questions.filter((theory) => {
    if (selectTopic === "ALL") return true;
    return theory.topic.toLowerCase() === selectTopic.toLowerCase();
  })

  return (
    <>
      <div className="min-h-screen w-full text-white">
        <h1 className="py-3 text-3xl font-bold text-center">
          Theory Questions
        </h1>
        <div className="flex items-end justify-end mx-10 mb-10 ">
          <select className="bg-black text-white w-36" value={selectTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
            <option>ALL</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>JAVASCRIPT</option>
            <option>REACT</option>
          </select>
        </div>
        <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 pb-6">
          {filteredTopic.map((theory) => (
            <TheoryCard key={theory.id} theory={theory} />
          ))}
        </div>
      </div>
    </>
  );
};
export default TheoryQuestionScreen;
