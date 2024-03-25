import { CategorysCallApi } from "../services/CategorysCallApi";

import { ActionsCategorys } from "../services/CategorysActions";

const { addCategoryAPI, removeCategoryAPI, updateCategoryAPI } =
  ActionsCategorys();
let contador = 4;
export const initialStateCategorys = (await CategorysCallApi()) || [
  {
    id: 1,
    priority: 0,
    categoryname: "Undefined",
  },
  {
    id: 2,
    priority: 1,
    categoryname: "Propulsion",
  },
  {
    id: 3,
    priority: 2,
    categoryname: "Power",
  },
  {
    id: 4,
    priority: 3,
    categoryname: "Electronics",
  },
];

export const Categorysreducer = (state, action) => {
  const { type, payload } = action;

  if (type === "ADD_CATEGORY") {
    console.log(payload);

    const verify = state.find(
      (element) => element.categoryname === payload.categoryname
    );

    if (verify) return state;

    const newState = [...state, { ...payload, id: (contador += 1) }];
    return newState;
  }

  if (type === "REMOVE_CATEGORY") {
    const newState = state.filter((element) => element.id !== payload);

    return newState;
  }

  if (type === "UPDATE_CATEGORY") {
    const newState = state.map((element) =>
      element.id === payload.id ? { ...element, ...payload } : element
    );
    return newState;
  }
};
