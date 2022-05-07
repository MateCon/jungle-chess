import { Piece } from "../../types/game";

const boardState: string[][] = [
	[
		`R${Piece.Lion}`,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		`R${Piece.Tiger}`,
	],
	[
		Piece.Empty,
		`R${Piece.Dog}`,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		`R${Piece.Cat}`,
		Piece.Empty,
	],
	[
		`R${Piece.Rat}`,
		Piece.Empty,
		`R${Piece.Cheetah}`,
		Piece.Empty,
		`R${Piece.Wolf}`,
		Piece.Empty,
		`R${Piece.Elephant}`,
	],
	[
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
	],
	[
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
	],
	[
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
	],
	[
		`B${Piece.Elephant}`,
		Piece.Empty,
		`B${Piece.Wolf}`,
		Piece.Empty,
		`B${Piece.Cheetah}`,
		Piece.Empty,
		`B${Piece.Rat}`,
	],
	[
		Piece.Empty,
		`B${Piece.Cat}`,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		`B${Piece.Dog}`,
		Piece.Empty,
	],
	[
		`B${Piece.Tiger}`,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		Piece.Empty,
		`B${Piece.Lion}`,
	],
];

export const startingPieces: {
	color: string;
	piece: Piece;
	position: [number, number];
}[] = [
	{ color: "R", piece: Piece.Rat, position: [0, 2] },
	{ color: "R", piece: Piece.Cat, position: [5, 1] },
	{ color: "R", piece: Piece.Dog, position: [1, 1] },
	{ color: "R", piece: Piece.Wolf, position: [4, 2] },
	{ color: "R", piece: Piece.Cheetah, position: [2, 2] },
	{ color: "R", piece: Piece.Tiger, position: [6, 0] },
	{ color: "R", piece: Piece.Lion, position: [0, 0] },
	{ color: "R", piece: Piece.Elephant, position: [6, 2] },
	{ color: "B", piece: Piece.Rat, position: [6, 6] },
	{ color: "B", piece: Piece.Cat, position: [1, 7] },
	{ color: "B", piece: Piece.Dog, position: [5, 7] },
	{ color: "B", piece: Piece.Wolf, position: [2, 6] },
	{ color: "B", piece: Piece.Cheetah, position: [4, 6] },
	{ color: "B", piece: Piece.Tiger, position: [0, 8] },
	{ color: "B", piece: Piece.Lion, position: [6, 8] },
	{ color: "B", piece: Piece.Elephant, position: [0, 6] },
];

export default boardState;
