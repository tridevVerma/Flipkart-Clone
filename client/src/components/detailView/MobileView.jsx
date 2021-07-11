import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addToCart } from "../../actions/addToCart";

import {
  Box,
  Checkbox,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "0px",
    position: "relative",
  },
  favorite: {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "0.8rem",
    border: "1px solid #f0f0f0",
    boxShadow: "0 1px 4px 0 rgb(0 0 0 / 10%)",
    backgroundColor: "white",
  },
  btnBox: {
    display: "flex",
    width: "100%",
    position: "fixed",
    bottom: "0%",
    left: "0%",
    boxShadow: theme.shadows[24],
  },
  btn: {
    borderRadius: "2px",
    padding: "1rem 1.5rem",
    color: "white",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 20%)",
    fontSize: "14px",
  },
  tagIcon: {
    color: "#61B15A",
    marginRight: "0.5rem",
    fontSize: "0.8rem",
  },
  offers: {
    fontSize: "0.8rem",
  },
  delieverInfo: {
    fontSize: "0.8rem",
    marginBottom: "1rem",
  },
}));
const MobileView = ({ details }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  let deliveryDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
  deliveryDate = deliveryDate.toString().substr(0, 15);

  const addItem = () => {
    dispatch(addToCart(details.id));
    history.push("/cart");
  };

  return (
    <div>
      <Box variant="outlined" className={classes.paper}>
        <Checkbox
          className={classes.favorite}
          icon={<FavoriteIcon style={{ color: "#c2c2c2", fontSize: "1rem" }} />}
          checkedIcon={<FavoriteIcon style={{ fontSize: "1rem" }} />}
          name="checkedH"
        />
        <img
          src={details.detailUrl}
          alt="product-img"
          style={{ width: "100%" }}
        />
      </Box>
      <Box className={classes.btnBox}>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          className={classes.btn}
          style={{
            backgroundColor: "#fff",
            color: "black",
          }}
          onClick={() => addItem()}
          fullWidth
        >
          Add To Cart
        </Button>
        <Button
          variant="contained"
          startIcon={<FlashOnIcon />}
          style={{
            backgroundColor: "#fb641b",
          }}
          className={classes.btn}
          fullWidth
        >
          Buy Now
        </Button>
      </Box>
      <Typography variant="h6" gutterBottom>
        {details.title && details.title.longTitle}
      </Typography>
      <Typography
        variant="subtitle2"
        style={{ color: "grey", marginBottom: "1rem" }}
      >
        8 Ratins &amp; 1 Review
      </Typography>
      {details.price ? (
        <Box
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <Typography variant="h5">&#8377;{details.price.cost}</Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "grey",
              textDecoration: "line-through",
              fontSize: "16px",
              marginLeft: "1rem",
            }}
          >
            &#8377;{details.price.mrp}
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#388e3c",
              fontSize: "16px",
              marginLeft: "1rem",
            }}
          >
            {details.price.discount} off
          </Typography>
        </Box>
      ) : (
        ""
      )}
      <Box
        style={{
          display: "flex",
        }}
      >
        <img
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
          alt="fk-assured-img"
          height="20vh"
        />
        {details.price && parseInt(details.price.cost) > 1000 ? (
          <Typography variant="body2" style={{ marginLeft: "1rem" }}>
            FREE DELIVERY
          </Typography>
        ) : (
          ""
        )}
      </Box>
      <hr />
      <Typography variant="h6" style={{ fontWeight: "bold" }} gutterBottom>
        Available offers
      </Typography>
      <Box>
        <Typography variant="body1" gutterBottom className={classes.offers}>
          <LocalOfferIcon className={classes.tagIcon} />
          Special Price Get Extra 10% off (price inclusive of discount)
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.offers}>
          <LocalOfferIcon className={classes.tagIcon} />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.offers}>
          <LocalOfferIcon className={classes.tagIcon} />
          Bank Offer Flat &#8377;100 off on first Flipkart Pay Later order of
          &#8377;500 and above
        </Typography>
        <Typography variant="body1" gutterBottom className={classes.offers}>
          <LocalOfferIcon className={classes.tagIcon} />
          Combo Offer Buy 2 items save 5%, Buy 3 or more save 10%. See all
          products
        </Typography>
      </Box>
      <hr />
      <Box mb={5}>
        <Box style={{ display: "flex" }}>
          <Typography
            variant="body1"
            style={{ minWidth: "80px", color: "grey" }}
            className={classes.delieverInfo}
          >
            Delievery
          </Typography>
          <Typography
            variant="body1"
            style={{ fontWeight: "600" }}
            className={classes.delieverInfo}
          >
            {deliveryDate} | &#8377;{details.price && details.price.cost}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <Typography
            variant="body1"
            style={{ minWidth: "80px", color: "grey" }}
            className={classes.delieverInfo}
          >
            Warranty
          </Typography>
          <Typography variant="body1" className={classes.delieverInfo}>
            No Warranty
          </Typography>
        </Box>
        <Box style={{ display: "flex", marginBottom: "1rem" }}>
          <Typography
            variant="body1"
            style={{ minWidth: "80px", color: "grey" }}
            className={classes.delieverInfo}
          >
            Seller
          </Typography>
          <Box>
            <Typography
              variant="body1"
              gutterBottom
              color="primary"
              className={classes.offers}
            >
              SuperComNet
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.offers}>
              GST Invoice Available
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.offers}>
              14 Days Return Policy
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.offers}>
              View more sellers starting from &#8377;300
            </Typography>
          </Box>
        </Box>
        <Box className={classes.delieverInfo}>
          {" "}
          <img
            src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"
            alt="super-coin-img"
            width="350"
          />
        </Box>
        <Box style={{ display: "flex" }}>
          <Typography
            variant="body1"
            style={{ minWidth: "120px", color: "grey" }}
            className={classes.delieverInfo}
          >
            Description
          </Typography>
          <Typography variant="body1" className={classes.delieverInfo}>
            {details.description}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default MobileView;
