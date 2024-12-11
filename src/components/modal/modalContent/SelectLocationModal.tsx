import SolidButton from "@/components/button/SolidButton";
import ModalContainer from "../modalContainer/ModalContainer";
import Image from "next/image";
import { useModal } from "@/hooks/useModal";
import useViewPort from "@/hooks/useViewport";
import KakaoMap from "@/components/map/KakaoMap";
import SearchInput from "@/components/input/SearchInput";

const SelectLocationModal = () => {
  const { closeModal } = useModal();
  const viewPort = useViewPort();

  const handleSubmit = () => {
    //카카오맵에서 선택한 위치 게시
  };

  const location = "서울시 양천구 신월동";

  return (
    <ModalContainer>
      <div className="flex flex-col items-center pb-[8px]">
        <strong className="text-2lg font-semibold text-black-400 pc:text-[32px] pc:leading-[46px]">
          근무지역 선택
        </strong>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col pc:mt-10">
          <div className="mt-6 flex flex-col gap-[11px] pc:mt-[30px] pc:gap-3">
            <div className="flex gap-3">
              <SearchInput placeholder="근무지를 입력해주세요" />
              <div className="w-[80px]">
                <SolidButton style="orange300">검색</SolidButton>
              </div>
            </div>
            <div className="mt-2 h-[280px] w-full pc:mt-12 pc:h-[380px] pc:px-0">
              <KakaoMap location={location} />
            </div>
            <div className="flex gap-3">
              <SolidButton
                size={viewPort === "pc" ? "large" : "small"}
                style="gray100"
                type="button"
                onClick={() => {
                  closeModal();
                }}
              >
                취소
              </SolidButton>

              <SolidButton
                size={viewPort === "pc" ? "large" : "small"}
                style="orange300"
                type="submit"
                onClick={() => {
                  closeModal();
                }}
              >
                게시하기
              </SolidButton>
            </div>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default SelectLocationModal;

const buttmonContainerStyle = "h-[58px] w-[158px] pc:h-[72px] pc:w-[314px]";
