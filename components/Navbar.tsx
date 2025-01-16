import Button from "./Button"
import Logo from "./Logo"
import { ArrowDownToLine } from "lucide-react"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between paddingContainer maxContainer py-3">
            <div className="flex items-center gap-8">
                <Logo />
                {/* <ul className="hidden md:flex items-center gap-8 text-sm text-gray-600 dark:text-gray-300">
                    <li><Link href={'#'}>About</Link></li>
                    <li><Link href={'#'}>Projects</Link></li>
                    <li><Link href={'#'}>Experience</Link></li>
                    <li><Link href={'#'}>Education</Link></li>
                    <li><Link href={'#'}>Contact</Link></li>
                </ul> */}
            </div>
            <div className="hidden sm:flex gap-3 items-center justify-center">
                <a download={true} target="_blank" href="/docs/salman-resume.pdf">
                    <Button variant="btn-hollow-colored" icon={<ArrowDownToLine size={16} />}>Download CV</Button>
                </a>
            </div>
        </nav>
    )
}
