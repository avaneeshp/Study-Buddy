import Why from './components/Why.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div>
      <Navbar className="pt-5"/>
      <Home />
      <Why />
    </div>
  );
}

export default App;
