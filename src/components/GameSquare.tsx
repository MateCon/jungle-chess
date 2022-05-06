import { FC, useState } from "react";
import { isEven } from "../helpers/matrix";
import { GameObject } from "../types/game";
import Image from "next/image";

interface Props {
  object: GameObject,
  x: number,
  y: number
}

const GameSquare: FC<Props> = ({ object, x, y }) => {
  const [isLight] = useState(() => isEven(x, y));

  let color = "";
  if (object === GameObject.Water) {
    color = isLight ? 'bg-secondary-500' : 'bg-secondary-700';
  } else {
    color = isLight ? 'bg-primary-500' : 'bg-primary-700';
  }

  return (
    <div className={`${color} w-16 h-16 grid place-items-center`}>
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
