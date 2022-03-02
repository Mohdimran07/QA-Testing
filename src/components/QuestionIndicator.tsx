import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { answersArrayType } from "../Pages/QuestionPaper";
import questionData from "./../questionData.json";

type questionIndicatorType = {
  answerArray: answersArrayType;
  id: number;
};

export type quesionType = {
  id: number;
  question: string;
  
  answer: Array<string> | string;
  questionOption: Array<string>;
  option: Array<string>;
};

const QuestionIndicator = ({
  answerArray,
  id,
}: questionIndicatorType): JSX.Element => {
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
      {questionData.map((question: quesionType) => {
        const isAnswered = answerArray[question.id-1].length > 0 ? true : false;
        let highlight = false;
        if(Number(id) === question.id){
          highlight = true;
        }
        return (
          <Circle
            key={question.id}
            highlight={highlight}
            isAnswered={isAnswered}
            id={question.id}
          ></Circle>
        );
      })}
    </Box>
  );
};

export default QuestionIndicator;

type circleType = { 
  id: number;
  isAnswered: boolean;
  highlight: boolean;
}

const Circle = ({ id, highlight, isAnswered }: circleType): JSX.Element => {
  return (
    <Link to={`/question/${id}`}>
      <Box
        sx={{
          bgcolor: isAnswered ? "red" : "gray",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          border: highlight ? "3px solid blue " : "",
        }}
      >
        {id}
      </Box>
    </Link>
  );
};
