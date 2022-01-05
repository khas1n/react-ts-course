import { Dispatch } from "redux";
import { Action } from "redux";
import { RootState } from "../reducers";
import { ActionType } from "../action-types";
import { saveCells } from "../action-creators";

export const persistMiddleware = ({ dispatch, getState }: { dispatch: Dispatch<Action>; getState: () => RootState }) => {
  let timer: any;
  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);
      if ([ActionType.INSERT_CELL_AFTER, ActionType.MOVE_CELL, ActionType.DELETE_CELL, ActionType.UPDATE_CELL].includes(action.type)) {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 250);
      }
    };
  };
};
