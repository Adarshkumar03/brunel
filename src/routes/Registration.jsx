import logo from "../assets/Vector.svg";
import close from "../assets/Close.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const isAnyEmpty = () => {
    return name.trim() === "" || email.trim() === "";
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError("Enter valid email");
      setEmail("");
    } else {
      navigate("/success");
    }
  };

  return (
    <main className="px-12">
      <div className="flex justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-22 h-7 my-auto translate-y-4 ml-7"
        />
        <Link to="/">
          <img
            src={close}
            alt="close"
            className="p-4 border border-slate-500 rounded-full mt-4 hover:bg-[#f1f1f1]"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="covered-by-your-grace-regular text-4xl text-green-600 mb-3">
          Registration Form
        </p>
        <h1 className="text-6xl w-1/3 mb-10 text-center font-medium">
          Start your success journey here!
        </h1>
        <div className="flex flex-col">
          <input
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-5 text-2xl bg-gray-200 rounded-full"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
          <button
            onClick={handleSubmit}
            disabled={name.trim() === "" || email.trim() === ""}
            className={`w-1/3 p-5 rounded-full text-2xl ${
              isAnyEmpty()
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-black text-white"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
