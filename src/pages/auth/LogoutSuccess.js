import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutSuccess = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-black">
      <div className="flex px-8 py-4 rounded-md text-2xl font-semibold border bg-white m-auto">
        Logout Success
      </div>
    </div>
  );
};

export default LogoutSuccess;
