import React, { ReactNode } from "react";
import { Button } from "@nextui-org/react";
import clsx from "clsx";

type ButtonProps = {
    variant?: "blue" | "text" | "white" | "border" | "gray";
    sizeType?: "defaultSize" | "sm" | "lg" | "icon" | "xs";
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
};

const CommonButton = ({
    variant = "blue",
    sizeType = "defaultSize",
    className,
    children,
    onClick,
    disabled,
    type = "button",
    ...props
}: ButtonProps) => {
    const buttonClasses = clsx(
        "inline-flex items-center justify-center text-center transition",
        variant,
        sizeType,
        className,
        {
            "rounded-full bg-primary hover:bg-primary/90 Inter_500 text-white": variant === "blue",
            "rounded-full bg-white Inter_500 text-black": variant === "white",
            "rounded-full bg-transparent Inter_500 text-[#7584BD]": variant === "text",
            "rounded bg-transparent border-[1px] border-primary hover:bg-primary text-primary hover:text-white": variant === "border",
            "rounded-full bg-[#F7F7FA] hover:bg-[#7584BD] hover:text-[#F7F7FA] Inter_500 text-[#7584BD]": variant === "gray",
            "h-[53px] px-10 w-fit": sizeType === "defaultSize",
            "h-8 px-3 text-sm": sizeType === "sm",
            "h-10 px-5": sizeType === "lg",
            "h-12 w-11 text-lg": sizeType === "icon",
            "h-8 px-2 text-xs font-normal": sizeType === "xs",
            "opacity-60 pointer-events-none": disabled,
        }
    );

    return (
        <Button
            data-hover='false'
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            type={type}
            {...props}
        >
            {children}
        </Button>
    );
};

export { CommonButton };
