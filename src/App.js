import { useState } from "react";

import { Header, Cards } from "./containers";
import { Navbar } from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Header />
      <Cards />
    </>
  );
}

export default App;
