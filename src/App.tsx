import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Downloads from "./components/Download";
import Faq from "./components/Faq";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <Downloads />
      <Faq />
    </Fragment>
  );
}

export default App;
