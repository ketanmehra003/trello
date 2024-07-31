import React from "react";

const shapes = {
round: "rounded-1g",
} as const;
const variants = {
outline: {
deep_purple_600_01_indigo_200:
"border border-solid deep_purple_600_01_indigo_200_border bg-gradient shadow-xs text-white-a700",
},
fill: {
green_A700: "bg-green-a700 text-white-a700",
red_300: "bg-red-300 text-white-a700",
orange_400: "bg-orange-400 text-white-a700",
gray_100: "bg-gray-100 text-gray-600_02",
}
} as const;
const sizes = {
sm : "h-[40px] px-2 text-[16px]",
xs: "h-[26px] px-1.5 text-[12px]",
} as const;

type ButtonProps = Omit<
React. DetailedHTMLProps<React. ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
"onclick"
> &
Partial<{
className: string;
leftIcon: React. ReactNode;
rightIcon: React. ReactNode;
onClick: () => void;
shape: keyof typeof shapes;
variant: keyof typeof variants;
size: keyof typeof sizes ; 
color : String;
}>;

const Button: React. FC<React. PropsWithChildren<ButtonProps>> = ({
    children,
    className ="",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "sm",
    color = "",
    ... restProps
    }) => {
    return (
    <button
    className={ '${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${( shape && shapes[ shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}'}
    { ... restProps}
    >
    { !! leftIcon && leftIcon}
    {children}
    {! ! rightIcon && rightIcon}
    </button>
    );
};
    export { Button };