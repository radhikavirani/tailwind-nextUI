import { Input } from "@nextui-org/react";
import { FiSearch } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
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
import TableProfile from "../ui/tableProfile";
import CommonTable from '../ui/table';

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

const MyMusic = () => {
    return (
        <div className="sm:p-10 p-5">
            <div className="flex justify-between gap-4 mb-5">
                <Input
                    className="w-[292px] h-12 inputStyle"
                    type="email"
                    variant="faded"
                    placeholder="Search by track"
                    startContent={
                        <FiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                />
                <div className="rounded-md min-w-12 min-h-12 bg-white border border-[#E7ECF8] flex justify-center items-center">
                    <Link href='/album'>
                        <RxDashboard size={24} />
                    </Link>
                </div>
            </div>
            <CommonTable tableData={tableData} tableTitle={tableTitle} showIcon={true} />
        </div>
    );
};
export default MyMusic;