import React from "react";
import { useSelector } from "react-redux";
import SubMenu from "../SubMenu";

import { Container, Hidden, makeStyles } from "@material-ui/core";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1rem",
  },
}));

const DetailView = () => {
  const productDetails = useSelector((state) => state.productDetails.data);
  const classes = useStyles();
  return (
    <>
      <Hidden smDown>
        <SubMenu />
      </Hidden>
      <Container
        maxWidth="lg"
        disableGutters
        className={classes.container}
        style={{ backgroundColor: "white" }}
      >
        <Hidden mdUp>
          <MobileView details={productDetails} />
        </Hidden>
        <Hidden smDown>
          <DesktopView details={productDetails} className={classes.container} />
        </Hidden>
      </Container>
    </>
  );
};

export default DetailView;
