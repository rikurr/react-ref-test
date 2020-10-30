import "./App.css";
import React from "react";
import { Layout } from "./conponents/header";

function App() {
  const el = React.useRef(null);
  React.useEffect(() => {
    console.log(el.current);
  }, []);
  return (
    <>
      <nav className="nav">nav</nav>
      <Layout headerRef={el} />
      <body className="body">body</body>
      <footer className="footer">footer</footer>
    </>
  );
}

export default App;
