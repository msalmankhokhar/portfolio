import Image from "next/image"

export default function TechstackCard( { icon, className }: { icon:string, className?: string } ) {
    return (
        <div className="border bg-white dark:border-secondary-700 p-4 rounded-lg text-xs flex items-center justify-center">
            <Image
                className={className}
                alt="icon"
                src={`/img/techstack/${icon}`}
                width={30}
                height={30}
            />
        </div>
    )
}
