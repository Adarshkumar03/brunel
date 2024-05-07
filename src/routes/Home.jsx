import Navbar from "../components/Navbar";
import success from "../assets/success.png";
import face from "../assets/Face.png";

function Home() {
  return (
    <main className="p-5 poppins-regular">
      <Navbar />
      <section>
        <div className="w-1/2 flex flex-col justify-center content-center mr-auto ml-auto mt-16 mb-28">
          <img
            src={success}
            alt="success"
            className="w-40 h-8 ml-auto mr-auto mb-5"
          />
          <h1 className="text-6xl text-[#1c1c1c] font poppins-medium tracking-wide text-center">
            Every Success journey we&apos;ve encountered
          </h1>
        </div>
        <div className="grid grid-cols-2 place-content-center">
          <div className="ml-36">
            <img src={face} width={504} height={506} />
          </div>
          <div className="flex flex-col justify-between ml-24 pt-16">
            <div>
              <h1 className="text-4xl text-[#1c1c1c] font poppins-medium tracking-wide w-2/3 mb-10">
                Encounter fortune 50 company&apos;s insights teams research
                capabilities
              </h1>
              <div className="flex space-x-3">
                <div className="h-3 w-3 bg-[#2da950] rounded-full"></div>
                <div className="h-3 w-3 bg-[#e4e3e3] rounded-full"></div>
                <div className="h-3 w-3 bg-[#e4e3e3] rounded-full"></div>
              </div>
            </div>

            <button className="bg-[#1c1c1c] hover:bg-slate-800 text-white w-1/3 p-9 rounded-full text-xl">
              Explore More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
