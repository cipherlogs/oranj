import {useState} from "react";

const useSwipe = (next, prev) => {
  const [startX, setStartX] = useState(undefined);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    return diff > 0 ? next() : prev();
  };

  return [handleTouchStart, handleTouchEnd];
};

export default useSwipe;
