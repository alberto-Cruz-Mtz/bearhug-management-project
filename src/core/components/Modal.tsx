import { MouseEvent, JSX, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "./icons";

interface Props {
  children: JSX.Element;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  hiddenButtonClose?: boolean;
}

const eventListener = "keydown";

export default function Modal({
  children,
  isOpen,
  setIsOpen,
  hiddenButtonClose,
}: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalRoot = document.getElementById("modal");

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener(eventListener, handleEsc);
    }

    return () => document.removeEventListener(eventListener, handleEsc);
  }, [isOpen]);

  if (!isOpen || !modalRoot) {
    return null;
  }

  return createPortal(
    <div
      ref={modalRef}
      aria-modal
      role="dialog"
      className="absolute w-full h-full top-0 flex items-center justify-center bg-black/40"
    >
      <div
        onClick={handleContentClick}
        className="z-50 bg-white dark:bg-zinc-800 rounded-xl relative"
      >
        <div className="min-w-[100px] min-h-[50px] p-4 grid place-content-center">
          {!hiddenButtonClose && (
            <button
              onClick={closeModal}
              className="absolute top-2 left-2 bg-rose-600 p-1 rounded-full"
            >
              <CloseIcon />
            </button>
          )}
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
}
