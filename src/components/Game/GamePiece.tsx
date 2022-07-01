import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import { clamp } from "../../helpers/math";
import { Turn } from "../../types/game";

interface Props {
    piece: string,
    x: number,
    y: number,
    cellSize: number,
    onClick: () => void,
    onRelease: (diff: [number, number]) => boolean,
    boardSize: [number, number],
    turn: Turn
}

const padding = 36;

const GamePiece: FC<Props> = ({ piece, x, y, boardSize, onClick, onRelease, turn, cellSize }) => {
    const [position, setPosition] = useState([x * cellSize, y * cellSize]);
    const [isPressed, setIsPressed] = useState(false);
    const [currMovement, setCurrMovement] = useState<[number, number]>([-1, -1]);

    useEffect(() => {
        setPosition([x * cellSize, y * cellSize]);
    }, [x, y, cellSize]);

    const onDragEnd = (diff: [number, number]) => {
        if (diff[0] !== 0 || diff[1] !== 0) {
            const hasMoved = onRelease(diff);
            if (!hasMoved) setPosition([x * cellSize, y * cellSize]);
        } else {
            setPosition([x * cellSize, y * cellSize]);
        }
        setIsPressed(false);
    }

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        if (turn !== piece[0] || !down) return;
        if (!isPressed) onClick();
        setIsPressed(true);
        setPosition([x * cellSize + mx, y * cellSize + my]);
        setCurrMovement([mx, my]);
    })

    return <animated.div
        //@ts-ignore
        {...bind()}
        className={`absolute ${turn === piece[0] && 'hover:cursor-pointer'} ${isPressed ? 'hover:z-30' : 'hover:z-10'}`}
        style={{
            top: clamp(position[1], -padding, boardSize[1] + padding),
            left: clamp(position[0], -padding, boardSize[0] + padding),
            touchAction: 'none'
        }}
        onMouseUp={() => {
            if (!isPressed) return;
            setIsPressed(false);
            const diffX = Math.floor((currMovement[0] + cellSize / 2) / cellSize);
            const diffY = Math.floor((currMovement[1] + cellSize / 2) / cellSize);
            onDragEnd([diffX, diffY]);
        }}
    >
        <div
            className={`relative rounded-full overflow-hidden`}
            style={{
                width: cellSize,
                height: cellSize
            }}
        >
            <Image
                src={`/static/assets/pieces/${piece}.svg`}
                alt="piece"
                layout="fill"
                objectFit="cover"
                draggable={false}
            />
        </div>
    </animated.div>
}

export default GamePiece;
