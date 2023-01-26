import { useState } from "react";
import { useQuery } from "react-query";
import { Header } from "./components/header/Header";
import { fetchData } from "./services";
import './assets/fonts/inconsolata/static/Inconsolata-Bold.ttf'
import './assets/fonts/inconsolata/static/Inconsolata-Regular.ttf'
import './assets/fonts/inter/static/Inter-Bold.ttf'
import './assets/fonts/inter/static/Inter-Regular.ttf'
import './assets/fonts/lora/static/Lora-Bold.ttf'
import './assets/fonts/lora/static/Lora-Regular.ttf'
import './assets/fonts/lora/static/Lora-BoldItalic.ttf'

function App() {
  return (
    <section className="App">
      <Header />
    </section>
  );
}

export default App;
