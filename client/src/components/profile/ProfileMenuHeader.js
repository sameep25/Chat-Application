import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProfileMenuHeader = ({ setProfileMenu }) => {
  const handleOnClick = () => {
    setProfileMenu(false);
  };

  return (
    <Box
      sx={{
        background: "#02aaa7",
        minHeight: "100px",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Box sx={{ display: "flex", padding: "10px", color: "#ffffff" }}>
        <ArrowBackIcon onClick={() => handleOnClick()} />
        <Typography sx={{ marginLeft: "10px" }}>Profile</Typography>
      </Box>
    </Box>
  );
};

export default ProfileMenuHeader;
