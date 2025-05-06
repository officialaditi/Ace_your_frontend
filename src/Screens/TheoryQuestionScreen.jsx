import TheoryCard from "../Component/TheoryCard";
import { Theory_Questions } from "../data/TheoryQuestion";

const TheoryQuestionScreen = () => {
  return (
    <>
      <div className="min-h-screen w-full text-white">
        <h1 className="py-3 text-3xl font-bold text-center">
          Theory Questions
        </h1>
        <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 pb-6">
          {Theory_Questions.map((theory) => (
            <TheoryCard key={theory.id} theory={theory} />
          ))}
        </div>
      </div>
    </>
  );
};
export default TheoryQuestionScreen;
