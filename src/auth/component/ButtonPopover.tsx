import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {Button} from "@nextui-org/button";
import {JSX} from "react";

export default function ButtonPopover({icon, message}: {icon:JSX.Element, message:string}){
    return(
        <Popover placement="top" backdrop="blur">
            <PopoverTrigger><Button variant="ghost">{icon}</Button></PopoverTrigger>
            <PopoverContent>
                <div className="flex flex-col gap-2 items-center">
                    {icon}
                    <p className="w-48 text-center">{message}</p>
                    <strong>Atentamente, Bearhug Management</strong>
                </div>
            </PopoverContent>
        </Popover>
    )
}
