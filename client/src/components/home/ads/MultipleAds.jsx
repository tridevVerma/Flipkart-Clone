import React from "react";
import { Grid, Paper, Box, makeStyles } from "@material-ui/core";
import { multipleAdURL } from "../assets/adsData";

const useStyles = makeStyles((theme) => ({
  adContainer: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  adImage: {
    width: "100%",
    height: "100%",
  },
  paper: {
    backgroundColor: "#f1f3f6",
    boxShadow: "2px 2px 4px 0 rgb(0 0 0 / 8%)",
  },
}));

const MultipleAds = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.adContainer}>
      {multipleAdURL.map((ads, index) => {
        return (
          <Grid item md={4} sm={6} component={Box} key={index}>
            <Paper
              component={Box}
              p={3}
              square={true}
              className={classes.paper}
            >
              <img src={ads} className={classes.adImage} alt="ads-img" />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MultipleAds;
