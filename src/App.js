
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import AboutUs from "./Components/About_us/AboutUs";
import Main from './Components/Main/Main';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.products.count)
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Main />
      {/* <AboutUs /> */}

    </div>
  );
}

export default App;
