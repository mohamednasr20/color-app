import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/core/styles";
import chroma from "chroma-js";
import { Link } from "react-router-dom";
import "../style/ColorBox.css";

const styles = {
  colorBox: {
    width: "20%",
    height: (props) => (props.showingSinglePalette ? "25%" : "50%"),
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    display: "inline-block",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1,
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
  },

  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },

  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    position: "absolute",
    right: "0",
    bottom: "0",
    background: "rgba(255, 255, 255, 0.3)",
    border: "none",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },

  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginTop: "-15px",
    marginLeft: "-50px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    textDecoration: "none",
    opacity: "0",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "black",
    letterSpacing: "1px",
    padding: "10px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverLay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },

  copyOverLayShow: {
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)",
    position: "absolute",
  },

  copyMsg: {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "3rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textAlign: "center",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
    },
    "& p": {
      fontSize: "1.5rem",
      fontWeight: "100",
    },
  },

  showMsg: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
};

const ColorBox = ({
  name,
  background,
  moreUrl,
  showingSinglePalette,
  classes,
}) => {
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background: background }} className={classes.colorBox}>
        <div
          style={{ background: background }}
          className={`${classes.copyOverLay} ${
            copied && classes.copyOverLayShow
          }`}
        />
        <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingSinglePalette && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>More</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default withStyles(styles)(ColorBox);
