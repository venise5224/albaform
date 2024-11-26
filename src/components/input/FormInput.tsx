import { cls } from "@/utils/DynamicTailwind";
import { HTMLInputTypeAttribute } from "react";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  register: UseFormRegister<T>;
  error?: FieldErrors<T>;
  className?: string;
  name: Path<T>;
  id?: string;
}

const FormInput = <T extends FieldValues>({
  type,
  placeholder,
  register,
  error,
  className,
  name,
  id,
  ...rest
}: FormInputProps<T>) => {
  return (
    <input
      id={id}
      {...register(name)}
      type={type}
      name={name}
      className={cls(
        "form-input-base",
        error ? "border-red" : "",
        className ? className : ""
      )}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default FormInput;
