export type CellTypes = "code" | "text";

export interface Cell {
  id: string;
  content: string;
  type: CellTypes;
}

export type MoveDirection = "up" | "down";
