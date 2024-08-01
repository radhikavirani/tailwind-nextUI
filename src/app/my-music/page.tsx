import { Fragment } from "react";
import SideBar from "@/layouts/sidebar";
import MyMusic from "@/components/dashboard/myMusic";

const MusicLayout = () => {
    return (
        <SideBar Title="My Music">
            <Fragment>
                <MyMusic/>
            </Fragment>
        </SideBar>
    );
};
export default MusicLayout;