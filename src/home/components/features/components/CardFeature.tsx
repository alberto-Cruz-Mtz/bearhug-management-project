import { ReactNode } from "react";
import { easeInOut, motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
}
export default function CardFeature({ title, description, icon }: Props) {
  const variants = {
    hidden: { opacity: 0, x: -100 }, // Antes de entrar en la vista
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.4, easeInOut },
    }, // Animación al mostrarse
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Control de cuándo inicia la animación
      variants={variants}
      className="w-[280px] px-10 py-12 bg-gray-200 dark:bg-zinc-800 rounded-lg shadow-[-15px_21px_14px_-1px_rgba(0,_0,_0,_0.2)] border-1 border-zinc-800 hover:scale-110 duration-300"
    >
      <figure className="space-y-4">
        <div className="p-3 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
          {icon}
        </div>
        <h6 className="text-xl font-bold h-[50px]">{title}</h6>
      </figure>
      <hr className="w-2/5 my-6 border-y-1 border-blue-600"></hr>
      <p className="text-gray-700 dark:text-gray-200">{description}</p>
    </motion.div>
  );
}
