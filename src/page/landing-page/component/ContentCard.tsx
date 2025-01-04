interface ContentCardProps {
  urlImage: string;
  title: string;
  description: string;
}

export default function ContentCard({
  urlImage,
  title,
  description,
}: ContentCardProps) {
  return (
    <blockquote className="px-2.5 py-3.5 border-2 border-gray-400 hover:border-blue-600 w-full rounded-md text-left flex flex-col gap-1.5">
      <img
        className="w-9 rounded-full bg-blue-600 p-1"
        src={urlImage}
        alt={title}
      />
      <h6 className="text-xl font-bold">{title}</h6>
      <p>{description}</p>
    </blockquote>
  );
}
