import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from './styles/ThemeProvider';
import defaultTheme from './styles/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
