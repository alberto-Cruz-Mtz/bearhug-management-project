interface PricingInformation {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const BASIC_PLAN: PricingInformation = {
  title: "plan básico",
  price: 10,
  description: "Basic features for up to 10 users",
  features: ["5Gb de almacenamiento", "20 espacios para empleados"],
};

export const PROFESIONAL_PLAN: PricingInformation = {
  title: "plan profesional",
  price: 10,
  description: "Basic features for up to 10 users",
  features: ["5Gb de almacenamiento", "20 espacios para empleados"],
  isPopular: true,
};

export const ULTIMATE_PLAN: PricingInformation = {
  title: "plan ultimate",
  price: 10,
  description: "Basic features for up to 10 users",
  features: ["5Gb de almacenamiento", "20 espacios para empleados"],
};

export const PricingInfo = [BASIC_PLAN, PROFESIONAL_PLAN, ULTIMATE_PLAN];

export const text_feature =
  "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware";
