import { FC } from "react";
import Image from "next/image";

interface Props {
    piece: string,
    x: number,
    y: number,
}

const SQUARE_SIZE = 48;

const GamePiece: FC<Props> = ({ piece, x, y }) => {
    return <div
        className={`absolute w-12 h-12 rounded-full overflow-hidden`}
        style={{
            top: y * SQUARE_SIZE,
            left: x * SQUARE_SIZE,
        }}
    >
        <Image
            src={`/static/assets/pieces/${piece}.png`}
            alt="piece"
            layout="fill"
            objectFit="cover"
        />
    </div>
}

export default GamePiece;
