import "./App.css";
import Header from "./common/components/header";
import Footer from "./common/components/footer";
import RouteContainer from "./routes";
import Login from "./common/modules/login";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <RouteContainer />
      <Footer /> */}
      <Login/>
    </div>
  );
}

export default App;
