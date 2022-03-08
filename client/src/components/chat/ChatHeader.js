import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  header: {
    display: "flex",
    height: "35px",
    background: "#ededed",
    padding: "10px 16px",
    alignItems: "center",
  },
  dp: {
    height: "37px",
    width: "37px",
    borderRadius: "50%",
    padding: "0 2px",
  },
  name: {
    marginLeft: "10px",
  },
  status: {
    display: "flex",
    fontSize: "13px",
    marginLeft: "25px",
    color: "rgb(0,0,0,0.6)",
  },
  rightContainer: {
    marginLeft: "auto",
    "& > *": {
      padding: "8px",
      fontSize: "20px",
      color: "#919191",
    },
  },
});

const ChatHeader = () => {
  const { person } = useContext(UserContext);
  const { activeUsers } = useContext(AccountContext);

  const classes = useStyles();

  return (
    <>
      {person.name ? (
        <>
          {" "}
          <Box className={classes.header}>
            <img src={person.imageUrl} alt="dp" className={classes.dp} />
            <Box>
              <Typography className={classes.name}>{person.name}</Typography>
              <Typography className={classes.status}>
                {activeUsers?.find((user) => user.userId === person.googleId)
                  ? "Online"
                  : "Offline"}
              </Typography>
            </Box>
            <Box className={classes.rightContainer}>
              <SearchIcon />
              <MoreVertIcon />
            </Box>
          </Box>{" "}
        </>
      ) : (
        <>
          {" "}
          <Box className={classes.header}>
            <Box>
              <Typography className={classes.status}>
                Select A Chat to start a conversation
              </Typography>
            </Box>
            <Box className={classes.rightContainer}>
              <SearchIcon />
              <MoreVertIcon />
            </Box>
          </Box>{" "}
        </>
      )}
    </>
  );
};

export default ChatHeader;
