import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    custom?: string;
    icon?: IconType;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           disabled,
                                           outline,
                                           small,
                                           custom,
                                           icon,
                                           onClick,
                                       }) => {
    return (
        <button
            disabled={disabled}
            className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition border-slate-700 flex items-center gap-2 
            ${outline ? "bg-white" : 'bg-slate-700'}
            ${small ? 'text-sm font-light' : 'text-md font-semibold'} py-3 px-4
            ${small ? "py-1 px-2 border-[1px]" : 'border-2'}
            ${custom ? custom : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;

