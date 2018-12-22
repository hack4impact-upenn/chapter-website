import React from "react";
import Link from "next/link";

import HomeBanner from "../components/homepage/homeBanner";
import OurWorkSection from "../components/homepage/ourWork";
import InvolveSection from "../components/homepage/involveSection";

const Home = () => (
  <div>
    <HomeBanner />
    <OurWorkSection />
    <InvolveSection />
  </div>
);

export default Home;
