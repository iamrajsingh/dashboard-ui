import { CgSandClock } from "react-icons/cg";
import UsersCard from "./UsersCard";

const TimePeriod = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col bg-gradient mr-2 h-fit border-white border-2 p-2">
        <h2 className="w-full flex justify-between text-xl text-slate-700 p-2  font-bold font-palanquin">
          Trial period{" "}
          <p className="text-secondary text-4xl w-fit top-[-200px] left-[350px] ">
            <CgSandClock />
          </p>
        </h2>
        <p className=" border bottom-5  border-white shadow-2xl bg-secondary text-white rounded-full h-[100px] w-[100px] flex flex-col items-center justify-center text-2xl text-center">
          30
          <span className="text-sm">DAYS LEFT</span>
        </p>
        <div className="flex flex-col w-full items-end p-2">
          <p className="border-2 flex items-center justify-center rounded-3xl p-3 font-bold h-10 bg-[#fb389d] text-white py-2">
           <a href="#">Upgrade now! {">>"}</a> 
          </p>
        </div>
      </div>
      <div className="mt-2 mb-2">
        <UsersCard design="w-auto"/>
      </div>
    </div>
  );
};

export default TimePeriod;
