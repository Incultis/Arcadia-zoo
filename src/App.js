import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const location = useLocation();
  return (<>
    <Header />
    <Outlet />

    <Footer />
  </>
  );
}

export default App;
