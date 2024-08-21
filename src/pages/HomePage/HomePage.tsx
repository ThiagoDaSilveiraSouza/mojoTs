import { useRef } from "react";
import {
  ChatWithUs,
  HowWeDo,
  MainBanner,
  WhatWeDo,
  WhoWheAre,
} from "./components";
import { useScrollDirection } from "../../hooks";

export const HomePage = () => {
  const mainRef = useRef(null);
  useScrollDirection({ elementRef: mainRef });

  return (
    <main className="page-main" ref={mainRef}>
      <MainBanner />
      <WhoWheAre />
      <WhatWeDo />
      <HowWeDo />
      <ChatWithUs />
    </main>
  );
};
