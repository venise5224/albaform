import { useState } from "react";
import ModalContainer from "../modalContainer/ModalContainer";

const progressList = [
  { name: "거절" },
  { name: "면접 대기" },
  { name: "면접 완료" },
  { name: "채용 완료" },
];

const SelectProgressModal = () => {
  const [selected, setSelected] = useState(false);

  return (
    <ModalContainer>
      <div className="flex flex-col items-center pb-[8px]">
        <strong className="modal-title mt-0">진행상태 선택</strong>
        <p className="modal-sub-title">현재 진행상태를 알려주세요.</p>

        <ul className="mt-[24px] flex w-full flex-col gap-[10px]">
          {progressList.map((progress) => (
            <li key={progress.name}>
              <label className="flex justify-between rounded-[8px] border border-line-100 p-[14px] text-md font-medium">
                {progress.name}
                <input
                  onChange={() => setSelected(!selected)}
                  type="radio"
                  className="w-[20px]"
                />
              </label>
            </li>
          ))}
        </ul>

        <div className="mt-[30px] flex gap-[11px]">
          <button className="h-[58px] w-[158px] border">취소</button>
          <button className="h-[58px] w-[158px] border">선택하기</button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default SelectProgressModal;
