import { Fragment } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";
import SideBar from "@/layouts/sidebar";
import Album from "@/components/dashboard/album";

const AlbumPage = () => {
    return (
        <SideBar
            Title="Album"
            Icon={
                <Link href='/my-music'>
                    <BsArrowLeft size={24} />
                </Link>
            }
        >
            <Fragment>
                <Album />
            </Fragment>
        </SideBar>
    );
};
export default AlbumPage;