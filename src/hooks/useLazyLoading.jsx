import {useEffect, useState} from "react";

const once = f => {
  let canRun = true;
  return x => {
    if (!canRun) return;
    canRun = false;
    f(x);
  };
};

const useLazyLoading = (data, chunkSize) => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isJustMounted, setIsJustMounted] = useState(true);
  const isDone = page * chunkSize > data.length;

  const fetch = async () => {
    if (isLoading || isDone) return;

    setIsLoading(true);
    await new Promise(res => setTimeout(res, 450));
    setPage(x => x + 1);
    setIsLoading(false);
  };

  const fetchOnce = once(fetch);

  useEffect(() => {
    if (isJustMounted) {
      setIsJustMounted(false);
      return;
    }

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollTopMax =
        document.scrollingElement.scrollHeight -
        document.documentElement.clientHeight;


      if (scrollTop === scrollTopMax) fetchOnce();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isJustMounted, page]);

  const newData = data.slice(0, chunkSize * page);
  return [isLoading, newData];
};

export default useLazyLoading;
