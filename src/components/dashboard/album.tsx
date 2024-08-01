import { Input } from "@nextui-org/react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import Album1 from '@/assets/img/album1.png';
import Album2 from '@/assets/img/album2.png';
import Album3 from '@/assets/img/album3.png';
import Album4 from '@/assets/img/album4.png';
import Album5 from '@/assets/img/album5.png';
import Album6 from '@/assets/img/album1.png';
import Album7 from '@/assets/img/album2.png';
import Album8 from '@/assets/img/album3.png';
import Album9 from '@/assets/img/album4.png';
import Album10 from '@/assets/img/album5.png';
import Album11 from '@/assets/img/album1.png';
import Album12 from '@/assets/img/album2.png';
import Album13 from '@/assets/img/album3.png';
import Album14 from '@/assets/img/album4.png';
import Album15 from '@/assets/img/album5.png';

const albums = [
    { image: Album1 },
    { image: Album2 },
    { image: Album3 },
    { image: Album4 },
    { image: Album5 },
    { image: Album6 },
    { image: Album7 },
    { image: Album8 },
    { image: Album9 },
    { image: Album10 },
    { image: Album11 },
    { image: Album12 },
    { image: Album13 },
    { image: Album14 },
    { image: Album15 },
];

const Album = () => {
    return (
        <div className="sm:p-10 p-5">
            <div className="mb-5">
                <Input
                    className="sm:w-[292px] w-full h-12 inputStyle"
                    type="email"
                    variant="faded"
                    placeholder="Search by track"
                    startContent={
                        <FiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                />
            </div>
            <div className="border rounded-md bg-white grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 xl:p-28 lg:p-14 p-10">
                {albums.map((data) =>
                    <div className="flex items-center flex-col gap-5" >
                        <Image src={data.image} alt="album1" />
                        <div>
                            <h1 className="text-[#1D283D] Gilroy_600 text-lg">Untitled Album</h1>
                            <span className="text-[#818999] Gilroy_500">Jon Glo</span>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};
export default Album;