import { ThemeProvider } from "./contexts/ThemeContext";
import AppRoutes from "./pages/Routes";
import { GlobalStyle } from "./components/Home/GlobalStyle";


function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}



export default App;
