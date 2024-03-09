import { CallApi } from "../services/ElementsCallApi";
// lo de abajo no me deja y pues por mientras usare un let xd era el let o instalar una biblioteca como uuid pero bueno
// import { randomUUID } from "node:crypto";
import { ActionsElements } from "../services/ElementsActions";
import { useCategorys } from "../hooks/useCategory";

const { addElementAPI, removeElementAPI, updateElementAPI } = ActionsElements();
let contador = 4;
export const initialState = [
  {
    id: 1,
    Category: {
      id: 1,
      Priority: 1,
      CategoryName: "Propulsion",
    },
    name: "Element 1",
    weight: 200,
    description: "Element 1 description",
  },
  {
    id: 2,
    Category: {
      id: 2,
      Priority: 2,
      CategoryName: "Power",
    },
    name: "Element 2",
    weight: 200,
    description: "Element 2 description",
  },
  {
    id: 3,
    Category: {
      id: 3,
      Priority: 3,
      CategoryName: "Electronics",
    },
    name: "Element 3",
    weight: 200,
    description: "Element 3 description",
  },
];

export const Elementsreducer = (state, action) => {
  const { type, payload } = action;

  if (type === "ADD_ELEMENT") {
    // addElementAPI(payload);

    const newState = [...state, { ...payload, id: (contador += 1) }];

    return newState;
  }

  if (type === "REMOVE_ELEMENT") {
    //removeElementAPI(payload);

    const newState = state.filter((element) => element.id !== payload);

    return newState;
  }

  if (type === "UPDATE_ELEMENT") {
    const newState = state.map((element) =>
      element.id === payload.id ? { ...element, ...payload } : element
    );

    return newState;
  }
};
