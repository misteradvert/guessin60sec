import React from "react";
import TeamBtn from "../TeamBtn/TeamBtn";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "../pages/TeamChoosePage.css";

function TeamChoosePage() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [isFirstTeamSet, setIsFirstTeamSet] = useState(false);
  const [teamNames, setTeamNames] = useState({
    firstTeam: "",
    secondTeam: "",
  });

  const handleReady = () => {
    if (!isFirstTeamSet) {
      setTeamNames({
        ...teamNames,
        firstTeam: inputValue,
      });
      setIsFirstTeamSet(true);
      setInputValue("");
      return;
    }

    const names = {
      ...teamNames,
      secondTeam: inputValue,
    };
    setTeamNames(names);
    navigate("/CardPlay", { state: { teamNames: names } });
  };

  return (
    <>
      <div className="divMain">
        <div className="divAllContent" style={{display: "flex", justifyContent: "center", alignItems: "center", border: "2px dotted red"}}>

          <div style={{ width: "90%", height: "20%", marginBottom:"20%", border: "2px dotted lime" }}>

            <div style={{ width: "100%", height: "100%", fontFamily: "'BabyPop', sans-serif", fontWeight: "500", fontSize: "50px", textAlign: "center" }}>
              {isFirstTeamSet ? "Введи название второй команды" : "Введи название первой команды"}
            </div>
            <div id="inputBtn" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around",alignItems:"center", width:"80%" }}>
              <TextField id="filled-basic" label="Вот здесь" variant="filled" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <TeamBtn name="Готово" onClick={handleReady} />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamChoosePage;
