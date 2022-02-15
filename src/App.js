import './App.css';
import ThaboJames from './thabojames';
import Hoc from './HOC';

function App() {
  
  let divHeight;
  window.setDivHeight = (height) => divHeight = height;

  return (

    
    <div className="App">
      
    <ThaboJames />
    
    </div>
  );
}

App = Hoc(App);

export default App;
