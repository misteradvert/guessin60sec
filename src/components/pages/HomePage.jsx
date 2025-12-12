import React from "react";
import { useNavigate } from "react-router-dom";
import StartBtn from "../StartBtn/StartBtn";
import "../pages/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/TeamChoose");
  };

  return (
    <>
      <div className="divMain">
        <div className="divAllContent">
          <div className="divLogoBtn">
            <img className="mainLogo" src="/logotype.png" alt="Лого Угадай за 60 секунд" style={{ border: "1px solid blue" }}></img>
            <StartBtn className="startBtn" name="Начать игру" onClick={handleStartGame} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
