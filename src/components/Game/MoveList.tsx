import { FC, useEffect, useRef } from "react";
import { GameUser } from "../../types/game";

interface Props {
    users: GameUser[],
    moveList: string[][]
};

const MoveList: FC<Props> = ({ users, moveList }) => {
    const endRef = useRef<any>(null);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [moveList]);

    return (
        <table className="w-full">
        <thead>
          <tr>
            <th></th>
            <th className="py-2">{users[0].username}</th>
            <th>{users[1].username}</th>
          </tr>
        </thead>
        <tbody>
          {moveList.map((row, j) =>
            <tr key={j} className={`w-full ${j % 2 === 0 ? 'bg-[rgba(0,0,0,0.3)]' : ''}`}>
              <td className="text-center py-1">{j + 1}.</td>
              <td className="text-center font-medium">{row[0]}</td>
              <td className="text-center font-medium">{row[1]}</td>
              <div ref={endRef} />
            </tr>
          )}
        </tbody>
      </table>
    );
};

export default MoveList;
