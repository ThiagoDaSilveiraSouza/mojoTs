import { Header } from "./components";
import { GlobalStyle } from "./GlobalStyle";
import { HomePage } from "./pages";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
