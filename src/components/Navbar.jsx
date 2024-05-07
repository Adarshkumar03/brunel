import logo from "../assets/Vector.svg";
const Navbar = () => {
  return (
    <nav className="flex justify-between rounded-full border border-slate-200 py-5 px-5">
      <div>
        <img src={logo} alt="logo" className="w-22 h-7 my-auto translate-y-4 ml-7"/>
      </div>
      <div className="flex">
        <button className="rounded-full border border-slate-300 py-5 px-11 text-xl">Get Projects</button>
        <button className="rounded-full border bg-black text-white text-xl px-7 ml-5 tracking-wide">Onboard Talent</button>
      </div>
    </nav>
  );
};

export default Navbar;
