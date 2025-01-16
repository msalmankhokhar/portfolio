import { ReactNode } from "react"

interface HeadingProps {
    children: ReactNode;
    bar?: boolean;
    center?: boolean;
}

export default function Heading( {children, bar=true, center=true}: HeadingProps ) {
    return (
        <div className={`text-2xl mb-10 flex ${center && 'justify-center'} items-center gap-3 md:text-3xl font-bold text-center dark:text-white`}>
            {
                bar && <div className="h-[30px] w-[3px] bg-primary-600" />
            }
            <h1>{children}</h1>
        </div>
    )
}
