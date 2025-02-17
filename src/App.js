import "./App.css";
import Header from "./common/components/header";
import Footer from "./common/components/footer";
import RouteContainer from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <RouteContainer />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
