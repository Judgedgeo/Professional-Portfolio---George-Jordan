import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer';

// import jsPDF from 'jspdf'


// const App = () => <PortfolioContainer />;

function App() {
    return (
      <div>
        <PortfolioContainer />
        {/* <Header></Header> */}
        <Footer></Footer>

      </div>
    );
  }

export default App;
