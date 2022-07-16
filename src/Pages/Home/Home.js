import { TextField } from "@mui/material";
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings_select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter your name"
            variant="outlined"
          />
          <TextField
            select
            label="select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
          />
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz-img" />
    </div>
  );
};

export default Home;
