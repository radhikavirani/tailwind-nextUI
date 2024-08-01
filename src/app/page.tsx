import Layouts from "@/layouts";
import HeroSection from "@/components/Home/heroSection";
import ElevateMusic from "@/components/Home/elevateMusic";
import Journey from "@/components/Home/journey";
import FirstOriginality from "@/components/Home/first_originality";
import SecondOriginality from "@/components/Home/second_originality";
import Revenue from "@/components/Home/revenue";

const Home = () => {
  return (
    <Layouts>
      <div>
        <HeroSection /> 
        <ElevateMusic/>
        <Journey/>
        <FirstOriginality/>
        <SecondOriginality/>
        <Revenue/>
      </div>
    </Layouts>
  );
};
export default Home;