import CheckBoxButton from "@/components/button/CheckBoxButton";
import { addFormSchema } from "@/schema/addForm/addFormSchema";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const IsPublicCheck = () => {
  const { setValue, watch } = useFormContext<z.infer<typeof addFormSchema>>();
  const [checked, setChecked] = useState({
    isPublic: watch("isPublic") ?? true,
  });
  console.log(watch("isPublic"));
  const handleCheckBoxToggle = (key: "isPublic") => {
    setChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    setValue("isPublic", checked.isPublic);
  }, [checked.isPublic, setValue]);

  return (
    <div className="relative flex flex-col space-y-4">
      <label className="text-md font-medium text-black-400 pc:text-xl">
        공개 설정
        <span className="text-orange-300"> *</span>
      </label>
      <CheckBoxButton
        name="비공개"
        onChange={() => handleCheckBoxToggle("isPublic")}
        checked={!checked.isPublic}
      />
    </div>
  );
};

export default IsPublicCheck;
