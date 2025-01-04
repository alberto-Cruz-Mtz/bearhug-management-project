interface PricingCardProps {
  plan: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

import { Button } from "@nextui-org/button";

export default function PricingCard({
  plan,
  price,
  features,
  isPopular,
}: PricingCardProps) {
  const style = isPopular ? "shadow" : "faded";
  const borderColor = isPopular ? "border-blue-600" : "border-gray-700";

  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div
        className={
          "h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden " +
          borderColor
        }
      >
        {isPopular && (
          <span className="bg-blue-600 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
            POPULAR
          </span>
        )}
        <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium text-left uppercase">
          {plan}
        </h2>
        <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
          <span>${price}</span>
          <span className="text-lg ml-1 font-normal text-gray-400">
            /mensualmente
          </span>
        </h1>
        {features.map((feature, index) => (
          <p key={index} className="flex items-center text-gray-400 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {feature}
          </p>
        ))}
        <Button variant={style} color="primary">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Button>
        <p className="text-xs text-gray-400 mt-3">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  );
}
