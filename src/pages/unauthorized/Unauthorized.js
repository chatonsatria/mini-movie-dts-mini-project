import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-black">
      <div className="flex px-8 py-4 rounded-md text-2xl font-semibold border bg-white m-auto">
        Unauthorized, silahkan login untuk menonton film
      </div>
    </div>
  );
};

export default Unauthorized;
