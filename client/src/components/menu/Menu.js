import React from "react";
import { useState } from "react";

import { Box } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";

// components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
import ProfileMenu from "../profile/ProfileMenu";



const Menu = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [text, setText] = useState("") ;

  const handleClickAway = () => {
    setProfileMenu(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
          {profileMenu ? (
            <>
              <Box sx={{ minHeight: "716px" ,maxWidth:"380px" }}>
                <ProfileMenu setProfileMenu={setProfileMenu}/>
              </Box>
            </>
          ) : (
            <>
              <Header
                profileMenu={profileMenu}
                setProfileMenu={setProfileMenu}
              /> 
              <Search setText={setText} />
              <Conversations text={text} />
            </>
          )}
        </Box>
      </ClickAwayListener>
    </>
  );
};

export default Menu;
