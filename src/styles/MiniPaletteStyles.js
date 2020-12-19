const styles = {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    border: "1px solid black",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: "1",
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    widht: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  tittle: {
    display: "flex",
    justifyContent: "space-between",
    alginItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontZise: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5PX",
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0",
    top: "0",
    padding: "10px",
    zIndex: "10",
    opacity: "0",
    transition: "all 0.3s ease-in-out",
  },
};

export default styles;
