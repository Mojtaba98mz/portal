import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { green, grey } from "@mui/material/colors";
import React, { useState } from "react";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
const EvaluationQuestion = () => {
  const [displayTextArea, setDisplayTextArea] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Box
      sx={{
        textAlign: "right",
        width: "100%",
        marginBottom: "10px",
        fontFamily: "Yekan",
        color: grey[700],
      }}
    >
      <Typography
        variant="body1"
        fontFamily="Yekan"
        sx={{
          width: "fit-content",
          padding: "5px",
          textShadow: "1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC, 7px 10px 9px #9ACE34",
        }}
      >
        شایستگی :{"جدید"}{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginY: "10px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box display="flex">
          <Typography variant="body1"> {1}- </Typography>
          <Typography variant="subtitle1" fontFamily="Yekan" fontSize="15">
            این کاربر را چطور ارزیابی میکنید
          </Typography>
        </Box>
        <Box sx={{ minWidth: 120, direction: "ltr" }}>
          <FormControl sx={{ width: "120px" }} size="small">
            <InputLabel id="answer-question-label">پاسخ سوال</InputLabel>
            <Select
              labelId="answer-question-label"
              id="answer-question"
              onChange={(e) => setSelectedOption(e.target.value)}
              value={selectedOption}
              label="پاسخ سوال"
            >
              <MenuItem value={"a"}>a</MenuItem>
              <MenuItem value={"b"}>b</MenuItem>
              <MenuItem value={"c"}>c</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography>توضیحات:</Typography>
          {displayTextArea ? (
            <TextareaAutosize minRows={"6"} minLength={"100"} style={{ marginRight: "15px" }} onChange={(e) => console.log(e.target.value)}/>
          ) : (
            <IconButton onClick={() => setDisplayTextArea(true)}>
              <AddBoxOutlinedIcon
                sx={{ color: green[300] }}
              ></AddBoxOutlinedIcon>
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default EvaluationQuestion;
