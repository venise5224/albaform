import { useEffect, useRef } from "react";

interface UseInfiniteScrollProps {
  fetchMoreData: () => void;
}

const useInfinityScroll = ({ fetchMoreData }: UseInfiniteScrollProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          fetchMoreData();
        }
      },
      { threshold: 0.5 }
    );

    const target = observerRef.current;
    observer.observe(target);

    return () => {
      observer.unobserve(target);
      observer.disconnect();
    };
  }, [fetchMoreData]);

  return observerRef;
};

export default useInfinityScroll;
