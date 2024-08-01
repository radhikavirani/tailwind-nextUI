import Layouts from "@/layouts";
import HeroSection from "@/components/Release Music/heroSection";
import Features from "@/components/Release Music/features";
import MusicDestribution from "@/components/Release Music/musicDestribution";
import Revenue from "@/components/Release Music/revenue";

const ReleaseMusic = () => {
    return (
        <Layouts>
            <div>
                <HeroSection />
                <Features/>
                <MusicDestribution/>
                <Revenue/>
            </div>
        </Layouts>
    );
};
export default ReleaseMusic;