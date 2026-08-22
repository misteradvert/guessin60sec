import React from "react";
import OneCard from "../OneCard";
import Timer from "../Timer/Timer";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../pages/CardPlayPage.css";

function CardPlayPage() {
  const location = useLocation();
  const teamNames = location.state?.teamNames || { firstTeam: "", secondTeam: "" };
  const teamName = teamNames.firstTeam;
  const [counter, setCounter] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isIntro, setIsIntro] = useState(true);
  const [timerResetKey, setTimerResetKey] = useState(0);

  const handleStartPause = () => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
      setIsPaused(true);
    } else {
      if (isTimeUp) {
        setTimerResetKey((key) => key + 1);
      }
      setIsTimerRunning(true);
      setIsPaused(false);
      setIsTimeUp(false);
      setIsIntro(false);
    }
  };

  const handleTimeEnd = () => {
    setIsTimerRunning(false);
    setIsPaused(false);
    setIsTimeUp(true);
  };

  const handleCheckboxChange = (index, isChecked) => {
    if (isChecked) {
      setCounter((prev) => prev + 1);
    } else {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="divMain">
        <div className="divAllContent">
          <div style={{ height: "95%", width: "95%", display: "flex", flexDirection: "column",  marginTop: "2vh", boxSizing: "border-box"}}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "80px", flexShrink: 0, }}>
              <div style={{ fontSize: "30px" }}>{teamName}</div>
              <Timer key={timerResetKey} initialTime={60} isRunning={isTimerRunning} onTimeEnd={handleTimeEnd} />
              <div style={{ display: "flex" }}>
                <div style={{ fontSize: "30px" }}>Баллы: {counter}</div>
                <div style={{ fontSize: "30px", marginLeft: "5px" }}></div>
              </div>
            </div>

            <div style={{ flex: 1, minHeight: 0, width: "100%", marginTop: "10px", position: "relative" }}>
              <OneCard onCheckboxChange={handleCheckboxChange} />
              {(isIntro || isPaused || isTimeUp) && (
                <div className="pauseOverlay">
                  <span>
                    {isIntro
                      ? `Первой начинает команда ${teamNames.firstTeam}. У тебя будет 60 сек, чтобы объяснить своей команде максимальное количество слов из карточки. Когда будешь готов, жми на "Старт" и таймер запустится`
                      : isTimeUp
                        ? "Время вышло! Ход начинает другая команда"
                        : "Пауза"}
                  </span>
                </div>
              )}
            </div>

            <CardActions sx={{ padding: "16px", borderTop: "1px solid #ddd", backgroundColor: "#f5f5f5", borderRadius: 5}}>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: 1}}>

                <Button size="large" variant="contained" onClick={handleStartPause}>
                  {isTimerRunning ? "Пауза" : "Старт"}
                </Button>
                <Button size="large" variant="contained">След.карта</Button>

              </Box>
            </CardActions>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPlayPage;