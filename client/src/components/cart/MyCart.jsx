import React from "react";
import CartItem from "./CartItem";

import {
  Paper,
  Hidden,
  Typography,
  Box,
  Button,
  makeStyles,
} from "@material-ui/core";

import PinDropIcon from "@material-ui/icons/PinDrop";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  paperLeft: {
    width: "62%",
    position: "relative",
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 auto",
      marginTop: "0rem",
    },
  },
  header: {
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deliverToBox: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-between",
    },
  },
  placeOrderBtn: {
    position: "absolute",
    bottom: "-42px",
    borderRadius: "0rem",
    color: "white",
    backgroundColor: "#fb641b",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "	#e25b18",
    },
  },
}));

const MyCart = ({ itemsList }) => {
  const classes = useStyles();

  const changeAddressDialog = () => {
    alert("change Address");
  };

  return (
    <>
      <Paper className={classes.paperLeft}>
        <Box className={classes.header}>
          <Hidden smDown>
            <Typography variant="h6">My Cart ({itemsList.length})</Typography>
          </Hidden>
          <Box className={classes.deliverToBox}>
            <Typography
              variant="body2"
              style={{ color: "grey", marginRight: "1rem" }}
            >
              <Hidden smDown>
                <PinDropIcon
                  style={{ color: "#2874f0", marginRight: "0.5rem" }}
                />
              </Hidden>
              Deliver to
            </Typography>
            <Typography
              variant="body2"
              style={{
                fontWeight: "600",
                border: "1px solid grey",
                padding: "0.4rem 1rem",
                cursor: "pointer",
              }}
              onClick={() => changeAddressDialog()}
            >
              New Delhi - 110001
              <ArrowDropDownIcon
                style={{ fontSize: "1.2rem", marginLeft: "2rem" }}
              />
            </Typography>
          </Box>
        </Box>

        {itemsList.map((item) => {
          return (
            <Box key={item.id}>
              <hr
                style={{
                  marginBottom: "1rem",
                  marginTop: "0rem",
                  color: "grey",
                }}
              />
              <CartItem itemDetails={item} />
            </Box>
          );
        })}
        <Hidden smDown>
          <Button
            className={classes.placeOrderBtn}
            fullWidth
            size="large"
            variant="contained"
          >
            Place Order
          </Button>
        </Hidden>
      </Paper>
    </>
  );
};

export default MyCart;
