import Banner from "../components/Banner/Banner";
import Branding from "../components/Branding/Branding";
import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import Questions from "../components/Questions/Questions";

const Home = () => {
  return (
    <>
      <Hero />
      <CTA />
      <Banner />
      <Branding />
      <Questions />
    </>
  );
};

export default Home;
