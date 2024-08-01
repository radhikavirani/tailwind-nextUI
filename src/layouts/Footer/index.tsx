import { FaFacebookF, FaInstagram, FaSpotify, FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import Image from "next/image";
import Logo from '@/assets/img/whiteLogo.png';

const menuItem = [
    { menu: <a href="/release-music">Release your music</a> },
    { menu: <a href="/login">Login</a> },
    { menu: <a href="/sign-up">Signup</a> }
];
const pages = [
    { name: 'Privacy Policy' },
    { name: 'Terms & Conditions' }
];

const copyRight = [
    { icon: <FaFacebookF size={24} /> },
    { icon: <FaTwitter size={24} /> },
    { icon: <FaInstagram size={24} /> },
    { icon: <IoLogoTiktok size={24} /> },
    { icon: <FaSpotify size={24} /> }
];

const Footer = () => {
    return (
        <div className="bg-lightblack">
            <div className="container mx-auto md:flex justify-between lg:pt-[90px] lg:pb-[144px] sm:py-[80px] py-6 max-[1575px]:px-5">
                <div>
                    <Image src={Logo} alt="logo" className="lg:w-[247px] sm:w-[180px] w-[112px]" />
                    <p className="sm:text-lg text-sm Gilroy_500 sm:leading-[39px] leading-[34px] text-[#6F6F6F] lg:mt-[46.89px] mt-[34.61px] lg:w-[513px] md:w-[250px] w-auto">We’re here to break the mold of traditional music distribution companies, supporting independent artists and doing business in a way that is all about the artist.</p>
                </div>
                <div className="flex xl:gap-[238px] gap-[80px] max-[375px]:justify-between max-[375px]:gap-0 md:pt-0 sm:pt-[60px] pt-[30px]">
                    <div className="flex flex-col lg:gap-[46px] gap-5">
                        <h1 className="leading-[39px] text-[#ABABAB] sm:text-lg text-sm Gilroy_500">Music</h1>
                        {menuItem.map((text) =>
                            <span className="sm:text-lg text-sm text-white Gilroy_500 cursor-pointer">{text.menu}</span>
                        )}
                    </div>
                    <div className="flex flex-col lg:gap-[46px] gap-5">
                        <h1 className="leading-[39px] text-[#ABABAB] sm:text-lg text-sm Gilroy_500">Quicklinks</h1>
                        {pages.map((text) =>
                            <span className="sm:text-lg text-sm text-white Gilroy_500 cursor-pointer">{text.name}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="bg-[#262626] py-[18px] max-[1575px]:px-5">
                <div className="container mx-auto flex justify-between md:flex-row flex-col gap-3">
                    <span className="text-[#C0C1C2] md:text-left text-center sm:text-base text-sm">© 2019-2022, All Rights Reserved Vibeable</span>
                    <div className="flex lg:gap-[53px] gap-7 text-white md:justify-end justify-center">
                        {copyRight.map((icon) =>
                            <span className="cursor-pointer"> {icon.icon} </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;