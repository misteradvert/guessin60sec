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
          <div className="mainHeader">Угадать за 60 секунд</div>
          <StartBtn name="Начать игру" onClick={handleStartGame} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
