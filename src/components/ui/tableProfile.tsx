import Image from "next/image";

const TableProfile = ({ profileImage, albumTitle, artistName }: { profileImage: any; albumTitle: string; artistName: string; }) => {
    return (
        <div className="flex gap-[30px] items-center">
            <Image
                src={profileImage}
                alt="profile image"
                height={55}
                width={55}
            />
            <div>
                <h1 className="text-[#1D283D] Gilroy_500">{albumTitle}</h1>
                <span className="text-sm text-[#8894AA]">{artistName}</span>
            </div>
        </div>
    );
};

export default TableProfile;
