import GamePiece from '../components/GamePiece';
import grid from '../constants/grids/default';
import { GameObject, MoveDirection, Piece, PieceValue } from '../types/game';

const canMove = (x: number, y: number, state: GameObject[][], turn: string, piece: Piece) => {
    if (state[y][x] === GameObject.Land || state[y][x] === GameObject.Trap) {
        return true;
    }
    else if (state[y][x] === GameObject.Water) {
        return (piece === Piece.Rat || piece === Piece.Tiger || piece === Piece.Lion)
    }
    else if (x === 3 && y === 8) {
        return (turn === "B")
    }
    else if (x === 3 && y === 8) {
        return (turn === "R")
    }
    return false;
}

const canEat = (piece1: PieceValue, piece2: PieceValue) => {
    return (piece1 > piece2 || piece1 + 7 === piece2);
}

// export const possibleMoves = (
//     pieces: string[][], 
//     state: GameObject[][], 
//     piece: Piece, 
//     turn: string, 
//     x: number, 
//     y: number
// ) => {
//     const possibleMoves = [MoveDirection.Down, MoveDirection.Right, MoveDirection.Up, MoveDirection.Left]
//     for (let i = 0; i < 4; i++) {
//         const whereToMove = direction(x, y, possibleMoves[i]);
//         const finalPlace = { "x": x + whereToMove[0], "y": y + whereToMove[1]}

//         if (canMove) {
//             return true;
//         }
//         else if (state[finalPlace.y][finalPlace.x] !== GameObject.Land) {

//         }
//     }
// }

export const direction = (col: number, row: number, move: MoveDirection) => {
    switch (move) {
        case MoveDirection.Up:
            return [0, 1]
        case MoveDirection.Down:
            return [0, -1]
        case MoveDirection.Left:
            return [-1, 0]
        case MoveDirection.Right:
            return [1, 0]
        default:
            return [0, 0]
    }
}
