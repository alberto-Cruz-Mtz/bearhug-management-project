import { Input } from "@heroui/input";
import { Control, Controller, FieldError } from "react-hook-form";
import { FormValues } from "../../auth/components/form/model/form_schema.ts";

interface Props {
  type: string;
  label: string;
  name: keyof FormValues;
  placeholder: string;
  min?: number;
  error?: FieldError;
  control: Control<FormValues>;
}

export default function InputForm({
  type,
  label,
  name,
  placeholder,
  error,
  control,
}: Props) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            isInvalid={!!error}
            {...field}
            type={type}
            labelPlacement="outside"
            radius="md"
            label={label}
            placeholder={placeholder}
            classNames={{
              inputWrapper: "border-2 border-blue-600 bg-transparent",
              innerWrapper: "bg-transparent",
            }}
          />
        )}
      />
      {error && <p className="text-sm mt-2 text-pink-600">{error.message}</p>}
    </div>
  );
}
