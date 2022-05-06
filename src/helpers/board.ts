import { GameObject, Piece } from '../types/game';
import grid from '../constants/grids/default';

export const isOutOfBounds = (col: number, row: number, width: number, height: number) => {
    return !(row < 0 || row >= width || col < 0 || row >= height);
}
