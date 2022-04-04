import React from "react";

import { Header, About } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
}

export default App;
