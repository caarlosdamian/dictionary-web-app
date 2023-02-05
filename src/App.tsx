import { Header } from "./components/header/Header";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { TextInput } from "./components/textInput/TextInput";
import { Error } from "./components/error/Error";
import { Details } from "./components/details/Details";

function App() {
  const {
    theme: { dark },
    search: { data, errorMessage, errorTitle },
  } = useAppSelector((state: RootState) => state);

  return (
    <section className={`App ${dark && "dark"}`}>
      <Header />
      <TextInput />
      {errorTitle ? <Error /> : data.length !== 0 && <Details />}
    </section>
  );
}

export default App;
