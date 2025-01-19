import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  bg?: string;
  textColor?: string;
}

export default function SectionContainer({
  title,
  description,
  children,
  bg,
  textColor,
}: Props) {
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Estado inicial (antes de ser visible)
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Estado visible
  };

  return (
    <motion.section
      className={`min-h-screen px-10 py-10 pt-8 space-y-10 ${bg ?? ""}`}
      initial="hidden" // Comienza en estado oculto
      whileInView="visible" // Cambia a visible cuando entra en la vista
      viewport={{ once: true, amount: 0.2 }} // Controla cuándo inicia la animación
      variants={variants} // Asocia las variantes
    >
      <article className="text-center">
        <h3 className="text-3xl font-bold text-[#22d1ee]">{title}</h3>
        <p className={`mt-4 text-lg ${textColor ?? ""}`}>{description}</p>
      </article>
      {children}
    </motion.section>
  );
}
