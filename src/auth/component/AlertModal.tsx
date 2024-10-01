import {Button} from "@nextui-org/button";
import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";

interface TextContent {
    title: string;
    message: string;
}

export default function AlertModal({text_content, isOpen}: {text_content: TextContent, isOpen: boolean}) {

    const handleClick = () => window.location.reload();

    const {title, message} = text_content;
    return(
        <Popover backdrop="blur" isOpen={isOpen} className="w-[90%] mx-auto md:w-1/2">
            <PopoverTrigger >
                <label></label>
            </PopoverTrigger>
            <PopoverContent>
                <div className="text-center py-3 px-5 grid gap-3">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p>{message}</p>
                    <Button variant="faded" color="primary" onClick={handleClick}>OK</Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}