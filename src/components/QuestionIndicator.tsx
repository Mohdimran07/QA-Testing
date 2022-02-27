import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import questionData from "./../questionData.json";




const QuestionIndicator = ({ answerArray, id}: any) => {
    let visibility = false;
    let answered = false;
    return (
     // paddingTop: "20px 50px",
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          backgroundColor: "yellowgreen",
          
        }}
      >
        {questionData.map((item: any) => {
          answered = answerArray[item.id - 1].length > 0;
          visibility = item.id === id;
          return (
            <Circle
              key={item.id}
              visibility={visibility}
              answered={answered}
              id={item.id}
            ></Circle>
          );
        })}
      </Box>
    );
  };
  
  export default QuestionIndicator;
  
  const Circle = ({ id, visibility, answered }: any) => {
    return (
      <Link to={`/question/${id}`}>
        <Box
          sx={{
            bgcolor: answered ? "red" : "gray",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            border: visibility ? "3px solid blue " : "",
          }}
        >
          {id}
        </Box>
      </Link>
    );
  };  
