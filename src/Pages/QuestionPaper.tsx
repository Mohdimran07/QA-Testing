import { Box, TextField, FormControlLabel, RadioGroup, Radio, Button, FormGroup, Checkbox } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionIndicator from "../components/QuestionIndicator";
import questionData from "./../questionData.json";

const QuestionPaper = () => {
  const [answerArray, setAnswerArray] = useState(
    Array(questionData.length).fill([])
  );
  const [arrAnswer5, setArrAnswer5] = useState<any>([]);

  const navigate = useNavigate();
  const handleOnCheckBox = (value: any) => {
    setAnswerArray((prev: any) => {
      const updatedArray = [...prev];
      if (!updatedArray[3].includes(value)) {
        updatedArray[3] = [...updatedArray[3], value];
      } else {
        updatedArray[3] = updatedArray[3].filter((item: any) => {
          return item !== value;
        });
      }
      return updatedArray;
    });
  };

  let id: any = useParams().id;
  if (!id) {
    id = 1;
  }

  useEffect(() => {
    console.log(answerArray, arrAnswer5)
  }, [answerArray, arrAnswer5])

  useEffect(() => {
    setAnswerArray((value : any) => {
      const arr: any = [...value];
      arr[4] = arrAnswer5;
      return arr;
    })
  }, [arrAnswer5])

  const handleMatchTheFollowing = (item: string) => {
    console.log(item);
    setArrAnswer5((prev: any) => {
      console.log(item);
      const updateArray = [...prev];
      !updateArray.includes(item) && updateArray.push(item);
      return updateArray;
    });
  };

  useMemo(() => {
    console.log(answerArray);
  }, [answerArray]);
  return (
    // 
    <Box sx={{ width: "100%" }} >
      <QuestionIndicator answerArray={answerArray} id={id}></QuestionIndicator>
      {/* <p>{questionData?.[id-1].question}</p> */}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="qusion">
          <h3 style={{ display: "inline-block", paddingRight: "40px" }}>
            {id} )
          </h3>
          <b>{questionData?.[id - 1].question}</b>
        </div>
      </Box>
     
      <Box sx={{
          display: "flex",
          alignItems:"center",
          justifyContent: "center",
           minHeight: "200px",
      }} >
         <div className="heading s">
          {(() => {
              switch(id){
                  case "1":
                   
                      return(
                          <TextField 
                             value={answerArray[0]}
                             onChange={(e: any) => {
                                 setAnswerArray((prev: any) => {
                                     const updatedArray = [...prev];
                                     updatedArray[0] = e.target.value;
                                     return updatedArray;
                                 })
                             }}
                          ></TextField>
                      );
                      case "2":
                        const optionsArray = questionData?.[1]?.option;
                        return (
                          <Box className="option">
                            <RadioGroup
                              value={answerArray[1]}
                              onChange={(e: any) => {
                                setAnswerArray((prev: any) => {
                                  const updatedArray = [...prev];
                                  updatedArray[1] = e.target.value;
                                  return updatedArray;
                                });
                              }}
                            >
                              {optionsArray?.map((item: any) => {
                                return (
                                  <FormControlLabel
                                    key={item}
                                    value={item}
                                    label={item}
                                     control={<Radio />}
                                  ></FormControlLabel>
                                );
                              })}
                            </RadioGroup>
                          </Box>
                        )
                        case "3":
                            const optionsArray3 = questionData?.[2]?.option;
                            return (
                              <Box className="option">
                                <RadioGroup
                                  value={answerArray[2]}
                                  onChange={(e: any) => {
                                    setAnswerArray((prev: any) => {
                                      const updatedArray = [...prev];
                                      updatedArray[2] = e.target.value;
                                      return updatedArray;
                                    });
                                  }}
                                >
                                  {optionsArray3?.map((item: any) => {
                                    return (
                                      <FormControlLabel
                                        key={item}
                                        value={item}
                                        label={item}
                                        control={<Radio />}
                                      ></FormControlLabel>
                                    );
                                  })}
                                </RadioGroup>
                              </Box>
                            );
                          case "4":
                            const optionArray4: any = questionData?.[3]?.option;
                            return (
                              <FormGroup className="options">
                                {optionArray4.map((item: any) => {
                                  return (
                                    <FormControlLabel
                                      key={item}
                                      control={<Checkbox />}
                                      label={item}
                                      value={item}
                                      onChange={() => {
                                        handleOnCheckBox(item);
                                      }}
                                      checked={answerArray[3].includes(item)}
                                    ></FormControlLabel>
                                  );
                                })}
                              </FormGroup>
                            );
                          case "5":
                            let arr5: any = questionData?.[4];

                            return (
                              <>
                                <Button onClick={() => setArrAnswer5([])}>Retry </Button>
              
                                {arr5.questionOption.map((item: any, id: number) => {
                                  console.log(item, arrAnswer5?.[id], arr5?.option?.[id]);
              
                                  return (
                                    <Box key={id} className="mathTheFollowing">
                                      <span>{item}</span>
                                      <span>{arrAnswer5?.[id]}</span>
                                      <span>
                                        <Button
                                          disabled={
                                            arrAnswer5.includes(arr5?.option?.[id]) && true
                                          }
                                          onClick={() => {
                                            handleMatchTheFollowing(arr5?.option?.[id]);
                                          }}
                                        >
                                          {arr5?.option?.[id]}
                                        </Button>
                                      </span>
                                    </Box>
                                  );
                                })}
                              </>
                            );
                        default:
                            return <Box></Box>;
              }
          })()}
          </div>
      </Box>
      <Box>
        <Button
          sx={{ left: "40px", position: "absolute" }}
          disabled={id <= 1}
          onClick={() => {
            navigate(`/question/${Number(id) - 1}`);
          }}
        >
          Back
        </Button>
        <Button
          disabled={id >= 5}
          sx={{ right: "50px",bottom: "30%", position: "absolute" }}
          onClick={() => {
            navigate(`/question/${Number(id) + 1}`);
          }}
        >
          Next
        </Button>
      </Box>
      <Button
        disabled={!(id == 5)}
        onClick={() => {
          navigate("/result", { state: answerArray });
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default QuestionPaper;
