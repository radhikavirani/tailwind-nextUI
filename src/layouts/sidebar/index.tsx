"use client";
import React, { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { BsBarChartLine, BsGraphUpArrow, BsQuestionSquare } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { CommonButton } from "@/components/ui/button";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/whiteLogo.png";
import BlackLogo from "@/assets/img/blackLogo.png";
import Selected from "@/components/ui/dropdown";

type LayoutProps = {
    children: React.ReactElement;
    Title?: string;
    Icon?: any;
};

const menuItems = [
    { href: "/dashboard", tab: "Dashboard", icon: <RxDashboard size={24} /> },
    { href: "/my-music", tab: "My Music", icon: <MdOutlineLibraryMusic size={24} /> },
    { href: "/analytics", tab: "Analytics", icon: <BsBarChartLine size={24} /> },
    { href: "/sales", tab: "Sales", icon: <BsGraphUpArrow size={24} /> },
    { href: "/support", tab: "Support", icon: <BsQuestionSquare size={24} /> }
];

function SideBar({ children, Title, Icon }: LayoutProps) {
    const pathname = usePathname();
    const [showSidebar, setShowSidebar] = useState(true);
    useEffect(() => {
        if (showSidebar) {
            document.body.classList.remove('no-scroll');
        } else {
            document.body.classList.add('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showSidebar]);
    return (
        <div className="flex">
            <div className="min-w-[270px] h-screen bg-lightblack py-[47px] sticky top-0 min-[1432px]:block hidden">
                <div className="flex flex-col items-center gap-[98px]">
                    <Image src={Logo} alt="Logo" width={157} />
                    <div className="flex flex-col gap-6">
                        {menuItems.map(({ href, icon, tab }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`px-6 py-3 rounded-full cursor-pointer ${isActive ? 'text-white bg-primary' : 'text-[#CBCACA] bg-transparent'}`}
                                >
                                    <p className="text-[15px] Gilroy_500 flex gap-3 items-center">
                                        {icon}<span>{tab}</span>
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={`bg-white h-full min-[380px]:w-[300px] w-full py-6 fixed top-0 z-[100] shadow-xl shadow-black/40 transition-all duration-700 ${showSidebar ? "left-[-110%]" : "left-0"}`}>
                <div className='flex justify-between mb-5 px-5'>
                    <Image src={BlackLogo} alt="Logo" width={157} />
                    <IoClose size={24} onClick={() => setShowSidebar(true)} className="text-[#8b8b8b]" />
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col gap-6 w-full">
                        {menuItems.map(({ href, icon, tab }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex justify-center py-3 cursor-pointer ${isActive ? 'text-white bg-primary' : 'text-lightblack bg-transparent'}`}
                                >
                                    <p className="w-[120px] justify-start gap-4 text-[15px] Gilroy_500 flex items-center">
                                        {icon}<span>{tab}</span>
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#F8F8F8]">
                <div className="border-b sm:px-10 px-4 py-6 flex justify-between items-center sticky top-0 bg-[#F8F8F8] z-50">
                    <div className="min-[1432px]:hidden block">
                        <HiOutlineMenu size={24} onClick={() => setShowSidebar(false)} />
                    </div>
                    <span className="Gilroy_500 text-lg max-[425px]:hidden flex gap-2 items-center">{Icon}{Title}</span>
                    <div className="flex sm:gap-[35px] gap-3 items-center">
                        <Link href='/'>
                            <CommonButton sizeType="lg">
                                <CiLogout size={20} />
                                Log Out
                            </CommonButton>
                        </Link>
                        <Selected />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}
export default SideBar;