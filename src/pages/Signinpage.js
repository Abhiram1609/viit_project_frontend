import React, { useContext, useState } from "react";
import showPwdImg from "../components/showpassword.svg";
import hidePwdImg from "../components/hidepassword.svg";
import { useNavigate } from "react-router-dom";
// import { Navigate } from 'react-router-dom';
import { GlobalContext } from "../Actions/GlobalContext";
import { useEmail } from "../EmailContext";
import axios from "axios";
import toast from "react-hot-toast";
export default function Signinpage() {
  const [email, setEmail] = useState("");
  // const { email, setEmailContext } = useEmail();
  // const [email,setEmail]=useContext(GlobalContext);
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate();
  async function newpage(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "Email not exits") {
              toast.error("Email not exits");
            } else if (res.data.message === "Login Success") {
              setEmail(email);
              console.log('email',email);
              localStorage.setItem('email', email)
              setRedirect(true);
            } else {
              toast.error("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      toast.error(err);
    }
  }
  if (redirect) {
    navigate("/Home");
  }
  return (
    <div className="signin-container">
      <div className="left-section">
        <img
          className="leftimage"
          src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1060&t=st=1693892933~exp=1693893533~hmac=706f82924443d55abba798d551b9a4309a7d950fc377445ef0358ef62de8384b"
          alt="loading"
        />
      </div>
      <div className="right-section">
        <div className="signin-content">
          <img
            className="logoviit"
            src="https://vierp-test.s3.ap-south-1.amazonaws.com/logo/vit_logo_new.png"
            alt="loading"
          />
          <h2>
            <strong style={{ color: "rgb(70, 71, 191)" }}>SIGN</strong>
            <strong style={{ color: "rgb(243, 156, 18)" }}> IN</strong>
          </h2>

          <form>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your EMAIL"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <div className="pwd-container">
                <input
                  name="pwd"
                  placeholder="Enter Password"
                  type={isRevealPwd ? "text" : "password"}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <img
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                  alt="loading"
                />
              </div>
            </div>
            <div className="form-group">
              <button className="signinbutton" type="submit" onClick={newpage}>
                Sign In
              </button>
            </div>
          </form>
          <div className="new-user-button">
            <button
              className="signupbutton"
              type="submit"
              onClick={() => navigate("/")}
            >
              New User?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
