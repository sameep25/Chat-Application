// mui
import { Box } from "@mui/material";

// components
import ProfileMenuHeader from "./ProfileMenuHeader";
import Profile from "./ProfileMenuImg";

const ProfileMenu = ({ setProfileMenu }) => {
  return (
    <Box>
      <ProfileMenuHeader setProfileMenu={setProfileMenu} />
      <Profile />
    </Box>
  );
};
export default ProfileMenu;
