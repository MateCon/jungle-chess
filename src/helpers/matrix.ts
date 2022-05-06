export const isEven = (i: number, j: number) => {
	return i % 2 === 0 ? j % 2 === 0 : j % 2 !== 0;
};
