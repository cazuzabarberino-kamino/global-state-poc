import { useAppSelector } from "../store/hooks";
import { selectCount } from "../store/slices/counterSlice";

const ValueDisplay = () => {
  const count = useAppSelector(selectCount);

  return <div>{count}</div>;
};

export default ValueDisplay;
