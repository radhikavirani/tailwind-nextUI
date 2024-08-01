"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@nextui-org/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { CommonButton } from "@/components/ui/button";
import logo from "@/assets/img/blackLogo.png";
import MainImage from "@/assets/img/home.png";

const Login = () => {
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = React.useState(false);
    return (
        <div className="flex">
            <div className="container mx-auto bg-white xl:w-2/4 w-full py-8 2xl:px-[100px] min-[375px]:px-8 px-6">
                <Image src={logo} alt="logo" width={180} />
                <div className="my-[80px]">
                    <div className="mb-[50px]">
                        <h1 className="text-[22px] Gilroy_600 mb-1">Sign in</h1>
                        <p className="text-[#9B9B9B] text-sm pb-[45px]">Welcome back! Sign in to spread your music</p>
                        <div className="flex flex-col gap-14">
                            <Input
                                variant="faded"
                                type="email"
                                label="Email"
                                labelPlacement="outside"
                                placeholder="Enter your email"
                                className="h-[50px] placeholder:text-[#9B9B9B] text-[#7A7A7A] inputStyle"
                            />
                            <div className="relative">
                                <p className="absolute right-0 -top-1.5 Gilroy_500 text-sm text-primary cursor-pointer">Forgote Password?</p>
                                <Input
                                    variant="faded"
                                    label="Password"
                                    labelPlacement="outside"
                                    placeholder="Enter password"
                                    endContent={
                                        <button onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <IoMdEye size={20} />
                                            ) : (
                                                <IoMdEyeOff size={20} />
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}
                                    className="h-[50px] placeholder:text-[#9B9B9B] text-[#7A7A7A] inputStyle"
                                />
                            </div>
                        </div>
                    </div>
                    <CommonButton variant="blue" className="!w-full">Sign in</CommonButton>
                </div>
                <p className="text-[#888888] Gilroy_500 text-center">Dont have an account?
                    <span className="text-primary Gilroy_500 cursor-pointer ml-1">Create Now</span>
                </p>
            </div>
            <div className="bg-lightblack md:flex hidden items-center">
                <Image src={MainImage} alt="MainImage" />
            </div>
        </div>
    );
};
export default Login;