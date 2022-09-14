import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignIn = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSignIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  let errorText;
  if (gerror || error) {
    errorText = (
      <p className="text-sm text-red-500 text-center pt-3">
        {gerror?.message || error?.message}
      </p>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }

  console.log(user);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
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
                <label className="label">
                  <Link
                    to="/forget-password"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>
                <label className="text-center">
                  <p className="">
                    No account?
                    <Link to="/sign-up" className="link link-hover">
                      Sign up
                    </Link>
                  </p>
                </label>
              </div>
              {errorText}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  SignIn
                </button>
              </div>
            </form>
            <button className="btn" onClick={() => signInWithGoogle()}>
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="mx-auto my-auto">
    //   <div className="card w-96 bg-base-100 shadow-xl">
    //     <div className="card-body">
    //       <h2 className="card-title">Card title!</h2>
    //       <p>If a dog chews shoes whose shoes does he choose?</p>
    //       <div className="card-actions justify-end">
    //         <button className="btn btn-primary">Buy Now</button>
    //       </div>
    //       <button className="btn" onClick={() => signInWithGoogle()}>
    //         Continue With Google
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignIn;
