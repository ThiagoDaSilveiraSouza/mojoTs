import { Header } from "./components";
import { HeaderStatusProvider } from "./context";
import { GlobalStyle } from "./GlobalStyle";
import { HomePage } from "./pages";

function App() {
  return (
    <HeaderStatusProvider>
      <GlobalStyle />
      <Header />
      <HomePage />
    </HeaderStatusProvider>
  );
}

export default App;
