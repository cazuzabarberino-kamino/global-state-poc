import { Provider } from "react-redux";
import ChangeValueButton from "./components/ChangeValueButton";
import ValueDisplay from "./components/ValueDisplay";
import store from "./store";

const ReduxPoc = () => {
  return (
    <Provider store={store}>
      <ValueDisplay />
      <ChangeValueButton />
    </Provider>
  );
};

export default ReduxPoc;
