import { ReactNode } from "react";

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
  return (
    <section className={`min-h-svh px-10 py-10 pt-8 space-y-10 ${bg ?? ""}`}>
      <article className="text-center">
        <h3 className="text-3xl font-bold text-[#22d1ee]">{title}</h3>
        <p className={`mt-4 text-lg ${textColor ?? ""}`}>{description}</p>
      </article>
      {children}
    </section>
  );
}
