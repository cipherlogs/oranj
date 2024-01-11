import { useState } from "react";

const useToggle = () => {
  const [el, setEl] = useState(undefined);

  return {
    el,
    open: Boolean(el),
    handleClick: (e) => setEl(e.currentTarget),
    handleClose: (_) => setEl(undefined),
  };
};

export default useToggle;
