import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../service/api";

import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";

import { AccountContext } from "../../context/AccountProvider";

// components
import Conversation from "./Conversation";

const useStyles = makeStyles({
  component: {
    height: "82vh",
    overflow: "overlay",
  },
});

const Conversations = ({ text }) => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account.googleId); // emit - send

    socket.current.on("getUsers", (users) => { // on - establish
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Box className={classes.component}>
      {users.map(
        (user, index) =>
          user.googleId !== account.googleId && (
            <Conversation user={user} key={index} />
          )
      )}
    </Box>
  );
};

export default Conversations;
