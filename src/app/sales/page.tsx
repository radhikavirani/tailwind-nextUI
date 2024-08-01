import { Fragment } from "react";
import SideBar from "@/layouts/sidebar";
import Sales from "@/components/dashboard/sales";

const SalesLayout = () => {
    return (
        <SideBar Title="Salse">
            <Fragment>
                <Sales />
            </Fragment>
        </SideBar>
    );
};
export default SalesLayout;