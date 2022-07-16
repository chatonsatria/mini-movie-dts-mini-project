import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormInput from "../../components/auth/login/FormInput";
import LoginFormTitle from "../../components/auth/login/FormTitle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { AuthContext } from "../../store/auth-context";

const Login = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [isFailed, setIsFailed] = useState(false);

  const authDataHandler = (token, useremail) => {
    setLogin(token, useremail);
    localStorage.setItem("token", token);
    localStorage.setItem("useremail", useremail);
    navigate("/home");
  };

  const handleSubmit = async (emailData, passwordData) => {
    const email = emailData;
    const password = passwordData;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      authDataHandler(user.accessToken, user.email);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      <section className="flex m-auto p-8 border rounded-xl shadow-lg">
        {/* login form */}
        <div className="flex flex-col gap-y-10">
          {/* title */}
          <LoginFormTitle />
          {/* input form */}
          <LoginFormInput
            submit={(email, password) => handleSubmit(email, password)}
            isNotValid={isFailed}
            changeValue={() => setIsFailed(false)}
          />
          {isFailed && <div>{errorMessage}</div>}
        </div>
      </section>
    </div>
  );
};

export default Login;
