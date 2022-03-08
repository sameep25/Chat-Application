//mui
import { Box, InputBase } from "@mui/material";
import { makeStyles } from "@material-ui/core";

import * as React from "react";
import { styled } from "@mui/material/styles";

// icons
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

const useStyles = makeStyles({
  footer: {
    height: "64px",
    background: "#ededed",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 15px",
    "& > *": {
      margin: "5px",
      color: "#919191",
    },
  },
  clipIcon: {
    transform: "rotate(45deg)",
    
  },
});

const Search = styled("div")({
  position: "relative",
  borderRadius: "30px",
  backgroundColor: "#ffffff",
  marginLeft: 10,
  marginRight: 15,
});

const StyledInputBase = styled(InputBase)({
  overflow: "clip",
  "& .MuiInputBase-input": {
    padding: "10px 35px",
    width: "100vh",
  },
});

const Footer = ({ sendText, textMessage, setTextMessage }) => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <EmojiEmotionsOutlinedIcon />
      <AttachFileIcon className={classes.clipIcon} />
      <Box>
        <Search>
          <StyledInputBase
            placeholder="Type a message"
            inputProps={{ "aria-label": "search" }}
            onKeyPress={(e) => sendText(e)}
            onChange={(e) => setTextMessage(e.target.value)}
            textMessage={textMessage}
          />
        </Search>
      </Box>
      <MicIcon />
    </Box>
  );
};

export default Footer;
