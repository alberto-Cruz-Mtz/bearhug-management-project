import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
}
export default function CardFeature({ title, description, icon }: Props) {
  return (
    <div className="w-[280px] px-10 py-12 bg-gray-200 dark:bg-zinc-800 rounded-lg shadow-[-15px_21px_14px_-1px_rgba(0,_0,_0,_0.2)] border-1 border-zinc-800 hover:scale-110 duration-300">
      <figure className="space-y-4">
        <div className="p-3 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">
          {icon}
        </div>
        <h6 className="text-xl font-bold h-[50px]">{title}</h6>
      </figure>
      <hr className="w-2/5 my-6 border-y-1 border-blue-600"></hr>
      <p className="text-gray-700 dark:text-gray-200">{description}</p>
    </div>
  );
}
