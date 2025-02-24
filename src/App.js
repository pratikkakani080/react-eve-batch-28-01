import "./App.css";
import Header from "./common/components/header";
import Footer from "./common/components/footer";
import RouteContainer from "./routes";
import { ToastContainer } from "react-toastify";
import MyContext from "./common/configurations/myContext";
import { useState } from "react";

function App() {
  const [data, setData] = useState(0);
  return (
    <div className="App">
      <MyContext.Provider value={{ setData: setData, data: data }}>
        <Header />
        <RouteContainer />
        <ToastContainer />
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
