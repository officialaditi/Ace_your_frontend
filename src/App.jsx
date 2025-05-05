import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Component/Footer";
import JavascriptQuesScreen from "./Screens/JavascriptQuesScreen";
import Single_JsQuestionScreen from "./Screens/Single_JsQuestionScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-16 bg-slate-800">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/js-questions" element={<JavascriptQuesScreen />} />
          <Route path="/js-questions/:id" element={<Single_JsQuestionScreen/>} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};
export default App;
