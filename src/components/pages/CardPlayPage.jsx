import React from "react";
import OneCard from "../OneCard";
import Timer from "../Timer/Timer";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../pages/CardPlayPage.css";

function CardPlayPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const teamName = queryParams.get("team") || "";
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(60);

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
          <div
            style={{
              height: "95%",
              width: "95%",
              display: "flex",
              flexDirection: "column", // Меняем на column
              marginTop: "2vh",
              boxSizing: "border-box",
              border: "2px solid lime",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "2px solid orange",
                height: "80px", // Фиксированная высота верхней панели
                flexShrink: 0, // Запрещаем сжиматься
              }}
            >
              <div style={{ fontSize: "30px" }}>{teamName}</div>
              <Timer initialTime={60} />
              <div style={{ display: "flex" }}>
                <div style={{ fontSize: "30px" }}>Баллы: {counter}</div>
                <div style={{ fontSize: "30px", marginLeft: "5px" }}></div>
              </div>
            </div>

            <div
              style={{
                flex: 1, // Занимает оставшееся пространство
                minHeight: 0, // Важно для правильной работы flex
                width: "100%",
                marginTop: "10px",
              }}
            >
              <OneCard onCheckboxChange={handleCheckboxChange} />
            </div>

            <CardActions
              sx={{
                padding: "16px",
                borderTop: "1px solid #ddd", // Добавляем разделитель
                backgroundColor: "#f5f5f5", // Добавляем фон для кнопок
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", width: 1 }}>
                <Button size="large" variant="contained">
                  Пауза
                </Button>
                <Button size="large" variant="contained">
                  След.карта
                </Button>
              </Box>
            </CardActions>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPlayPage;
