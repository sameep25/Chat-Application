import React from "react";
import { useContext } from "react";
// mui
import { Dialog } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

// components
import Menu from "./menu/Menu";
import Chat from "./chat/Chat";
import EmptyChat from "./chat/EmptyChat";

import { UserContext } from "../context/UserProvider";

const Component = styled("Box")({
  display: "flex",
});
const LeftComponent = styled("Box")({
  minWidth: "380px",
});
const RightComponent = styled("Box")({
  borderLeft: "1px solid rgba(0,0,0,0.14) ",
  width: "73%",
  minWidth: "200px",
  height: "100%",
});

const styles = {
  dialogPaper: {
    height: "95%",
    width: "91%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const ChatBox = ({ classes }) => {
  const { person } = useContext(UserContext);

  return (
    <>
      <Dialog
        open={true}
        classes={{ paper: classes.dialogPaper }}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
      >
        <Component>
          <LeftComponent>
            <Menu />
          </LeftComponent>

          <RightComponent >
            {person.name ? <Chat /> : <EmptyChat />}
          </RightComponent>
        </Component>
      </Dialog>
    </>
  );
};

export default withStyles(styles)(ChatBox);
