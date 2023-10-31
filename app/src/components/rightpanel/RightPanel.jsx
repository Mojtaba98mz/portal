import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import React from "react";
import { MdOutlineAssignment } from "react-icons/md";

const RightPanel = () => {
  return (
    <div style={{ position: "sticky", top: 80 }}>
      <List
        sx={{
          // width: "100%",
          minWidth:"200px",
          minHeight: "300px",
          background: "white",
          boxShadow: "5px 5px 15px rgba(0,0,0,0.4)",
          borderRadius: "10px",
        }}
      >
        <ListSubheader component="div" id="nested-list-subheader">
          لیست گزینش ها
        </ListSubheader>
        <Divider variant="middle" />
        <ListItemButton>
          <ListItemIcon>
            <MdOutlineAssignment size="20px" />
            <ListItemText
              primaryTypographyProps={{
                style: {
                  fontFamily: "Yekan",
                  fontSize: "14px",
                  marginRight: "20px",
                },
              }}
              primary="گزینش شماره 1"
            ></ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton>
          <ListItemIcon>
            <MdOutlineAssignment size="20px" />
            <ListItemText
              primaryTypographyProps={{
                style: {
                  fontFamily: "Yekan",
                  fontSize: "14px",
                  marginRight: "20px",
                },
              }}
              primary="گزینش شماره 2"
            ></ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton>
          <ListItemIcon>
            <MdOutlineAssignment size="20px" />
            <ListItemText
              primaryTypographyProps={{
                style: {
                  fontFamily: "Yekan",
                  fontSize: "14px",
                  marginRight: "20px",
                },
              }}
              primary="گزینش شماره 3"
            ></ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <Divider variant="middle" />
        <ListItemButton>
          <ListItemIcon>
            <MdOutlineAssignment size="20px" />
            <ListItemText
              primaryTypographyProps={{
                style: {
                  fontFamily: "Yekan",
                  fontSize: "14px",
                  marginRight: "20px",
                },
              }}
              primary="گزینش شماره 4"
            ></ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <Divider variant="middle" />
      </List>
    </div>
  );
};

export default RightPanel;
