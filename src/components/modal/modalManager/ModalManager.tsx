"use client";

import { useAtomValue } from "jotai";
import { modalAtom } from "@/atoms/modalAtomStore";
import CloseAlbaformModal from "../modalContent/ClosedAlbaformModal";
import DeleteAlbaformModal from "../modalContent/DeleteAlbaformModal";
import NewWriteformModal from "../modalContent/NewWriteformModal";
import GetMyApplicationModal from "../modalContent/GetMyApplicationModal";
import MyApplicationModal from "../modalContent/MyApplicationModal";
import SelectProgressModal from "../modalContent/SelectProgressModal";
import ChangePasswordModal from "../modalContent/ChangePasswordModal";
import ChangeMyInfoModal from "../modalContent/ChangeMyInfoModal";
import ChangeCEOInfoModal from "../modalContent/ChangeCEOInfoModal";
import ShareSNSModal from "../modalContent/ShareSNSModal";
import SelectLocationModal from "../modalContent/SelectLocationModal";
import ApplicantListModal from "../modalContent/ApplicantListModal";

const ModalManager = () => {
  const modalTypes = useAtomValue(modalAtom);

  if (!modalTypes.length) return null;

  return (
    <>
      {modalTypes.map((modalType, index) => {
        switch (modalType) {
          case "ClosedAlbaformModal":
            return <CloseAlbaformModal key={index} />;
          case "DeleteAlbaformModal":
            return <DeleteAlbaformModal key={index} />;
          case "NewWriteformModal":
            return <NewWriteformModal key={index} />;
          case "GetMyApplicationModal":
            return <GetMyApplicationModal key={index} />;
          case "MyApplicationModal":
            return <MyApplicationModal key={index} />;
          case "SelectProgressModal":
            return <SelectProgressModal key={index} />;
          case "ChangePasswordModal":
            return <ChangePasswordModal key={index} />;
          case "ChangeMyInfoModal":
            return <ChangeMyInfoModal key={index} />;
          case "ChangeCEOInfoModal":
            return <ChangeCEOInfoModal key={index} />;
          case "ShareSNSModal":
            return <ShareSNSModal key={index} />;
          case "SelectLocationModal":
            return <SelectLocationModal key={index} />;
          case "ApplicantListModal":
            return <ApplicantListModal key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default ModalManager;
