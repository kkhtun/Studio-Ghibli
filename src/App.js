import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import MainContainer from "./components/layouts/MainContainer";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Films from "./components/pages/Films";
import Locations from "./components/pages/Locations";
import People from "./components/pages/People";
import Species from "./components/pages/Species";
import Vehicles from "./components/pages/Vehicles";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainContainer>
          <Route path="/" exact component={Films} />
          <Route path="/locations" component={Locations} />
          <Route path="/people" component={People} />
          <Route path="/species" component={Species} />
          <Route path="/vehicles" component={Vehicles} />
        </MainContainer>
        <Footer />
      </Router>
    </>
  );
}

export default App;
