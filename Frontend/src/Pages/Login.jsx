import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { UserLogin, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userEmail = form.get("email");
    const userPassword = form.get("password");

    UserLogin(userEmail, userPassword)
      .then(() => {
        e.target.reset();
        swal("Congratulations!", "You logged in Successfully!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        swal(err.message, "Try again", "warning");
        e.target.reset();
        console.log(err.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        swal("Congratulations!", "You logged in Successfully!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        swal(err.message, "", "warning");
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-900">
      <div className="hero-content flex-col w-full md:w-1/2 lg:w-2/6 lg:max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Please Sign in</h1>
        </div>
        <div className="card w-full py-3 shadow-xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            </div>
            <div className="form-control mt-6">
              <button className="py-2 rounded-md bg-teal-500 hover:bg-teal-400 hover:text-black text-white font-semibold">
                Sign In
              </button>
            </div>
          </form>

          <div className=" my-2 px-8 w-full ">
            <p className="text-sm text-gray-700 mb-3 ml-3">
              You can also login using Google
            </p>
            <button
              onClick={handleGoogleLogin}
              className="py-2 rounded-md w-full border bg-teal-200 border-teal-500 hover:bg-teal-400 hover:text-black font-semibold"
            >
              <span className="flex justify-center items-center">
                <p className="mr-2">Sign in with </p>
                <FcGoogle></FcGoogle>
                <span className="ml-1">Google</span>
              </span>
            </button>
          </div>

          <span className="text-center text-gray-400">
            New to this website? Please{" "}
            <Link to="/registration" className="font-semibold text-teal-700">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
