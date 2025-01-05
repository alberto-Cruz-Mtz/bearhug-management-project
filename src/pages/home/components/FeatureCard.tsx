import { JSX } from "react"

interface CardProps {
  icon: JSX.Element,
  title: string,
  description: string,
  color?: string
}

export default function FeatureCard({ icon, title, description, color }: CardProps) {
  return (
    <article className={`w-4/5 lg:w-2/5 mx-auto border-3 space-y-1 border-gray-300 hover:border-${color} px-4 py-8 rounded-lg shadow-[-15px_21px_14px_-1px_rgba(0,_0,_0,_0.2)]`}>
      <div className={`inline-block bg-${color} p-2 rounded-lg`}>{icon}</div>
      <h6 className="text-xl font-bold font-[Poppins]">{title}</h6>
      <p className="font-[Poppins]">{description}</p>
    </article>
  )
}
