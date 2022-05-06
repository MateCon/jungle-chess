import { GameObject as GO } from "../../types/game";

const grid: GO[][] = [
	[GO.Land, GO.Land, GO.Trap, GO.End, GO.Trap, GO.Land, GO.Land],
	[GO.Land, GO.Land, GO.Land, GO.Trap, GO.Land, GO.Land, GO.Land],
	[GO.Land, GO.Land, GO.Land, GO.Land, GO.Land, GO.Land, GO.Land],
	[GO.Land, GO.Water, GO.Water, GO.Land, GO.Water, GO.Water, GO.Land],
	[GO.Land, GO.Water, GO.Water, GO.Land, GO.Water, GO.Water, GO.Land],
	[GO.Land, GO.Water, GO.Water, GO.Land, GO.Water, GO.Water, GO.Land],
	[GO.Land, GO.Land, GO.Land, GO.Land, GO.Land, GO.Land, GO.Land],
	[GO.Land, GO.Land, GO.Land, GO.Trap, GO.Land, GO.Land, GO.Land],
	[GO.Land, GO.Land, GO.Trap, GO.End, GO.Trap, GO.Land, GO.Land],
];

export default grid;
