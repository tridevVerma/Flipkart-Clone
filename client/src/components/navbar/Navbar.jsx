//imports
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userLogout } from "../../actions/userLogout";
import { useDispatch } from "react-redux";
import logo from "./logo.png";

import { openLoginDialog } from "../../actions/openLoginDialog";
import { closeLoginDialog } from "../../actions/closeLoginDialog";
import { addToCart } from "../../actions/addToCart";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  InputBase,
  Menu,
  ListItemIcon,
  Hidden,
  Badge,
  IconButton,
  MenuItem,
  Dialog,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";

//styles jss
import { useStyles } from "./style";

//icons used
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddBoxIcon from "@material-ui/icons/AddBox";

import Login from "../login/Login";
import userMenu from "./userMenu";

export default function Navbar() {
  const data = useSelector((state) => state.currentUser.user);
  const signInDialog = useSelector((state) => state.loginDialog);
  const { itemsList } = useSelector((state) => state.cartReducer);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const history = useHistory();

  //styles
  const classes = useStyles();

  const menus = [
    "Notification Preferences",
    "Sell On Flipkart",
    "24x7 Customer Support",
    "Advertise",
    "Download App",
  ];

  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const [userMenuAnchorEl, setUserMenuAnchorEl] = React.useState(null);
  const [loginDialog, setLoginDialog] = React.useState(false);
  const [OpenSidebar, setOpenSidebar] = React.useState(false);
  const [SearchTerm, setSearchTerm] = React.useState("");

  const showMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const hideMenu = () => {
    setMenuAnchorEl(null);
  };
  const showUserMenu = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  const hideUserMenu = () => {
    setUserMenuAnchorEl(null);
  };

  const openDialog = () => {
    dispatch(openLoginDialog());
    hideSidebar();
  };

  const closeDialog = useCallback(() => {
    dispatch(closeLoginDialog());
  }, [dispatch]);

  const showSidebar = () => {
    setOpenSidebar(true);
  };

  const hideSidebar = () => {
    setOpenSidebar(false);
  };

  const logout = () => {
    dispatch(userLogout());
    setUserMenuAnchorEl(null);
    hideSidebar();
  };

  const search = (term) => {
    setSearchTerm(term);
  };

  const addItem = (id) => {
    dispatch(addToCart(id));
    history.push("/cart");
    setSearchTerm("");
  };

  React.useEffect(() => {
    setLoginDialog(signInDialog);
    if (data.name) {
      closeDialog();
    }
  }, [data.name, signInDialog, closeDialog]);

  return (
    <>
      <SwipeableDrawer
        open={OpenSidebar}
        onOpen={() => setOpenSidebar(true)}
        onClose={() => setOpenSidebar(false)}
      >
        <List disablePadding className={classes.sidebar}>
          <div>
            <ListItem style={{ backgroundColor: "#2874f0" }}>
              <PersonIcon style={{ color: "white" }} />

              <ListItemText style={{ color: "white" }}>
                {data.name ? (
                  <Typography style={{ marginLeft: "1rem" }}>
                    Welcome!
                  </Typography>
                ) : (
                  <Button
                    color="inherit"
                    variant="text"
                    onClick={() => openDialog()}
                  >
                    Login &amp; Signup
                  </Button>
                )}
              </ListItemText>
              <img src={logo} alt="logo" height="20px" />
            </ListItem>
          </div>
          {data.name
            ? userMenu.map((item, index) => {
                if (index + 1 === userMenu.length) {
                  return (
                    <div key={index}>
                      <ListItem button onClick={() => logout()}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                      </ListItem>
                      <Divider component="li" light />
                    </div>
                  );
                }
                return (
                  <div key={index}>
                    <ListItem button>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText>{item.text}</ListItemText>
                    </ListItem>
                    <Divider component="li" light />
                  </div>
                );
              })
            : userMenu.map((item, index) => {
                if (index > 0 && index + 1 !== userMenu.length) {
                  return (
                    <div key={index}>
                      <ListItem button>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                      </ListItem>
                      <Divider component="li" light />
                    </div>
                  );
                }
                return "";
              })}
        </List>
      </SwipeableDrawer>
      <div className={classes.root}>
        <AppBar position="static" className={classes.bgColor}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
              <Box className={classes.left}>
                <div className={classes.mobileMenu}>
                  <div className={classes.logo}>
                    <Hidden mdUp>
                      <IconButton
                        color="inherit"
                        style={{ paddingLeft: "0rem" }}
                        onClick={() => showSidebar()}
                      >
                        <MenuIcon />
                      </IconButton>
                    </Hidden>
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <img
                        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                        alt="logo"
                        width="75"
                      />
                      <div className="d-flex align-items-center">
                        <Typography className={classes.explorePlus}>
                          Explore
                          <span style={{ color: "#ffe500" }}> Plus </span>
                        </Typography>
                        <img
                          width="10"
                          style={{ objectFit: "cover" }}
                          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                          alt="sub-logo"
                        />
                      </div>
                    </Link>
                  </div>

                  <Hidden mdUp>
                    <Box>
                      <IconButton color="inherit">
                        <AddBoxIcon />
                      </IconButton>
                      <IconButton
                        color="inherit"
                        onClick={() => history.push("/cart")}
                      >
                        <Badge
                          badgeContent={itemsList.length}
                          overlap="circle"
                          color="error"
                        >
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                      {data.name ? (
                        <Button color="inherit" variant="text">
                          {data.name}
                        </Button>
                      ) : (
                        <Button
                          color="inherit"
                          variant="text"
                          onClick={() => openDialog()}
                        >
                          Login
                        </Button>
                      )}
                    </Box>
                  </Hidden>
                </div>
                <div className={classes.search}>
                  <InputBase
                    placeholder="Search for products, brands and more"
                    className={classes.inputBase}
                    inputProps={{ "aria-label": "search" }}
                    value={SearchTerm}
                    onChange={(e) => search(e.target.value)}
                  />
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  {SearchTerm && (
                    <List className={classes.searchList}>
                      {products.data
                        .filter((item) => {
                          return item.title.longTitle
                            .toLowerCase()
                            .includes(SearchTerm.toLowerCase());
                        })
                        .map((item) => {
                          return (
                            <Box
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                cursor: "pointer",
                              }}
                              key={item.id}
                              onClick={() => addItem(item.id)}
                            >
                              <ListItem>
                                {item.title && item.title.longTitle}
                              </ListItem>
                              <ListItemIcon
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <SearchIcon />
                              </ListItemIcon>
                            </Box>
                          );
                        })}
                    </List>
                  )}
                </div>
              </Box>
              <Box className={classes.right}>
                <Hidden smDown>
                  {data.name ? (
                    <>
                      <Button
                        variant="text"
                        color="inherit"
                        endIcon={<ExpandMoreIcon />}
                        onClick={showUserMenu}
                      >
                        {data.name}
                      </Button>
                      <Menu
                        open={Boolean(userMenuAnchorEl)}
                        anchorEl={userMenuAnchorEl}
                        onClose={hideUserMenu}
                      >
                        {userMenu.map((menu, index) => {
                          if (index + 1 === userMenu.length) {
                            return (
                              <MenuItem key={index} onClick={() => logout()}>
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                {menu.text}
                              </MenuItem>
                            );
                          }
                          return (
                            <MenuItem key={index} onClick={hideUserMenu}>
                              <ListItemIcon>{menu.icon}</ListItemIcon>
                              {menu.text}
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      onClick={() => openDialog()}
                      variant="contained"
                      className={classes.button}
                    >
                      Login
                    </Button>
                  )}

                  <Button
                    variant="text"
                    color="inherit"
                    endIcon={<ExpandMoreIcon />}
                    onClick={showMenu}
                    style={{ marginLeft: "1.5rem", color: "white" }}
                  >
                    More
                  </Button>
                  <Menu
                    open={Boolean(menuAnchorEl)}
                    anchorEl={menuAnchorEl}
                    onClose={hideMenu}
                  >
                    {menus.map((menu, index) => {
                      return (
                        <MenuItem key={index} onClick={hideMenu}>
                          {menu}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                  <Button
                    component={Link}
                    to="/cart"
                    variant="text"
                    color="inherit"
                    startIcon={
                      <Badge
                        badgeContent={itemsList.length}
                        overlap="circle"
                        color="error"
                      >
                        <ShoppingCartIcon />
                      </Badge>
                    }
                    style={{ marginLeft: "1.5rem", color: "white" }}
                  >
                    Cart
                  </Button>
                </Hidden>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <Dialog
        open={loginDialog}
        maxWidth="md"
        fullWidth
        onClose={() => closeDialog()}
      >
        <Login />
      </Dialog>
    </>
  );
}
