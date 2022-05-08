import { FC } from "react";
import Image from "next/image";
import { GameUser, Turn } from "../../types/game";

const UserDisplay: FC<{
    user: GameUser,
    turn: Turn,
    time: string,
}> = ({ user, turn, time }) => {
    return (
        <div className={`flex flex-col ${user.turn === 'B' && 'flex-col-reverse'}`}>
            <div className="flex flex-row place-items-center gap1">
                <div className="w-16 h-16 rounded-full overflow-hidden scale-75">
                    <Image
                        src={user.picture}
                        alt="user picture"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <p className="text-white text-xl">{user.username}{user.elo && ` (${user.elo})`}</p>
            </div>
            <p
                className={`text-white text-2xl w-fit px-4 py-2 rounded-sm ml-2
          ${user.turn === turn ? 'bg-background-700' : 'bg-background-500'}`}
            >{time}</p>
        </div>
    )
}

export default UserDisplay;
