import React from "react";
import { Button } from "@mui/material";
function TeamBtn({ name, onClick, ...props }) {
  
  return (
    <Button variant="contained" size="large" onClick={onClick} {...props}>
      {name}
    </Button>
  );
}
export default TeamBtn;
