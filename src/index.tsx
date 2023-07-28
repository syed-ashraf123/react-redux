import ReactDOM from "react-dom";
import { Parent } from "./props/parent";
import { Guest } from "./states/Guests";
const App = () => {
  return (
    <div>
      <h1>Hi There</h1>
      <Parent />
      <Guest />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
