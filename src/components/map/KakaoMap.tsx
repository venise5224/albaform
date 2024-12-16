"use client";

import { useEffect, useRef } from "react";

const KakaoMap = ({ location }: { location: string }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      // Kakao Maps SDK가 로드된 후 동작
      window.kakao.maps.load(() => {
        if (mapRef.current) {
          // Geocoder를 사용하여 주소 -> 좌표 변환
          const geocoder = new window.kakao.maps.services.Geocoder();
          geocoder.addressSearch(location, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 지도 옵션을 변환된 좌표로 설정
              const mapOption = {
                center: coords,
                level: 3, // 지도 확대 레벨
              };

              // 지도 생성
              const map = new window.kakao.maps.Map(mapRef.current, mapOption);

              // 마커 생성
              new window.kakao.maps.Marker({
                position: coords,
                map: map,
              });
            } else {
              console.error("주소를 찾을 수 없습니다:", location);
            }
          });
        } else {
          console.error("mapRef가 유효하지 않습니다.");
        }
      });
    } else {
      console.error("Kakao Maps SDK가 로드되지 않았습니다.");
    }
  }, [location]);

  return (
    <div
      ref={mapRef}
      className="h-full w-full rounded-lg border border-line-200"
    />
  );
};

export default KakaoMap;
