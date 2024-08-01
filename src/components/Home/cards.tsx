import Image from "next/image";
import { CommonButton } from "../ui/button";
import { PiPlay } from "react-icons/pi";
import { Slider } from "@nextui-org/react";
import card1 from '@/assets/img/card1.png';
import card2 from '@/assets/img/card2.png';
import card3 from '@/assets/img/card3.png';

const Cards = () => {
    return (
        <div className="bg-primary">
            <div className="container mx-auto sm:pt-[77px] py-[55px] sm:pb-[159px] xl:flex justify-between items-end max-[1575px]:px-5">
                <div className="flex flex-col sm:gap-10 gap-[26px] xl:mb-0 mb-16">
                    <p className="2xl:w-[609px] xl:w-[430px] w-auto xl:text-left text-center text-[#B6C5FF] text-lg leading-[36px] Gilroy_600">We’re here to break the mold of traditional music distribution companies, supporting independent artists and doing business in a way that is all about the artist.</p>
                    <CommonButton variant="white" sizeType="defaultSize" className="xl:mx-0 mx-auto">Release Now!</CommonButton>
                </div>
                <div className="sm:block hidden relative md:w-[667px] w-full xl:mx-0 mx-auto pl-[30px]">
                    <div className="relative z-10 w-fit mx-auto">
                        <Image src={card1} alt="card1" />
                        <div className="absolute h-[38px] w-[95%] backdrop-blur-sm bg-black/30 bottom-1.5 left-1.5 rounded-[10px] p-2 flex items-center">
                            <div className="min-h-6 min-w-6 rounded-full bg-white text-black flex justify-center items-center mr-2">
                                <PiPlay size={10} />
                            </div>
                            <Slider
                                aria-label="Player progress"
                                color="foreground"
                                hideThumb={true}
                                defaultValue={20}
                                size="sm"
                                className="w-full mr-2"
                            />
                            <span className="text-[7px] font-medium text-white min-w-fit">00:22 / 03:22</span>
                        </div>
                    </div>
                    <Image src={card2} alt="card2" className="absolute right-0 top-[24px]" />
                    <Image src={card3} alt="card3" className="absolute top-[24px] left-0" />
                </div>
                <div className="relative sm:hidden block min-[465px]:w-[417px] w-full min-[465px]:pl-[25px] pl-0 mx-auto">
                    <Image src={card1} alt="card1" className="relative w-[150px] mx-auto z-10" />
                    <Image src={card2} alt="card2" className="w-[180px] absolute top-[37px] right-0" />
                    <Image src={card3} alt="card3" className="w-[180px] absolute top-6 left-0" />
                    <div className="min-[465px]:mt-[30px] mt-16 w-[150px] mx-auto bg-[#888888] bottom-1.5 left-1.5 rounded-full p-1 flex items-center">
                        <div className="min-h-5 min-w-5 rounded-full bg-white text-black flex justify-center items-center mr-1">
                            <PiPlay size={10} />
                        </div>
                        <Slider
                            aria-label="Player progress"
                            color="foreground"
                            hideThumb={true}
                            defaultValue={20}
                            size="sm"
                            className="w-full mr-1"
                        />
                        <span className="text-[7px] font-medium text-white min-w-fit mr-1.5 leading-none">00:22 / 03:22</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cards;