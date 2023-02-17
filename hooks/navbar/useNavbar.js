import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const useNavbar = () => {
  const { pathname } = useRouter();
  const [isTop, setIsTop] = useState(true);

  console.log({ pathname });

  useEffect(() => {
    if (pathname == "/" || pathname == "/tours/[slug]") {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsTop(false);
    }
  }, [pathname]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  return { isTop };
};

export default useNavbar;
