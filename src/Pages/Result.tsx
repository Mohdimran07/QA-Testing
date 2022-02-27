import { useLocation, useNavigate } from "react-router-dom";
import PieChart from "../components/PieChart";
import questionData from "./../questionData.json";
import { Box } from "@mui/system";
import { Button } from "@mui/material"

const Result = () => {
  const localState: any = useLocation().state;
  const navigate = useNavigate();
  let total = 0;
  let isAnswerdRight = false;
  const incrementTotal = () => {
    total += 1;
  };

  questionData.map((item: any) => {
    return item.id === 5
      ? JSON.stringify(localState[item.id - 1].sort()) ===
          JSON.stringify(item?.answer.sort()) && incrementTotal()
      : JSON.stringify(localState[item.id -1]) ===
          JSON.stringify(item.answer) && incrementTotal();
  });
  return (
    <div>
      <p>
        You got <b>{total}</b>/5
      </p>
      <PieChart percentage={(total * 100) / 5}></PieChart>

      {questionData.map((question: any) => {
        isAnswerdRight =
          question.id == 5 &&
          JSON.stringify(question.answer.sort()) ===
            JSON.stringify(localState[question.id - 1].sort())
            ? true
            : JSON.stringify(question.answer) ==
              JSON.stringify(localState[question.id - 1])
            ? true
            : false;

        return (
          <Box
            px={{
              marginTop: "50px",
            }}
            key={question.id}
          >
            <p>Q: {question.question}</p>
            <Box
              sx={{
                color: "white",
                bgcolor: isAnswerdRight ? "green" : "red",
                padding: "1rem",
                borderRadius: "5px",
                width: "300px",
              }}
            >
              {JSON.stringify(localState[question.id - 1])}
            </Box>
            {!isAnswerdRight && (
              <Box>
                <h5>Right answer: </h5>
                {JSON.stringify(question?.answer)}
              </Box>
            )}
          </Box>
        );
      })}
       <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
          
        }}
      >
        <Button
          color="warning" sx={{ right: "60%"}}
          onClick={() => navigate("/question/1")}
          variant="contained"
        >
          Retry
        </Button>
        <Button
          color="warning" sx={{ left: "60%"}}
          onClick={() => navigate("/")}
          variant="contained"
        >
          Exit
        </Button>
      </Box>
    </div>
  );
};

export default Result;
