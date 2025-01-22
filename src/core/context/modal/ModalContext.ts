import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface Params {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<Params | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal is being used outside it's provider");
  }

  return context;
};
