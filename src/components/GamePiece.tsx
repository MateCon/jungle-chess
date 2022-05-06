import { FC } from "react";
import { Piece } from "../types/game";

interface Props {
    piece: string
}

const GamePiece: FC<Props> = ({ piece }) => {
    return <p className='text-white'>{piece}</p>
}

export default GamePiece;
