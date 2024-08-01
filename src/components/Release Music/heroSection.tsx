import Image from "next/image";
import PersonOne from "@/assets/img/release.png";
import PersonTwo from "@/assets/img/release2.png";
import { IoMdPlay } from "react-icons/io";
import image from '@/assets/img/releasePage.png';
import { CommonButton } from "../ui/button";

const HeroSection = () => {
    return (
        <div className="relative max-[1575px]:px-5 lg:bg-transparent bg-lightblack">
            <div className="lg:block hidden absolute xl:h-[1047px] lg:h-[685px] h-auto 2xl:w-[46%] w-[53%] top-[175px] right-0 bg-lightblack z-[-1] ml-auto"></div>
            <div className="container mx-auto lg:flex justify-between items-center">
                <div className="lg:w-[40%] w-full lg:pt- pt-[130px] lg:text-left text-center">
                    <h1 className="TitleGradient leading-normal 2xl:text-[56px] xl:text-[48px] sm:text-[40px] text-xl Gilroy_600 2xl:w-[90%] w-full mb-2.5">Music Distribution
                        <span className="lg:text-lightblack text-white Gilroy_600 ml-2">to the world</span>
                    </h1>
                    <p className="sm:text-lg text-base sm:leading-[34px] leading-[28px] text-[#909090] sm:mb-5 mb-[28px]">Digital music distribution that brings your sound to the world.Release your music to Spotify, Apple Music, Amazon, Deezer, Instagram, Tik Tok, and over 200 platforms worldwide.</p>
                    <CommonButton className="lg:mb-0 mb-5 md:mx-0 mx-auto" variant="blue" sizeType="defaultSize">Signup For Free</CommonButton>
                </div>
                <div className="lg:block hidden">
                    <div className="flex xl:justify-start justify-end">
                        <div className="xl:h-[524px] h-[368px] xl:w-[50%] w-[38%] bg-[#D7ECFF] rounded-b-full">
                            <Image src={PersonOne} alt="PersonOne" />
                        </div>
                        <div className="xl:h-[470px] h-[311px] xl:w-[50%] w-[38%] border-x border-b border-[#595959] rounded-b-full mx-5"></div>
                    </div>
                    <div className="flex xl:justify-start justify-end xl:mr-0 mr-3">
                        <div className="xl:h-[515px] h-[356px] xl:w-[50%] w-[38%] border-x border-t border-[#595959] rounded-t-full xl:mt-0 mt-3">
                            <div className="m-[26px] xl:h-[246px] h-[155px] xl:w-[246px] w-[155px] rounded-full bg-primary flex justify-center items-center text-white pl-3">
                                <IoMdPlay className="xl:h-[78px] w-[78px] h-[60px] w-[60px]" />
                            </div>
                        </div>
                        <div className="relative -top-10 xl:h-[524px] h-[356px] xl:w-[50%] w-[38%] bg-[#FDF3FF] rounded-t-full xl:ml-10 ml-8">
                            <Image src={PersonTwo} alt="PersonOne" />
                        </div>
                    </div>
                </div>
                <div className="max-[1024px]:relative sm:hidden block">
                    <Image
                        src={image}
                        alt="image"
                        className="mx-auto"
                    />
                    <div className="w-full h-11 gradient absolute top-[-21px]"></div>
                </div>
            </div>
        </div>
    );
};
export default HeroSection;

























123; 