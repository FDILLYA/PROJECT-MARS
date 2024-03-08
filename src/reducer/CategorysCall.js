let contador = 4;
export const initialStateCategorys = [
  {
    id: 1,
    Priority: 1,
    CategoryName: "Propulsion",
  },
  {
    id: 2,
    Priority: 2,
    CategoryName: "Power",
  },
  {
    id: 3,
    Priority: 3,
    CategoryName: "Electronics",
  },
];

export const Categorysreducer = (state, action) => {
  const { type, payload } = action;

  if (type === "ADD_CATEGORY") {
    console.log(payload);

    const verify = state.find(
      (element) =>
        element.CategoryName === payload.CategoryName &&
        element.Priority === payload.Priority
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
