import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Home';
import Register from './Register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bookings from './Bookings';

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/register' Component={Register} />
          <Route exact path="/" Component={Home} />
          <Route exact path='/bookings' Component={Bookings} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
  );
}

export default App;
