export const GameCellStyles = (x: number, y: number): React.CSSProperties => {
  return {
    display: "inline-block",
    width: "12vh",
    height: "12vh",
    textAlign: "center",
    fontSize: "9vh",
    margin: "0",
    padding: "0",
    borderTop: x === 0 ? "none" : "0.25vh solid #fff",
    borderBottom: x === 2 ? "none" : "0.25vh solid #fff",
    borderLeft: y === 0 ? "none" : "0.25vh solid #fff",
    borderRight: y === 2 ? "none" : "0.25vh solid #fff",
    fontFamily: "Red Hat Display",
    fontOpticalSizing: "auto",
    fontWeight: "400",
    fontStyle: "normal",
    cursor: "pointer",
  };
};
