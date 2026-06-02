import Navbar from "./components/layout/Navbar"
import HeroSection from "./sections/HeroSection"
import EngineeringPhilosophy from "./sections/EngineeringPhilosophy"
import FeaturedSystem from "./sections/FeaturedSystem"

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EngineeringPhilosophy />
      <FeaturedSystem />
    </main>
  )
}

export default App