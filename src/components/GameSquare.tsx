import { FC } from "react";
import { GameObject } from "../types/game";

interface Props {
    object: GameObject
}

const GameSquare: FC<Props> = ({ object }) => {
    let color = "";
    switch (object) {
      case GameObject.Land:
        color = "bg-[green]"
        break
      case GameObject.Water:
        color = "bg-[blue]"
        break
      case GameObject.End:
        color = "bg-[yellow]"
        break
      case GameObject.Trap:
        color = "bg-[red]"
        break
    }
    return <div className={`text-white ${color} w-12 h-12`} />
}

export default GameSquare;
