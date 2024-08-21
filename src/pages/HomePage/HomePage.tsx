import { ChatWithUs, HowWeDo, MainBanner, WhatWeDo, WhoWheAre } from "./components";

export const HomePage = () => {
  return (
    <main>
      <MainBanner />
      <WhoWheAre />
      <WhatWeDo />
      <HowWeDo />
      <ChatWithUs />
    </main>
  );
};
