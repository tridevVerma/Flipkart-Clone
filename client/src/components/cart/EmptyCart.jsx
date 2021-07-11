import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openLoginDialog } from "../../actions/openLoginDialog";

import {
  Container,
  Box,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    margin: "2rem auto",
    padding: "1.2rem 1.5rem",
    boxShadow: "rgb(0 0 0 / 20%) 0px 1px 2px 0px",
  },
  btn: {
    color: "white",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    borderRadius: "2px",
    padding: "0.5rem 1rem",
    margin: "1rem auto",
    width: "180px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#565656",
    paddingLeft: "6rem",
    paddingRight: "6rem",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "3rem",
      paddingRight: "3rem",
    },
  },
  footerBox: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
    },
  },
}));

const EmptyCart = () => {
  const data = useSelector((state) => state.currentUser.user);

  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="h5">My Cart</Typography>
        <Box style={{ textAlign: "center" }}>
          <img
            src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            alt="empty-cart-img"
            height="162px"
            style={{ marginBottom: "1rem" }}
          />
          <Typography variant="h5" gutterBottom>
            Missing Cart Items ?
          </Typography>
          {data.name ? (
            ""
          ) : (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                style={{ fontSize: "0.8rem" }}
                gutterBottom
              >
                Login to see the items you added previously
              </Typography>
              <Button
                variant="contained"
                size="small"
                style={{
                  backgroundColor: "#fb641b",
                }}
                className={classes.btn}
                fullWidth
                onClick={() => dispatch(openLoginDialog())}
              >
                Login
              </Button>
            </Box>
          )}
        </Box>
      </Container>

      <hr style={{ color: "grey", marginTop: "2rem", marginBottom: "2rem" }} />
      <Container maxWidth="xl" className={classes.footer}>
        <Box className={classes.footerBox}>
          <Typography variant="body2" style={{ marginRight: "2rem" }}>
            Policies: Returns Policy | Terms of use | Security | Privacy |
            Infringement
          </Typography>
          <Typography variant="body2">&copy; 2007-2021 Flipkart.com</Typography>
        </Box>

        <Typography variant="body2">
          Need help? Visit the{" "}
          <span style={{ color: "#2874f0" }}> Help Center </span>or{" "}
          <span style={{ color: "#2874f0" }}>Contact Us</span>
        </Typography>
      </Container>
    </>
  );
};

export default EmptyCart;
