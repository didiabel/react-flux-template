import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./views/Home"
import Demo from "./views/Demo"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/demo">
          <Demo/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
