import { FC, useState } from "react";
import Image from "next/image";
import { animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

interface Props {
    piece: string,
    x: number,
    y: number,
}

const SQUARE_SIZE = 64;

const GamePiece: FC<Props> = ({ piece, x, y }) => {
    const [position, setPosition] = useState([x * SQUARE_SIZE, y * SQUARE_SIZE]);

    const onDragEnd = (diff: [number, number]) => {
        console.log(diff);
        // check if move is valid here
        // reset position otherwise
        setPosition([x * SQUARE_SIZE, y * SQUARE_SIZE]);
    }

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        if (down) {
            setPosition([x * SQUARE_SIZE + mx, y * SQUARE_SIZE + my]);
            return;
        }
        const diffX = Math.floor((mx + SQUARE_SIZE / 2) / SQUARE_SIZE);
        const diffY = Math.floor((-my + SQUARE_SIZE / 2) / SQUARE_SIZE);
        onDragEnd([diffX, diffY]);
    })

    return <animated.div
        {...bind()}
        className={`absolute hover:cursor-pointer hover:z-10`}
        style={{
            top: position[1],
            left: position[0],
        }}
    >
        <div className="w-16 h-16 rounded-full overflow-hidden scale-75">
            <Image
                src={`/static/assets/pieces/${piece}.png`}
                alt="piece"
                layout="fill"
                objectFit="cover"
                draggable={false}
            />
        </div>
    </animated.div>
}

export default GamePiece;
