import { Button } from "@nextui-org/button";
import InputForm from "./components/InputForm.tsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { formSchema, FormValues } from "./model/form_schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonProgress } from "./components/ButtonProgress.tsx";
import { useState } from "react";

interface Props {
  service: (data: FormValues) => void;
}

export const Form = ({ service }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setTimeout(() => service(data), 1000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[300px] grid mx-auto gap-3"
    >
      <InputForm
        control={control}
        type="email"
        label="Email"
        name="email"
        error={errors.email}
        placeholder="E-mail"
      />
      <InputForm
        control={control}
        error={errors.password}
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
      />
      {/* <p
        onClick={redirectToResetPassword}
        className="text-sm text-gray-500 mb-2 cursor-pointer hover:text-blue-600"
      >
        ¿Olvidaste tu contraseña?
      </p> */}
      <Button
        className="font-bold text-md"
        type="submit"
        color="primary"
        variant="shadow"
      >
        iniciar
      </Button>
    </form>
  );
};
