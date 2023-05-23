import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Downloads from "./components/Download";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <Downloads />
    </Fragment>
  );
}

export default App;
