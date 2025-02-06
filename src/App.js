import "./App.css";
import Header from "./common/components/header";
import Footer from "./common/components/footer";
import RouteContainer from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <RouteContainer />
      <Footer />
    </div>
  );
}

export default App;
