import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { removeFromCart } from "../../actions/removeFromCart";

import { Box, Button, Typography, Hidden, makeStyles } from "@material-ui/core";

import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  containerBox: {
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5rem 1rem",
    },
  },
  mainContent: {
    width: "460px",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0rem",
    },
  },
  title: {
    "&:hover": {
      color: "#2874f0",
    },
  },
  roundBtn: {
    background: "linear-gradient(#fff,#f9f9f9)",
    border: "1px solid #c2c2c2",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    width: "28px",
    height: "28px",
  },
  quantityBtn: {
    display: "flex",
    marginTop: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2rem",
    },
  },
  btns: {
    display: "flex",
  },
  btn: {
    padding: "0rem",
    fontWeight: "bold",
    marginRight: "1rem",
    "&:hover": {
      backgroundColor: "transparent",
      color: "#2874f0",
    },
    [theme.breakpoints.down("sm")]: {
      border: "1px solid #ccc",
      borderRadius: "0px",
      width: "50%",
      fontWeight: "normal",
      margin: "0rem",
      padding: "0.5rem 1rem",
    },
  },
  fkAssured: {
    marginLeft: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0rem",
    },
  },
  offers: {
    display: "inline",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

const CartItem = ({ itemDetails }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  let deliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
  deliveryDate = deliveryDate.toString().substr(0, 15);

  const [Count, setCount] = useState(1);

  const increment = () => {
    setCount((Count) => Count + 1);
  };
  const decrement = () => {
    setCount((Count) => Count - 1);
  };

  return (
    <>
      <Box className={classes.containerBox}>
        <Box className=" order-md-1 order-2 d-flex flex-column justify-content-between align-items-center">
          <img
            src={itemDetails.url}
            alt="product-img"
            height="112px"
            width="112px"
          />
          <Box className={classes.quantityBtn}>
            <button
              className={classes.roundBtn}
              disabled={Count === 1}
              onClick={() => decrement()}
            >
              -
            </button>
            <button
              className={classes.roundBtn}
              style={{
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                borderRadius: "1px",
                width: "46px",
              }}
            >
              {Count}
            </button>
            <button
              className={classes.roundBtn}
              disabled={Count === 10}
              onClick={() => increment()}
            >
              +
            </button>
          </Box>
        </Box>
        <Box className={classNames(classes.mainContent, "order-md-2 order-1")}>
          <Typography variant="body1" className={classes.title} gutterBottom>
            {itemDetails.title && itemDetails.title.longTitle}
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ color: "grey" }}
          >
            {itemDetails.title && itemDetails.title.shortTitle}
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{ color: "grey" }}
          >
            Seller : SuperComNet{" "}
            <span className={classes.fkAssured}>
              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                alt="fk-assured-img"
                height="15vh"
              />
            </span>
          </Typography>
          {itemDetails.price ? (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <Typography variant="h6">
                &#8377;{itemDetails.price.cost}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{
                  color: "grey",
                  textDecoration: "line-through",

                  marginLeft: "1rem",
                }}
              >
                &#8377;{itemDetails.price.mrp}
              </Typography>
              <Typography
                variant="subtitle2"
                style={{
                  color: "#388e3c",
                  marginLeft: "1rem",
                  fontWeight: "bold",
                }}
              >
                {itemDetails.price.discount} off{" "}
                <span className={classes.offers}>8 offers available</span>
              </Typography>
            </Box>
          ) : (
            ""
          )}
          <Hidden xsDown>
            <Box className={classes.btns}>
              <Button variant="text" className={classes.btn}>
                Save for later
              </Button>
              <Button
                variant="text"
                onClick={() => dispatch(removeFromCart(itemDetails.id))}
                className={classes.btn}
              >
                Remove
              </Button>
            </Box>
          </Hidden>
        </Box>
        <Hidden smDown>
          <Box className="order-3">
            <Typography variant="body2">
              Delivery by {deliveryDate} |{" "}
              <span style={{ color: "rgb(56, 142, 60)" }}>Free </span>
              <span style={{ textDecoration: "line-through" }}>&#8377;40</span>
            </Typography>
          </Box>
        </Hidden>
      </Box>
      <Hidden smUp>
        <Box className={classes.btns}>
          <Button
            variant="text"
            className={classes.btn}
            startIcon={<SystemUpdateAltIcon />}
          >
            Save for later
          </Button>
          <Button
            variant="text"
            className={classes.btn}
            onClick={() => dispatch(removeFromCart(itemDetails.id))}
            startIcon={<DeleteIcon />}
          >
            Remove
          </Button>
        </Box>
      </Hidden>
    </>
  );
};

export default CartItem;
