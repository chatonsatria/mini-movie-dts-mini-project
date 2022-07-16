const NavLogout = (props) => {
  return (
    <button onClick={props.wantLogout}>
      <p className="text-black hover:text-red-400">Logout</p>
    </button>
  );
};
export default NavLogout;
