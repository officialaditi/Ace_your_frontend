import { JS_Questions } from "../data/JavascriptQuestion";
import QuestionCard from "../Component/QuestionCard";
import { useState } from "react";

const JavascriptQuesScreen = () => {
  const [selectedLevel, setSelectedLevel] = useState("All");

//filtering the data using level of difficulty's
const filteredData = JS_Questions.filter((q) => {
    if(selectedLevel === 'All') return true;
    return q.difficulty.toLowerCase() === selectedLevel.toLowerCase();
})

  return (
    <div className="text-white">
      <h1 className="text-center font-bold text-3xl py-4">
        Practice JavaScript Coding Questions
      </h1>

      <div className="flex items-end justify-end mx-10">
        <select
          className="bg-black w-40 px-2 py-1 border rounded"
         value={selectedLevel}
         onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option>All</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 py-10">
        {filteredData.map((data) => (
          <QuestionCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default JavascriptQuesScreen;
