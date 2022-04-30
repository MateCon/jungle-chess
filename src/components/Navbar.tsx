import Image from "next/image"
import Link from "next/link"
import { FC, ReactNode } from "react"

interface IconProps {
    children: ReactNode;
    name: string;
    href: string;
};

const Icon: FC<IconProps> = ({ children, name, href }) => {
    return (
        <div className="sidebar-icon group">
            <Link href={href} passHref>
                {children}
            </Link>

            <span className="sidebar-tooltip group-hover:scale-100">
                {name}
            </span>
        </div>
    );
}

const Navbar: FC = () => {
    return (
        <div className="sidebar">
            <Link href="/" passHref>
                <p className="font-semibold text-2xl cursor-pointer">
                    <span className="text-primary-600">J</span>
                    <span className="text-white">C</span>
                </p>
            </Link>
            <div className="flex flex-col w-full py-2 hover:bg-background-900">
                <Icon name="Play" href="/">
                    <Image
                        src="/images/golden-rat.svg"
                        alt="Golden rat"
                        layout="fill"
                    />
                </Icon>
            </div>
        </div>
    )
}

export default Navbar
