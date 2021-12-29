import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import { Cell } from "../../models/cells";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}
const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = produce((state: CellsState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_CELL: {
      const { id, content } = action.payload;
      state.data[id].content = content;
      return state;
    }
    case ActionType.DELETE_CELL: {
      delete state.data[action.payload];
      state.order = state.order.filter((order) => order !== action.payload);
      return state;
    }
    case ActionType.MOVE_CELL: {
      const { direction, id } = action.payload;
      const index = state.order.findIndex((orderId) => orderId === id);
      const targetIndex = direction === "up" ? index + 1 : index - 2;

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = id;

      return state;
    }
    case ActionType.INSERT_CELL_BEFORE: {
      const { type, id } = action.payload;
      const cell: Cell = {
        id: randomId(),
        type,
        content: "",
      };
      state.data[cell.id] = cell;
      const foundIndex = state.order.findIndex((orderId) => orderId === id);
      if (foundIndex < 0) {
        state.order.push(cell.id);
      } else {
        state.order.splice(foundIndex, 0, cell.id);
      }
      return state;
    }
    default: {
      return state;
    }
  }
}, initialState);

const randomId = () => Math.random().toString(36).substr(2.5);

export default reducer;
