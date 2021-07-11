import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProductDetails } from "../../../../actions/productDetails";

import { Box, Typography, makeStyles } from "@material-ui/core";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const useStyles = makeStyles((theme) => ({
  productsCarousel: {
    "& > ul li": {},
  },
  productImage: {
    height: "150px",
    marginBottom: "2rem",
    marginLeft: "2rem",
  },
  title: {
    fontWeight: "bold",
  },
  discount: {
    color: "green",
  },
  tagline: {
    color: "grey",
  },
}));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1600 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1200 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1200, min: 1000 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 1000, min: 800 },
    items: 3,
  },
};

const DesktopView = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Box py={5} px={10}>
      <Carousel
        responsive={responsive}
        draggable={false}
        containerClass="carousel-container"
        className={classes.productsCarousel}
      >
        {props.productsData.map((product) => {
          return (
            <Box
              key={product.id}
              component={Link}
              to={`/products/${product.id}`}
              style={{
                cursor: "pointer",
                textDecoration: "none",
                textAlign: "center",
              }}
              onClick={() => dispatch(getProductDetails(product.id))}
            >
              <img
                className={classes.productImage}
                src={product.url}
                alt="product-img"
              />
              <Typography
                variant="subtitle2"
                gutterBottom
                className={classes.title}
              >
                {product.title.shortTitle}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.discount}
              >
                {product.discount}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.tagline}
              >
                {product.tagline}
              </Typography>
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default DesktopView;
