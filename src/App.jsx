import "./app.scss"
import Contact from "./components/contact/Contact"
import Cursor from "./components/cursor/Cursor"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/Parallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio"
import SideBar from "./components/sideBar/SideBar"

export default function App()
{
  return(
    <div>
      <Cursor/>
      
      <SideBar/>
      <section id="Home">
        <Navbar/>
        <Hero/>  
      </section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <Portfolio/>
      <section id="Contact">
        <Contact/>
      </section>

    </div>
  )
}