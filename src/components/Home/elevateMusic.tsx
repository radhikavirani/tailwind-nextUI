import Image from "next/image";
import logo1 from "@/assets/img/innerlogo1.svg";
import logo2 from "@/assets/img/innerlogo2.svg";
import logo3 from "@/assets/img/innerlogo3.svg";
import logo4 from "@/assets/img/innerlogo4.svg";

const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 }
];

const ElevateMusic = () => {
    return (
        <div className="sm:w-[73%] sm:px-0 px-5 w-full mx-auto lg:pt-[205px] lg:pb-[289px] sm:py-[100px] py-20 text-center">
            <h1 className="sm:text-[46px] text-2xl Gilroy_600 sm:mb-10 mb-6">Elevate your music</h1>
            <p className="sm:text-lg sm:leading-[39px] text-[#6F6F6F] lg:mb-[112px] mb-[50px]">Before , artists needed a label to get their music sold online. In 2006, we disrupted the industry by partnering directly with Digital Stores to allow any musician to sell their songs worldwide. Today we are the world's leading digital music aggregator. Choose an unlimited distribution plan, upload your music, and we'll do the rest. Your music will hit top digital stores, like Spotify and Apple Music, in no time.</p>
            <div className="flex flex-wrap lg:gap-[99px] sm:gap-10 gap-8 justify-center">
                {logos.map((img) =>
                    <Image src={img.logo} alt="logo_image" className="lg:w-[155px] w-[100px]" />
                )}
            </div>
        </div>
    );
};
export default ElevateMusic;