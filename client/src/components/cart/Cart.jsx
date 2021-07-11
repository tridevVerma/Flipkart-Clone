import React from "react";
import { useSelector } from "react-redux";

import { Container, Button, Hidden, makeStyles } from "@material-ui/core";

import EmptyCart from "./EmptyCart";
import MyCart from "./MyCart";
import PriceDetails from "./PriceDetails";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "2rem 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  placeOrderBtn: {
    position: "fixed",
    bottom: "0%",
    borderRadius: "0rem",
    color: "white",
    backgroundColor: "#fb641b",
    fontWeight: "bold",

    "&:hover": {
      backgroundColor: "	#e25b18",
    },
  },
}));

const Cart = () => {
  const classes = useStyles();

  const { itemsList } = useSelector((state) => state.cartReducer);
  return (
    <>
      {itemsList.length ? (
        <Container disableGutters className={classes.container}>
          <MyCart itemsList={itemsList} />
          <PriceDetails itemsList={itemsList} />
          <Hidden mdUp>
            <Button
              className={classes.placeOrderBtn}
              fullWidth
              size="large"
              variant="contained"
            >
              Place Order
            </Button>
          </Hidden>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
