import { useState } from "react";
import { useQuery } from "react-query";
import { Header } from "./components/header/Header";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { TextInput } from "./components/textInput/TextInput";
import { Error } from "./components/error/Error";

function App() {
  const {
    theme: { dark },
    search: { data },
  } = useAppSelector((state: RootState) => state);
  const { title } = data[0];

  return (
    <section className={`App ${dark && "dark"}`}>
      <Header />
      <TextInput />
      {title && <Error />}
    </section>
  );
}

export default App;
