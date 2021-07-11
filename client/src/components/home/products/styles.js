import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  products: {
    marginTop: "0.6rem",
    marginBottom: "0.6rem",
  },
  productsHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  productsButton: {
    borderRadius: "0px",
  },
  title: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  timer: {
    display: "flex",
    alignItems: "center",

    "& img": {
      width: "1.2rem",
    },
    "& p": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.5rem",
    },
  },
  countdown: {
    color: theme.palette.grey[500],
    marginLeft: "15px",
    fontSize: "1rem",
  },
  sideAd: {
    width: "270px",
    padding: "5px",
    backgroundColor: "white",
    objectFit: "cover",
  },
  productPlusAD: {
    [theme.breakpoints.up("lg")]: {
      width: "82%",
    },
  },
  productPlusADContainer: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
}));

export default useStyles;
