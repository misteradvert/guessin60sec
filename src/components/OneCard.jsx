import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function OneCard() {
  let allCardsArr = {
    card1: ["Безумный Макс", "Игра Престолов", "Depeche Mode", "Бред Пит", "Elton John", "Симба", "Лютер", "Мулан"],
    card2: ["Большой добрый великан", "Ривердейл", "Evanescence", "Риз Уизерспун", "Сплин", "Джесси Пинкман", "Сорвиголова", "Бойцовский клуб"],
    card3: ["Диктатор", "Монстр", "Radiohead", "Натали Портман", "Slipknot", "Торин Дубощит", "И снова здравствуйте", "Таинственный сад"],
  };

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {allCardsArr.card1.map(function (el, index) {
            return (
              // <--- Добавлено ключевое слово return
              <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" gutterBottom>
                  {el}
                </Typography>
              </Box>
            );
          })}
        </CardContent>
        <CardActions>
          <Button size="small">След.карта</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default OneCard;