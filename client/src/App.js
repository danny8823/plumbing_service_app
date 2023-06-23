
import './App.css';
import { AppRoutes } from './AppRoutes';
import { NavBar } from './component/NavBar';
import { Footer } from './component/Footer';
function App() {
  return (
    <div>
      <NavBar/>
      <AppRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
