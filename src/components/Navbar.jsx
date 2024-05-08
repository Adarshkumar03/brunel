import logo from "../assets/Vector.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between rounded-full border border-slate-200 py-5 px-5">
      <div>
        <img src={logo} alt="logo" className="w-22 h-7 my-auto translate-y-6 ml-10"/>
      </div>
      <div className="flex">
        <button className="rounded-full border hover:bg-[#f1f1f1] border-slate-300 py-6 px-11 text-xl"><Link to="/register">Get Projects</Link></button>
        <button className="rounded-full border bg-[#1c1c1c] hover:bg-[#4e4e4e] text-white text-xl px-7 ml-5 tracking-wide">Onboard Talent</button>
      </div>
    </nav>
  );
};

export default Navbar;
