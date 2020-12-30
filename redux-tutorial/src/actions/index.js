export const increment = (numberOfIncrement) => {
  return {
    type: "INCREMENT",
    payload: numberOfIncrement
  };
};

export const decrement = (numberOfDecrement) => {
  return {
    type: "DECREMENT",
    payload: numberOfDecrement
  };
};
