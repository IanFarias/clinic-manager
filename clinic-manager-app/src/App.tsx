import { ThemeProvider } from './styles/ThemeProvider';
import defaultTheme from './styles/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

export default App;
