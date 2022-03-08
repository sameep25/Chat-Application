import React from "react";
import { useContext } from "react";
// mui
import { styled } from "@mui/material/styles";
// icons
import ChatIcon from "@mui/icons-material/Chat";

// components
import { AccountContext } from "../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";

const HeaderBox = styled("Box")({
  display: "flex",
  height: "35px",
  background: "#ededed",
  padding: "10px 16px",
  alignItems: "center",
});

const IconBox = styled("Box")({
  marginLeft: "auto",
  "& > *": {
    marginLeft: "2px",
    padding: "8px",
    color: "#919191",
    "&:hover": {
      borderRadius: "100%",
      backgroundColor: "lightgrey",
    },
  },
  "& :first-child": {
    fontSize: "22px",
    marginRight: "8px",
    marginTop: "3px",
  },
});

const Header = ({ setProfileMenu }) => {
  const { account } = useContext(AccountContext);

  const toogleDrawer = () => {
    setProfileMenu(true);
  };

  return (
    <>
      <HeaderBox>
        <img
          style={{ height: "37px", width: "37px", borderRadius: "100%" }}
          src={account.imageUrl}
          alt="user"
          onClick={() => toogleDrawer()}
        />
        <IconBox>
          <ChatIcon />
          <HeaderMenu />
        </IconBox>
      </HeaderBox>
    </>
  );
};

export default Header;
