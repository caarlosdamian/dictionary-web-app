import { Header } from "./components/header/Header";
import { useAppSelector } from "./redux/hooks";
import { RootState } from "./redux/store";
import { TextInput } from "./components/textInput/TextInput";
import { Error } from "./components/error/Error";

function App() {
  const {
    theme: { dark },
    search: { data, errorMessage, errorTitle },
  } = useAppSelector((state: RootState) => state);
  
  return (
    <section className={`App ${dark && "dark"}`}>
      <Header />
      <TextInput />
      {errorTitle && <Error />}
    </section>
  );
}

export default App;
