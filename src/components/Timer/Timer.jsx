import React, { useState, useEffect, useRef } from "react";

function Timer({ initialTime = 60, isRunning = false, onTimeEnd }) {
  const [time, setTime] = useState(initialTime);
  const onTimeEndRef = useRef(onTimeEnd);
  onTimeEndRef.current = onTimeEnd;

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning]);

  useEffect(() => {
    if (time === 0 && isRunning) {
      onTimeEndRef.current?.();
    }
  }, [time, isRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ color: "white", fontSize: "40px", userSelect: "none" }}>
      {formatTime(time)}
      {time === 0 && <div style={{ fontSize: "12px", marginTop: "5px", color: "#ff6b6b" }}>Время вышло!</div>}
    </div>
  );
}

export default Timer;
