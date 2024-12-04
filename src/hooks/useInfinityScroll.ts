import { ArticleData } from "@/types/article";
import { useState, useEffect, useRef } from "react";

const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState();
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
        }
      },
      { rootMargin: "100px" } // 여유 공간 설정
    );

    const currentObserver = observerRef.current;
    if (currentObserver) observer.observe(currentObserver);

    return () => {
      if (currentObserver) observer.unobserve(currentObserver);
    };
  }, [hasMore, loading]);

  return { loading, hasMore, observerRef };
};

export default useInfiniteScroll;
