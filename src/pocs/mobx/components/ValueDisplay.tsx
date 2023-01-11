import { observer } from "mobx-react-lite";
import { useCounterStore } from "../store";

const ValueDisplay = () => {
  const counterStore = useCounterStore();

  return <div>{counterStore.counter}</div>;
};

export default observer(ValueDisplay);
