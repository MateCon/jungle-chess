import { FC, useMemo, useState } from "react";
import { isEven } from "../helpers/matrix";
import { GameObject } from "../types/game";
import Image from "next/image";

interface Props {
  object: GameObject,
  x: number,
  y: number,
  isActive: boolean,
  onClick: (isActive: boolean) => void
}

const GameSquare: FC<Props> = ({ object, x, y, isActive, onClick }) => {
  const [isLight] = useState(() => isEven(x, y));

  const color = useMemo(() => {
    if (isActive) return 'bg-warning-300';
    if (object === GameObject.Water)
      return isLight ? 'bg-secondary-500' : 'bg-secondary-700';
    else
      return isLight ? 'bg-primary-500' : 'bg-primary-700';
  }, [object, isLight, isActive]);

  return (
    <div
      className={`${color} w-16 h-16 grid place-items-center`}
      onClick={() => onClick(isActive)}
    >
      {object === GameObject.End &&
        <Image
          src="/static/assets/objects/end.png"
          alt="end object"
          width={48}
          height={48}
          draggable={false}
        />}
      {object === GameObject.Trap &&
        <Image
          src="/static/assets/objects/trap.png"
          alt="end object"
          width={48}
          height={48}
          draggable={false}
        />}
    </div>
  )
}

export default GameSquare;
