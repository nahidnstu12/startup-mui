import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  InputBase,
  MenuItem,
  Menu,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { brandName, Navlinks } from "../../data";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    width: "40px",
    objectFit: "contain",
    margin: "0 16px",
    marginLeft: theme.spacing(8),
    cursor: "pointer",
  },
  title: {
    fontFamily: "cursive",
    fontWeight: "900",
    display: "none",
    cursor: "pointer",
    marginRight: "1%",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.25),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.35),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    fontFamily: "cursive",
    fontWeight: "500",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "16ch",
      "&:focus": {
        width: "23ch",
      },
    },
  },
  navlinks: {
    margin: "0 6px",
    fontFamily: "cursive",
    fontWeight: "600",

    "&:focus": {
      outline: "none",
    },
  },
  navlinksMbl: {
    fontFamily: "cursive",
    fontWeight: "600",
    "&:hover": {
      background: "#b6f67c",
    },
  },
  moreIcon: {
    "&:focus": {
      outline: "none",
    },
  },
  sectionDesktop: {
    color: "rgba(0,0,0,.8)",
    marginRight: "35px",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  // const mobileMenuId = React.useRef(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      anchorEl={mobileMoreAnchorEl}
      ref={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      style={{ marginTop: "60px" }}
    >
      {Navlinks.map((linkName) => (
        <MenuItem
          key={linkName.links}
          color="primary"
          className={classes.navlinksMbl}
        >
          {linkName.links}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ background: "#b6f67c", color: "#333" }}
      >
        <Toolbar>
          <img className={classes.logo} src="./img/icon.png" alt="text" />
          <Typography className={classes.title} variant="h6" noWrap>
            {brandName}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            {Navlinks.map((linkName) => (
              <Button
                key={linkName.links}
                color="primary"
                variant="contained"
                className={classes.navlinks}
              >
                {linkName.links}
              </Button>
            ))}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              className={classes.moreIcon}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
