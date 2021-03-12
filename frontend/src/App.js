import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ScreenLayout from './layouts/ScreenLayout/ScreenLayout';

function App() {
  return (
    <div className="App">
      <Header/>
      <ScreenLayout>
        <HomeScreen/>
      </ScreenLayout>
      <Footer/>
    </div>
  );
}

export default App;
