import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getProductDetails } from "../../../../actions/productDetails";

import { Hidden, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  productImage: {
    height: "150px",
    marginBottom: "1rem",
  },
}));
const MobileView = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Hidden mdUp>
      <Grid
        container
        style={{ marginTop: "2rem", marginBottom: "2rem", maxWidth: "100%" }}
      >
        {props.productsData.map((product, index) => {
          return (
            <Grid
              item
              zeroMinWidth
              xs={6}
              sm={4}
              md={2}
              align="center"
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                cursor: "pointer",
                textDecoration: "none",
              }}
              width={200}
              key={index}
              component={Link}
              to={`/products/${product.id}`}
              onClick={() => dispatch(getProductDetails(product.id))}
            >
              <div>
                <img
                  className={classes.productImage}
                  src={product.url}
                  alt="product-img"
                />
              </div>

              <Typography
                variant="subtitle2"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {product.title.shortTitle}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                style={{ color: "#388e3c" }}
              >
                {product.discount}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                style={{ color: "grey" }}
              >
                {product.tagline}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Hidden>
  );
};

export default MobileView;
