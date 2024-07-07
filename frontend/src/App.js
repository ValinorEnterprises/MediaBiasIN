import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import UserEntry from "./components/LoginForm.js";
import TopPane from "./components/TopBar.js";


const App = () => {
  return (
    <div>
        <TopPane />
        <UserEntry />
    </div>
  );
};

export default App;

