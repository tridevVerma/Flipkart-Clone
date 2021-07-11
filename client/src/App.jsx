import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import DetailView from "./components/detailView/DetailView";

import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2874f0",
    },
    secondary: {
      main: "#fb641b",
    },
    success: {
      main: "#388e3c",
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products/:id" component={DetailView} />
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
