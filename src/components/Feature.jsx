import face from "../assets/Face.png";
import spark from "../assets/spark.svg";
import rocket from "../assets/rocket.png";
const Feature = () => {
  return (
    <div className="grid grid-cols-2 place-content-center -mb-80">
      <div className="ml-36">
        <img src={face} width={504} height={506} />
        <div className="relative top-[-26rem] -left-32 bg-white w-72 h-64 shadow-xl rounded-2xl p-5">
          <img src={spark} alt="spark" className="absolute -top-6 -left-4" />
          <h1 className="text-6xl font-semibold mt-6 mb-5 ml-1">40%</h1>
          <p className="text-lg text-slate-500 ">
            Achieved reduction in project execution time by optimizing team
            availability
          </p>
        </div>
        <div className="relative top-[-24rem] -left-16 bg-white shadow-xl rounded-full flex p-5 w-64">
          <div className="bg-slate-100 rounded-full p-3 mr-2">
            <img src={rocket} alt="rocket" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">10 DAYS</h1>
            <p className="text-slate-500">Staff Deployment</p>
          </div>
        </div>
        <div className="relative top-[-32rem] -right-80 bg-[#002e18] w-72 h-60 shadow-xl rounded-2xl p-9 border border-gray-600">
          <h1 className="text-white text-[3.5rem] poppins-medium tracking-tight mb-3">
            $0.5{" "}
            <span className="text-xl text-gray-400 tracking-wide">MILLION</span>
          </h1>
          <p className="text-gray-300 text-[1.05rem]">
            Reduced client expenses by saving on hiring and employee costs.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-24 pt-16">
        <div className="mb-28">
          <div className="absolute top-[23rem] right-1 grid grid-rows-3 grid-cols-3 -z-10">
            {Array.from(Array(3), (_, index) => (
              <div
                key={index}
                className="border border-slate-100 h-44 w-44 rounded-2xl rounded-l-[2.5rem]"
              ></div>
            ))}
            {Array.from(Array(6), (_, index) => (
              <div
                key={index}
                className="border border-slate-100 h-44 w-44 rounded-2xl"
              ></div>
            ))}
          </div>
          <h1 className="text-[2.5rem] leading-tight text-[#1c1c1c] font poppins-medium tracking-wide w-2/3 mb-10">
            Enhance fortune 50 company&apos;s insights teams research
            capabilities
          </h1>
          <div className="flex space-x-3">
            <div className="h-3 w-3 bg-[#2da950] rounded-full"></div>
            <div className="h-3 w-3 bg-[#e4e3e3] rounded-full"></div>
            <div className="h-3 w-3 bg-[#e4e3e3] rounded-full"></div>
          </div>
        </div>

        <button className="bg-[#1c1c1c] hover:bg-[#4e4e4e] text-white w-1/3 p-7 rounded-full text-xl">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Feature;
