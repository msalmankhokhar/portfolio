import { ReactNode } from "react"

interface ButtonProps {
    icon?: ReactNode;
    children: ReactNode;
    variant: 'btn-primary' | 'btn-primary-faded' | 'btn-primary-white' | 'btn-hollow' | 'btn-hollow-colored';
    className?: string;
    href?: string;
}

export default function Button({ variant, icon, children, className, href }: ButtonProps) {
    if (href) {
        return (
            <a target="_blank" href={href} className={`btn w-fit ${variant} ${className} ${icon && 'btn-icon'}`}>
                {icon && icon}
                <span>{children}</span>
            </a>
        )
    } else {
        return (
            <button type="button" className={`btn ${variant} ${className} ${icon && 'btn-icon'}`}>
                {icon && icon}
                <span>{children}</span>
            </button>
        )
    }
}