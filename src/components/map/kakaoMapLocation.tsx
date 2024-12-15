"use client";

import { useEffect, useRef, useState } from "react";

interface KakaoMapProps {
  location: string;
  onLocationFound: (address: string) => void; // 주소 변경 콜백
}

const KakaoMapLocation = ({ location, onLocationFound }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null); // 카카오맵 인스턴스 저장
  const markerRef = useRef<any>(null); // 마커 인스턴스 저장 (useRef로 관리)

  // 지도 초기화
  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      // Kakao Maps SDK 로드 후 실행
      window.kakao.maps.load(() => {
        if (mapRef.current) {
          const mapOption = {
            center: new window.kakao.maps.LatLng(37.5665, 126.978), // 초기 좌표 (서울)
            level: 3, // 지도 확대 레벨
          };

          const newMap = new window.kakao.maps.Map(mapRef.current, mapOption);
          setMap(newMap);

          // 마커 초기화
          const initialMarker = new window.kakao.maps.Marker({
            position: newMap.getCenter(), // 초기 마커 위치
            map: newMap,
          });
          markerRef.current = initialMarker;

          // 클릭 이벤트 등록
          window.kakao.maps.event.addListener(
            newMap,
            "click",
            (mouseEvent: any) => {
              const coords = mouseEvent.latLng; // 클릭한 좌표
              updateMapCenterAndMarker(coords);
              fetchAddressFromCoords(coords);
            }
          );
        }
      });
    } else {
      console.error("Kakao Maps SDK가 로드되지 않았습니다.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 검색 위치 업데이트
  useEffect(() => {
    if (map) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(location, (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
          updateMapCenterAndMarker(coords);
          fetchAddressFromCoords(coords);
        } else {
          console.error("주소를 찾을 수 없습니다:", location);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, map]);

  // 맵 중심 및 마커 업데이트
  const updateMapCenterAndMarker = (coords: any) => {
    if (map) {
      map.setCenter(coords); // 맵 중심 변경
    }

    if (markerRef.current) {
      markerRef.current.setPosition(coords); // 마커 위치 변경
    } else if (map) {
      // 마커가 없는 경우 새로 생성
      const newMarker = new window.kakao.maps.Marker({
        position: coords,
        map: map,
      });
      markerRef.current = newMarker;
    }
  };

  // 좌표로 주소 가져오기
  const fetchAddressFromCoords = (coords: any) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.coord2Address(
      coords.getLng(),
      coords.getLat(),
      (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const address = result[0].address.address_name; // 변환된 주소
          onLocationFound(address); // 주소 콜백 호출
        } else {
          console.error("좌표로 주소를 변환할 수 없습니다.");
        }
      }
    );
  };

  return (
    <div
      ref={mapRef}
      className="h-full w-full rounded-lg border border-line-200"
    />
  );
};

export default KakaoMapLocation;
