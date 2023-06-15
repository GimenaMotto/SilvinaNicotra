
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar'
import ImagesHome from './components/ImageList'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes';

const theme = createTheme({
  typography: {
    fontFamily: 'Barlow, sans- serif',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        {/* <ImagesHome /> */}
        <AppRoutes />
        <Footer />
      </ThemeProvider >
    </div >
  )
}

export default App
