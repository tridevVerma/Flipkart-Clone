import React from "react";

import { Box, Hidden, makeStyles } from "@material-ui/core";

import User from "./User";
import UserData from "./UserData";
import NewUser from "./NewUser";

const useStyles = makeStyles((theme) => ({
  dialogBox: { height: "68vh", display: "flex" },
  left: {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "35%",
    },

    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  right: {
    backgroundColor: "white",
    height: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const loginImage =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";

const Login = () => {
  const classes = useStyles();
  const [UserExist, setUserExist] = React.useState(true);
  const title = ["Login", "Looks like you're new here!"];
  const para = [
    "Get access to your Orders, Wishlist and Recommendations",
    "Sign up with your mobile number to get started",
  ];
  return (
    <Box className={classes.dialogBox}>
      <Hidden smDown>
        <Box py={5} px={3} className={classes.left}>
          {UserExist ? (
            <User title={title[0]} para={para[0]} />
          ) : (
            <User title={title[1]} para={para[1]} />
          )}

          <img src={loginImage} alt="login-img" />
        </Box>
      </Hidden>

      <Box py={3} px={3} className={classes.right}>
        {UserExist ? (
          <UserData setUserExist={setUserExist} />
        ) : (
          <NewUser setUserExist={setUserExist} />
        )}
      </Box>
    </Box>
  );
};

export default Login;
