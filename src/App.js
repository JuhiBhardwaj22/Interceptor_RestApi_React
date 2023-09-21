import logo from "./logo.svg";
import "./App.css";
import FetchData from "./component/FetchData";
import UsesOfInterceptors from "./component/UsesOfInterceptors";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interceptor in Rest Api</h1>
        <FetchData />
        <UsesOfInterceptors />
      </header>
    </div>
  );
}

export default App;
