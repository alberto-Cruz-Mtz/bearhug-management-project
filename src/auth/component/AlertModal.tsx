import {Button} from "@nextui-org/button";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";
import {JSX} from "react";

interface TextContent {
    title?: string;
    message?: string;
    isOpen?: boolean;
    icon?: JSX.Element;
}

export default function AlertModal({title, message, isOpen, icon}: TextContent) {

    const handleClick = () => window.location.reload();
    return(
        <Popover backdrop="blur" isOpen={isOpen} className="min-w-72 w-[90%] mx-auto md:w-1/2">
            <PopoverTrigger >
                <label></label>
            </PopoverTrigger>
            <PopoverContent>
                <div className="text-center py-3 px-5 grid gap-3">
                    <h1 className="text-xl font-bold">{icon}{title}</h1>
                    <p>{message}</p>
                    <Button variant="faded" color="primary" onClick={handleClick}>OK</Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}