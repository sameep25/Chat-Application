import { GoogleLogout } from "react-google-login";
import { useContext } from "react";

import { Box } from "@mui/material";

// components
import { AccountContext } from "../context/AccountProvider";

const Logout = () => {
  const clientId =
    "450514270803-gjf7ibccn07fk34akf0rri36nsc0lk6r.apps.googleusercontent.com";
  const { account, setAccount } = useContext(AccountContext);
  const logout = () => {
    setAccount(null);
  };

  return (
    <Box style={{ marginLeft: "92%" }}>
      {account && (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      )}
    </Box>
  );
};

export default Logout;
