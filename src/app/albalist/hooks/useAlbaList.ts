import { useState } from "react";
import { getAlbaList } from "../getAlbaList";
import { AlbarformData } from "@/types/alba";

interface UseAlbaListParams {
  orderBy: string;
  keyword: string;
  isPublic?: boolean;
  isRecruiting?: boolean;
  initialList: AlbarformData[];
  initialCursor: number | null;
  limit?: number;
}

interface UseAlbaListResult {
  albaList: AlbarformData[];
  cursor: number | null;
  fetchAlbaList: (isReset: boolean) => Promise<void>;
}

const useAlbaList = ({
  orderBy,
  keyword,
  isPublic,
  isRecruiting,
  initialList,
  initialCursor,
  limit = 6,
}: UseAlbaListParams): UseAlbaListResult => {
  const [albaList, setAlbaList] = useState(initialList);
  const [cursor, setCursor] = useState(initialCursor);

  const fetchAlbaList = async (isReset: boolean) => {
    try {
      const response = await getAlbaList({
        orderBy,
        limit,
        cursor: isReset ? 0 : cursor,
        keyword,
        isRecruiting,
      });

      const filteredData =
        isPublic !== undefined
          ? response.data.filter(
              (item: AlbarformData) => item.isPublic === isPublic
            )
          : response.data;

      setAlbaList((prevList) =>
        isReset
          ? filteredData
          : [
              ...prevList,
              ...filteredData.filter(
                (newList: AlbarformData) =>
                  !prevList.some((card) => card.id === newList.id)
              ),
            ]
      );

      setCursor(response.nextCursor);
    } catch (error) {
      console.error("알바폼 목록을 가져오는데 실패했습니다.", error);
      setAlbaList([]);
    }
  };

  return { albaList, cursor, fetchAlbaList };
};

export default useAlbaList;
