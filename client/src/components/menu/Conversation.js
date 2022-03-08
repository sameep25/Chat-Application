import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";

import { setConversation } from "../../service/api";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  displayPicture: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "2px 14px",
  },
  component: {
    display: "flex",
    alignItems:"center",
    height: 40,
    padding: "13px 0",
    cursor: "pointer",
    '&:hover': {
      background:"rgb(237 237 237)" ,
    }
  },
});

const Conversation = ({ user, key }) => {
  const { account } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);

  const classes = useStyles();

  const setUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };

  return (
    <Box className={classes.component} onClick={() => setUser()}>
      <Box>
        <img src={user.imageUrl} alt="dp" className={classes.displayPicture} />
      </Box>
      <Box>
        <Box>
          <Typography> {user.name} </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversation;
