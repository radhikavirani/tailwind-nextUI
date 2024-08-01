import Image from "next/image";
import Map from '@/assets/img/cardMap.png';
import logoRowOne from '@/assets/img/logoRowOne.png';
import logoRowSecond from '@/assets/img/logoRowSecond.png';
import cardImage from '@/assets/img/revenueBg.png';

const Revenue = () => {
    return (
        <div className="bg-[#F0F4F8] lg:pt-[87px] lg:pb-[217px] sm:py-[150px] py-16">
            <h1 className="sm:text-[40px] text-2xl Gilroy_600 sm:leading-[61px] text-center sm:mb-[97px] mb-10">Share and your music In<br />perfect harmony.</h1>
            <div className="flex md:flex-row flex-col lg:gap-[52px] gap-6 justify-center items-center mb-6 max-[1575px]:px-5">
                <div className="relative min-[573px]:w-[533px] w-full lg:h-[674px] min-[573px]:h-[550px] h-[480px] rounded-[20px] bg-white">
                    <div className="lg:px-[60px] lg:pt-[62px] lg:pb-[85px] sm:p-10 px-5 py-10 text-[#868686] text-center sm:text-lg Gilroy_600">
                        Hear sound all around you with spatial audio
                        <span className="text-black mx-1">with Dolby Atmos.</span>
                        And unlock amazing definition with
                        <span className="text-black mx-1">lossless audio</span>
                    </div>
                    <div className="pl-10 text-[28px] grid">
                        <span className="Gilroy_500 text-[#888888] lg:mb-3 mb-0">Revenue</span>
                        <span className="Gilroy_600">$200K</span>
                    </div>
                    <Image src={Map} alt="Map" className="absolute bottom-0 w-full" />
                </div>
                <div className="relative min-[573px]:w-[533px] w-full lg:h-[674px] min-[573px]:h-[550px] h-[420px] rounded-[20px] bg-white">
                    <div className="lg:px-[60px] lg:pt-[62px] lg:pb-[85px] sm:p-10 px-5 py-10 text-[#868686] text-center sm:text-lg Gilroy_600">
                        Hear sound all around you with spatial audio
                        <span className="text-black mx-1">with Dolby Atmos.</span>
                        And unlock amazing definition with
                        <span className="text-black mx-1">lossless audio</span>
                    </div>
                    <div className="flex flex-col gap-[30px] absolute bottom-11">
                        <Image src={logoRowOne} alt="logoRowOne" />
                        <Image src={logoRowSecond} alt="logoRowSecond" />
                    </div>
                </div>
            </div>
            <div className="sm:px-5 px-0">
                <div className="relative w-fit mx-auto">
                    <Image src={cardImage} alt="cardImage" className="sm:rounded-[20px]" />
                    <div className="absolute top-0 sm:h-[179px] h-[150px] revenue-bgGradient w-full sm:rounded-t-[20px] flex justify-center items-center">
                        <p className="text-white sm:text-lg Gilroy_600 sm:w-[531px] text-center sm:leading-[36px] sm:px-0 px-5">Hear sound all around you with spatial audio with Dolby Atmos. And unlock amazing definition with lossless audio</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Revenue;