import {
	GameObject,
	MoveDirection,
	Piece,
	PieceData,
	Turn,
} from "../../types/game";
import { findInMatrix } from "../math";
import { directionToDiff, isInBounds, possibleDirections } from "./board";
import { canEat } from "./piece";

export const getMove = (
	state: string[][],
	gameObjects: GameObject[][],
	position: [number, number],
	direction: MoveDirection,
	endSquare: [number, number]
): [number, number] | null => {
	const width = gameObjects[0].length;
	const height = gameObjects.length;
	const piece = state[position[1]][position[0]];
	const diff = directionToDiff(direction);
	let newPosition: [number, number] = [-1, -1];

	if (
		gameObjects[position[1]][position[0]] === GameObject.Water &&
		state[position[1] + diff[1]][position[0] + diff[0]] !== Piece.Empty
	) return null;

	if (piece[1] === Piece.Tiger || piece[1] === Piece.Lion) {
		let curr = [position[0] + diff[0], position[1] + diff[1]];
		while (
			isInBounds(curr[0], curr[1], width, height) &&
			gameObjects[curr[1]][curr[0]] === GameObject.Water &&
			state[curr[1]][curr[0]] === Piece.Empty
		)
			curr = [curr[0] + diff[0], curr[1] + diff[1]];
		newPosition = [curr[0], curr[1]];
	} else {
		newPosition = [position[0] + diff[0], position[1] + diff[1]];
	}

	if (!isInBounds(newPosition[0], newPosition[1], width, height)) return null;
	if (endSquare[0] === newPosition[0] && endSquare[1] === newPosition[1])
		return null;
	const newPiece = state[newPosition[1]][newPosition[0]];
	const newObject = gameObjects[newPosition[1]][newPosition[0]];
	const isBlockedByWater =
		piece[1] !== Piece.Rat && newObject === GameObject.Water;
	const areTheSameTeam = newPiece.length === 2 && piece[0] === newPiece[0];
	const canEatTheOtherPiece =
		newObject !== GameObject.Trap && !canEat(piece, newPiece);
	if (isBlockedByWater || areTheSameTeam || canEatTheOtherPiece) return null;
	return newPosition;
};

export const getPossibleMoves = (
	state: string[][],
	gameObjects: GameObject[][],
	position: [number, number],
	endSquare: [number, number]
): [number, number][] => {
	return possibleDirections
		.map((dir) => getMove(state, gameObjects, position, dir, endSquare))
		.filter((val) => val !== null) as [number, number][];
};

export const movePiece = (
	gameObjects: GameObject[][],
	state: string[][],
	pieces: PieceData[],
	turn: Turn,
	move: string,
	position: [number, number] | undefined = undefined,
	endSquare: [number, number]
): { newState: string[][]; newPieces: PieceData[] } | undefined => {
	if (!position) position = findInMatrix<string>(state, `${turn}${move[0]}`);
	if (!position) return undefined;

	const newPosition = getMove(
		state,
		gameObjects,
		position,
		move[1] as MoveDirection,
		endSquare
	);
	if (!newPosition) return undefined;

	if (
		getPossibleMoves(state, gameObjects, position, endSquare).filter(
			(el) => el[0] === newPosition[0] && el[1] === newPosition[1]
		).length !== 1
	)
		return undefined;
	let piecesCopy = [...pieces];
	const index = piecesCopy.findIndex(
		(el) =>
			el.position[0] === position![0] && el.position[1] === position![1]
	);
	piecesCopy[index].position = [newPosition[0], newPosition[1]];
	for (let i = 0; i < pieces.length; i++) {
		if (i === index) continue;
		const pos = pieces[i].position;
		if (pos[0] === newPosition[0] && pos[1] === newPosition[1]) {
			piecesCopy = [
				...piecesCopy.slice(0, i),
				...piecesCopy.slice(i + 1),
			];
		}
	}
	const gameObjectsCopy = [...state.map((v) => [...v])];
	gameObjectsCopy[newPosition[1]][newPosition[0]] =
		gameObjectsCopy[position[1]][position[0]];
	gameObjectsCopy[position[1]][position[0]] = Piece.Empty;
	return {
		newState: gameObjectsCopy,
		newPieces: piecesCopy,
	};
};
