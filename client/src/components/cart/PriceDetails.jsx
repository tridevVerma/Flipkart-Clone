import React, { useState, useEffect } from "react";

import { Paper, Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
  },
  priceTotalBox: {
    padding: "1rem 2rem",
    borderTop: "1px dashed #e0e0e0",
    borderBottom: "1px dashed #e0e0e0",
    display: "flex",
    justifyContent: "space-between",
  },

  paperRight: {
    width: "36%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0 auto",
      marginTop: "0rem",
      marginBottom: "2rem",
    },
  },
}));

const PriceDetails = ({ itemsList }) => {
  const classes = useStyles();
  const [NetAmount, setNetAmount] = useState(0);
  const [NetMRP, setNetMRP] = useState(0);
  useEffect(() => {
    let totalAmount =
      itemsList.reduce((total, item) => {
        return total + item.price.cost;
      }, 0) + 40;
    setNetAmount(totalAmount);
    let totalMRP = itemsList.reduce((total, item) => {
      return total + item.price.mrp;
    }, 0);
    setNetMRP(totalMRP);
  }, [itemsList]);
  return (
    <Paper className={classes.paperRight}>
      <Typography variant="h6" style={{ padding: "1rem 2rem", color: "grey" }}>
        PRICE DETAILS
      </Typography>
      <hr style={{ color: "grey", margin: "0rem", marginBottom: "1rem" }} />
      <Box className={classes.box}>
        <Typography variant="body1" style={{ fontWeight: "500" }}>
          Price({itemsList.length} item)
        </Typography>
        <Typography variant="body1">
          &#8377;
          {NetMRP}
        </Typography>
      </Box>
      <Box
        style={{
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1" style={{ fontWeight: "500" }}>
          Discount
        </Typography>
        <Typography variant="body1" style={{ color: "#388e3c" }}>
          -&#8377;
          {itemsList.reduce((total, item) => {
            return total + (item.price.mrp - item.price.cost);
          }, 0)}
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Typography variant="body1" style={{ fontWeight: "500" }}>
          Delivery Charges
        </Typography>
        <Typography variant="body1" style={{ color: "#388e3c" }}>
          &#8377;40
        </Typography>
      </Box>
      <Box style={{ padding: "0.5rem 0rem" }}>
        <Box className={classes.priceTotalBox}>
          <Typography variant="h6" style={{ fontWeight: "600" }}>
            Total Amount
          </Typography>
          <Typography variant="h6">
            &#8377;
            {NetAmount}
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body1"
        style={{ padding: "1rem 2rem", color: "#388e3c" }}
      >
        You will save{" "}
        <span>
          &#8377;
          {NetMRP - NetAmount}
        </span>{" "}
        on this order
      </Typography>
    </Paper>
  );
};

export default PriceDetails;
