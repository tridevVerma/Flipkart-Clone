import React from "react";
import { headerMenuData } from "./home/assets/headerMenuData";
import {
  Paper,
  Box,
  Container,
  Typography,
  makeStyles,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    position: "relative",
    boxShadow: theme.shadows[3],
  },
  container: {
    padding: "0.5rem",
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
const SubMenu = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.paperContainer}>
      <Container maxWidth="lg" className={classes.container}>
        {headerMenuData.map((menuItem, index) => {
          return (
            <Box key={index} className={classes.itemLinks}>
              <Typography
                align="center"
                variant="subtitle2"
                className={classes.itemText}
              >
                {menuItem.text}
                <ExpandMoreIcon
                  style={{
                    color: "grey",
                    fontSize: "1rem",
                    marginLeft: "0.4rem",
                  }}
                />
              </Typography>
            </Box>
          );
        })}
      </Container>
    </Paper>
  );
};

export default SubMenu;
