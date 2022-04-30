import Image from "next/image"
import Link from "next/link"
import { FC, ReactNode } from "react"
import { CgProfile } from "react-icons/cg"
import { FaChessPawn } from "react-icons/fa"

interface IconProps {
    children: ReactNode;
    name: string;
    href: string;
};

const Icon: FC<IconProps> = ({ children, name, href }) => {
    return (
        <div className="navbar-icon group">
            <Link href={href} passHref><a>
                {children}
            </a></Link>
            <span className="navbar-tooltip group-hover:scale-100">
                {name}
            </span>
        </div>
    );
}

const Navbar: FC = () => {
    return (
        <div className="navbar">
            <Link href="/" passHref>
                <p className="font-semibold text-2xl cursor-pointer">
                    <span className="text-primary-600">J</span>
                    <span className="text-white">C</span>
                </p>
            </Link>
            <div className="navbar-icon-container">
                {/* replace href for /profile/${username} */}
                <Icon name="Profile" href="/profile">
                    {/* replace by profile picture */}
                    <div className="text-4xl">
                        <CgProfile />
                    </div>
                </Icon>
                <Icon name="Play" href="/play">
                    <div className="text-4xl">
                        <FaChessPawn className="text-[#ecec45]" />
                    </div>
                </Icon>
            </div>
        </div>
    )
}

export default Navbar
