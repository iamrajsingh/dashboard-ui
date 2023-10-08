import { PiStudentDuotone } from "react-icons/pi";
import {PiArrowsCounterClockwiseBold} from "react-icons/pi"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { ImAlarm } from "react-icons/im";
import { RiFileList2Line } from "react-icons/ri";
import { VscTag } from "react-icons/vsc";

const info = [
  {
    icon: <PiStudentDuotone />,
    name: "All users",
    number: "1",
  },
  {
    icon: <PiArrowsCounterClockwiseBold />,
    name: "Conversions",
    number: "0",
    symbol: "%",
  },
  {
    icon: <HiOutlineShoppingBag />,
    name: "30 days sales",
    number: "0",
  },
  {
    icon: <ImAlarm />,
    name: "Avg time",
    number: "0",
    symbol: "min",
  },
  {
    icon: <RiFileList2Line />,
    name: "courses",
    number: "0",
  },
  {
    icon: <VscTag />,
    name: "Course categories",
    number: "0",
  },
];

const Info = () => {
  return (
    <div className="grid grid-cols-3 w-[30%] p-2 justify-center max-lg:grid-cols-2">
      {info.map((items) => {
        return (
          <div
            key={items.name}
            className="flex flex-col justify-center w-full items-center"
          >
            <div className="h-10 text-4xl text-secondary mb-3">
              {items.icon}
            </div>
            <p className="text-sm font-palanquin text-slate-400 mb-1 leading-none">
              {items.name}
            </p>
            <div className="flex items-center">
              <p className="text-2xl font-medium font-montserrat text-slate-500">
                {items.number}
              </p>
              <span className=" text-sm text-right text-slate-400 ">
                {items.symbol}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
