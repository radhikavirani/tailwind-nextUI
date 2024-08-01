"use client";
import { CommonButton } from "@/components/ui/button";
import Image from "next/image";
import image from '@/assets/img/home.png';

const HeroSection = () => {
    return (
        <>
            <div className="bg-lightblack lg:flex block items-center">
                <div className="relative lg:h-[1047px] md:h-[600px] h-[440px] grid lg:content-center content-end w-full container mx-auto max-[1575px]:px-5">
                    <h1 className="lg:w-[960px] Gilroy_600 md:text-[56px] sm:text-[30px] text-2xl text-white mb-6 md:text-left text-center leading-normal">
                        <span className="TextGradient Gilroy_600">Release Your Music</span>
                        To World, Change The World.
                    </h1>
                    <p className="md:text-left text-center md:w-[673px] md:text-[19px] text-[#909090] mb-[52px]">Be independent, keep your royalties and rights.Free music distribution that brings your sound to the world.</p>
                    <CommonButton
                        className="lg:mb-0 mb-5 md:mx-0 mx-auto"
                        variant="blue"
                        sizeType="defaultSize"
                    >
                        Signup For Free
                    </CommonButton>
                </div>
                <div className="max-[1024px]:relative">
                    <Image
                        src={image}
                        alt="image"
                        className="min-[1024px]:absolute top-0 right-0"
                    />
                    <div className="min-[1024px]:hidden block w-full h-11 gradient absolute top-[-21px]"></div>
                </div>
            </div>
        </>
    );
};
export default HeroSection;