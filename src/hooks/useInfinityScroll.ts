import { ArticleData } from "@/types/article";
import { useState, useEffect, useRef, useCallback } from "react";

interface FetchMoreDataProps {
  articles: ArticleData[];
  nextCursor: number | null;
  fetchMoreData: {
    data: ArticleData[];
    nextCursor: number | null;
  };
}

const useInfiniteScroll = <T>(
  fetchMoreData: (cursor: number | null) => Promise<FetchMoreDataProps<T>>,
  initialData: T[],
  initialCursor: string | null
) => {
  const [data, setData] = useState<T[]>(initialData);
  const [nextCursor, setNextCursor] = useState<string | null>(initialCursor);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(!!initialCursor);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (!hasMore || loading || !nextCursor) return;

    setLoading(true);
    try {
      const { data: newData, nextCursor: newCursor } =
        await fetchMoreData(newCursor);
      setData((prev) => [...prev, ...newData]);
      setNextCursor(newCursor);
      setHasMore(!!newCursor);
    } catch (error) {
      console.error("Failed to fetch more data:", error);
    } finally {
      setLoading(false);
    }
  }, [fetchMoreData, hasMore, loading, nextCursor]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMore();
        }
      },
      { rootMargin: "100px" } // 여유 공간 설정
    );

    const currentObserver = observerRef.current;
    if (currentObserver) observer.observe(currentObserver);

    return () => {
      if (currentObserver) observer.unobserve(currentObserver);
    };
  }, [loadMore, hasMore, loading]);

  return { data, loading, hasMore, observerRef };
};

export default useInfiniteScroll;
