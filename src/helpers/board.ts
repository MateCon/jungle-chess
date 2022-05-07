export const isInBounds = (
	x: number,
	y: number,
	width: number,
	height: number
) => x >= 0 && x < width && y >= 0 && y < height;
