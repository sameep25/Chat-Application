import * as React from "react";
import { styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setText }) => {
  const ParentBox = styled("Box")({
    display: "flex",
    background: "#F6F6F6",
    padding: "4px 0 4px 0",
  });

  const SearchBox = styled("div")({
    position: "relative",
    borderRadius: "18px",
    backgroundColor: "#FFFFFF",
    margin: "0 13px",
    width: "100%",
  });

  const IconBox = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#919191",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: 65,
      width: "280px",
      fontSize: "14px",
      height: "15px",
    },
  }));

  return (
    <>
      <ParentBox>
        <SearchBox>
          <IconBox>
            <SearchIcon fontSize="small" />
          </IconBox>
          <StyledInputBase
            placeholder="Search or start a new chat"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setText(e.target.value)}
          />
        </SearchBox>
      </ParentBox>
    </>
  );
};

export default Search;
