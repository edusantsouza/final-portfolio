import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contatc";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <Portfolio />
        <Skills />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default App;
