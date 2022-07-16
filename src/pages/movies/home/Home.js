import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>Home</div>
      <Link to="/login">Login</Link>
    </div>
  );
};
export default Home;
