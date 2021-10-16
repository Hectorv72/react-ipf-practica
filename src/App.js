import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import Numdoble from "./components/pages/Numdoble/Numdoble";
import ColorText from "./components/layouts/ColorText/ColorText";
import TextAnimation from "./components/pages/TextAnimation/TextAnimation";

const items = [
  { link: "/home", name: "Home", component: Home },
  { link: "/login", name: "Login", component: Login },
  { link: "/dobles", name: "Dobles", component: Numdoble },
  { link: "/colortext", name: "ColorText", component: ColorText },
  { link: "/textanimation", name: "TextAnimation", component: TextAnimation },
];

const Routing = () => {
  return (
    <Switch>
      {items.map((item, key) => (
        <Route key={key} exact path={item.link} component={item.component} />
      ))}
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Navbar items={items} />
      <Routing />
    </Router>
  );
}

export default App;
