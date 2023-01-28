import { useState } from "react";
import { useQuery } from "react-query";
import { Header } from "./components/header/Header";
import { fetchData } from "./services";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";

function App() {
  const { dark } = useAppSelector((state: RootState) => state.theme);

  return (
    <section className={`App ${dark && "dark"}`}>
      <Header />
    </section>
  );
}

export default App;
