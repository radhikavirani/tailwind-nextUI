import { CommonButton } from "../ui/button";

const infoList = [
    { List: 'Worldwide Music Distribution' },
    { List: 'Keep 85% of Your Royalties' },
    { List: 'Distribution to 200+ Platforms' },
    { List: '5 Days Release Processing Time' },
    { List: 'Youtube Content ID (15% fee)' },
    { List: 'Monthly Payments' },
    { List: '24/7 Support' },
];

const PricingCards = () => {
    return (
        <div className="bg-[#F7F7FA]">
            <div className="container mx-auto sm:pt-[180px] pt-28 sm:pb-[120px] pb-16 max-[1575px]:px-5">
                <h1 className="lg:text-[56px] sm:text-[48px] text-2xl sm:leading-[72px] leading-normal Gilroy_600 mb-3.5 text-center">Ready to get Started ?</h1>
                <p className="text-center text-[#909090] sm:text-lg text-sm Gilroy_500">Choose a plan best for your needs.</p>
                <div className="lg:mt-[100px] sm:mt-[60px] mt-10 flex md:flex-row flex-col justify-center items-center lg:gap-[95px] sm:gap-[50px] gap-10">
                    <div className="sm:w-[500px] w-full sm:py-[50px] py-[30px] sm:px-[60px] px-8 bg-white rounded-[30px]">
                        <p className="mb-3 Gilroy_500">Free Music Distribution</p>
                        <h1 className="Gilroy_600 lg:text-[69px] sm:text-[48px] text-[38px] mb-8">€0/year</h1>
                        <ul className="list-disc text-[#6A6A6A] flex flex-col gap-8 text-sm mb-[47px]">
                            {infoList.map((text) =>
                                <li className="Gilroy_600 ml-3">{text.List}</li>
                            )}
                        </ul>
                        <CommonButton variant="gray" className="!w-full">Current Plan</CommonButton>
                    </div>
                    <div className="sm:w-[500px] w-full sm:py-[50px] py-[30px] sm:px-[60px] px-8 bg-primary rounded-[30px]">
                        <p className="mb-3 Gilroy_500 text-white">Premium Plan</p>
                        <h1 className="Gilroy_600 lg:text-[69px] sm:text-[48px] text-[38px] mb-8 text-white">€60/year</h1>
                        <ul className="list-disc text-[#C2CCF1] flex flex-col gap-8 text-sm mb-[47px]">
                            {infoList.map((text) =>
                                <li className="Gilroy_600 ml-3">{text.List}</li>
                            )}
                        </ul>
                        <CommonButton variant="white" className="!w-full !text-primary">Upgrade to premium</CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PricingCards;