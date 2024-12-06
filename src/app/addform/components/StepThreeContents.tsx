import { FieldErrors, UseFormRegister } from "react-hook-form";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";

interface StepThreeContentsProps {
  register: UseFormRegister<z.infer<typeof addFormSchema>>;
  errors: FieldErrors<z.infer<typeof addFormSchema>>;
}

const StepThreeContents = ({ register, errors }: StepThreeContentsProps) => {
  return <div>StepThreeContents</div>;
};

export default StepThreeContents;
