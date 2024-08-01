import Musicimage from "../common/musicImage";
import Information from "../common/InformationText";

const FirstOriginality = () => {
    return (
        <div className="container mx-auto lg:py-[160px] sm:py-[100px] py-10">
            <div className="text-center Gilroy_600 sm:text-[38px] text-2xl lg:mb-[99px] sm:mb-[50px] mb-3 leading-normal px-2.5">Spread your music across the world</div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-12 justify-between items-center">
                <Information InfoTitle="Originality"/>
                <Musicimage/>
            </div>
        </div>
    );
};
export default FirstOriginality;