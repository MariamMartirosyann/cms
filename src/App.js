import "./App.css";
import Routes from "./routes";
import appStore from "./redux/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
    <Routes />
    </Provider>
  );
}

export default App;
