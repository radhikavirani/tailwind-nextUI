import { Fragment } from "react";
import SideBar from "@/layouts/sidebar";
import Support from "@/components/dashboard/support";

const SupportLayout = () => {
    return (
        <SideBar Title="Support">
            <Fragment>
                <Support />
            </Fragment>
        </SideBar>
    );
};
export default SupportLayout;