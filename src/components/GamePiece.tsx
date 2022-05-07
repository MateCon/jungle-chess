import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { clamp } from "../helpers/math";
import { Turn } from "../types/game";

interface Props {
    piece: string,
    x: number,
    y: number,
    onClick: () => void,
    onRelease: (diff: [number, number]) => boolean,
    boardSize: [number, number],
    turn: Turn
}

const SQUARE_SIZE = 64;
const padding = 50;

const GamePiece: FC<Props> = ({ piece, x, y, boardSize, onClick, onRelease, turn }) => {
    const [position, setPosition] = useState([x * SQUARE_SIZE, y * SQUARE_SIZE]);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        setPosition([x * SQUARE_SIZE, y * SQUARE_SIZE]);
    }, [x, y]);

    const onDragEnd = (diff: [number, number]) => {
        if (diff[0] !== 0 || diff[1] !== 0) {
            const hasMoved = onRelease(diff);
            if (!hasMoved) setPosition([x * SQUARE_SIZE, y * SQUARE_SIZE]);
        } else {
            setPosition([x * SQUARE_SIZE, y * SQUARE_SIZE]);
        }
        setIsPressed(false);
    }

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        if (turn !== piece[0]) return;
        if (down) {
            if (!isPressed) {
                onClick();
            }
            setIsPressed(true);
            setPosition([x * SQUARE_SIZE + mx, y * SQUARE_SIZE + my]);
            return;
        }
        const diffX = Math.floor((mx + SQUARE_SIZE / 2) / SQUARE_SIZE);
        const diffY = Math.floor((my + SQUARE_SIZE / 2) / SQUARE_SIZE);
        onDragEnd([diffX, diffY]);
    })

    return <animated.div
        {...bind()}
        className={`absolute ${turn === piece[0] && 'hover:cursor-pointer'} ${isPressed ? 'hover:z-30' : 'hover:z-10'}`}
        style={{
            top: clamp(position[1], -padding, boardSize[1] + padding),
            left: clamp(position[0], -padding, boardSize[0] + padding),
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
