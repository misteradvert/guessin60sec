import React from "react";
import OneCard from "../OneCard";
import Timer from "../Timer/Timer"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../pages/CardPlayPage.css";

function CardPlayPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const teamName = queryParams.get("team") || "";
  const [counter, setCounter] = useState(0);

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
          <div style={{ height: "100%", alignItems: "flex-start" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center", marginTop: "25px", marginBottom: "40px" }}>
              <div style={{ fontSize: "30px" }}>{teamName}</div>
              <Timer/>
              <div style={{ display: "flex" }}>
                <div style={{ fontSize: "30px" }}>Баллы: {counter}</div>
                <div style={{ fontSize: "30px", marginLeft: "5px" }}></div>
              </div>
            </div>
            <OneCard onCheckboxChange={handleCheckboxChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPlayPage;
