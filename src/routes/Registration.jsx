import logo from "../assets/Vector.svg";
import close from "../assets/Close.svg";
import badge from "../assets/Badges.svg";
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
        <h2 className="text-[3.5rem] w-1/3 mb-16 text-center font-semibold leading-[4rem]">
          Start your success journey here!
        </h2>
        <div className="flex flex-col w-1/3">
          <input
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-5 px-7 text-2xl bg-[#efefef] rounded-full w-3/4 mr-auto ml-auto mb-5 focus:outline-none focus:bg-[#f5f8ff] focus:border focus:border-blue-400"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-5 text-2xl bg-[#efefef] rounded-full w-3/4 mr-auto ml-auto mb-7 focus:outline-none focus:bg-[#f5f8ff] focus:border focus:border-blue-400"
          />
          {emailError && (
            <p className="text-red-500 -mt-5 mb-6 flex ml-16">
              <img src={badge} />
              {emailError}
            </p>
          )}
          <button
            onClick={handleSubmit}
            disabled={isAnyEmpty()}
            className={`w-3/4 p-5 rounded-full text-lg text-white ml-auto mr-auto ${
              isAnyEmpty()
                ? "bg-[#c9c9c9] cursor-not-allowed"
                : "bg-[#1c1c1c] hover:bg-[#4e4e4e] text-white"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
