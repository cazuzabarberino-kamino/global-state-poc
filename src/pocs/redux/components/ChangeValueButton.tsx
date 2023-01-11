import { useAppDispatch } from "../store/hooks";
import { increment, decrement } from "../store/slices/counterSlice";

const ChangeValueButton = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default ChangeValueButton;
