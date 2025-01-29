import logo from "./logo.svg";
import "./App.css";
import Header from "./common/components/header";
import Footer, { Testing } from "./common/components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Testing />
    </div>
  );
}

export default App;
