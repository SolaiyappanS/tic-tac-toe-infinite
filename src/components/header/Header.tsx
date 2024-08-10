const Header = () => {
  const refreshBoard = () => {
    console.log("refresh");
  };

  return (
    <>
      <p className="heading">Tic Tac Toe Infinite</p>
      <p className="refreshBtn" id="refreshBtn" onClick={refreshBoard}>
        Refresh Game
      </p>
    </>
  );
};

export default Header;
