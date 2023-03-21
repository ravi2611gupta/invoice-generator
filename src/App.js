import Outer from "./Components/Outer";
import CurrencyState from "./Context/CurrencyState";

function App() {
  return (
    <CurrencyState>
      <div className="App flex justify-center bg-green-50">
        <Outer/>      
      </div>
    </CurrencyState>
  );
}

export default App;
