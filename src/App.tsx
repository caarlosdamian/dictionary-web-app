import { useState } from "react";
import { useQuery } from "react-query";
import { Header } from "./components/header/Header";
import { fetchData } from "./services";

function App() {
  return (
    <section className="App">
      <Header />
    </section>
  );
}

export default App;
