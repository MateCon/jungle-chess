import { FC, useState } from "react";
import Image from "next/image";
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

interface Props {
    piece: string,
    x: number,
    y: number,
}

const SQUARE_SIZE = 48;

const GamePiece: FC<Props> = ({ piece, x, y }) => {
    const [xPosition, setXPosition] = useState(x * SQUARE_SIZE);
    const [yPosition, setYPosition] = useState(y * SQUARE_SIZE);

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        if (down) {
            setXPosition(x * SQUARE_SIZE + mx);
            setYPosition(y * SQUARE_SIZE + my);
        } else {
            console.log(
                mx + SQUARE_SIZE / 2,
                -my + SQUARE_SIZE / 2
            )
            console.log(
                Math.floor((mx - SQUARE_SIZE / 2) / SQUARE_SIZE),
                Math.floor((my - SQUARE_SIZE / 2) / SQUARE_SIZE)
            )
        }
    })

    return <animated.div
        {...bind()}
        className={`absolute w-12 h-12 rounded-full overflow-hidden`}
        style={{
            top: yPosition,
            left: xPosition,
        }}
    >
        <Image
            src={`/static/assets/pieces/${piece}.png`}
            alt="piece"
            layout="fill"
            objectFit="cover"
            draggable={false}
        />
    </animated.div>
}

export default GamePiece;
