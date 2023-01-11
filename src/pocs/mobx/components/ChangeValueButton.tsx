import { observer } from "mobx-react-lite";
import { useCounterStore } from "../store";

const ChangeValueButton = () => {
  const counterStore = useCounterStore();

  return (
    <div>
      <button onClick={() => counterStore.increment()}>+</button>
      <button onClick={() => counterStore.decrement()}>-</button>
    </div>
  );
};

export default observer(ChangeValueButton);
