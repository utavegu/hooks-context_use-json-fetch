import './App.css';
import DisplayData from './components/DisplayData';
import DisplayError from './components/DisplayError';
import DisplayLoading from './components/DisplayLoading';

function App() {
  return (
    <>
      <DisplayData />
      <hr />
      <DisplayError />
      <hr />
      <DisplayLoading />
    </>
  );
}

export default App;
