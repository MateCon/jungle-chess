import { Piece } from "../../types/game";

const getPieceValue = (piece: string): number => {
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

export const canEat = (p1: string, p2: string): boolean => {
	if (p2.length === 1) return true;
	if (Math.abs(getPieceValue(p1[1]) - getPieceValue(p2[1])) === 7)
		return getPieceValue(p1[1]) < getPieceValue(p2[1]);
	return getPieceValue(p1[1]) >= getPieceValue(p2[1]);
};
