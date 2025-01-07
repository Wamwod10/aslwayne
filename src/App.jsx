import About from "./components/about/About"
import Header from "./components/header/Header"
import Info from "./components/moreinfo/Info"
import Music from "./components/music/Music"
import Navbar from "./components/navbar/Navbar"
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <>
      <Router basename="/">
      <Navbar />
      <Header />
      <About />
      <Music />
      <Info />
      </Router>
    </>
  )
}

export default App
