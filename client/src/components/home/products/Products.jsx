import React from "react";

import MobileView from "./productsView/MobileView";
import DesktopView from "./productsView/DesktopView";
import Countdown from "react-countdown";
import useStyles from "./styles";

import {
  Paper,
  Toolbar,
  Typography,
  Box,
  Hidden,
  Container,
  Button,
} from "@material-ui/core";

const Products = ({ type, timer, productsData, sideAd, sideAdURL }) => {
  const classes = useStyles();
  const renderer = ({ hours, minutes, seconds }) => {
    // Render a countdown
    return (
      <span className={classes.countdown}>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  };
  return (
    <Box className={sideAd ? classes.productPlusADContainer : ""}>
      <Box className={sideAd ? classes.productPlusAD : ""}>
        <Paper elevation={4} className={classes.products}>
          <Toolbar>
            <Container
              className={classes.productsHeading}
              maxWidth="xl"
              disableGutters
            >
              <Box className={classes.title}>
                <Typography variant="h5">{type}</Typography>
                {timer && (
                  <Box className={classes.timer}>
                    <img
                      src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
                      alt="time-img"
                    />
                    <Countdown date={Date.now() + 5.4e7} renderer={renderer} />
                  </Box>
                )}
              </Box>

              <Button
                variant="contained"
                color="primary"
                className={classes.productsButton}
              >
                View All
              </Button>
            </Container>
          </Toolbar>
          <Container maxWidth="xl" disableGutters>
            <hr style={{ margin: "0px", color: "grey" }} />
          </Container>

          <Hidden mdUp>
            <MobileView productsData={productsData} />
          </Hidden>
          <Hidden smDown>
            <DesktopView productsData={productsData} />
          </Hidden>
        </Paper>
      </Box>
      <Hidden mdDown>
        {sideAd ? (
          <Box width="17%" m={0}>
            <img src={sideAdURL} className={classes.sideAd} alt="side-ad" />
          </Box>
        ) : (
          ""
        )}
      </Hidden>
    </Box>
  );
};

export default Products;
