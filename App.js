
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa el enrutador
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Home from "src/pages/Home";
import './styles/global.css';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
