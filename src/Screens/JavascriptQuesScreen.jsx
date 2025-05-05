import { JS_Questions } from "../JavascriptQuestion";
import QuestionCard from "../Component/QuestionCard";

const JavascriptQuesScreen = () => {
return (
    <div className="text-white">
       <h1 className="text-center font-bold text-3xl py-4">Practice JavaScript Coding Question </h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 py-10">
        {JS_Questions.map((data) => (
            <QuestionCard data={data} key={data.id} />
        ))}
       </div>
    </div>
)
}
export default JavascriptQuesScreen;