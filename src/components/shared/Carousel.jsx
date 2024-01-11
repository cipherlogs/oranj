import {useState} from "react";
import useSwipe from "@hooks/useSwipe";
import useBreakPoint from "@hooks/useBreakPoint";

import {IconButton, Box} from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const add = (x) => (y) => x + y;
const inc = add(1);
const dec = add(-1);

const cardsPerScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

const when = (bool) => (f) => (bool ? f : () => {});

const Carousel = ({children, height}) => {
  const [currPage, setCurrPage] = useState(0);
  const cardsPerPage = cardsPerScreen[useBreakPoint()];
  const cards = children;
  const go = (dir) => () => setCurrPage(dir === "right" ? inc : dec);
  const next = go("right");
  const prev = go("left");
  const canGoPrev = currPage > 0;
  const canGoNext = cards.length - currPage > cardsPerPage;

  const [handleTouchStart, handleTouchEnd] = useSwipe(
    when(canGoNext)(next),
    when(canGoPrev)(prev),
  );

  const styles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: height ?? "14rem",
    gap: 2,
  };

  return (
    <Box
      sx={styles}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <IconButton onClick={prev} disabled={!canGoPrev}>
        <NavigateBeforeIcon />
      </IconButton>

      {cards.slice(currPage, currPage + cardsPerPage)}

      <IconButton onClick={next} disabled={!canGoNext}>
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
