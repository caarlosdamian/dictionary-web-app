import { useState } from "react";
import { useQuery } from "react-query";
import { Header } from "./components/header/Header";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { TextInput } from "./components/textInput/TextInput";

function App() {
  const { dark } = useAppSelector((state: RootState) => state.theme);
  return (
    <section className={`App ${dark && "dark"}`}>
      <Header />
      <TextInput />
    </section>
  );
}

export default App;
