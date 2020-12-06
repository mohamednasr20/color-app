import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { Link } from "react-router-dom";
import "../style/ColorBox.css";

const ColorBox = ({ name, background, moreUrl, showLink }) => {
  const [copied, setCopied] = useState(false);

  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() > 0.7;

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background: background }} className="ColorBox">
        <div
          style={{ background: background }}
          className={`copy-overlay ${copied && "show"}`}
        />
        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p className={isLightColor ? "dark-text" : ""}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor ? "light-text" : ""}>{name}</span>
          </div>
          <button className={`copy-button ${isLightColor ? "dark-text" : ""}`}>
            Copy
          </button>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${isLightColor ? "dark-text" : ""}`}>
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
