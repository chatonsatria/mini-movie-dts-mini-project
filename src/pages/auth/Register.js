import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterFormTitle from "../../components/auth/register/FormTitle";
import RegisterFormInput from "../../components/auth/register/FormInput";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const Register = () => {
  const navigate = useNavigate();
  const [isFailed, setIsFailed] = useState(false);

  const handleSubmit = async (emailData, passwordData) => {
    console.log("data email", emailData);
    console.log("data pwd", passwordData);
    const email = emailData;
    const password = passwordData;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      navigate("/home");
    } catch (error) {
      setIsFailed(true);
    }
  };

  return (
    <div className="flex w-full min-h-screen">
      <section className="flex m-auto p-8 border rounded-xl shadow-lg">
        {/* Register form */}
        <div className="flex flex-col gap-y-10">
          {/* title */}
          <RegisterFormTitle />
          {/* input form */}
          <RegisterFormInput
            submit={(email, password) => handleSubmit(email, password)}
            isNotValid={isFailed}
            changeValue={() => setIsFailed(false)}
          />
        </div>
      </section>
    </div>
  );
};

export default Register;
