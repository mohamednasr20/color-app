import React, { useState } from "react";
import Slider from "rc-slider";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import "rc-slider/assets/index.css";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/NavbarStyles";

const Navbar = ({
  level,
  changeLevel,
  changeFormat,
  showingAllColor,
  classes,
}) => {
  const [format, setFormat] = useState("hex");
  const [open, setOpen] = useState(false);

  const handleFormatChange = (e) => {
    setFormat(e.target.value);
    changeFormat(e.target.value);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">ColorPicker</Link>
      </div>
      {showingAllColor && (
        <div>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}

      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX -#ffffff</MenuItem>
          <MenuItem value="rgb">RGB-rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA-rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed To {format.toUpperCase()}</span>
        }
        onClose={handleClose}
        ContentProps={{ "aria-describedby": "message-id" }}
        action={[
          <IconButton
            onClick={handleClose}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
};

export default withStyles(styles)(Navbar);
