import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { React, useEffect, useState } from 'react'

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen/ProductDetailScreen';
import PageNotFound from './screens/PageNotFound/PageNotFound';
import ScreenLayout from './layouts/ScreenLayout/ScreenLayout';
import Cart from './components/Cart/Cart';

function App() {
  const [showCart, setShowCart] = useState(false);

  useEffect(()=> {
    const body = document.querySelector('body');
    body.style.overflow = showCart ? 'hidden' : 'auto';
  },[showCart])

  const handleCartVisibility = () => {
    setShowCart((prev)=>!prev);
    console.log(showCart)
}

  return (
    <Router className="App">
      <Header handleCartVisibility={handleCartVisibility}/>
      {
        showCart && <Cart handleCartVisibility={handleCartVisibility}/>
      }
      {/* <ScreenLayout> */}
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/products/:id" component={ProductDetailScreen} />
          <Route component={PageNotFound} />
        </Switch>
      {/* </ScreenLayout> */}
      <Footer/>
    </Router>
  );
}

export default App;
