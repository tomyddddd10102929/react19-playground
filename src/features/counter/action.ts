import { CounterAction, CounterState } from "./types";

export function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
}
