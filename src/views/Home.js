import logo from '../assets/img/logo-circular-texto.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="jumbotron">
    <div className="row w-100">
        <div className="col-lg-6 pt-5 px-5">
      <h1 style={{fontSize:'4rem'}}>React Flux template</h1>
      <br />
      <Link className="btn btn-primary btn-lg" href="#" role="button" to="/demo">
        Ir a Demo
      </Link>
        </div>
        <div className="col-lg-6">
        <img src={logo} alt="" style={{width:'25rem'}}/>
        </div>
    </div>
    </div>
  );
};

export default Home;
