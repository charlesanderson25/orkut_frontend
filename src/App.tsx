import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import RoutesApp from "./routes/routes";

function App() {
  return (
    <>
      <Banner />
      <RoutesApp/>
      <div className="block">
        <Footer />
      </div>
    </>
  );
}

export default App;
