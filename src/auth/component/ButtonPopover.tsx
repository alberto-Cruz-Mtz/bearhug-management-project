import { Button } from "@nextui-org/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

export default function ButtonPopover({ Icon, typeAuth }: { Icon: JSX.Element, typeAuth: string }) {
    return (
        <Popover placement="top" offset={15} backdrop="blur">
            <PopoverTrigger>
                <Button className="" variant="bordered">{Icon}</Button>
            </PopoverTrigger>
            <PopoverContent className="">
                <blockquote className="px-1 py-2 grid gap-4">
                    {Icon}
                    <p className="w-60 text-center">Estimado usuario,
                        Lamentamos informarle que el registro mediante {typeAuth} aún no está disponible.</p>
                    <p className="font-bold">Atentamente, Bearhug Management</p>
                </blockquote>
            </PopoverContent>
        </Popover>
    )
}
