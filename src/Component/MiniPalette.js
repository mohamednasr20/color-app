import React from "react";
import styles from "../styles/MiniPaletteStyles";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const MiniPalette = ({
  classes,
  paletteName,
  emoji,
  colors,
  handleClick,
  handleDelete,
  openDialog,
  id,
}) => {
  const miniColorBoxes = colors.map((color) => (
    <div
      onClick={handleClick}
      className={classes.miniColor}
      style={{ background: color.color }}
      key={color.name}
    ></div>
  ));

  const deletePalette = (e) => {
    e.stopPropagation();
    openDialog(id);
  };
  return (
    <div className={classes.root}>
      <div>
        <DeleteIcon className={classes.deleteIcon} onClick={deletePalette} />
      </div>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.tittle}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
