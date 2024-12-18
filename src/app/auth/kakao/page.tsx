"use client"; // 클라이언트 컴포넌트로 설정

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const KakaoAuthPage = () => {
  const searchParams = useSearchParams();
  const authorizationCode = searchParams.get("code"); // URL에서 'code' 파라미터 추출

  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        // API Route로 GET 요청
        const res = await fetch("/api/auth/kakao", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error("Failed to authenticate with Kakao");
        }

        const data = await res.json();

        // 로그인 상태 저장
        localStorage.setItem("isLogin", "true");

        // 홈페이지로 리다이렉트
        window.location.href = "/";
      } catch (error) {
        console.error("Error during Kakao authentication:", error);
      }
    };

    if (authorizationCode) {
      handleAuthentication();
    } else {
      console.error("Authorization code is missing");
    }
  }, [authorizationCode]);

  return (
    <div>
      <h1>Authenticating...</h1>
      <p>Please wait while we log you in.</p>
    </div>
  );
};

export default KakaoAuthPage;
