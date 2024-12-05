import { FieldErrors, UseFormRegister } from "react-hook-form";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";

interface StepTwoContentsProps {
  register: UseFormRegister<z.infer<typeof addFormSchema>>;
  errors: FieldErrors<z.infer<typeof addFormSchema>>;
}

const StepTwoContents = ({ register, errors }: StepTwoContentsProps) => {
  return <div>StepTwoContents</div>;
};

export default StepTwoContents;
