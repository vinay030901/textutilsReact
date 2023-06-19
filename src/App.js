import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// let names = "Vinay";
function App() {

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze" /> */}
        <About></About>
      </div >
    </>
  );
}

export default App;

