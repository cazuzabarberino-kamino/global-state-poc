import { ReactNode, createContext, useContext } from "react";
import CounterStore from "./counterStore";

const CounterContext = createContext<CounterStore>(new CounterStore());

export const useCounterStore = () => useContext(CounterContext);

export const CounterStoreProvider = ({ children }: { children: ReactNode }) => (
  <CounterContext.Provider value={new CounterStore()}>
    {children}
  </CounterContext.Provider>
);
