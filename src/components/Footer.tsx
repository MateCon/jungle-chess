import Link from "next/link"
import { FC } from "react"
import { FaDiscord } from "react-icons/fa"

const Footer: FC = () => {
    return (
        <div>
            <hr className="mx-auto w-3/4 mb-6 border-neutral-500" />
            <div className="flex flex-row justify-center items-center gap-4 pb-6">
                <p className="text-neutral-300">Jungle Chess &#169; 2022</p>
                <Link href="https://discord.gg/teVkAe3kMu" passHref>
                    <a target="_blank" rel="noopener noreferrer" className='link-item'>
                        <FaDiscord className="text-[#5865F2] text-2xl hover:cursor-pointer" />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Footer 
