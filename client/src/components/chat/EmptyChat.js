import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: "420px",
  },
  component: {
    background: "#f8f9f8",
    height: "100%",
    padding: "50px",
    textAlign: "center",
  },
});

const EmptyChat = () => {
  const classes = useStyles();

  const imgUrl =
    "https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png";

  return (
    <Box className={classes.component}>
      <img src={imgUrl} alt="EmptyChat" className={classes.image} />
    </Box>
  );
};

export default EmptyChat;
