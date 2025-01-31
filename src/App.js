import logo from "./logo.svg";
import "./App.css";
import Header from "./common/components/header";
import Footer from "./common/components/footer";
import Card from "./common/components/card";
import { dataSet } from "./common/utils/static";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cardContainer">
        {dataSet.map((el) => {
          return <Card el={el} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
