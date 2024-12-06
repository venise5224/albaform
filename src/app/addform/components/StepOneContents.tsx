import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { z } from "zod";

interface StepOneContentsProps {
  register: UseFormRegister<z.infer<typeof addFormSchema>>;
  errors: FieldErrors<z.infer<typeof addFormSchema>>;
}

const StepOneContents = ({ register, errors }: StepOneContentsProps) => {
  return <div>StepOneContents</div>;
};

export default StepOneContents;
