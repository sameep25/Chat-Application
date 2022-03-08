import { useContext, useState, useEffect, useRef } from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Footer from "./Footer";

import { AccountContext } from "../../context/AccountProvider";
import { newMessage, getMessages } from "../../service/api";

import Message from "./Message";

const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"})`,
    backgroundSize: "50%",
  },
  component: {
    height: "79vh",
    overflowY:"scroll"
  },
  container: {
    padding: "1px 80px",
  },
});

const Messages = ({person , conversation }) => {
  const { account, socket, newMessageFlag, setNewMessageFlag } =
    useContext(AccountContext);
  const [textMessage, setTextMessage] = useState("");

  const [messageData, setMessageData] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  const classes = useStyles();

  const scrollRef = useRef() ;

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({ transition: "smooth" })
  },[messageData])

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncomingMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    incomingMessage &&
      conversation?.includes(incomingMessage.sender) &&
      setMessageData((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  useEffect(() => {
    const getMessagesDetails = async () => {
      let msgData = await getMessages(conversation._id);
      setMessageData(msgData.data);
    };
    getMessagesDetails();
  }, [conversation?._id, person._id ,newMessageFlag]);

  const receiverId = conversation?.members?.find(
    (member) => member !== account.googleId
  );

  const sendText = async (e) => {
    let code = e.keyCode || e.which;

    if (!textMessage) return;

    if (code === 13) {
      let message = {
        senderId: account.googleId,
        conversationId: conversation._id,
        text: textMessage,
      };

      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        receiverId,
        text: textMessage,
      });

      await newMessage(message);
      setTextMessage(""); // kaam ni karra :(
        setNewMessageFlag(prev => !prev)
    }
  };

  return (
    <>
      <Box className={classes.wrapper}>
        <Box className={classes.component}>
          {messageData &&
            messageData.map((message, index) => (
              <Box className={classes.container} ref={scrollRef} >
                <Message message={message} key={index} />
              </Box>
            ))}
        </Box>
        <Footer
          sendText={sendText}
          setTextMessage={setTextMessage}
          textMessage={textMessage}
        />
      </Box>
    </>
  );
};

export default Messages;
