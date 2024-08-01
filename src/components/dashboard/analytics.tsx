import { DatePicker } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMusicNote } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import ColumnChart from "../common/apexColumnChart";

const card = [
    {
        icon: <CiHeadphones />,
        title: 'Total Listeners',
        total: '3,987',
        text: 'Listeners'
    },
    {
        icon: <CgMusicNote />,
        title: 'Total Streams',
        total: '7,854',
        text: 'Streams'
    },
    {
        icon: <BsPeople />,
        title: 'Total Followers',
        total: '9,087',
        text: 'Followers'
    },
];


const Analytics = () => {
    return (
        <div className="sm:p-10 p-5">
            <div className="bg-white rounded-[20px] border border-[#E7EDF8] px-5 py-10">
                <div className="mb-8 flex flex-wrap gap-5 justify-between items-center">
                    <div>
                        <div className="flex flex-wrap items-center sm:gap-5 gap-3">
                            <h1 className="Gilroy_600 text-2xl">244K Streams</h1>
                            <div className="flex items-center gap-1">
                                <IoMdArrowDropdown size={20} color="red" />
                                <p className="sm:text-lg text-xs text-[#9CA1B6] Gilroy_500">7% change since last month</p>
                            </div>
                        </div>
                        <p className="sm:text-lg text-[#9CA1B6] Gilroy_500 mt-2">8 Sep 2022 - 5 oct 2022</p>
                    </div>
                    <DatePicker className="min-[425px]:max-w-[285px] max-w-full" />
                </div>
                <ColumnChart />
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-10">
                {card.map((data) =>
                    <div className="py-9 2xl:px-[34px] px-5 border border-[#EAEBF1] rounded-[18px] bg-white flex flex-col gap-6 sm:w-fit w-full">
                        <div className="flex gap-[19px] items-center">
                            <div className="h-7 w-7 rounded border border-black flex justify-center items-center">
                                {data.icon}
                            </div>
                            <span className="text-[#626262] Gilroy_500 text-lg">{data.title}</span>
                        </div>
                        <span className="text-[42px] Gilroy_600">{data.total}</span>
                        <span className="text-[#626262] Gilroy_500 text-lg">{data.text}</span>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Analytics;