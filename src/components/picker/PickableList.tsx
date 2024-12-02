import selectRequirementsByLabel from "@/utils/selectRequirementsByLabel";

const PickableList = ({
  label,
  setValue,
  setIsOpen,
}: {
  label: "모집인원" | "성별" | "학력" | "연령" | "우대사항";
  setValue: (value: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  let list = selectRequirementsByLabel(label);

  const handleClick = (el: string) => {
    setValue(el);
    setIsOpen(false);
  };

  return (
    <ul className="picker-container">
      {list?.map((el) => (
        <li
          key={el}
          value={el}
          className="hover:text-orange-100"
          onClick={() => handleClick(el)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export default PickableList;
