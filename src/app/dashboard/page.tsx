import { Fragment } from "react";
import SideBar from "@/layouts/sidebar";
import Dashboard from "@/components/dashboard/dashboard";

const DashboardLayout = () => {
    return (
        <SideBar Title="Dashboard">
            <Fragment>
                <Dashboard />
            </Fragment>
        </SideBar>
    );
};
export default DashboardLayout;