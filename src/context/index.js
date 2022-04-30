import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const initialState = { count: 0, todos: [{ text: "todo 1" }] };

const valuesContext = createContext();
const actionsContext = createContext();
export const useValuesContext = () => useContext(valuesContext);
export const useActionsContext = () => useContext(actionsContext);

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const EQUAL = "EQUAL";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case EQUAL:
      return { ...state, count: state.count };
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = useCallback(
    () => dispatch({ type: INCREMENT }),
    [dispatch]
  );
  const decrement = useCallback(
    () => dispatch({ type: DECREMENT }),
    [dispatch]
  );
  const equal = useCallback(() => dispatch({ type: EQUAL }), [dispatch]);
  const memoizedActions = useMemo(
    () => ({ increment, decrement, equal }),
    [increment, decrement, equal]
  );
  return (
    <valuesContext.Provider value={state}>
      <actionsContext.Provider value={memoizedActions}>
        {children}
      </actionsContext.Provider>
    </valuesContext.Provider>
  );
};

export default ContextProvider;
