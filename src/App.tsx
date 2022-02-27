// import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CandidateInfo from "./Pages/CandidateInfo";
import QuestionPaper from "./Pages/QuestionPaper";
import Result from "./Pages/Result";
import NotFound from "./Pages/NotFound";
import { Box } from "@mui/system";

function App() {
  return (
    <div className="App">
         <Box
        sx={{
          bgcolor: "red",
          width: "100%",
          margin: "10px",
          fontSize: "80px",
        }}
      >
        <Link to="/">
          <Box sx={{ color: "white" }}>Question App</Box>
        </Link>
      </Box>
      <Routes>
        <Route path="/" element={ <CandidateInfo></CandidateInfo> }></Route>
        <Route path="question/:id" element={<QuestionPaper />}></Route>
        <Route path="result" element={<Result /> }></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
