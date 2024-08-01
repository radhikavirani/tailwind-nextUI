import { CgMusicNote } from "react-icons/cg";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { RiVoiceprintFill } from "react-icons/ri";

const info = [
    {
        icon: <CgMusicNote size={20} />,
        text: 'We’re here to break the mold of'
    },
    {
        icon: <RiVoiceprintFill size={20} />,
        text: 'Security they need to succeed.'
    },
    {
        icon: <MdOutlineLibraryMusic size={20} />,
        text: 'Leading digital music aggregator'
    }
];

const Information = (
    {
        InfoTitle,
        Subtitle,
        TextWidth,
    }: {
        InfoTitle?: string;
        Subtitle?: string;
        TextWidth?: string;
    }) => {
    return (
        <div className={`lg:text-left min-[470px]:text-center text-left max-[1575px]:px-5 ${TextWidth ? TextWidth : 'xl:w-[609px] lg:w-[445px] w-auto'}`}>
            <p className="text-lg text-primary Gilroy_600">{Subtitle}</p>
            <span className="Gilroy_600 sm:text-[38px] text-2xl mb-[25px] sm:leading-[57px] leading-normal">{InfoTitle}</span>
            <p className="Gilroy_500 sm:text-lg text-base text-[#3A3838] lg:leading-[47px] leading-normal mb-[42px]">We’re here to break the mold of traditional music distribution companies, supporting independent artists and doing business in a way that is all about the artist.</p>
            <div className="flex flex-col lg:gap-[49px] sm:gap-8 gap-5 w-fit lg:mx-0 mx-auto">
                {info.map((data) =>
                    <div className="flex gap-[26px] items-center">
                        <div className="min-h-[46px] min-w-[46px] flex justify-center items-center rounded-full bg-[#F7F8FD] text-primary">
                            {data.icon}
                        </div>
                        <span className="text-[#0E1229] sm:text-lg Gilroy_500 text-left">{data.text}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Information;