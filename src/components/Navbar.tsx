import Link from "next/link"
import { FC } from "react"

const Navbar: FC = () => {
    return (
        <div className="w-16 bg-background-800 flex flex-col items-center pt-2">
            <Link href="/" passHref>
                <p className="font-semibold text-xl cursor-pointer">
                    <span className="text-primary-600">J</span>
                    <span className="text-white">C</span>
                </p>
            </Link>
        </div>
    )
}

export default Navbar
