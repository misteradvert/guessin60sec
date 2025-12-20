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
          <div className="divLogoBtn" style={{ height: "100%", border: "2px solid lime", dispay: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
            <img className="mainLogo" src="/logotype.png" alt="Лого Угадай за 60 секунд" style={{ width: "80%", border: "1px solid blue", marginTop: "10vh" }}></img>
            <div style={{ textAlign: "center", border: "1px solid black", width: "80%", fontSize: "35px", marginTop: "10%", fontFamily: "'BabyPop', sans-serif", fontWeight: "500" }}>Объясни максимальное количество слов своей команде за 60 секунд</div>
            <StartBtn className="startBtn" name="Начать игру" onClick={handleStartGame} sx={{ marginTop: "30%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
