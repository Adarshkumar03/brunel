import logo from "../assets/Vector.svg";
import tick from "../assets/Frame.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Success() {
  const navigate = useNavigate();
  const [time, setTime] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          navigate("/"); // Redirect to Home
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000); // 1000 ms = 1 second

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <main className="px-12 mt-5">
      <div className="flex justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-22 h-7 my-auto translate-y-4 ml-7"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-16 mb-24">
        <img src={tick} className="mb-10" />
        <p className="covered-by-your-grace-regular text-4xl text-green-600">
          Successfully Submitted
        </p>
        <h1 className="text-[3.5rem] font-semibold mb-4">Congratulations</h1>
        <p className="text-[1.65rem] w-1/2 text-center text-[#727272]">
          You request has been successfully submitted to us. We will validate
          your information and reach out to you shortly with updates.
        </p>
      </div>
      <p className="w-max ml-auto mr-auto text-2xl text-[#7b7b7b]">
        Redirecting you to homepage in{" "}
        <span className="text-black font-medium">{time} seconds</span>
      </p>
    </main>
  );
}
