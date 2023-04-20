import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { user, createAccountWithEmail } = useContext(AuthContext);
  const [authErr, setAuthErr] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
      return;
    }
  }, [user]);
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const rePass = form.re_pass.value;
    setAuthErr("");
    setAuthSuccess("");
    if (password.length <= 6) {
      setAuthErr("Password length should be greater than 6 character.");
      return;
    } else if (password !== rePass) {
      setAuthErr("Password did not match.");
      return;
    } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setAuthErr("Password should contain attest 2 Uppercase.");
      return;
    }
    createAccountWithEmail(email, password)
      .then(result => {
        updateUser(result.user, name);
        verifyEmail(result.user);
        Swal.fire(
          "Success",
          "Check your inbox and verify your email.",
          "success"
        );
        console.log(result.user);
      })
      .catch(err => console.log(err));
  };
  const updateUser = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(result => {})
      .catch(err => alert(err));
  };
  const verifyEmail = user => {
    sendEmailVerification(user)
      .then(result => {})
      .catch(err => console.log(err));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Re-enter Password</span>
                </label>
                <input
                  type="password"
                  name="re_pass"
                  placeholder="Re-enter password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-red-700 font-bold">{authErr}</p>
              <p>{authSuccess}</p>
              <div>
                <h4>
                  Already have an account ?{" "}
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
