// import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}

      <Weather city="Paris" />
      {/* </header> */}
      <p>
        Open-source code, by{" "}
        <a href="https://github.com/KagisoMothibedi">Kagiso Mothibedi</a> from{" "}
        <a href="shecodes.io"> Shecodes</a>
      </p>
    </div>
  );
}

export default App;
