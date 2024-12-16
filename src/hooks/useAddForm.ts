import { zodResolver } from "@hookform/resolvers/zod";

import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCallback } from "react";

export const useAddForm = () => {
  const methods = useForm<z.infer<typeof addFormSchema>>({
    resolver: zodResolver(addFormSchema),
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      recruitmentStartDate: "",
      recruitmentEndDate: "",
      imageUrls: [],
      numberOfPositions: 0,
      gender: "",
      education: "",
      age: "",
      preferred: "",
      location: "",
      workStartDate: "",
      workEndDate: "",
      workStartTime: "",
      workEndTime: "",
      workDays: [],
      isNegotiableWorkDays: false,
      hourlyWage: 0,
      isPublic: false,
    },
  });

  const loadAllTempData = useCallback(() => {
    const TempDataArr = ["stepOne", "stepTwo", "stepThree"];

    TempDataArr.forEach((step) => {
      const localStorageData = localStorage.getItem(step);

      if (localStorageData) {
        const parsedData = JSON.parse(localStorageData);

        Object.entries(parsedData).forEach(([key, value]) => {
          if (key !== "tempImage") {
            methods.setValue(
              key as keyof z.infer<typeof addFormSchema>,
              value as z.infer<typeof addFormSchema>[keyof z.infer<
                typeof addFormSchema
              >]
            );
          }
        });
      }
    });
  }, [methods]);

  return { methods, loadAllTempData };
};
