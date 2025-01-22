import { z } from "zod";

export const schemaCompany = z.object({
  name: z.string().min(4),
  description: z.string(),
  sector: z.string(),
  web: z.string(),
});

export type CreateCompanyFormValue = z.infer<typeof schemaCompany>;
