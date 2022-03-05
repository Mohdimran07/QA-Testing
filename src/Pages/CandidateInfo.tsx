import {
  FormControl,
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CandidateInfo = (): JSX.Element => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    navigate("/question/1");
  };
  return (
    <FormControl 
      sx={{
        display: "flex",
        alignItems: "center",
        width: "500px",
        height: "500px",
        border: "1px solid black",
        
      }}
      component="form"
      onSubmit={submitHandler}
    >
      <TextField
        sx={{ padding: "40px", width: "400px" }}
        placeholder="Enter your name"
        required
      ></TextField>
      <TextField
        sx={{ padding: "10px", width: "400px" }}
        type="number"
        placeholder="Enter your age"
        required
      ></TextField>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        sx={{ fontSize: "30px" }}
      >
        Gender
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
      <label style={styles.container}>Question Type</label> <br />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"english"}>English</MenuItem>
        <MenuItem value={"telugu"}>Maths</MenuItem>
        <MenuItem value={"hindi"}>Physics</MenuItem>
      </Select>
      <Button
        sx={{ width: "200px", padding: "10px", margin: "2rem" }}
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </FormControl>
  );
};

const styles = {
  container: {
    fontWeight: "bold",
    display: "grid",
  },
};

export default CandidateInfo;
