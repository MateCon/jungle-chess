import { GameObject, Piece } from "../../types/game";
import { isInBounds, possibleDirections } from "./board";
import { canEat } from "./piece";

export const getPossibleMoves = (
	state: string[][],
	gameObjects: GameObject[][],
	position: [number, number]
): [number, number][] => {
	const width = gameObjects[0].length;
	const height = gameObjects.length;
	const piece = state[position[1]][position[0]];
	let positions: [number, number][] = possibleDirections.map((dir) => [
		position[0] + dir[0],
		position[1] + dir[1],
	]);
	if (piece[1] === Piece.Tiger || piece[1] === Piece.Lion) {
		positions = positions.map((newPosition, index) => {
			const direction: [number, number] = possibleDirections[index];
			let curr = [...newPosition];
			while (
				isInBounds(curr[0], curr[1], width, height) &&
				gameObjects[curr[1]][curr[0]] === GameObject.Water &&
				state[curr[1]][curr[0]] === Piece.Empty
			)
				curr = [curr[0] + direction[0], curr[1] + direction[1]];
			return [curr[0], curr[1]];
		});
	}
	return positions.filter((newPosition) => {
		if (!isInBounds(newPosition[0], newPosition[1], width, height))
			return false;
		const newPiece = state[newPosition[1]][newPosition[0]];
		const newObject = gameObjects[newPosition[1]][newPosition[0]];
		const isBlockedByWater =
			piece[1] !== Piece.Rat && newObject === GameObject.Water;
		const areTheSameTeam =
			newPiece.length === 2 && piece[0] === newPiece[0];
		const canEatTheOtherPiece =
			newObject !== GameObject.Trap && !canEat(piece, newPiece);
		return !(isBlockedByWater || areTheSameTeam || canEatTheOtherPiece);
	});
};
