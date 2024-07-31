import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import Home from "./component/layout/Home";
import SearchPage from "./component/layout/SearchPage";
import Modal from "./component/Modal";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
        <Route path="/">
          <Modal />
        </Route>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
