import './App.css';

import { BrowserRouter,  Switch , Route } from 'react-router-dom';
import Header  from './components/header/Header';
import Home  from './components/home/Home';
import Cart  from './components/cart/Cart';

function App() {
  return (
    <div>
      

              <BrowserRouter>
              <Header/>

              <Switch >
              <Route exact path= '/' component={Home} />
              <Route exact path= '/cart' component={Cart} />
                </Switch > 
              </BrowserRouter>

    </div>
  );
}

export default App;
