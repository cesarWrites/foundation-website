import Hero from "./components/HomepageSections/Hero";
import MissionVisionWork from "./components/HomepageSections/MissionVisioWork";
import Testimonial from "./components/HomepageSections/Testimonial";
import ThePlan from "./components/HomepageSections/ThePlan";
import WhatWeDo from "./components/HomepageSections/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionVisionWork />
      <ThePlan />
      <Testimonial />
      {/* <WhatWeDo /> */}
    </>
  );
}

