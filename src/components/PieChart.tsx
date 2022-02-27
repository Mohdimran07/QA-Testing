import { Box } from "@mui/material";
import React from "react";

const PieChart = ({ percentage }: any) => {
  return (
    <Box
      sx={{
        width: 200,
        height: 200,
        background: `conic-gradient(green ${percentage}% ,red 0)`,
        borderRadius: "50%",
      }}
    ></Box>
  );
};

export default PieChart;