import { NextUIProvider } from '@nextui-org/react';
import Header from "./Header";
import Cards from "@/components/Home/cards";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactElement;
};

const Layouts = ({ children }: LayoutProps) => {
    return (
        <div>
            <NextUIProvider>
                <Header />
                {children}
                <Cards/>
                <Footer />
            </NextUIProvider>
        </div>
    );
};
export default Layouts;