import React, { useState } from "react";
import PaletteMetaForm from "../Component/PaletteMetaForm";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
  },

  button: {
    margin: "0 0.5rem",
  },
});

const PaletteFormNav = ({
  classes,
  open,
  palettes,
  handleSubmit,
  handleDrawerOpen,
}) => {
  const [formShowing, setFormShowing] = useState(false);
  const showForm = () => {
    setFormShowing(true);
  };

  const hideForm = () => {
    setFormShowing(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              GO Back
            </Button>
          </Link>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={showForm}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm
          palettes={palettes}
          handleSubmit={handleSubmit}
          hideForm={hideForm}
        />
      )}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
