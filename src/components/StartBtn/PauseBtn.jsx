import React from "react";
import { Button } from "@mui/material";
function PauseBtn({ name, ...props }) {

  // Скрываем карту при клике
  const hideWords = () => {
    const cardDiv = document.getElementById("cardContent");
	cardDiv.style.display = "none";
	console.log("Клик!")
  };

  return (
    <Button variant="contained" size="large" onClick={hideWords} {...props}>
      {name}
    </Button>
  );
}

export default PauseBtn;
