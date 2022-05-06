import { FC } from "react";

interface Props {
    piece: string,
    x: number,
    y: number,
}

const SQUARE_SIZE = 48;

const GamePiece: FC<Props> = ({ piece, x, y }) => {
    let color = piece[0] === 'R' ? 'text-[red]' : 'text-[blue]';

    return <p
        className={`${color} absolute w-12 text-center text-xl font-black`}
        style={{
            top: y * SQUARE_SIZE + 10,
            left: x * SQUARE_SIZE
        }}
    >{piece[1]}</p>
}

export default GamePiece;
