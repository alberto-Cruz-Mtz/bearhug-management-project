import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Shape = ({ children }: Props) => {
  return (
    <div className="relative inline-block">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={350}>
        <path
          fill="#3D5AF1"
          d="M142.6 60.6c15.3 12 32.1 25.7 33.9 41.2 1.7 15.5-11.5 32.8-26.7 43.5-15.2 10.8-32.5 15-52.8 18.1-20.4 3-43.7 4.8-53.2-5.9-9.4-10.8-4.9-34.1-.7-53.3 4.2-19.1 8.2-34.1 17.6-46 9.4-12 24.4-20.9 38.7-20.3 14.3.6 28 10.8 43.2 22.7z"
        />
      </svg>
      {children}
    </div>
  );
};
