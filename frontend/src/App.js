import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarre from './Component/Navbarre';
import ListeRoutes from './Routes/ListeRoutes';
import {BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { CartProvider } from "react-use-cart";


// <Carouselhome/>
function App() {
  return (
    <div>
      <CartProvider>
      <Router>
        
          <Navbarre />
          <ListeRoutes/>
          <ToastContainer />
      </Router>
      </CartProvider>
    </div>

  );
}

export default App;


