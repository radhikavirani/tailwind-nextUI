import Image from "next/image";
import { GoCheck } from "react-icons/go";
import HomeImage from '@/assets/img/homeImage.png';
import Information from "../common/InformationText";

const SecondOriginality = () => {
    return (
        <div className="container mx-auto lg:pb-[160px] sm:pb-[100px] pb-10">
            <div className="lg:flex grid lg:gap-0 gap-12 lg:justify-between justify-items-center items-center">
                <div className="relative w-fit sm:ml-5 lg:order-1 order-2">
                    <Image src={HomeImage} alt="HomeImage" className="w-[473px] min-[470px]:rounded-[28.54px]" />
                    <div className="absolute min-[470px]:h-[168px] h-[100px] min-[470px]:w-[168px] w-[100px] backdrop-blur-sm bg-white/70 left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full flex justify-center items-center">
                        <GoCheck size={70} className="max-[470px]:h-[50px] max-[470px]:w-[50px]" />
                    </div>
                </div>
                <div className="lg:order-2 order-1">
                    <Information InfoTitle="Originality" />
                </div>
            </div>
        </div>
    );
};
export default SecondOriginality;