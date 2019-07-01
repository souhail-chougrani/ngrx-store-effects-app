import { Action } from "@ngrx/store";
import { Pizza } from "src/products/models/pizza.model";

export const PIZZAS_LOAD = "[Products] Pizzas load";

export const PIZZAS_LOAD_FAIL = "[Products] Pizzas load FAIL";

export const PIZZAS_LOAD_SUCCES = "[Products] Pizzas load SUCCESS";

export class PizzasLoad {
  readonly type = PIZZAS_LOAD;
}
export class PizzasLoadFial {
  readonly type = PIZZAS_LOAD_FAIL;
  constructor(public payload: any) {}
}
export class PizzasLoadSuccess {
  readonly type = PIZZAS_LOAD_SUCCES;
  constructor(public payload: Pizza[]) {}
}

export type PizzaActions = PizzasLoad | PizzasLoadFial | PizzasLoadSuccess;
