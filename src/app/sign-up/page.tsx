"use client";
import React from "react";
import Image from "next/image";
import { Checkbox, Input } from "@nextui-org/react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { CommonButton } from "@/components/ui/button";
import logo from "@/assets/img/blackLogo.png";
import MainImage from "@/assets/img/home.png"

const SignUp = () => {
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [isVisible, setIsVisible] = React.useState(false);
    return (
        <div className="flex">
            <div className="container mx-auto bg-white xl:w-2/4 w-full py-8 2xl:px-[100px] min-[375px]:px-8 px-6">
                <Image src={logo} alt="logo" width={180} />
                <div className="my-[80px]">
                    <div className="mb-[35px]">
                        <h1 className="text-[22px] Gilroy_600 mb-1">Sign Up</h1>
                        <p className="text-[#9B9B9B] text-sm pb-[45px]">Welcome back! Sign in to spread your music</p>
                        <div className="flex flex-col gap-10">
                            <Input
                                variant="faded"
                                type="email"
                                label="Email"
                                labelPlacement="outside"
                                placeholder="Enter your email"
                                className="h-[50px] placeholder:text-[#9B9B9B] text-[#7A7A7A] inputStyle"
                            />
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
                            <Input
                                variant="faded"
                                label="Confirm Password"
                                labelPlacement="outside"
                                placeholder="Re-enter password"
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
                    <div className="flex gap-1 items-center mb-[50px]">
                        <Checkbox size="md" radius="sm"/>
                        <p className="text-[#888888] text-sm">I agree to <span className="text-primary">Terms and conditions</span></p>
                    </div>
                    <CommonButton variant="blue" className="!w-full">Sign up</CommonButton>
                </div>
                <p className="text-[#888888] Gilroy_500 text-center">Already have an account?
                    <span className="text-primary Gilroy_500 cursor-pointer ml-1">Sign in</span>
                </p>
            </div>
            <div className="bg-lightblack md:flex hidden items-center">
                <Image src={MainImage} alt="MainImage"/>
            </div>
        </div>
    );
};
export default SignUp;