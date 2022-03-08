import { useContext } from "react";
import { Box, Typography } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

const Profile = () => {
  const { account } = useContext(AccountContext);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eeedef",
          minHeight: "200px",
          boxShadow: "2px",
        }}
      >
        <img
          src={account.imageUrl}
          alt="dp"
          style={{ height: "150px", borderRadius: "50%" }}
        />
      </Box>

      <Box sx={{ minHeight: "50px", padding: "14px", boxShadow: "2px" }}>
        <Typography sx={{ color: "#02aaa7", fontSize: "12px" }}>
          Your Name
        </Typography>
        <Typography
          sx={{ color: "#91859d", fontSize: "14px", marginTop: "10px" }}
        >
          {" "}
          {account.name}{" "}
        </Typography>
      </Box>

      <Box sx={{ background: "#eeedef", minHeight: "70px", boxShadow: "2px" }}>
        <Typography
          sx={{ color: "#91859d", fontSize: "12px", padding: "10px" }}
        >
          This is not your username or Pin. This name will be visible to your
          WhatsApp contacts.
        </Typography>
      </Box>

      <Box sx={{ minHeight: "50px", padding: "14px", boxShadow: "2px" }}>
        <Typography sx={{ color: "#02aaa7", fontSize: "12px" }}>
          About
        </Typography>
        <Typography
          sx={{ color: "#91859d", fontSize: "14px", marginTop: "10px" }}
        >
          Hii my name is Sv
        </Typography>
      </Box>

      <Box
        sx={{
          minHeight: "190px",
          background: "#eeedef",
        }}
      ></Box>
    </Box>
  );
};

export default Profile;
