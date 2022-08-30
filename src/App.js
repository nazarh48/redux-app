import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Shop/>
      </div>
    </>
  );
}

export default App;
