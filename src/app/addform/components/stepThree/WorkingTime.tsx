import TimePicker from "@/components/picker/TimePicker";
import ErrorText from "@/components/errorText/ErrorText";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { addFormSchema } from "@/schema/addForm/addFormSchema";

const WorkingTime = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<z.infer<typeof addFormSchema>>();
  const [workTime, setWorkTime] = useState<[string, string]>([
    watch("workStartTime") || "",
    watch("workEndTime") || "",
  ]);

  useEffect(() => {
    if (workTime[0] && workTime[1]) {
      setValue("workStartTime", workTime[0]);
      setValue("workEndTime", workTime[1]);
    }
  }, [workTime, setValue]);

  return (
    <div className="relative flex flex-col space-y-4">
      <TimePicker setTime={setWorkTime} initialTime={workTime} />
      <ErrorText error={errors.workStartTime || errors.workEndTime}>
        {errors.workStartTime?.message || errors.workEndTime?.message}
      </ErrorText>
    </div>
  );
};

export default WorkingTime;
