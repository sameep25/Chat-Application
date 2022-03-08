import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { AccountContext } from "../../context/AccountProvider";

import { Box } from "@mui/material";

// components
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

import { getConversation } from "../../service/api";

let _id = "" ;
const initial = [_id]

const Chat = () => {
  
  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);

  const [conversation, setConversation] = useState(initial);

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        sender: account.googleId,
        receiver: person.googleId,
      });
      setConversation(data.data);
      // console.log(conversation.data);
    };
    getConversationDetails();
  }, [person.googleId, account.googleId]);

  return (
    <Box >
      <ChatHeader />
      <Messages conversation={conversation} person={person}/>
    </Box>
  );
};

export default Chat;
