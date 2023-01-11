import ChangeValueButton from "./components/ChangeValueButton";
import ValueDisplay from "./components/ValueDisplay";
import { CounterStoreProvider } from "./store";

const MobxPoc = () => {
  return (
    <CounterStoreProvider>
      <ValueDisplay />
      <ChangeValueButton />
    </CounterStoreProvider>
  );
};

export default MobxPoc;
