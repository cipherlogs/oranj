import {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const breakpoints = ["xs", "sm", "md", "lg", "xl"];
const toMediaQuery = x => useMediaQuery(theme => theme.breakpoints.only(x));

const useBreakPoint = () => {
  const mediaQueries = breakpoints.map(toMediaQuery);
  return breakpoints[mediaQueries.indexOf(true)];
};

export default useBreakPoint;
