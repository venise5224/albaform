import ErrorText from "@/components/errorText/ErrorText";
import HourlyWageInput from "@/components/input/HourlyWageInput";
import { useFormContext } from "react-hook-form";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";
import { useState } from "react";

const HourlyWage = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<z.infer<typeof addFormSchema>>();
  const [hourlyWage, setHourlyWage] = useState<number>(
    watch("hourlyWage") || 0
  );

  const handleHourlyWageChange = (hourlyWage: string) => {
    setHourlyWage(Number(hourlyWage));
    setValue("hourlyWage", Number(hourlyWage));
  };

  return (
    <div className="relative flex flex-col space-y-4">
      <HourlyWageInput
        setHourlyWage={handleHourlyWageChange}
        initialHourlyWage={hourlyWage.toString()}
      />
      <ErrorText error={errors.hourlyWage}>
        {errors.hourlyWage?.message}
      </ErrorText>
    </div>
  );
};

export default HourlyWage;
