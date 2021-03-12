import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import PageNotFound from './screens/PageNotFound/PageNotFound';
import ScreenLayout from './layouts/ScreenLayout/ScreenLayout';

function App() {
  return (
    <Router className="App">
      <Header/>
      <ScreenLayout>
        <Switch>
          <Route path="/home" component={HomeScreen} exact />
          <Route component={PageNotFound} />
        </Switch>
      </ScreenLayout>
      <Footer/>
    </Router>
  );
}

export default App;
