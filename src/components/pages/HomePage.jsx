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
      <div class="divMain">
        <div class="divAllContent">
          <div className="divLogo">
            <img alt="Лого Угадай за 60 секунд"></img>
          </div>
          <StartBtn name="Начать игру" onClick={handleStartGame} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
