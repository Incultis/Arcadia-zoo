import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Accueil from './components/pages/Accueil';

function App() {
  const location = useLocation();
  return (<>
    <Header />
    {location.pathname !== "/" ? <Outlet /> : <Accueil />}

    <Footer />
  </>
  );
}

export default App;
