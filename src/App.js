import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ComponenteHijo1 from './components/ComponenteHijo1';
import ComponenteHijo2 from './components/ComponenteHijo2';
import ComponenteHijo3 from './components/ComponenteHijo3';

function App() {
  
  return (
    <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/react-flux-template">         
          <ComponenteHijo1/>
          <ComponenteHijo2/>
          <ComponenteHijo3/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
