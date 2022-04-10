import { useState } from "react";

import { Header } from "./containers";
import { Navbar, Mobilemenu } from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Mobilemenu isOpen={isOpen} />
      <Header />
    </>
  );
}

export default App;
