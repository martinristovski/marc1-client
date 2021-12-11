import logo from './logo.svg';
import './App.scss';
import {
  Routes,
  Route
} from "react-router-dom";

import * as Pages from './pages'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages.Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
