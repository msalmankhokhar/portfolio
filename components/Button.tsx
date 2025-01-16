import { ReactNode } from "react"

interface ButtonProps {
    icon?: ReactNode;
    children?: ReactNode;
    variant: 'btn-primary' | 'btn-primary-faded' | 'btn-primary-white' | 'btn-hollow' | 'btn-hollow-colored';
    className?: string;
    href?: string;
    onClick?: () => void;
}

export default function Button({ variant, icon, children, className, href, onClick }: ButtonProps) {
    if (href) {
        return (
            <a target="_blank" href={href} className={`btn w-fit ${variant} ${className} ${icon && 'btn-icon'}`}>
                {icon && icon}
                { children && <span>{children}</span> }
            </a>
        )
    } else {
        return (
            <button onClick={onClick} type="button" className={`btn ${variant} ${className} ${icon && 'btn-icon'}`}>
                {icon && icon}
                { children && <span>{children}</span> }
            </button>
        )
    }
}