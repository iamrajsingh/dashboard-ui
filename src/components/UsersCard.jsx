import profile from "../assets/profile.jpg";
import { PiStudentDuotone } from "react-icons/pi";
import { FaKey } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";

const UsersCard = ({ btn, log, design = "w-[400px]" }) => {
  return (
    <div className={`flex mr-2 flex-col bg-white p-2 ${design} h-fit`}>
      <div className="flex items-center justify-start">
        <div className="text-secondary flex items-center pr-2">
          {log ? (
            <IoAnalyticsOutline className="text-slate-400" />
          ) : (
            <PiStudentDuotone />
          )}
        </div>
        <p className="text-slate-500 text-sm py-2 text-center font-bold pr-1">
          {log ? "Event log" : btn ? "New users" : "Online users"}
        </p>
        {log ? (
          <p className=" flex items-center px-2 py-1 rounded-3xl bg-secondary text-center text-white text-[16px] h-7">
            <a href="#">see all</a>
          </p>
        ) : btn ? (
          <p className=" flex items-center px-2 py-1 rounded-3xl bg-secondary text-center text-white text-[16px] h-7">
            <a href="#"> see all</a>
          </p>
        ) : (
          <p className=" py-1  text-left text-slate-500 text-sm font-bold">
            (1)
          </p>
        )}
      </div>

      <div className="flex mt-2 w-full">
        {log ? (
          <FaKey className="text-slate-400" />
        ) : btn? (
         <div>
            <img src={profile} alt="user" height={50} width={50} />
          </div>
        ): (
          <div>
            <img src={profile} alt="user" height={50} width={50} />
            <p className="relative w-2 h-2 rounded-full bg-slate-400 left-10 bottom-1"></p>
          </div>
        ) }

        <div className="flex flex-col justify-center w-full">
          {log ? (
            <div>
              <div className="flex justify-between w-full">
                <p className="text-md text-secondary pl-5">hubx</p>
                <p className="text-md text-slate-500 pl-5">22 minutes</p>
              </div>

              <p className="text-sm text-slate-500 font pl-5">logged in</p>
              <p className="text-sm text-secondary font pl-5">
                <a href="#">more info</a>
              </p>
            </div>
          ) : btn ? (
            <>
              <p className="text-md text-slate-500 pl-5">hubx</p>
              <p className="text-sm text-slate-500 font pl-5">24 minutes</p>
            </>
          ) : (
            <div className="flex justify-between w-full">
              <p className="text-md text-secondary pl-5">hubx</p>
              <p className=" flex items-center px-2 py-1 rounded-md bg-secondary text-center text-white text-[16px] h-7">
                <a href="#">contact</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
