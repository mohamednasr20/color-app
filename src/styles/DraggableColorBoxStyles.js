const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    position: "relative",
    cursor: "pointer",
    display: "inline-block",
    marginBottom: "-3.5px",
    "& :hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0",
    bottom: "0",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    padding: "10px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between  ",
  },
  deleteIcon: {
    transiton: "all 0.3s ease-in-out",
  },
};

export default styles;
