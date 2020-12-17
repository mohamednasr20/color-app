import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "../styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement(
  ({ color, name, classes, handleClick }) => {
    return (
      <div className={classes.root} style={{ backgroundColor: color }}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <span className={classes.deleteIcon}>
            <DeleteIcon onClick={handleClick} />
          </span>
        </div>
      </div>
    );
  }
);

export default withStyles(styles)(DraggableColorBox);
