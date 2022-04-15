import { useState } from "react";
import { BsBoxSeam,  BsInputCursorText } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer, DiSqllite } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FiHardDrive, FiLink2 } from "react-icons/fi";
import {  AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";


import {
  Modal,
  Button,
  Input,
  Select,
  PasswordInput,
  Stepper
} from "@mantine/core";
import { Luk_SelectItem } from "../component/LukSelectItem";
import { LukToolTip } from "../component/LukToolTip";
import EntitiesSetup from "./EntitiesSetup";

const data = [
  {
    image: <GrMysql></GrMysql>,
    label: "MySQL",
    value: "MySQL",
    description: "Fascinated with cooking",
  },

  {
    image: <DiMsqlServer></DiMsqlServer>,
    label: "MsqlServer",
    value: "MsqlServer",
    description: "One of the richest people on Earth",
  },
  {
    image: <DiSqllite></DiSqllite>,
    label: "Sqlite",
    value: "Sqlite",
    description: "Overweight, lazy, and often ignorant",
  },
  {
    image: <SiMongodb></SiMongodb>,
    label: "Mongodb",
    value: "Mongodb",
    description: "Not just a sponge",
  },
];


const ProjectSetup = () => {
  const [active, setActive] = useState(1);
  const nextStep = () =>
  setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
  setActive((current) => (current > 0 ? current - 1 : current));

  const [DBData, setDatabaseData] = useState({
    entities: [
      {
        name: "Users",
        columns: [
          {
            name: "Username",
          },
          {
            name: "Password",
          },
        ],
      },
      {
        name: "Messages",
        columns: [
          {
            name: "From",
          },
          {
            name: "To",
          },
        ],
      },
    ],
  });


//   const _reducerFunc = ()=>{
      
//   }


//     const [state, dispatch] = useReducer(_reducerFunc,{
//         entities: [
//           {
//             name: "Users",
//             columns: [
//               {
//                 name: "Username",
//               },
//               {
//                 name: "Password",
//               },
//             ],
//           },
//           {
//             name: "Messages",
//             columns: [
//               {
//                 name: "From",
//               },
//               {
//                 name: "To",
//               },
//             ],
//           },
//         ],
//  });



  function addEntity() {
    
    DBData.entities.push({
      name: "",
      columns: [
        {
          name: "id",
          primary:true
        },
       
      ],
    });
    setDatabaseData({...DBData});

    console.warn(">", DBData);
  }
  function addEntityField(entityIndex:number) {
    
    DBData.entities[entityIndex].columns.push({
      name: ""
    });
    setDatabaseData({...DBData});
  }

  function deleteEntity(index:number) {
    DBData.entities.splice(index,1);
    setDatabaseData({...DBData});
  }

  function deleteEntityField(entityIndex:number, fieldIndex:number) {
    DBData.entities[entityIndex].columns.splice(fieldIndex,1);
    setDatabaseData({...DBData});
  }

  


  const [opened, setOpened] = useState(true);
  return (
    <>
      <Button className="p-0" onClick={() => setOpened(true)}>
        New Project
      </Button>
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={() => setOpened(false)}
        title={
          <div className="w-full  grid grid-cols-12 border-b border-dark-500 pb-2">
            <h1 className="text-2xl col-span-3">
              {" "}
              <BsBoxSeam></BsBoxSeam> Project Setup
            </h1>
            <div className="w-full col-span-9 px-2">
              <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step
                  label="Setup Entities"
                  description="Define Tables and Fields"
                ></Stepper.Step>
                <Stepper.Step
                  label="API Definitions"
                  description="Create Routes and Fields validations"
                ></Stepper.Step>
                <Stepper.Step
                  label="Build API"
                  description="Generate Project Rest API"
                ></Stepper.Step>
                <Stepper.Completed children={null}></Stepper.Completed>
              </Stepper>
            </div>
          </div>
        }
        classNames={{
          modal: " bg-dark-100 w-5/5 h-full mx-10",
          body: "w-full h-full",
          title: "w-full flex  ",
        }}
      >
        {
          <div className="w-full h-[calc(100%-3rem)] grid grid-cols-12">
            <div
              className={
                "col-span-3 h-full border-r border-dark-600 flex flex-col pr-3"
              }
            >
              <h2 className="text-md mb-2 w-full pb-3">Project Info</h2>
              <Input
                icon={<BsInputCursorText></BsInputCursorText>}
                placeholder="Project Name"
                rightSection={LukToolTip("Project Name")}
              />
              <Select
                icon={<HiOutlineDatabase></HiOutlineDatabase>}
                rightSection={LukToolTip("Database Engine")}
                placeholder="Database Engine"
                itemComponent={Luk_SelectItem}
                data={data}
                searchable
                maxDropdownHeight={400}
                nothingFound="No match..."
                filter={(value, item) =>
                  item.label!
                    .toLowerCase()
                    .includes(value.toLowerCase().trim()) ||
                  item.description
                    .toLowerCase()
                    .includes(value.toLowerCase().trim())
                }
                className="mt-4"
              />

              <Input
                icon={<FiHardDrive></FiHardDrive>}
                placeholder="Project Location"
                rightSection={LukToolTip("Project Location")}
                className="mt-4"
              />
              <Input
                icon={<FiLink2></FiLink2>}
                placeholder="Host"
                rightSection={LukToolTip("Server Url")}
                className="mt-4"
              />
              <Input
                icon={<AiOutlineUser></AiOutlineUser>}
                placeholder="Username"
                rightSection={LukToolTip("Server Username")}
                className="mt-4"
              />
              <PasswordInput
                icon={<RiLockPasswordLine></RiLockPasswordLine>}
                placeholder="Password"
                rightSection={LukToolTip("Server Password")}
                className="mt-4"
              />
              <Input
                icon={<BsInputCursorText></BsInputCursorText>}
                placeholder="Database Name"
                rightSection={LukToolTip("Database Name")}
                className="mt-4"
              />
            </div>
            <div className="col-span-9 h-full overflow-hidden flex flex-col ">
            {
              active == 0?<EntitiesSetup DBData={DBData} deleteEntity={deleteEntity} deleteEntityField={deleteEntityField} addEntityField={addEntityField} addEntity={addEntity}  ></EntitiesSetup>
              :<></>
            }

            <div className="px-5 py-3 flex ">
            <Button >
              Next
            </Button>
            </div>
            </div>
            
            
          
          </div>
        }
      </Modal>
    </>
  );
};
export default ProjectSetup;
