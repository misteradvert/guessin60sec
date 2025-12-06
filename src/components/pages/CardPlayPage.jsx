import React from "react";
import OneCard from "../OneCard";

function CardPlayPage() {
  return (
    <div>
      У вас будет 60 сек, чтобы объяснить максимальное количество слов из карточки.
      <div>После того, как нажмете кнопку "ОК" таймер начнет обратный отсчет.</div>
      <OneCard />
    </div>
  );
}

export default CardPlayPage;
