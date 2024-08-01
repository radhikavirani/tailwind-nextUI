import { Fragment } from "react";
import SideBar from "@/layouts/sidebar";
import Analytics from "@/components/dashboard/analytics";

const AnalyticsLayout = () => {
    return (
        <SideBar Title="Analytics">
            <Fragment>
                <Analytics/>
            </Fragment>
        </SideBar>
    );
};
export default AnalyticsLayout;