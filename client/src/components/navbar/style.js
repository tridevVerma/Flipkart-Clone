import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0rem",
      paddingRight: "0rem",
    },
  },
  bgColor: {
    backgroundColor: theme.palette.primary.main,
  },
  left: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginTop: "1rem",
      marginBottom: "1rem",
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
    lineHeight: "1",
  },
  mobileMenu: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  explorePlus: {
    color: "white",
    fontSize: "12px",
    fontStyle: "italic",
    lineHeight: "1",
    "&:hover": {
      borderBottom: "1px solid white",
    },
  },
  search: {
    position: "relative",
    height: "36px",
    width: "60%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem",
    marginRight: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "0.5rem",
      marginLeft: "0rem",
      marginRight: "0rem",
    },
  },
  inputBase: {
    flexGrow: 1,
    fontSize: "14px",
  },

  searchIcon: {
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
  },

  searchList: {
    position: "absolute",
    zIndex: "10",
    top: "36px",
    left: "0%",
    color: "black",
    width: "100%",
    borderTop: "1px solid #ddd",
    backgroundColor: "#fff",
    boxShadow: "2px 3px 5px -1px rgb(0 0 0 / 50%)",
  },

  button: {
    backgroundColor: "white",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    borderRadius: "0px",
    textTransform: "capitalize",
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    marginRight: "1.5rem",
  },
  sidebar: {
    width: "250px",
  },
}));
