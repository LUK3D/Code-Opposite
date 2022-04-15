import { Button, Checkbox, Input, NumberInput, ScrollArea, Select } from "@mantine/core";
import { BsInputCursorText, BsLayoutThreeColumns, BsNodePlus } from "react-icons/bs";
import { LukEntityComponent } from "../component/LukEntityComponent";
import { DBDataTypes } from "../utils/lukTypes";
import { DataTypes,Charset } from "../utils/constants";
import { LukToolTip } from "../component/LukToolTip";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { MdAddCircleOutline, MdOutlineRule } from "react-icons/md";
import { Luk_SelectItem } from "../component/LukSelectItem";
import { ValidationRules } from "../utils/validations";
import { RiInsertColumnRight } from "react-icons/ri";

import {v4} from "uuid"

const EntitiesSetup = (args:{DBData:DBDataTypes, deleteEntity:Function, deleteEntityField:Function, addEntityField:Function, addEntity:Function})=>{
return(
<div className={"w-full h-full max-h-[calc(100%-4rem)] flex flex-col "}>
              {/* <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
            </Group> */}

              <div className="w-full h-full flex flex-col animated animate-fade-in-down">
              <ScrollArea className="w-full max-h-[calc(100%-1rem)] flex flex-col px-2 ">
                {args.DBData.entities.map((entity, index) => {
                  return (
                    <LukEntityComponent
                      key={entity.name +  v4()}
                      title={entity.name}

                      onEditName={(val:string)=>{
                        args.DBData.entities[index].name = val;
                      }}
                      onDeleteEntity={()=>{
                        args.deleteEntity(index);
                      }}
                      body={
                      
                      <div className="px-4 bg-dark-200 w-full py-2 pl-10   ">
                        {
                            entity.columns.map((cols: { name: string | undefined; },index2: string | number)=>{
                                return (
                                    <LukEntityComponent
                                    icon={<BsLayoutThreeColumns></BsLayoutThreeColumns>}
                                    key={entity.name+"_"+ cols.name + v4()}
                                    title={cols.name}
                                    onEditName={(val:string)=>{
                                        args.DBData.entities[index].columns[index2].name = val;
                                      }}
                                    onDeleteEntity={
                                      ()=>{
                                        
                                        args.deleteEntityField(index, index2);
                                      }
                                    }
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
                                                label="Length"
                                                placeholder="Length"
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
                                                placeholder="Default Value"
                                                aria-label=""
                                                    icon={<BsInputCursorText></BsInputCursorText>}
                                                    rightSection={LukToolTip("Default Value")}
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

                                                <div className="col-span-6 grid grid-cols-12 ">
                                                    <div className=" col-span-12 grid grid-cols-12 items-end gap-4">
                                                        <div className="flex text-yellow-600 col-span-6">
                                                        <AiOutlineNodeIndex fontSize={25}></AiOutlineNodeIndex> <p>Relationships</p>
                                                        </div>

                                                        <div className=" col-span-6">
                                                        <Select
                                                          icon={<MdOutlineRule></MdOutlineRule>}
                                                          rightSection={LukToolTip("Validation Rules")}
                                                          placeholder="Validation Rules"
                                                          itemComponent={Luk_SelectItem}
                                                          data={ValidationRules}
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
                                                        </div>
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
                                                                ...args.DBData.entities.map(x=>{
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
                        onClick={
                          ()=>{
                            args.addEntityField(index);
                          }
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
               
              </ScrollArea>
              <div>
              <Button  leftIcon={ <MdAddCircleOutline  className="text-text-100 " fontSize={25}></MdAddCircleOutline> }
                variant="default" className="col-span-2 text-text-100 "
                onClick={()=>{args.addEntity()}}
                >
                    Add Entity
              </Button>
              </div>
              </div>
            </div>
);
}
export default EntitiesSetup;