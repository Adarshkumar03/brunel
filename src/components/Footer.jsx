export default function Footer() {
  return (
    <div
      id="footer"
      className="p-12 m-5 mt-10 bg-[#f5f5f5] rounded-3xl flex justify-between"
    >
      <div className="text-xl flex">
        <p className="text-3xl font-medium mr-3 -mt-1">&copy;</p>
        <p>Talup 2023.All rights reserved</p>
      </div>
      <div className="mr-4">
        <a href="#" className="underline text-lg hover:text-slate-600">
          Terms & Conditions
        </a>
        <a href="#" className="underline ml-10 text-lg hover:text-slate-600">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
