import React from "react";
import { useNavigate } from "react-router-dom";
import StartBtn from "../StartBtn/StartBtn";

function HomePage() {
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate("/TeamChoose");
  };

  return (
    <>
      <div className="mainHeader">Угадать за 60 секунд</div>
      <StartBtn name="Начать игру" onClick={handleStartGame} />
    </>
  );
}

export default HomePage;
