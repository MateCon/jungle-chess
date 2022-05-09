import { FC } from "react";
import Image from "next/image";
import { GameUser, Turn } from "../../types/game";

const UserDisplay: FC<{
    user: GameUser,
    turn: Turn,
    time: string,
}> = ({ user, turn, time }) => {
    return (
        <div className={`flex flex-row place-items-center`}>
            <p
                className={`text-white text-2xl w-fit px-4 py-2 rounded-sm ml-2
                    ${user.turn === turn ? 'bg-background-500' : 'bg-background-700'}`}
            >{time}</p>
            <div className="relative w-16 h-16 rounded-full overflow-hidden scale-75">
                <Image
                    src={user.picture}
                    alt="user picture"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <p className="text-white text-xl mx-2">{user.username}{user.elo && ` (${user.elo})`}</p>
        </div>
    )
}

export default UserDisplay;
