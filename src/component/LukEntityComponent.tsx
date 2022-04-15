import { Button, Collapse, Input } from "@mantine/core";
import { ReactNode, useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { RiDeleteBinLine, RiTableLine } from "react-icons/ri";
import { LukToolTip } from "./LukToolTip";

export function LukEntityComponent(args: { title?: string; body: ReactNode,icon?:ReactNode, onDeleteEntity?:Function, onEditName:Function}) {
    const [opened, setOpen] = useState(false);
  
    return (
      <>
        <div className="flex bg-dark-100 border-b border-dark-500 animated animate-fade-in">
          <Input
            icon={(args.icon !=null)?args.icon:<RiTableLine></RiTableLine>}
            placeholder="Entity name"
            defaultValue={args.title}
            rightSectionWidth={150}
           
            onChange={
                (ev)=>{
                    if(args.onEditName)
                    args.onEditName(ev.target.value)
                }
            }
            rightSection={
                <div className="flex items-center ">
                    
                    <Button
                      leftIcon={<RiDeleteBinLine className="text-gray-400" fontSize={20}></RiDeleteBinLine>}
                      variant="default"
                      size="xs"
                      
                      onClick={args.onDeleteEntity}
                      ></Button>
                    <Button
                      leftIcon={<BsChevronExpand className="text-gray-400" fontSize={20}></BsChevronExpand>}
                      variant="default"
                      size="xs"
                      onClick={() => setOpen((o) => !o)}
                      ></Button>
                      <div className="mt-1">
                      {LukToolTip("Entity name")}
                      </div>
                </div>
            }
            classNames={
                {
                    input:"font-bold"
                }
            }
          />
          
        </div>
  
        <Collapse in={opened} className="w-full">
          {args.body}
        </Collapse>
      </>
    );
  }