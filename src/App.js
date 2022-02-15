import Home from "./pages/home";

import Header from "./components/header";
import Footer from "./components/footer";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component= {Home} />
        </Switch>
        <Footer />
      </Router>      
    </div>
  );
}

export default App;
