import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Checkbox from "@mui/material/Checkbox";

function OneCard({ onCheckboxChange }) {
  let allCardsArr = {
    card1: ["Безумный Макс", "Игра Престолов", "Depeche Mode", "Бред Пит", "Elton John", "Симба", "Лютер", "Мулан"],
    card2: ["Большой добрый великан", "Ривердейл", "Evanescence", "Риз Уизерспун", "Сплин", "Джесси Пинкман", "Сорвиголова", "Бойцовский клуб"],
    card3: ["Диктатор", "Монстр", "Radiohead", "Натали Портман", "Slipknot", "Торин Дубощит", "И снова здравствуйте", "Таинственный сад"],
  };

  // Инициализируем массив состояний для каждого чекбокса
  const [checkedStates, setCheckedStates] = useState(Array(allCardsArr.card1.length).fill(false));

  const handleChange = (index) => (e) => {
    const checked = e.target.checked;

    // Обновляем состояние конкретного чекбокса
    setCheckedStates((prev) => {
      const newStates = [...prev];
      newStates[index] = checked;
      return newStates;
    });

    // Передаем изменение родителю
    onCheckboxChange(index, checked);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "98%", // Учитываем высоту верхней панели
        overflow: "hidden", // Предотвращаем выход за пределы
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
            overflowY: "auto", // Добавляем прокрутку внутри карточки если нужно
            padding: "16px",
            "&:last-child": { paddingBottom: "16px" },
          }}
        >
          {allCardsArr.card1.map(function (el, index) {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "7.5vh",
                  borderBottom: "1px solid #c2c2c2ff", // Добавляем разделитель
                  "&:last-child": { borderBottom: "none" }, // Убираем у последнего
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", margin: "6px 0" }} // Добавляем отступы
                >
                  <Box sx={{ fontFamily: "'BabyPop', sans-serif", fontWeight: "500", fontSize: "25px", color: "#542ee7" }}>{el.toUpperCase()}</Box>

                  <Box>
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }} color="success" checked={checkedStates[index]} onChange={handleChange(index)} />
                  </Box>
                </Typography>
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

export default OneCard;
