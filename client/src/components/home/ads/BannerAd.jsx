import React from "react";
import { Box, makeStyles } from "@material-ui/core";

import { bannerAdURL } from "../assets/adsData";

const useStyles = makeStyles((theme) => ({
  bannerImage: {
    width: "100%",
    height: "100%",
  },
}));

const BannerAd = () => {
  const classes = useStyles();

  return (
    <Box>
      <img src={bannerAdURL} className={classes.bannerImage} alt="banner-ad" />
    </Box>
  );
};

export default BannerAd;
