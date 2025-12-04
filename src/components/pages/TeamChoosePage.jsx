import React from "react";
import TeamBtn from "../TeamBtn/TeamBtn";

function TeamChoosePage() {
  return (
    <>
      <div
        style={{ width: "400px", height: "100px", border: "1px solid yellow" }}
      >
        <div style={{ width: "100%", height: "100%", border: "1px solid red" }}>
          Выбери свою команду
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "2px solid white",
          }}
        >
          <TeamBtn name="Команда 1" />
          <TeamBtn name="Команда 2" />
        </div>
      </div>
    </>
  );
}

export default TeamChoosePage;
