import React from "react";
import styles from "./personCard.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import EvaluationQuestion from "./EvaluationQuestion";
import { green, grey } from "@mui/material/colors"
const PersonCard = ({
  fullName,
  personalCode,
  role,
  totallScore,
  finalScore,
  job,
  organization,
}) => {
  const hover = {
    "&:hover": {
      backgroundColor: green[500],
    },
  };
  const param = useParams();
  const navigate = useNavigate();
  // console.log(param);
  return (
    <div className={styles.accordion}>
      <Accordion>
        <AccordionSummary>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: { xs: "column-reverse", sm: "row" },
              color: grey[700]
            }}
          >

            <Box>
             <Chip variant="outlined" color="error" label={<Typography variant="body1" >نمره نهایی</Typography>}/>
              <Typography variant="body2" sx={{ fontFamily: "Yekan", textAlign: "center" }}>{finalScore}</Typography>
            </Box>
            <Box>
              <Chip variant="outlined" color="success" label={<Typography variant="body1">جمع نمرات</Typography>}/>
              <Typography variant="body2" sx={{ fontFamily: "Yekan", textAlign: "center" }}>{totallScore}</Typography>
            </Box>
            <Box>
              <Chip variant="outlined" color="info" label={<Typography variant="body1">شغل </Typography>}/>
              <Typography variant="body2" sx={{ fontFamily: "Yekan", textAlign: "center" }}>{job}</Typography>
            </Box>
            <Box>

              <Chip variant="outlined" color="info" label={<Typography variant="body1"> نقش</Typography>}/>
              <Typography variant="body2" sx={{ fontFamily: "Yekan", textAlign: "center" }}>{role} </Typography>
            </Box>
            <Box>
              <Chip variant="outlined" color="info" label={<Typography variant="body1">یگان</Typography>}/>
              <Typography variant="body2" sx={{ fontFamily: "Yekan", textAlign: "center" }} >{organization}</Typography>
            </Box>

            <Box>
              <Chip variant="outlined" color="info" label={<Typography variant="body1">نام کارمند ارزیابی شونده</Typography>}/>
              <Typography variant="body2" sx={{ fontFamily: "Yekan", textAlign: "center" }}>
                {fullName}
              </Typography>
            </Box>
            <div className={styles.cardText}>
              <Chip variant="outlined" color="info" label={<Typography className={styles.header}>شماره پرسنلی </Typography>}/>
              <p>{personalCode}</p>
            </div>
          </Box>

      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItem>
            <EvaluationQuestion />
          </ListItem>
          <ListItem>
            <EvaluationQuestion />
          </ListItem>
        </List>
        <Button
          variant="contained"
          color="primary"
          sx={hover}
          onClick={() =>
            navigate(`/panel/evaluations/${param.id}/${personalCode}`)
          }
        >
          <Typography variant="body1" fontFamily="YeKan">
            ثبت ارزیابی
          </Typography>
        </Button>
      </AccordionDetails>
    </Accordion>
    </div >
  );
};

PersonCard.propTypes = {
  fullName: PropTypes.string,
  personalCode: PropTypes.string,
  role: PropTypes.string,
  totallScore: PropTypes.string,
  finalScore: PropTypes.string,
  job: PropTypes.string,
  organization: PropTypes.string,
};

export default PersonCard;
