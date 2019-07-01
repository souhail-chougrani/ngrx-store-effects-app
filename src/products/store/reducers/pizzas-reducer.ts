import { Pizza } from "src/products/models/pizza.model";
import * as fromAction from "../actions/pizzas-action";
export interface PizzaState {
  loading: boolean;
  loaded: boolean;
  data: Pizza[];
}
export const initialState: PizzaState = {
  loading: false,
  loaded: false,
  data: []
};
export function reducer(
  state = initialState,
  action: fromAction.PizzaActions
): PizzaState {
  switch (action.type) {
    case fromAction.PIZZAS_LOAD:
      state = { ...state, loading: true };
      return state;
    case fromAction.PIZZAS_LOAD_FAIL:
      return { ...state, loaded: false, loading: false };
    case fromAction.PIZZAS_LOAD_SUCCES:
      return { ...state, loaded: true, loading: false };
  }
  return state;
}
