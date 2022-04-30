import { useValuesContext, useActionsContext } from ".";

const useCounterActions = () => {
  const { increment, decrement, equal } = useActionsContext();
  return { increment, decrement, equal };
};

const useCounterValues = () => {
  const { count } = useValuesContext();
  return { count };
};

export const getCounterHooks = () => {
  return { useCounterActions, useCounterValues };
};

const useTodosValues = () => {
  const { todos } = useValuesContext();
  return { todos };
};

export const getTodosHooks = () => {
  return { useTodosValues };
};
