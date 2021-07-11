import React from "react";
import HeaderMenu from "./HeaderMenu";
import HomeCarousel from "./HomeCarousel";
import Products from "./products/Products";
import MultipleAds from "./ads/MultipleAds";
import BannerAd from "./ads/BannerAd";
import { sideAdURL } from "./assets/adsData";
import { getProductsData } from "../../actions/loadProducts";
import { useSelector, useDispatch } from "react-redux";

import { Grid, Box, Hidden, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carousel: {
    marginTop: "1rem",
    marginBottom: "1rem",

    [theme.breakpoints.down("sm")]: {
      marginTop: "0rem",
      marginBottom: "0rem",
      height: "20vh",
    },
  },
  bgColor: {
    backgroundColor: "#f1f3f6",
  },
}));

const Home = () => {
  const productsData = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  const classes = useStyles();
  return (
    <div className={classes.bgColor}>
      <HeaderMenu />
      <Grid container justify="center" component={Box} px={1}>
        <Grid item xl={10} sm={12}>
          <HomeCarousel className={classes.carousel} />
          <Products
            type="Deals of the Day"
            timer={true}
            productsData={productsData}
            sideAd={true}
            sideAdURL={sideAdURL}
          />
          <MultipleAds />
          <Hidden smDown>
            <BannerAd />
          </Hidden>
          <Products
            type="Men's Footwear"
            timer={false}
            productsData={productsData}
          />
          <Products
            type="Recommended Items"
            timer={false}
            productsData={productsData}
            sideAd={true}
            sideAdURL={sideAdURL}
          />
          <Products type="Best Sellers" productsData={productsData} />
          <Hidden smDown>
            <BannerAd />
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
