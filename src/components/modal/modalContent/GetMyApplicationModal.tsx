import ModalContainer from "../modalContainer/ModalContainer";

const GetMyApplicationModal = () => {
  return (
    <ModalContainer>
      <div className="flex flex-col pb-[8px]">
        <strong className="modal-title mt-0">내 지원 내역</strong>
        <div className="modal-sub-title mt-[24px]">
          <p>
            지원일시{" "}
            <span className="ml-[8px] text-md font-medium text-black-200">
              {"2024년 05월 29일 10:15"}
            </span>
          </p>
          <p className="mt-[6px]">
            진행 상태
            <span className="ml-[8px] rounded-[4px] bg-orange-50 px-[8px] py-[4px] text-[12px] font-semibold leading-[20px] text-orange-300">
              {"면접대기"}
            </span>
          </p>
        </div>

        <form className="mt-[24px] flex flex-col">
          <label htmlFor="name" className={labelStyle}>
            이름
          </label>
          <input id="name" className={inputStyle} placeholder="홍길동" />
          <label htmlFor="phoneNumber" className={`${labelStyle} mt-[16px]`}>
            전화번호
          </label>
          <input
            id="phoneNumber"
            className={inputStyle}
            placeholder="010-1234-5678"
          />
          <label htmlFor="password" className={`${labelStyle} mt-[16px]`}>
            비밀번호
          </label>
          <input id="password" className={inputStyle} placeholder="********" />
        </form>

        <button className="mt-[24px] w-[327px] rounded-[8px] bg-orange-300 p-[16px] text-white">
          지원 내역 상세 보기
        </button>
      </div>
    </ModalContainer>
  );
};

export default GetMyApplicationModal;

const labelStyle = "text-md font-regular text-black-400 w-fit cursor-pointer";
const inputStyle =
  "mt-[8px] rounded-[8px] bg-background-200 p-[14px] placeholder:text-md placeholder:font-regular focus:outline-orange-300";
