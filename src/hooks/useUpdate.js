import { useState } from "react";

export function useUpdate() {
  const [update, setUpdate] = useState(false);

  const Refresh = () => {
    setUpdate(!update);
  };

  return { update, Refresh };
}
