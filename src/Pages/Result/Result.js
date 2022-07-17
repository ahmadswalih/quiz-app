import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";
const Result = ({ name, score }) => {
  const history = useNavigate();
  useEffect(() => {
    if (!name) {
      history("/");
    }
  }, [name, history]);
  return (
    <div className="result">
      <span className="congra">Congratulations 🤩</span>
      <span className="title">Your Final Score is : {score}/10</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Try Again
      </Button>
    </div>
  );
};

export default Result;
