import { useState, useContext } from "react";
import { GoogleLogout } from "react-google-login";

// mui
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//
import { clientId } from "../constansts/Data";
import { AccountContext } from "../../context/AccountProvider";

const HeaderMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const open = Boolean(menuOpen);

  const { setAccount } = useContext(AccountContext);

  const handleClose = () => {
    setMenuOpen(false);
  };

  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };

  const logout = () => {
    alert("You have been logged out successfully");
    console.clear();
    setAccount(null);
  };

  //   styles
  const MenuItems = styled("MenuItem")({
    display:"flex" ,
    flexDirection:"column" ,
    fontSize:"14px" ,
    padding:"15px 60px 5px 24px",
    color:"#4A4A4A",
  })

  return (
    <>
      <MoreVertIcon onClick={handleClick} />

      <Menu
        anchorEl={menuOpen}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItems onClick={handleClose}>
          <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </MenuItems>
      </Menu>
    </>
  );
};

export default HeaderMenu;
