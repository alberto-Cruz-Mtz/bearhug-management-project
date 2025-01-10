import { Form } from "../components";
import { FormValues } from "../components/form/model/form_schema";

interface Props {
  title: string;
  image: string;
  service: (data: FormValues) => void;
}

export default function AuthLayout({ image, title, service }: Props) {
  return (
    <div className="lg:flex lg:justify-center lg:items-center lg:gap-5">
      <article>
        <h1 className="text-3xl font-bold text-center my-5">{title}</h1>
        <Form service={service} />
      </article>
      <figure className="w-[350px] md:w-[500px] mx-auto lg:mx-0">
        <img
          src={image}
          alt="authentication"
          className="object-cover object-center "
        />
      </figure>
    </div>
  );
}
