import logo from './logo.svg';
import './App.css';
import LinkRoot from './components/routes/LinkRoot';
import Routers from './components/routes/Routers';

function App() {
  return (
    <div className="App">
     <LinkRoot/>
     <Routers/>
    </div>
  );
}

export default App;
