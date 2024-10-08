export const HeaderStyles: React.CSSProperties = {
  fontSize: "4vh",
  fontFamily: "Unica One",
  fontWeight: "400",
  fontStyle: "normal",
  position: "absolute",
  display: "inline-block",
  top: "10vh",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  textAlign: "center",
};

export const RefreshButtonStyles: React.CSSProperties = {
  fontSize: "4vh",
  fontFamily: "Unica One",
  fontWeight: "400",
  fontStyle: "normal",
  color: "#fff",
  position: "absolute",
  display: "inline-block",
  top: "20vh",
  textAlign: "center",
  opacity: "0.3",
  cursor: "pointer",
  backgroundColor: "#0000",
  border: "0.5vh solid #0000",
  borderRadius: "1vh",
  padding: "1vh 2vh",
};

export const GameCodeStyles: React.CSSProperties = {
  ...RefreshButtonStyles,
  top: "25vh",
};
