import * as React from "react";
import { useContext } from "react";

// mui
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

// components
import Login from "./account/Login";
import { Box } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
import ChatBox from "./ChatBox";

const LoginHeader = styled(AppBar)`
  height: 200px;
  background: #00bfa5;
`;

const Component = styled(Box)`
  background: lightgrey;
  height: 100vh;
`;

const Messanger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      <LoginHeader sx={{ boxShadow: "none" }}>
        <Toolbar positon="absolute"></Toolbar>
      </LoginHeader>

      {account ? <ChatBox /> : <Login />}
    </Component>
  );
};

export default Messanger;
