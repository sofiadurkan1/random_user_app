import './App.css';
import Card from "./components/Card/Card"
import Email from './components/svg/Email';
import Location from './components/svg/Location';
import Phone from './components/svg/Phone';

function App() {
  return (
    <div className="App">
      <Card/>
      <Email className="email"/>
      <Location className="location"/>
      <Phone className="phone"/>
      
    </div>
  );
}

export default App;
