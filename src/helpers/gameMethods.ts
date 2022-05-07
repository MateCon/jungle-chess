import { GameObject, Piece } from "../types/game";
import { isInBounds } from "./board";

const getPieceValue = (piece: string) => {
	switch (piece) {
		case Piece.Rat:
			return 1;
		case Piece.Cat:
			return 2;
		case Piece.Dog:
			return 3;
		case Piece.Wolf:
			return 4;
		case Piece.Cheetah:
			return 5;
		case Piece.Tiger:
			return 6;
		case Piece.Lion:
			return 7;
		case Piece.Elephant:
			return 8;
		default:
			return -1;
	}
};

const canEat = (p1: string, p2: string) => {
	if (p2.length === 1) return true;
	if (p1[0] === p2[0]) return false;
	return (
		getPieceValue(p1[1]) > getPieceValue(p2[1]) ||
		getPieceValue(p1[1]) + 7 === getPieceValue(p2[1])
	);
};

const possibleDirections: [number, number][] = [
	[0, 1],
	[0, -1],
	[-1, 0],
	[1, 0],
];

export const possibleMoves = (
	pieces: string[][],
	state: GameObject[][],
	position: [number, number]
): [number, number][] => {
	const width = state[0].length;
	const height = state.length;
	const piece = pieces[position[1]][position[0]];
	let positions: [number, number][] = possibleDirections.map((dir) => [
		position[0] + dir[0],
		position[1] + dir[1],
	]);
	if (piece[1] === Piece.Tiger || piece[1] === Piece.Lion) {
		positions = positions.map((newPosition, index) => {
			let curr = [...newPosition];
			let direction: [number, number] = possibleDirections[index];
			while (
				isInBounds(curr[0], curr[1], width, height) &&
				state[curr[1]][curr[0]] === GameObject.Water &&
				pieces[curr[1]][curr[0]] === Piece.Empty
			) {
				curr = [curr[0] + direction[0], curr[1] + direction[1]];
			}
			return [curr[0], curr[1]];
		});
	}
	return positions.filter((newPosition) => {
		if (!isInBounds(newPosition[0], newPosition[1], width, height))
			return false;
		const newPiece = pieces[newPosition[1]][newPosition[0]];
		const newObject = state[newPosition[1]][newPosition[0]];
		if (piece[1] !== Piece.Rat && newObject === GameObject.Water)
			return false;
		if (newPiece.length === 2 && piece[0] === newPiece[0]) return false;
		if (newObject !== GameObject.Trap && !canEat(piece, newPiece))
			return false;
		return true;
	});
};
