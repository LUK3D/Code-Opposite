import { forwardRef, ReactNode, useState } from "react";
import { BsBoxSeam, BsChevronExpand, BsInputCursorText, BsLayoutThreeColumns } from "react-icons/bs";
import { BorderDark } from "../utils/colors";
import { HiOutlineDatabase } from "react-icons/hi";
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer, DiSqllite } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FiHardDrive, FiLink2 } from "react-icons/fi";
import { AiOutlineInfoCircle, AiOutlineUser,AiOutlineNodeIndex } from "react-icons/ai";
import { RiLockPasswordLine, RiTableLine,RiInsertColumnRight,RiDeleteBinLine } from "react-icons/ri";
import { BsNodePlus } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { DataTypes,Charset } from "../utils/constants";

import {
  Modal,
  Button,
  Input,
  Group,
  Tooltip,
  Text,
  Select,
  PasswordInput,
  Stepper,
  ScrollArea,
  Collapse,
  NumberInput,
  Checkbox,
} from "@mantine/core";

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

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: ReactNode;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <div className="text-2xl">{image}</div>

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

const rightSection = (text: string) => (
  <Tooltip label={text} position="top" placement="end">
    <AiOutlineInfoCircle></AiOutlineInfoCircle>
  </Tooltip>
);

function EntityComponent(args: { title?: string; body: ReactNode,icon?:ReactNode }) {
  const [opened, setOpen] = useState(false);

  return (
    <>
      <div className="flex bg-dark-100 border-b border-dark-500 ">
        <Input
          icon={(args.icon !=null)?args.icon:<RiTableLine></RiTableLine>}
          placeholder="Entity name"
          defaultValue={args.title}
          rightSectionWidth={150}
          rightSection={
              <div className="flex items-center ">
                  
                  <Button
                    leftIcon={<RiDeleteBinLine className="text-gray-400" fontSize={20}></RiDeleteBinLine>}
                    variant="default"
                    size="xs"
                    onClick={() => setOpen((o) => !o)}
                    ></Button>
                  <Button
                    leftIcon={<BsChevronExpand className="text-gray-400" fontSize={20}></BsChevronExpand>}
                    variant="default"
                    size="xs"
                    onClick={() => setOpen((o) => !o)}
                    ></Button>
                    <div className="mt-1">
                    {rightSection("Entity name")}
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
                <Stepper.Completed></Stepper.Completed>
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
                rightSection={rightSection("Project Name")}
              />
              <Select
                icon={<HiOutlineDatabase></HiOutlineDatabase>}
                rightSection={rightSection("Database Engine")}
                placeholder="Database Engine"
                itemComponent={SelectItem}
                data={data}
                searchable
                maxDropdownHeight={400}
                nothingFound="No match..."
                filter={(value, item) =>
                  item.label
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
                rightSection={rightSection("Project Location")}
                className="mt-4"
              />
              <Input
                icon={<FiLink2></FiLink2>}
                placeholder="Host"
                rightSection={rightSection("Server Url")}
                className="mt-4"
              />
              <Input
                icon={<AiOutlineUser></AiOutlineUser>}
                placeholder="Username"
                rightSection={rightSection("Server Username")}
                className="mt-4"
              />
              <PasswordInput
                icon={<RiLockPasswordLine></RiLockPasswordLine>}
                placeholder="Password"
                rightSection={rightSection("Server Password")}
                className="mt-4"
              />
              <Input
                icon={<BsInputCursorText></BsInputCursorText>}
                placeholder="Database Name"
                rightSection={rightSection("Database Name")}
                className="mt-4"
              />
            </div>
            <div className={"col-span-9 h-full overflow-hidden flx flex-col"}>
              {/* <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group> */}

              <ScrollArea className="w-full h-[calc(100%-4rem)] flex flex-col px-2">
                {DBData.entities.map((entity, index) => {
                  return (
                    <EntityComponent
                      key={entity.name}
                      title={entity.name}
                      body={
                      
                      <div className="px-4 bg-dark-200 w-full py-2 pl-10   ">
                        {
                            entity.columns.map((cols,index2)=>{
                                return (
                                    <EntityComponent
                                    icon={<BsLayoutThreeColumns></BsLayoutThreeColumns>}
                                    key={cols.name}
                                    title={cols.name}
                                    body={
                                        <div className="px-4 pl-10 bg-dark-200 w-full py-2 grid grid-cols-6 gap-4 pb-10  ">
                                            <Select
                                                label="Datatype"
                                                placeholder="Datatype"
                                                searchable
                                                data={DataTypes}
                                                className="col-span-3"
                                                />
                                              <NumberInput
                                                placeholder="Length"
                                                label="Length"
                                                className="col-span-3"
                                                />

                                                <div className="col-span-3 grid grid-cols-3">
                                                <Checkbox
                                                    label="Allow NULL"
                                                    className="col-span-1"
                                                    />
                                                <Checkbox
                                                    label="Primary Key"
                                                    className="col-span-1"
                                                    />
                                                <Checkbox
                                                    label="Auto Increment"
                                                    className="col-span-1"
                                                    />
                                                </div>
                                                <Select
                                                label="Charset"
                                                placeholder="Charset"
                                                searchable
                                                data={Charset}
                                                className="col-span-3"
                                                />

                                                <div className="col-span-3 pt-7">
                                                <Input
                                                aria-label=""
                                                    icon={<BsInputCursorText></BsInputCursorText>}
                                                    placeholder="Default Value"
                                                    rightSection={rightSection("Default Value")}
                                                    className="w-full"
                                                />
                                                </div>
                                                <Select
                                                label="Validation Rule"
                                                placeholder="Validation Rule"
                                                searchable
                                                data={[
                                                    { value: 'Varchar', label: 'Varchar' },
                                                    { value: 'Int', label: 'Int' },
                                                    { value: 'Text', label: 'Text' },
                                                    { value: 'TimeStamp', label: 'TimeStamp' },
                                                ]}
                                                className="col-span-3"
                                                />

                                                <div className="col-span-6 grid grid-cols-12">
                                                    <div className="flex text-yellow-600 col-span-12">
                                                        <AiOutlineNodeIndex fontSize={25}></AiOutlineNodeIndex> <p>Relationships</p>
                                                    </div>
                                                    <div className="col-span-12 grid grid-cols-9 mt-2 gap-4 py-2 border-t border-b border-dark-500">
                                                        <p className="col-span-3 ">Entity</p>
                                                        <p className="col-span-3 ">Relation Type</p>
                                                        <p className="col-span-3 ">Relation Field</p>
                                                    </div>
                                                    <div className="col-span-12 grid grid-cols-9 mt-2  gap-4 ">
                                                        <Select
                                                            placeholder="Entity"
                                                            searchable
                                                            data={[
                                                                ...DBData.entities.map(x=>{
                                                                    return x = {
                                                                        name:x.name,
                                                                        label:x.name,
                                                                        value:x.name
                                                                    }
                                                                })
                                                            ]}
                                                            className="col-span-3"
                                                            />
                                                        <Select
                                                            placeholder="Entity"
                                                            searchable
                                                            data={[
                                                                { value: 'Has Many', label: 'Has Many' },
                                                                { value: 'Has One', label: 'Has One' },
                                                            ]}
                                                            className="col-span-3"
                                                            />
                                                        <Select
                                                            placeholder="Relation Field"
                                                            searchable
                                                            data={[
                                                                { value: 'Has Many', label: 'Has Many' },
                                                                { value: 'Has One', label: 'Has One' },
                                                                { value: 'Text', label: 'Text' },
                                                                { value: 'TimeStamp', label: 'TimeStamp' },
                                                            ]}
                                                            className="col-span-3"
                                                            />
                                                    </div>
                                                    <div className="col-span-12 grid grid-cols-9 mt-2  gap-4 ">
                                                    <Button 
                                                    leftIcon={
                                                        <BsNodePlus fontSize={25}></BsNodePlus>
                                                    }
                                                    variant="default" className="col-span-2 ">
                                                        Add Relation
                                                    </Button>
                                                        
                                                    </div>
                                                    
                                                </div>
                                                

                                        </div>
                                    }
                                    
                      
                                    />

                                )
                            })
                        }
                        <div className="bg-dark-100 p-2">
                        <Button 
                        leftIcon={
                            <RiInsertColumnRight fontSize={25}></RiInsertColumnRight>
                        }
                        variant="default" className="col-span-2 text-text-100   ">
                            Add Column
                        </Button>
                        </div>
                        
                      </div>
                      
                    
                    }
                    />
                  );
                })}
                <Button 
                        leftIcon={
                            <MdAddCircleOutline  className="text-text-100" fontSize={25}></MdAddCircleOutline>
                        }
                        variant="default" className="col-span-2 text-text-100   ">
                            Add Entity
                        </Button>
              </ScrollArea>
            </div>
          </div>
        }
      </Modal>
    </>
  );
};
export default ProjectSetup;
