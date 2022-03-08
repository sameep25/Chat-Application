import { useContext } from "react";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  wrapper: {
    background: "#ffffff",
    padding: 5,
    maxWidth: "60%",
    display: "flex",
    borderRadius: "10px",
    width: "fit-content",
    wordBreak: "break-word",
  },
  time: {
    fontSize: "10px",
    marginTop: "auto",
    color: "#919191",
    marginRight: "6px",
    wordBreak: "keep-all",
  },
  text: {
    fontSize: "14px",
    padding: "0 25px 0 5px",
  },
  own: {
    background: "#dcf8c6",
    marginLeft:"auto",
    padding: 5,
    maxWidth: "60%",
    display: "flex",
    borderRadius: "10px",
    width: "fit-content",
    wordBreak: "break-word",
  },
});

const Message = ({ message }) => {
  const classes = useStyles();

  const { account } = useContext(AccountContext);

  const formatDate = (date) => {
    return date < 10 ? "0" + date : date;
  };

  return (
    <Box
      className={
        account.googleId === message.senderId ? classes.own : classes.wrapper
      }
    >
      <Typography className={classes.text}> {message.text} </Typography>
      <Typography className={classes.time}>
        {" "}
        {formatDate(new Date(message.createdAt).getHours())}:
        {formatDate(new Date(message.createdAt).getMinutes())}{" "}
      </Typography>
    </Box>
  );
};

export default Message;
