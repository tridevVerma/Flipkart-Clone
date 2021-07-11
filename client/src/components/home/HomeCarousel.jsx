import React from "react";
import classNames from "classnames";

import { IconButton, makeStyles } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  carouselInner: {
    [theme.breakpoints.down("sm")]: {
      height: "20vh",
    },
  },
  carouselItem: {
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  carouselItemImage: {
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      objectFit: "cover",
    },
  },
  buttons: {
    borderRadius: "20px",

    width: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  prevButton: {
    position: "absolute",
    top: "0%",
    left: "0%",
    paddingLeft: "0px",
    display: "flex",
    justifyContent: "flex-start",
  },
  nextButton: {
    position: "absolute",
    top: "0%",
    right: "0%",
    paddingRight: "0px",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export const bannerData = [
  "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
];

const HomeCarousel = () => {
  const classes = useStyles();

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide my-2"
      data-bs-ride="carousel"
    >
      <div className={classNames(classes.carouselInner, "carousel-inner")}>
        <div
          className={classNames(
            classes.carouselItem,
            "carousel-item",
            "active"
          )}
        >
          <img
            src={bannerData[0]}
            className={classNames(
              classes.carouselItemImage,
              "d-block w-100 h-100"
            )}
            alt="first-banner"
          />
        </div>
        {bannerData.map((banner, index) => {
          if (index > 0) {
            return (
              <div
                key={index}
                className={classNames(classes.carouselItem, "carousel-item")}
              >
                <img
                  src={banner}
                  className={classNames(
                    classes.carouselItemImage,
                    "d-block w-100 h-100"
                  )}
                  alt={index}
                />
              </div>
            );
          }
          return "";
        })}
      </div>

      <IconButton
        component="button"
        className={classNames(
          classes.buttons,
          classes.prevButton,
          "carousel-control-prev"
        )}
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <ChevronLeftIcon
          style={{
            height: "100px",
            fontSize: "3rem",
            backgroundColor: "white",
            opacity: "1",
            color: "black",
          }}
        />
      </IconButton>
      <IconButton
        component="button"
        className={classNames(
          classes.buttons,
          classes.nextButton,
          "carousel-control-next"
        )}
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <ChevronRightIcon
          style={{
            height: "100px",
            fontSize: "3rem",
            backgroundColor: "white",
            color: "black",
          }}
        />
      </IconButton>
    </div>
  );
};

export default HomeCarousel;
