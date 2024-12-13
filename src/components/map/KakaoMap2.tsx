"use client";

import { useEffect, useRef } from "react";

interface KakaoMapProps {
  location: string;
  onLocationFound?: (address: string) => void;
  clickEnabled?: boolean;
}

const KakaoMap = ({
  location,
  onLocationFound,
  clickEnabled = false,
}: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<any>(null); // 마커를 참조하기 위한 ref

  useEffect(() => {
    const initializeMap = () => {
      if (window.kakao && window.kakao.maps) {
        // 지도 초기화
        const kakaoMap = new window.kakao.maps.Map(mapRef.current!, {
          center: new window.kakao.maps.LatLng(37.5665, 126.978), // 기본 중심 좌표 (서울)
          level: 3,
        });

        // Geocoder 생성
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 검색된 위치로 지도 이동
        if (location) {
          geocoder.addressSearch(location, (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK && result[0]) {
              const coords = new window.kakao.maps.LatLng(
                parseFloat(result[0].y),
                parseFloat(result[0].x)
              );

              // 지도 이동
              kakaoMap.setCenter(coords);

              // 마커 생성 또는 기존 마커 위치 변경
              if (markerRef.current) {
                markerRef.current.setPosition(coords); // 기존 마커 위치 업데이트
              } else {
                // 마커가 없다면 새로 생성
                markerRef.current = new window.kakao.maps.Marker({
                  map: kakaoMap,
                  position: coords,
                });
              }

              // 주소 정보 추출
              const address = result[0].address_name;

              if (onLocationFound) {
                onLocationFound(address);
              }
            } else {
              console.error("주소 검색 실패:", location);
            }
          });
        }

        // 클릭 이벤트 활성화
        if (clickEnabled) {
          window.kakao.maps.event.addListener(
            kakaoMap,
            "click",
            (mouseEvent: any) => {
              const latLng = mouseEvent.latLng;
              const lat = latLng.getLat();
              const lng = latLng.getLng();

              // 좌표 -> 주소 변환
              geocoder.coord2Address(lng, lat, (result: any, status: any) => {
                if (status === window.kakao.maps.services.Status.OK) {
                  const address = result[0]?.address?.address_name || "";

                  // 마커 위치 이동
                  if (markerRef.current) {
                    markerRef.current.setPosition(latLng); // 기존 마커 위치 업데이트
                  } else {
                    // 마커가 없다면 새로 생성
                    markerRef.current = new window.kakao.maps.Marker({
                      map: kakaoMap,
                      position: latLng,
                    });
                  }

                  // 주소 정보 추출
                  if (onLocationFound) {
                    onLocationFound(address);
                  }
                } else {
                  console.error("좌표를 주소로 변환할 수 없습니다.");
                }
              });
            }
          );
        }
      } else {
        console.error("Kakao Maps SDK를 로드할 수 없습니다.");
      }
    };

    window.kakao?.maps.load(initializeMap);
  }, [location, clickEnabled, onLocationFound]);

  return (
    <div
      id="map"
      ref={mapRef}
      className="relative h-full w-full rounded-lg border border-line-200"
    />
  );
};

export default KakaoMap;
