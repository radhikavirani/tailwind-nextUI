import Musicimage from "../common/musicImage";
import Information from "../common/InformationText";

const MusicDestribution = () => {
    return (
        <div className="container mx-auto lg:mb-[250px] sm:mb-[150px] mb-[50px]">
            <div className="lg:flex grid lg:gap-0 gap-12 justify-between items-center">
                <div className="lg:order-1 order-2 lg:block flex justify-center min-[1537px]:pl-0 lg:pl-5 pl-0">
                    <Musicimage />
                </div>
                <div className="lg:order-2 order-1">
                    <Information
                        Subtitle="Our Features"
                        InfoTitle="Unlimited Music Distribution"
                        TextWidth="xl:w-[509px] lg:w-[445px] w-auto"
                    />
                </div>
            </div>
        </div>
    );
};
export default MusicDestribution;