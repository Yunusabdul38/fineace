import { useEffect } from "react";

export function useView() {
   //effect to makes component view start from the top of the page
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

}