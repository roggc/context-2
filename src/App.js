import ContextProvider from "./context";
import Counter from "./components/Counter";
import CounterActions from "./components/CounterActions";
import Todos from "./components/Todos";

function App() {
  return (
    <ContextProvider>
      <Counter />
      <CounterActions />
      <Todos />
    </ContextProvider>
  );
}

export default App;
