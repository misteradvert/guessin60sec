import React, { useState, useEffect, useRef } from "react";

function Timer({ initialTime = 60, onTimeEnd }) {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef(null);

  // Запуск/остановка таймера при клике
  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
    }
  };

  // Эффект для таймера
  useEffect(() => {
    if (isActive && time > 0) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            setIsActive(false);
            if (onTimeEnd) onTimeEnd();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    // Очистка интервала при размонтировании
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, time, onTimeEnd]);

//   // Сброс таймера
//   const resetTimer = () => {
//     setIsActive(false);
//     setTime(initialTime);
//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }
//   };

  // Форматирование времени в MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div onClick={handleClick} style={{ color: "white", fontSize: "40px", cursor: isActive ? "default" : "pointer", opacity: isActive ? 1 : 0.8, transition: "opacity 0.3s", userSelect: "none" }} title={isActive ? "Таймер запущен" : "Кликните для запуска таймера"}>
      {formatTime(time)}
      {!isActive && time === initialTime && <div style={{ fontSize: "12px", marginTop: "5px", opacity: 0.7 }}>Кликните для старта</div>}
      {time === 0 && <div style={{ fontSize: "12px", marginTop: "5px", color: "#ff6b6b" }}>Время вышло!</div>}
    </div>
  );
}

export default Timer;
