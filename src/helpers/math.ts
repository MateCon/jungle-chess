export const clamp = (val: number, min: number, max: number) => {
	if (val < min) return min;
	if (val > max) return max;
	return val;
};

export const isEvenInMatrix = (i: number, j: number) => {
	return i % 2 === 0 ? j % 2 === 0 : j % 2 !== 0;
};
