import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contatc";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
