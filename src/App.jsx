
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar'
import ImagesHome from './components/ImageList'
import Footer from './components/Footer'

const theme = createTheme({
  typography: {
    fontFamily: 'Gafata, sans- serif',
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />

        <ImagesHome />

        <Footer />
      </ThemeProvider >
    </div >
  )
}

export default App
