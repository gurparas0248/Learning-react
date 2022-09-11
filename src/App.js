import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';

function App() {
  return (
    <div className="App">

      {/* <Greet />
      <Welcome /> */}
      <Greet name="paras" heroName="Superman">
        <p>This is Children props</p>
      </Greet>
      <Greet name="hahahah" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Bitch" heroName="Spiderman"/>

      
      <Welcome name="paras" heroName="Superman" />
      
    </div>
  );
}

export default App;
