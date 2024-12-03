"use client"

import styles from "./Timer.module.css"
import Button from "./Button";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      clearInterval(timer);
      setIsBreak((prevIsBreak) => !prevIsBreak); 
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60); // Resets timer (25 min work, 5 min break)
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak]);

  const toggleTimer = () => setIsRunning((prev) => !prev);
  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Gochi Hand" }}>
      <h2>{isBreak ? "Break Time!" : "Work Time!"}</h2>
      <div style={{ fontSize: "45px", margin: "5px 0" }}>
        {formatTime(timeLeft)}
      </div>
      <button onClick={toggleTimer} className={styles.button}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={resetTimer} className={styles.button}>
        Reset
      </button>
    </div>


  );
};

export default Timer;
