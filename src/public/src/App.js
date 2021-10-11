import Header from "./component/header/Header";
import Home from "./View/Home/Home";
import AddData from "./View/AddData/AddData";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <div style={{marginTop: "4rem"}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-data" component={AddData} />
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
