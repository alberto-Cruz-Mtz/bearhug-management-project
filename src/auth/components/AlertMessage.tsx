import {Popover, PopoverContent, PopoverTrigger} from "@nextui-org/popover";

interface AlertMessageProps {
    message: {
        title: string;
        description: string;
    };
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void;
}

export default function AlertMessage({message, isOpen, setIsOpen}: AlertMessageProps) {
    return(
        <Popover color="danger" className="" backdrop="blur" isOpen={isOpen} onClick={()=>setIsOpen(isOpen)}>
            <PopoverTrigger><label></label></PopoverTrigger>
            <PopoverContent>
                <blockquote className="px-1 w-72 py-2 text-center">
                    <h6 className="text-xl font-[Poppins] font-bold">🚧 {message.title} 🚧</h6>
                    <div className="font-[Poppins]">{message.description}</div>
                </blockquote>
            </PopoverContent>
        </Popover>
    )
}