import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import Quiz from "./Pages/Quiz/Quiz";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const fetchQuestions = () => {};

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route path="/quiz" exact element={<Quiz />} />
          <Route path="/result" exact element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
