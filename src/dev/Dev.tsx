import { useState } from "react";
import Modal from "../core/components/Modal";
import { Button } from "@heroui/button";

export default function Dev() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} hiddenButtonClose>
        <div className="p-4 w-[425px] grid">
          <span className="flex gap-3 items-center">
            <ExclamationIcon />
            <h6 className="font-bold text-xl">Alerta de Stock Bajo</h6>
          </span>
          <p className="text-sm text-gray-500 mt-3">
            El producto <span className=" font-bold">Camiseta Adidas</span> está
            alcanzando niveles críticos de inventario.
          </p>
          <p className="text-lg font-bold my-5 text-center">
            Unidades restantes 5
          </p>
          <Button variant="flat" color="primary">
            Entendido
          </Button>
        </div>
      </Modal>
    </div>
  );
}

const ExclamationIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.367 4.462L2.752 17.655a1.885 1.885 0 001.634 2.827h15.228a1.885 1.885 0 001.633-2.827L13.633 4.462a1.885 1.885 0 00-3.266 0zM11.995 7.578v6.277"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.043 17.326h-.009"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
