import LocationPicker from "@/components/picker/LocationPicker";

import ErrorText from "@/components/errorText/ErrorText";
import { useFormContext } from "react-hook-form";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";
import { useState } from "react";

const Location = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<z.infer<typeof addFormSchema>>();
  const [location, setLocation] = useState<string>(watch("location") || "");
  // Location은 위치 설정 후에는 LocationPicker로 보내서 initialLocation으로 설정해야 함.

  const handleLocationChange = (location: string) => {
    setLocation(location);
    setValue("location", location);
  };

  return (
    <div className="relative flex flex-col space-y-4">
      <LocationPicker initialLocation={location} />
      <ErrorText error={errors.location}>{errors.location?.message}</ErrorText>
    </div>
  );
};

export default Location;
