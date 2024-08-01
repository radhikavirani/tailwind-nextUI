import ApexBarChart from "../common/apexBarChart";
import Information from "../common/InformationText";

const Revenue = () => {
    return (
        <div className="container mx-auto lg:mb-[250px] sm:mb-[150px] mb-[50px] lg:flex justify-between items-center">
            <Information
                Subtitle="Our Features"
                InfoTitle="Unlimited Music Distribution"
                TextWidth="xl:w-[509px] lg:w-[445px] w-auto"
            />
            <div className="sm:w-[533px] sm:h-[600px] h-[450px] sm:rounded-[20px] bg-[#FAFBFF] pt-[58px] pl-10 relative lg:mx-0 mx-auto lg:mt-0 mt-10">
                <div className="text-[28px] grid">
                    <span className="Gilroy_500 text-[#888888]">Revenue</span>
                    <span className="Gilroy_600">$200K</span>
                </div>
                <ApexBarChart />
            </div>
        </div>
    );
};
export default Revenue;