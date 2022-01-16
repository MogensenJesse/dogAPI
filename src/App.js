import { Router } from '@reach/router';
import Dogs from './components/Dogs';
import DogDetails from './components/DogDetails';
import './css/Main.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Dogs path="/" />

        <DogDetails path="/:dog" />
      </Router>
    </div>
  );
}

export default App;