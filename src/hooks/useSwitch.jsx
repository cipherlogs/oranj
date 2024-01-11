import { useState } from "react";

const useSwitch = (initialValue = false) => {
  const [on, setOn] = useState(initialValue);

  return {
    on,
    handleSwitch: (_) => setOn(!on),
  };
};

export default useSwitch;
