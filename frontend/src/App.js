import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductDetailScreen from './screens/ProductDetailScreen/ProductDetailScreen';
import PageNotFound from './screens/PageNotFound/PageNotFound';
import ScreenLayout from './layouts/ScreenLayout/ScreenLayout';

function App() {
  return (
    <Router className="App">
      <Header/>
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
