import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../Provider/AuthProvider";

const Registration = () => {
  const { createNewUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userName = form.get("name");
    const image = form.get("photourl");
    const userEmail = form.get("email");
    const userPassword = form.get("password");

    if (userPassword.length < 6) {
      e.target.reset();
      return swal(
        "Password should be more than 6 letters",
        "Please try again",
        "warning"
      );
    } else if (!/[A-Z]/.test(userPassword)) {
      e.target.reset();
      return swal(
        "Password should have at least one capital letter",
        "Please try again",
        "warning"
      );
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(userPassword)) {
      e.target.reset();
      return swal(
        "Password should have at least one special character!",
        "Please try again",
        "warning"
      );
    }
    createNewUser(userEmail, userPassword)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: userName,
          email: userEmail,
          photoURL: image,
        });
        e.target.reset();
        console.log(user);
        swal("Congratulations!", "Signed Up Successfully!", "success");
        navigate("/");
      })
      .catch((err) => {
        e.target.reset();
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-900">
      <div className="hero-content flex-col w-full md:w-1/2 lg:w-2/6 lg:max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Please Sign Up</h1>
        </div>
        <div className="card w-full py-3 shadow-xl bg-base-100">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
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
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                placeholder="Photo url"
                defaultValue="https://source.unsplash.com/random/200x200/?img=1"
                name="photourl"
                className="input input-bordered"
                // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="py-2 rounded-md bg-teal-500 hover:bg-teal-400 hover:text-black text-white font-semibold">
                Sign Up
              </button>
            </div>
          </form>
          <span className="text-center text-gray-400">
            Already have an account? Please{" "}
            <Link to="/login" className="font-semibold text-teal-700">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Registration;
