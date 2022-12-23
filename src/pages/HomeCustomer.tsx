import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import Lifestyle from "../components/Lifestyle/Lifestyle";
import Questions from "../components/Questions/Questions";
const lifestyle1 = require("../images/lifestyle1.jpg");
const lifestyle2 = require("../images/lifestyle2.jpg");

const HomeCustomer = () => {
  return (
    <>
      <Hero />
      <CTA />
      <Lifestyle img={lifestyle1} position="center">
        <h2>GoLoRewards is fast, simple, secure, and FREE.</h2>
      </Lifestyle>
      <Questions />
      <Lifestyle img={lifestyle2} position="-200px 300px">
        <h2>Enjoy getting rewards at all your favorite restaurants!</h2>
      </Lifestyle>
    </>
  );
};

export default HomeCustomer;
