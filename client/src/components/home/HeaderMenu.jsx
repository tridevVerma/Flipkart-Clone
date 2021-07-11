import React from "react";
import { headerMenuData } from "./assets/headerMenuData";
import {
  Paper,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflowX: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "0rem",
    },
  },
  itemLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    marginRight: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0rem",
    },
  },
  itemText: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontWeight: "normal",
      fontSize: "0.8rem",
    },
  },
}));
const HeaderMenu = () => {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.paperContainer}>
      <Container maxWidth="lg" className={classes.container}>
        {headerMenuData.map((menuItem, index) => {
          return (
            <Box key={index} className={classes.itemLinks}>
              <img height="64px" src={menuItem.url} alt={menuItem.text} />
              <Typography
                align="center"
                variant="subtitle2"
                className={classes.itemText}
              >
                {menuItem.text}
              </Typography>
            </Box>
          );
        })}
      </Container>
    </Paper>
  );
};

export default HeaderMenu;
