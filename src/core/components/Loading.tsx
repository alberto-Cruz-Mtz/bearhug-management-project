import { CircularProgress } from "@heroui/progress";
import image from "./../../../public/logo.png";

export default function Loading() {
  return (
    <div className="h-svh w-full grid place-items-center">
      <article className="flex flex-col md:flex-row justify-center gap-4">
        <figure className="flex items-center gap-4">
          <img
            src={image}
            alt="logo"
            className="object-cover object-center"
            width={70}
            height={70}
          />
          <h5 className="text-2xl font-bold">Bearhug Management</h5>
        </figure>
        <CircularProgress
          size="lg"
          color="primary"
          aria-label="loading..."
          classNames={{ base: "mx-auto" }}
        />
      </article>
    </div>
  );
}
