import { BGLight } from "../utils/colors";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
const Popup = (args:{label?:string, icon?:HTMLElement,  body?:HTMLElement, containerClassName?:string})=>{

    const [popState, showHide] = useState(false);
    function toogle(){
        useState(showHide(!popState));
    }
    
    
return(
<>
<button onClick={toogle} className={"text-text-100 bg-primary-100 text-sm flex p-2   rounded-md items-center" }>
    {args.icon}
    <p className=" ">{args.label}</p>

</button>
<div className={(popState?" flex ":" hidden ")+ (" fixed w-full h-full flex flex-col top-0 right-0 z-50 " )}>
    <div className={(popState?"animate-zoom-in":" animate-zoom-out ") + " fixed animated  animate-duration-150  w-full h-full bg-black bg-opacity-30  flex flex-col justify-center items-center "}>
        <div className={(popState?" animate-zoom-in   ":" animate-zoom-out ") + " p-10 animated animate-delay-150 animate-duration-150 transform transition-all  shadow-2xl rounded-lg relative " + BGLight + " " +  args.containerClassName }>
            <button onClick={toogle} className=" animate    absolute top-1 right-1 text-primary-100 ">
                <AiOutlineCloseCircle fontSize={25} ></AiOutlineCloseCircle>
            </button>
            {args.body}
        </div>
    </div>
</div>
</>
);
}
export default Popup;