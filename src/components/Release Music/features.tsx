import Image from "next/image";
import CardImage from "@/assets/img/releaseFeatures.png";
import Information from "../common/InformationText";
import IconImage from "@/assets/img/releaseIconImage.png"

const Features = () => {
    return (
        <div className="container mx-auto lg:flex justify-between items-center xl:mt-36 mt-[90px] lg:mb-[250px] sm:mb-[150px] mb-[50px]">
            <Information
                Subtitle="Our Features"
                InfoTitle="Unlimited Music Distribution"
                TextWidth="xl:w-[509px] lg:w-[445px] w-auto"
            />
            <Image
                src={CardImage}
                alt="CardImage"
                className="rounded-lg xl:mr-24 xl:pl-0 lg:pl-3 lg:mx-0 mx-auto lg:mt-0 mt-10 sm:block hidden"
            />
            <Image
                src={IconImage}
                alt="IconImage"
                className="sm:hidden block mx-auto mt-12"
            />
        </div>
    );
};
export default Features;