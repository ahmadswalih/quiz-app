import React, { useEffect, useState } from "react";

const Quiz = ({ name, questions, setQuestions, score, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handlShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions]);
  console.log(options);
  const handlShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div>
      <span className="subtitle">Welcome , {name}</span>
    </div>
  );
};

export default Quiz;
