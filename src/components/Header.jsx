import {HiOutlineEye, HiPlus} from "react-icons/hi";
import {BiPowerOff} from "react-icons/bi"
import {BsQuestionLg} from "react-icons/bs"
import MyModal from "./Modal";


const navOptions = [
    {
        logo: <HiPlus/>,
        option: "Create course"
    },
    {
        logo: <HiOutlineEye/>,
        option: "Preview home page"
    },
    {
        logo: <HiOutlineEye/>,
        option: "Preview after login page"
    },
    {
        logo: <BiPowerOff/>,
        option: "View welcome screen"
    }
]

const Header = () => {
  return (
    <nav className="w-full flex p-2 flex-row items-center bg-white">
        <div className="flex items-center"><p className="text-2xl text-black font-bold pr-7 font-montserrat">Dashboard</p></div>
        <div className=" flex justify-between w-full">
            <ul className="flex flex-1 flex-row items-center">
                {
                 navOptions.map((item) => (
                    <li className="" key={item.option}>
                        <div className="flex flex-row items-center">
                            <div className="ml-2 rounded-full w-7 h-7 bg-[#ebebeb] flex justify-center items-center mr-2">{item.logo}</div>
                            <a className="text-md pr-5 text-slate-500" href="#">{item.option}</a>
                        </div>
                    </li>
                 ))
                }
            </ul>
            <div className="flex flex-row items-center justify-center">
                <MyModal/>
                <p className="ml-2 rounded-full w-7 h-7 bg-secondary flex justify-center items-center mr-2 text-white"><BsQuestionLg/></p><a className="pr-5 text-slate-500" href="#">Help </a>
            </div>
        </div>
    </nav>
  )
}

export default Header