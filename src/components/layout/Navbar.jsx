function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 md:px-6 lg:px-10">
      <nav
        className="
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-wrap
          items-center
          justify-between
          gap-4
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-blue-400" />

          <span className="text-sm font-medium tracking-wide text-white/80">
            Eugenio Boudaher
          </span>
        </div>

        <div
          className="
            hidden
            md:flex
            flex-wrap
            items-center
            justify-center
            gap-6
            text-sm
            text-white/60
          "
        >
          <a href="#philosophy">Philosophy</a>
          <a href="#featured-system">Platform</a>
          <a href="#engineering-log">Build Log</a>
          <a href="#cta">Contact</a>
        </div>

        <a
          href="https://www.linkedin.com/in/eugenio-boudaher"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/10
            px-3
            py-1.5
            text-sm
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-white/20
            hover:border-white/20
            md:px-4
            md:py-2
          "
        >
          LinkedIn
        </a>
      </nav>
    </header>
  )
}

export default Navbar