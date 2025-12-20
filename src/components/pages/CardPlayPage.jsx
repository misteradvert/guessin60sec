import React from "react";
import OneCard from "../OneCard";
import "../pages/CardPlayPage.css";

function CardPlayPage() {
  return (
    <>
      <div className="divMain">
        <div className="divAllContent">
          <div style={{ height: "100%", alignItems: "flex-start", border: "3px solid black" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "25px", marginBottom: "40px", border: "1px solid lime" }}>
              <div style={{ fontSize: "30px" }}>Елда</div>
              <div style={{ display: "flex" }}>
                <div style={{ fontSize: "30px" }}>Баллы:</div>
                <div style={{ fontSize: "30px" }}>0</div>
              </div>
            </div>
            <OneCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPlayPage;