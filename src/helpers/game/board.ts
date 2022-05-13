import { MoveDirection } from "../../types/game";

export const possibleDirections: MoveDirection[] = [
	MoveDirection.Up,
	MoveDirection.Down,
	MoveDirection.Left,
	MoveDirection.Right,
];

export const isInBounds = (
	x: number,
	y: number,
	width: number,
	height: number
) => x >= 0 && x < width && y >= 0 && y < height;

export const diffToDirection = (
	diff: [number, number]
): MoveDirection | undefined => {
	console.log(diff);
	if (diff[0] === 0 && diff[1] > 0 && diff[1] <= 1) return MoveDirection.Up;
	if (diff[0] === 0 && diff[1] < 0 && diff[1] >= -1) return MoveDirection.Down;
	if (diff[0] > 0 && diff[0] <= 1 && diff[1] === 0) return MoveDirection.Right;
	if (diff[0] < 0 && diff[0] >= -1 && diff[1] === 0) return MoveDirection.Left;
	return undefined;
};

export const directionToDiff = (direction: MoveDirection): [number, number] => {
	switch (direction) {
		case MoveDirection.Up:
			return [0, 1];
		case MoveDirection.Down:
			return [0, -1];
		case MoveDirection.Right:
			return [1, 0];
		case MoveDirection.Left:
			return [-1, 0];
	}
};
