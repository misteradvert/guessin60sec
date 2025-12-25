import React from "react";
import TeamBtn from "../TeamBtn/TeamBtn";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from 'react';
import "../pages/TeamChoosePage.css";

function TeamChoosePage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleShowCard = () => {
    navigate(`/CardPlay?team=${encodeURIComponent(inputValue)}`);
  };

  return (
    <>
      <div className="divMain">
        <div className="divAllContent">
          <div style={{ width: "90%", height: "20%", border: "1px solid yellow" }}>
            <div style={{ width: "100%", height: "100%", border: "1px solid red", fontFamily: "'BabyPop', sans-serif", fontWeight: "500", fontSize: "50px", textAlign: "center" }}>Ввведи название своей команды</div>
            <div style={{ display: "flex", justifyContent: "space-around", border: "2px solid white" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <TextField id="filled-basic" label="Filled" variant="filled" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <TeamBtn name="Поехали !" onClick={handleShowCard} />
              </div>

              {/* <TeamBtn name="Команда 1" onClick={handleShowCard} />
              <TeamBtn name="Команда 2" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamChoosePage;
