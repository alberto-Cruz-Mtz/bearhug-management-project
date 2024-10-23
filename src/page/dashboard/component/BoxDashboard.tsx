import { Button } from "@nextui-org/button";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/table";
import { useState } from "react";
import AlertModal from "../../../auth/component/AlertModal";
import Tool from "../icon/Tool";

const products = [
    { key: "monitor", label: "Monitor" },
    { key: "teclado", label: "Teclado" },
    { key: "mouse", label: "Mouse" },
    { key: "impresora", label: "Impresora" },
    { key: "parlante", label: "Parlante" },
    { key: "microfono", label: "Microfono" },
    { key: "webcam", label: "Webcam" },
    { key: "proyector", label: "Proyector" },
    { key: "laptop", label: "Laptop" },
    { key: "desktop", label: "Desktop" },
    { key: "tablet", label: "Tablet" },
    { key: "smartphone", label: "Smartphone" },
    { key: "television", label: "Television" },
    { key: "router", label: "Router" },
    { key: "switch", label: "Switch" },
    { key: "modem", label: "Modem" },
    { key: "ups", label: "Ups" },
    { key: "servidor", label: "Servidor" },
    { key: "almacenamiento", label: "Almacenamiento" },
    { key: "sistemaoperativo", label: "Sistema operativo" },
    { key: "softwareofimatica", label: "Software ofimatica" },
    { key: "softwaredeproteccion", label: "Software de proteccion" },
    { key: "softwaredeprogramacion", label: "Software de programacion" },
    { key: "softwaredeautomatizacion", label: "Software de automatizacion" },
    { key: "softwaredegestion", label: "Software de gestion" },
    { key: "softwaredecomunicacion", label: "Software de comunicacion" },
    { key: "softwaredeeducacion", label: "Software de educacion" },
    { key: "softwaredeentretenimiento", label: "Software de entretenimiento" },
    { key: "softwaredegraficos", label: "Software de graficos" },
    { key: "softwaredeaudio", label: "Software de audio" },
    { key: "softwaredevideo", label: "Software de video" },
    { key: "softwaredeinternet", label: "Software de internet" },
    { key: "softwaredeemulacion", label: "Software de emulacion" },
    { key: "softwaredeutilidades", label: "Software de utilidades" },
    { key: "softwaredejuegos", label: "Software de juegos" },
    { key: "softwaredeprogramacionweb", label: "Software de programacion web" },
    { key: "softwaredeprogramacionmovil", label: "Software de programacion movil" },
    { key: "softwaredeprogramaciondeaplicaciones", label: "Software de programacion de aplicaciones" },
    { key: "softwaredeprogramaciondeaplicacionesmoviles", label: "Software de programacion de aplicaciones moviles" }
];


export default function BoxDashboard({ className }: { className?: string }) {
    const [openForm, setOpenForm] = useState(false);
    const [openTable, setOpenTable] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleButtonClick = (button: string) => {
        if (button === "catalogo" || button === "departamento") {
            setOpenTable(true);
            setOpenForm(false);
        } else if (button === "agregar" || button === "eliminar" || button === "modificar") {
            setOpenForm(true);
            setOpenTable(false);
        }
    };

    return (
        <div className={className}>
            <h2 className="border-b-2 py-2 px-3">Title</h2>
            <div className="flex gap-4 border-b-2 py-2 px-3">
                <Button color="default" onClick={() => handleButtonClick("catalogo")}>Catalogo</Button>
                <Button color="default" onClick={() => handleButtonClick("agregar")}>Agregar</Button>
                <Button color="default" onClick={() => handleButtonClick("modificar")}>Modificar</Button>
                <Button color="default" onClick={() => handleButtonClick("eliminar")}>Eliminar</Button>
                <Button color="default" onClick={() => handleButtonClick("departamento")}>Departamento</Button>
            </div>
            <p className="border-b-2 py-2 px-3">Instrucciones</p>
            <div className="h-[60svh] overflow-auto px-8 py-5">
                {openTable && (
                    <TableProduct />
                )}
                {openForm && (
                    <FormProduct openModal={openModal} setOpenModal={setOpenModal} />
                )}
            </div>
        </div>
    )
}

function TableProduct() {
    return (
        <Table isStriped aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Descripcion</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Monitor</TableCell>
                    <TableCell>Electronica</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Teclado</TableCell>
                    <TableCell>Electronica</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Mouse</TableCell>
                    <TableCell>Electronica</TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell>Shampoo</TableCell>
                    <TableCell>Higiene</TableCell>
                </TableRow>
                <TableRow key="5">
                    <TableCell>Jabon</TableCell>
                    <TableCell>Higiene</TableCell>
                </TableRow>
                <TableRow key="6">
                    <TableCell>Cuchillo</TableCell>
                    <TableCell>Cocina</TableCell>
                </TableRow>
                <TableRow key="7">
                    <TableCell>Tenedor</TableCell>
                    <TableCell>Cocina</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}


function FormProduct({ openModal, setOpenModal }: { openModal: boolean, setOpenModal: unknown }) {
    return (
        <div className="flex gap-5 justify-around">
            <form className="grid gap-5">
                <Input label="codigo de barras" size="sm" type="text" />
                <Input label="Descripción" size="sm" type="text" />
                <CheckboxGroup
                    label="Se vendo por:"
                    orientation="horizontal"
                    color="primary"
                    defaultValue={["0"]}
                    onChange={(values) => {
                        if (values.length > 1) {
                            const lastSelected = values[values.length - 1];
                            values.length = 0;
                            values.push(lastSelected);
                        }
                    }}
                >
                    <Checkbox size="sm" value="0">Por unidad/pza</Checkbox>
                    <Checkbox size="sm" value="1">A granel</Checkbox>
                    <Checkbox size="sm" value="2">San Francisco</Checkbox>
                </CheckboxGroup>
                <Input
                    type="number"
                    label="Costo de compra"
                    placeholder="0.00"
                    labelPlacement="outside"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">$</span>
                        </div>
                    }
                />
                <Input
                    type="number"
                    label="Precio de venta"
                    placeholder="0.00"
                    labelPlacement="outside"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">$</span>
                        </div>
                    }
                />
                <Input
                    type="number"
                    label="Precio de mayoreo"
                    placeholder="0.00"
                    labelPlacement="outside"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">$</span>
                        </div>
                    }
                />
                <Select
                    items={products}
                    label="Categorias"
                    placeholder="Selecciona una categoria"
                    size="sm"
                >
                    {(products) => <SelectItem key={products.key}>{products.label}</SelectItem>}
                </Select>
                <Input
                    type="number"
                    label="Existencias"
                    placeholder="0.00"
                    labelPlacement="outside"
                    startContent={
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small"></span>
                        </div>
                    }
                />
                <Button color="primary" onClick={() => setOpenModal(!openModal)} size="sm">Guardar</Button>
                <AlertModal title="Aviso" isOpen={openModal} icon={<Tool />} message="Lamentablemente las funcionalidades de este formulario aun se encuentran en desarrollo" />
            </form>
            <Image
                width={300}
                alt="Image Product"
                src="https://app.requestly.io/delay/1000/https://nextui.org/images/fruit-4.jpeg"
            />
        </div>
    )
}


