import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
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
    <div>
      <Card sx={{ minWidth: 450, minHeight: 720, borderRadius: 5 }}>
        <CardContent>
          {allCardsArr.card1.map(function (el, index) {
            return (
              // <--- Добавлено ключевое слово return
              <Box key={index} sx={{ display: "flex", flexDirection: "column", width: "80" }}>
                <Typography variant="h6" gutterBottom sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid red", width: "100" }}>
                  <Box sx={{ fontFamily: "'BabyPop', sans-serif", fontWeight: "500", fontSize: "30px", color: "#542ee7" }}>{el.toUpperCase()}</Box>
                  <Box>
                    <Checkbox sx={{ "& .MuiSvgIcon-root": { fontSize: 50 } }} color="success" checked={checkedStates[index]} onChange={handleChange(index)} />
                  </Box>
                </Typography>
              </Box>
            );
          })}
        </CardContent>

        <CardActions>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: 1, border: "1px solid red", marginLeft: "7px", marginRight: "7px" }}>
            <Button size="large" variant="contained">
              Пауза
            </Button>
            <Button size="large" variant="contained">
              След.карта
            </Button>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

export default OneCard;
