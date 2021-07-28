import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import useFormData from "../hooks/useFormData";
import "./Login.css";

const initialFormData = {
  email: "",
  password: "",
};

const Login = () => {
  const { login, isLoggedIn } = useContext(AuthContext);
  const [formData, handleChange] = useFormData(initialFormData);

  if (isLoggedIn()) return <Redirect to="/" />;

  return (
    <>
      <section className="auth">
        <h1>Login now</h1>
          <div className="control">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="email"
            />
          </div>
          <div className="control">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          <div className="actions">
            <button
              type="button"
              onClick={() => login(formData)}
            >
              Login
            </button>
          </div>
      </section>
    </>
  );
};

export default Login;
