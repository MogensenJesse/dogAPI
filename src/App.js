import { Router } from '@reach/router';
import Dogs from './components/Dogs';
import './css/Main.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Dogs path="/" />

        {/* <CountryDetails path="/:country" /> */}
      </Router>
    </div>
  );
}

export default App;