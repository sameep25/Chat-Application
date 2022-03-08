import React from "react";
import { useContext } from "react";
import { GoogleLogin } from "react-google-login";

import { Box, Typography, Dialog, ListItem } from "@mui/material";
import { withStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

import { clientId } from "../constansts/Data";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

const ParentBox = styled(Box)`
  display: flex;
`;

const LeftBox = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const RightBox = styled(Box)`
  padding: 50px 0 0 50px;
  height: 264px;
`;

const ListText = styled("List")({
  fontSize: 20,
  padding: 0,
  marginTop: 15,
  lineHeight: "28px",
  color: "#4a4a4a",
});

const styles = {
  dialogPaper: {
    height: "95%",
    width: "60%",
    marginTop: "12%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const Login = ({ classes }) => {
  const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";
  
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async(res) => {
    // console.log("login successful",res.profileObj);
    setAccount(res.profileObj);
    await addUser(res.profileObj) ;
  };

  const onLoginFailure = () => {
    console.log("login fail");
  };

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <ParentBox>
        <LeftBox>
          <Typography
            sx={{
              fontSize: "26px",
              color: "#525252",
              marginBottom: "24px",
              fontFamily:
                "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
              fontWeight: "300",
            }}
          >
            To use WhatsApp on your Computer:
          </Typography>
          <ListText>
            <ListItem>1.Open WhatsApp on your phone</ListItem>
            <ListItem>
              2.Tap Menu or Settings and select linked devices
            </ListItem>
            <ListItem>
              3.Point your Phone to this screen to capture the code
            </ListItem>
          </ListText>
        </LeftBox>
        <RightBox style={{ position: "relative" }}>
          <img src={qrurl} alt="qr" style={{ height: "264px" }} />
          <Box style={{ position: "absolute", top: "50%", left: "50%" }}>
            <GoogleLogin
              clientId={clientId}
              buttonText=""
              isSignedIn={true}
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          </Box>
        </RightBox>
      </ParentBox>
    </Dialog>
  );
};

export default withStyles(styles)(Login);
