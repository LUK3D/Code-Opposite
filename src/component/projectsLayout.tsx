import { BGLight, BorderDark } from "../utils/colors";
import { FaCog, FaDownload, FaCube,FaReact,FaVuejs,FaLaravel} from "react-icons/fa";
import { BiPackage, BiVideo,BiChat,BiSearch} from "react-icons/bi";
import { SiTailwindcss} from "react-icons/si";

import ProjectSetup from "../views/ProjectSetup";


const ProjectsLayout = ()=>{

    
return(
    <div className="grid grid-cols-12 w-full h-full">

       
        
        <div className={"h-full  flex flex-col justify-between col-span-2  border-r " + BGLight + BorderDark}>
           
            <div className="btns flex flex-col ">
                <div className={"flex justify-between p-5 border-b w-full h-20 items-ce " + BorderDark}>
                    <div className="avatar w-10 h-10 flex justify-center items-center text-text-100 font-bold rounded-full bg-primary-100">
                        <p>F</p>
                    </div>
                    <button className="text-gray-400 text-xl">
                        <FaCog></FaCog>
                    </button>
                </div>
                <div className="btns-body p-5 flex flex-col">
                    <button className={"text-gray-400 text-sm flex p-2 mb-4 bg-dark-50 w-full rounded-md items-center" }>
                        <FaCube></FaCube>
                        <p className="ml-4 text-text-100">Projects</p>
                    </button>
                    <button className={"text-gray-400 text-sm flex p-2 mb-4 w-full rounded-md items-center" }>
                        <BiPackage fontSize={20}></BiPackage>
                        <p className="ml-4 ">Plugins</p>
                    </button>
                    <button className={"text-gray-400 text-sm flex p-2 mb-4 w-full rounded-md items-center" }>
                        <BiVideo fontSize={20}></BiVideo>
                        <p className="ml-4 ">Learn</p>
                    </button>
                    <button className={"text-gray-400 text-sm flex p-2 mb-4 w-full rounded-md items-center" }>
                        <BiChat fontSize={20}></BiChat>
                        <p className="ml-4 ">Community</p>
                    </button>
                </div>
            </div>
            <div className={"flex  p-5 border-t w-full" + BorderDark}>
                <button className="text-gray-400 text-sm flex">
                    <FaDownload></FaDownload>
                    <p className="ml-4 ">Downloads</p>
                </button>
            </div>
        </div>
        <div className="col-span-10 h-full flex flex-col text-text-100">
                <div className={"flex justify-between p-5 border-b w-full h-20 items-center " + BorderDark}>
                    <p className="text-2xl">Projects</p>
                    <div className=" flex justify-center ">
                    <button className={"text-gray-400 text-sm flex p-2  bg-dark-50 mr-3 rounded-md items-center" }>
                        <FaCube></FaCube>
                        <p className="ml-2 text-text-100">Open</p>
                    </button>
                    <ProjectSetup ></ProjectSetup>
                   
                   
                    </div>
                </div>
                <div className="searchArea p-5 flex ">
                    <div className={"flex text-text-100 rounded-md  relative border transition-colors   "+BorderDark +" "+ BGLight("hover")}>
                        <BiSearch className="absolute top-1/4 ml-2"></BiSearch>
                        <input placeholder="Search..." className="bg-transparent outline-none p-2 pl-8" type="text" />
                    </div>
                </div>

                <div className={"w-full px-5 grid grid-cols-12 border-t  "+BorderDark + BGLight}  >
                    <div className={"p-2 col-span-5 border-r  " + BorderDark}>
                        <p>NAME</p>
                    </div>
                    <div className={"p-2 col-span-4 border-r " + BorderDark}>
                    <p>STACK</p>
                    </div>
                    <div className={"p-2 col-span-3   " + BorderDark}></div>
                </div>
                <div className={"w-full px-5 grid grid-cols-12 border-t border-b "+BorderDark+ BGLight("hover")}  >
                    <div className={"p-2 col-span-5 border-r  " + BorderDark}>
                        <p>DevTools</p>
                        <p className="text-xs text-gray-400">E:\Unity_Projects\DevTools</p>
                    </div>
                    <div className={"p-2 col-span-4 flex border-r " + BorderDark}>
                        <FaReact className="mx-2 text-light-blue-700" fontSize={25}></FaReact>
                        <FaVuejs className="mx-2 text-green-500" fontSize={25}></FaVuejs>
                        <FaLaravel className="mx-2 text-red-500" fontSize={25}></FaLaravel>
                        <SiTailwindcss className="mx-2 text-blue-400" fontSize={25}></SiTailwindcss>
                    </div>
                    <div className={"p-2 col-span-3   " + BorderDark}></div>
                </div>


        </div>

    </div>
);
}
export default ProjectsLayout;