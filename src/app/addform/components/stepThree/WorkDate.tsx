import WeekPicker from "@/components/picker/WeekPicker";
import { useFormContext } from "react-hook-form";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";
import { useEffect, useState } from "react";

const WorkDate = () => {
  const { setValue, watch } = useFormContext<z.infer<typeof addFormSchema>>();
  const [weeklyWorkDays, setWeeklyWorkDays] = useState<string[]>(
    watch("workDays") || []
  );
  const [checked, setChecked] = useState({
    isNegotiableWorkDays: watch("isNegotiableWorkDays") || false,
  });

  const handleCheckBoxToggle = (key: "isNegotiableWorkDays") => {
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  useEffect(() => {
    setValue("workDays", weeklyWorkDays);
    setValue("isNegotiableWorkDays", checked.isNegotiableWorkDays);
  }, [weeklyWorkDays, checked.isNegotiableWorkDays, setValue]);

  return (
    <div className="relative flex flex-col space-y-4">
      <WeekPicker
        setWeeklyWorkDays={setWeeklyWorkDays}
        initialWeeklyWorkDays={weeklyWorkDays}
        setIsNegotiable={handleCheckBoxToggle}
        checked={checked.isNegotiableWorkDays}
      />
    </div>
  );
};

export default WorkDate;
