import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import useFormData from "../hooks/useFormData";
import { AuthContext } from "../AuthContext";
import "./Login.css";

const initialFormData = {
  email: "",
  password: "",
  username: "",
};

const Signup = () => {
  const [formData, handleChange] = useFormData(initialFormData);
  const { register, isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn()) return <Redirect to="/" />;

  return (
    <>
      <section className="auth">
        <h1>Register</h1>
        <div className="control">
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="actions">
          <button onClick={() => register(formData)}>Register</button>
        </div>
      </section>
    </>
  );
};

export default Signup;

// import React from "react";
// import { useState } from "react";
// import "./Register.css";

// export default function Register()
// {
//   const [isReady, setIsReady] = useState(false);

//   return (
//     <div >
//       <section className="auth">
//         <h1>{isReady ? "Wellcome!" : "Registration form"}</h1>
//         {isReady ? (
//           <div className="register--form">
//             <h3>Thanks for joining to the KnowBank community.</h3>
//             <br />
//             <p>
//               You are now ready to <strong className="register--words">be a mentor</strong> and{" "}
//               <strong className="register--words">share your knowledge</strong>. In our community, we believe
//               that everyone has the opportunity to teach others. You{" "}
//               <strong className="register--words">don't need to be a master</strong>, only offer your time
//               and discover that you know more than you really think.
//             </p>
//             <p>
//               It only take 5 minutes to
//               <strong className="register--words"> think of something that you enjoy</strong>, and also
//               to share it with others. Be creative and original, you can
//               also <strong className="register--words">learn to know yourself</strong>.
//             </p>
//             <p>
//               Go to your <a className="register--word--profile" href="#/profile/about-me">profile</a>, fill out your bio,{" "}
//               <strong className="register--words">and your skills</strong> and you
//               will be ready to <strong className="register--words">contribute to our community</strong>.
//             </p>
//             <p>
//               As a special gift for you, we prepared a wellcome kit. Check your
//               Wallet! You have received <strong className="register--words">5 free TimeCoins</strong> that
//               you can use to get your first lessons.
//             </p>
//             <p>Enjoy your learning!!</p>
//             <div className="actions">
//               <p className="register--small--text">You can also search something to learn</p>
//               <a className="register--link" href="/">what do you need?</a>
//             </div>
//           </div>
//         ) : (
<form className="register--form">
  <div className="control ">
    <input type="text" className="name" required placeholder="Nickname" />
  </div>
  <div className="control">
    <input
      type="email"
      className="email"
      required
      placeholder="Email address"
    />
  </div>
  <div className="control">
    <input
      type="email"
      className="email"
      required
      placeholder="Confirm your Email address"
    />
  </div>
  <label htmlFor="password">
    Min. 8 char and at least one special character, e.g., ! @ # ? ]
  </label>
  <div className="control">
    <input
      type="password"
      className="password"
      required
      placeholder="Enter your password..."
    />
  </div>
  <div className="control">
    <input
      type="password"
      className="password"
      required
      placeholder="Confirm your password..."
    />
  </div>
  <div className="actions">
    <button onClick={() => setIsReady(true)}>ready</button>
    <h3>Already a member ?</h3>
    <a href="/#/login">Log in</a>
  </div>
</form>;
//         )}
//       </section>
//     </div>
//   );
// }
/*
<form>
          <div className="control">
            <input type="text" className="name" required placeholder="Fill your name to show..." />
          </div>
          <div className="control">
            <input type="email" className="email" required placeholder="Fill your email me@myhost.com..." />
          </div>
          <div className="control">
            <input type="email" className="email" required placeholder="Repeat your email..." />
          </div>
          <label htmlFor="password">Min. 8 char and at least one special character, e.g., ! @ # ? ]</label>
          <div className="control">
            <input type="password" className="password" required placeholder="Fill your password..." />
          </div>
          <div className="control">
            <input type="password" className="password" required placeholder="Repeat your password..." />
          </div>
          <div className="actions">
            <button
              onClick={() => setIsReady(true)}
            >ready</button>
            <button
              type="button"
              className="toggle"
              onClick={""}
            >
              log in
            </button>
          </div>
        </form>

*/
