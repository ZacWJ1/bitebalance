import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./Components/Benefits";
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Services from "./Components/Services";
import Pricing from './Components/Pricing'
import Footer from "./Components/Footer";


import Collaboration from "./Components/Collabration";

const App = () => {
  return (
    <>

    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
     
      <Footer />
    </div>
    <ButtonGradient />
    </>
  )
}

export default App
