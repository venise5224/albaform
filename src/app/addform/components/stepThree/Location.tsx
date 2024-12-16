import LocationPicker from "@/components/picker/LocationPicker";

import ErrorText from "@/components/errorText/ErrorText";
import { useFormContext } from "react-hook-form";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { z } from "zod";
import { useEffect } from "react";
import { addressAtom } from "@/atoms/addressAtom";
import { useAtomValue } from "jotai";

const Location = () => {
  const {
    setValue,
    formState: { errors },
    watch,
  } = useFormContext<z.infer<typeof addFormSchema>>();
  const address = useAtomValue(addressAtom);
  const currentAddress = watch("location");

  useEffect(() => {
    if (address) {
      setValue("location", address);
    }
  }, [address, setValue]);

  const handleLocationChange = (newLocation: string) => {
    setValue("location", newLocation);
  };

  return (
    <div className="relative flex flex-col space-y-4">
      <LocationPicker initialLocation={currentAddress || ""} />
      <ErrorText error={errors.location}>{errors.location?.message}</ErrorText>
    </div>
  );
};

export default Location;
