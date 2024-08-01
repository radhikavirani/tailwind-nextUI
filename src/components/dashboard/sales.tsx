import { DatePicker} from "@nextui-org/react";
import { BiDollar } from "react-icons/bi";
import TableProfile from "../ui/tableProfile";
import Profile1 from '@/assets/img/profile1.png';
import Profile2 from '@/assets/img/profile2.png';
import Profile3 from '@/assets/img/profile3.png';
import Profile4 from '@/assets/img/profile4.png';
import Profile5 from '@/assets/img/profile5.png';
import Profile6 from '@/assets/img/profile6.png';
import Profile7 from '@/assets/img/profile7.png';
import Profile8 from '@/assets/img/profile8.png';
import Profile9 from '@/assets/img/profile9.png';
import Profile10 from '@/assets/img/profile10.png';
import CommonTable from "../ui/table";

const card = [
    {
        icon: <BiDollar />,
        title: 'Total Revenue',
        total: '$ 4,087',
        text: 'Dollars'
    },
    {
        icon: <BiDollar />,
        title: 'Available for Withdrawal',
        total: '$ 2,087',
        text: 'Dollars'
    },
    {
        icon: <BiDollar />,
        title: 'Pending Payment',
        total: '$ 2,087',
        text: 'Dollars'
    }
];

const tableTitle = [
    { title: 'S.No' },
    { title: 'Title' },
    { title: 'Genre' },
    { title: 'Lable' },
    { title: 'UPC' },
    { title: 'Tracks' },
    { title: 'Album Format' },
    { title: 'Release Date' },
    { title: '' }
];

const tableData = [
    {
        no: '1.',
        title: <TableProfile profileImage={Profile1} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
    {
        no: '2.',
        title: <TableProfile profileImage={Profile2} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
    {
        no: '3.',
        title: <TableProfile profileImage={Profile3} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
    {
        no: '4.',
        title: <TableProfile profileImage={Profile4} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
    {
        no: '5.',
        title: <TableProfile profileImage={Profile5} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
    {
        no: '6.',
        title: <TableProfile profileImage={Profile6} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
    {
        no: '7.',
        title: <TableProfile profileImage={Profile7} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
    {
        no: '8.',
        title: <TableProfile profileImage={Profile8} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
    {
        no: '9.',
        title: <TableProfile profileImage={Profile9} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
    {
        no: '10.',
        title: <TableProfile profileImage={Profile10} albumTitle="Untitled Album" artistName="Jon Glo" />,
        genre: '-',
        lable: '-',
        upc: '-',
        tracks: '-',
        album: 'Album',
        date: '31/11/2022'
    },
];

const Sales = () => {
    return (
        <div className="sm:p-10 p-5">
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-14 gap-5">
                {card.map((data) =>
                    <div className="py-9 2xl:px-[34px] px-5 border border-[#EAEBF1] rounded-[18px] bg-white flex flex-col gap-6">
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
            <div className="my-10">
                <DatePicker variant="faded" className="min-[425px]:max-w-[285px] max-w-full" />
            </div>
            <CommonTable tableData={tableData} tableTitle={tableTitle} showIcon={false} showTrashIcon={true} />
        </div>
    );
};
export default Sales;