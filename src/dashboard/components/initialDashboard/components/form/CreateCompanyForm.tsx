import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateCompanyFormValue,
  schemaCompany,
} from "./createCompanyFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const CreateCompanyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCompanyFormValue>({ resolver: zodResolver(schemaCompany) });

  const onSubmit: SubmitHandler<CreateCompanyFormValue> = (data) => {
    console.log(data);
  };

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
};
