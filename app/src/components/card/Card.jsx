import React from "react";
import Card from "@mui/material/Card";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ax from "../../assets/pics/s-agha-2.jpg"

const CardInfo = () => {
  return (
    <div>
      <Card sx={{maxWidth:400}}>
        <CardActionArea>
          <CardMedia component="img" height="80" alt="pic" image={ax} style={{height:250}}  ></CardMedia>
          <CardContent>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardInfo;
