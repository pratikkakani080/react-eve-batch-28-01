import "./App.css";
import Header from "./common/components/header";
import Footer from "./common/components/footer";
import RouteContainer from "./routes";
import { ToastContainer } from "react-toastify";
import MyContext from "./common/configurations/myContext";
import { useState } from "react";
import MyContextProvider from "./common/contextProviders/myContextProvider";
import Context2Provider from "./common/contextProviders/context2Provider";
import { Provider } from "react-redux";
import store from "./common/redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MyContextProvider>
          <Context2Provider>
            <Header />
            <RouteContainer />
            <ToastContainer />
            <Footer />
          </Context2Provider>
        </MyContextProvider>
      </Provider>
    </div>
  );
}

export default App;
