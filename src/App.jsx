import Navbar from "./components/layout/Navbar"
import HeroSection from "./sections/HeroSection"
import EngineeringPhilosophy from "./sections/EngineeringPhilosophy"
import FeaturedSystem from "./sections/FeaturedSystem"
import EngineeringLog from "./sections/EngineeringLog"
import FinalCTA from "./sections/FinalCTA"

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EngineeringPhilosophy />
      <FeaturedSystem />    
      <EngineeringLog />
      <FinalCTA />
    </main>
  )
}

export default App