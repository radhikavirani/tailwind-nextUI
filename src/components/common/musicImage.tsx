import { Slider } from "@nextui-org/react";
import { PiPlay } from "react-icons/pi";
import Image from "next/image";
import Music_Image from '@/assets/img/music_image.png';

const Musicimage = () => {
    return (
        <div className="relative w-fit sm:mr-5">
            <Image src={Music_Image} alt="MusicImage" className="w-[473px] min-[470px]:rounded-[28.54px]" />
            <div className="absolute h-[77px] min-[470px]:w-[95%] w-full backdrop-blur-sm bg-black/30 min-[470px]:bottom-3 bottom-0 min-[470px]:left-3 left-0 min-[470px]:rounded-[20px] p-[14px] flex items-center">
                <div className="sm:min-h-[48.93px] min-h-10 sm:min-w-[48.93px] min-w-10 rounded-full bg-white text-black flex justify-center items-center mr-[18.35px]">
                    <PiPlay size={22} />
                </div>
                <Slider
                    aria-label="Player progress"
                    color="foreground"
                    hideThumb={true}
                    defaultValue={20}
                    size="md"
                    className="w-full mr-2.5"
                />
                <span className="text-[11px] font-semibold text-white min-w-fit">00:22 / 03:22</span>
            </div>
        </div>
    );
};
export default Musicimage;