"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import useKakaoLoader from "./useKakaoLoader";
import { Map } from "react-kakao-maps-sdk";

const KaKaoMap = ({ location }: { location: string }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState({
    // 지도의 초기 위치
    center: { lat: 33.450701, lng: 126.570667 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });

  useKakaoLoader();

  // useEffect(() => {
  //   if (isScriptLoaded && window.kakao && window.kakao.maps) {
  //     const geocoder = new window.kakao.maps.services.Geocoder();
  //     geocoder.addressSearch(location, (result: any, status: any) => {
  //       if (status === window.kakao.maps.services.Status.OK) {
  //         const { y, x } = result[0];
  //         setCoordinates({ lat: parseFloat(y), lng: parseFloat(x) });
  //       } else {
  //         console.error("Geocoding 실패:", status);
  //       }
  //     });
  //   }
  // }, [isScriptLoaded, location]);

  return (
    <>
      {coordinates ? (
        <Map
          id="map"
          center={coordinates.center}
          style={{
            width: "100%",
            height: "210px",
            border: "1px solid #e9e9e9",
            borderRadius: "8px",
          }}
        >
          {/* 여기서 Kakao Maps 렌더링 가능 */}
        </Map>
      ) : (
        <div>지도를 로드 중입니다...</div>
      )}
    </>
  );
};

export default KaKaoMap;
