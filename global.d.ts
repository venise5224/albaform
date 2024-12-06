// global.d.ts
export {};

declare global {
  interface Window {
    kakao: any; // Kakao Maps API 타입 정의 (any로 설정하거나 정확한 타입 지정 가능)
  }
}
