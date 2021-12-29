import { ActionType } from '../action-types';
import { UpdateCellAction, DeleteCellAction, MoveCellAction, InsertCellBeforeAction} from '../actions';
import { CellTypes, MoveDirection } from '../../models/cells';

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    }
  }
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  }
};

export const moveCell = (id: string, direction: MoveDirection): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction
    }
  }
};

export const insertCellBefore = (id: string, type: CellTypes): InsertCellBeforeAction => {
  return {
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
      id,
      type
    }
  }
}
