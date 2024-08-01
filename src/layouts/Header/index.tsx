"use client";
import { CommonButton } from "@/components/ui/button";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";
import { SlArrowUp } from "react-icons/sl";
import Link from "next/link";
import Image from "next/image";
import Whitelogo from '@/assets/img/whiteLogo.png';

const menuItem = [
    { href: "/release-music", menu: "Release Music" },
    { href: "/pricing", menu: "Pricing" },
];

const SidebarMenu = [
    ...menuItem
];

const Header = () => {
    const pathname = usePathname();
    const [showSidebar, setShowSidebar] = useState(true);
    const [visible, setVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const scrollPosition = window.scrollY;
            setIsSticky(scrollPosition > 1);
        }
    };
    // side bar...
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
    // scroll btn...
    useEffect(() => {
        if (typeof window !== "undefined")
            window.addEventListener("scroll", handleScroll);

        return () => {
            if (typeof window !== "undefined")
                window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true);
        } else if (scrolled <= 200) {
            setVisible(false);
        }
    };
    const scrollToTop = () => {
        if (typeof window !== "undefined")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
    };
    if (typeof window !== "undefined")
        window.addEventListener("scroll", toggleVisible);
    return (
        <div className={`top-0 w-full z-[100] max-[1575px]:px-5 headerTransition duration-300 ${isSticky ? "sticky shadow-xl bg-lightblack py-3" : "absolute py-6"}`}>
            <div className="container mx-auto bg-transparent flex items-center justify-between">
                <div className="flex gap-[51px] items-center">
                    <Image src={Whitelogo} alt="logo" className="lg:w-[200px] sm:w-[180px] w-[112px]" />
                    <div className="lg:flex hidden gap-[70px] pb-2">
                        {menuItem.map(({ href, menu }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`${isActive ? "TitleGradient" : "text-[#8B8B8B]"}`}
                                >
                                    {menu}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="lg:flex gap-5 hidden">
                    <Link href="/dashboard">
                        <CommonButton variant="text" sizeType="defaultSize">Login</CommonButton>
                    </Link>
                    <Link href="/sign-up">
                        <CommonButton variant="blue" sizeType="defaultSize">Signup</CommonButton>
                    </Link>
                </div>
                <div className='lg:hidden block text-white'>
                    <FiMenu size={24} onClick={() => setShowSidebar(false)} />
                </div>
            </div>
            <div className={`bg-white h-full flex flex-col justify-between sm:w-[400px] w-full py-6 fixed top-0 z-[100] shadow-xl shadow-black/40 transition-all duration-700 ${showSidebar ? "right-[-110%]" : "right-0"}`}>
                <div>
                    <div className='flex justify-end mb-10 text-[#8b8b8b] pr-5' onClick={() => setShowSidebar(true)}>
                        <IoClose size={24} />
                    </div>
                    {SidebarMenu.map(({ href, menu }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`px-6 py-3.5 hover:bg-[#8b8b8b]/10 w-full inline-block ${isActive ? "TitleGradient" : "text-[#8b8b8b]"}`}
                            >
                                {menu}
                            </Link>
                        );
                    })}
                </div>
                <div className="flex flex-col justify-center gap-4 mx-6">
                    <Link href="/dashboard">
                        <CommonButton variant="border" sizeType="defaultSize" className="!w-full !rounded !text-base">Login</CommonButton>
                    </Link>
                    <Link href="/sign-up">
                        <CommonButton variant="blue" sizeType="defaultSize" className="!w-full !rounded !text-base">Signup</CommonButton>
                    </Link>
                </div>
            </div>
            <div className="fixed bottom-[15px] right-[15px] z-[11]">
                <Button onClick={scrollToTop} className="bg-white shadow border min-h-[48px] min-w-[48px] flex justify-center items-center rounded text-primary" style={{ display: visible ? "" : "none" }}><SlArrowUp /></Button>
            </div>
        </div>
    );
};
export default Header;