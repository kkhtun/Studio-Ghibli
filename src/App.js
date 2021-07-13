import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Films from "./components/pages/Films";
import Locations from "./components/pages/Locations";
import People from "./components/pages/People";
import Species from "./components/pages/Species";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="container">
          <Route path="/" exact component={Films} />
          <Route path="/locations" component={Locations} />
          <Route path="/people" component={People} />
          <Route path="/species" component={Species} />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
