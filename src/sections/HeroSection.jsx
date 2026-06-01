function HeroSection() {
  return (
    <section
      className="
        relative
        flex
        min-h-[140vh]
        flex-col
        items-center
        overflow-hidden
        px-6
        pt-40
        text-center
        md:px-10
        lg:px-16
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          top-[-200px]
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* Label */}
      <div
        className="
          relative
          mb-8
          rounded-full
          border
          border-white/10
          bg-white/5
          px-4
          py-2
          text-xs
          tracking-[0.25em]
          text-white/60
          backdrop-blur-xl
        "
      >
        BUILDING REAL SOFTWARE
      </div>

      {/* Headline */}
      <h1
        className="
          relative
          max-w-[1200px]
          text-balance
          text-5xl
          font-black
          leading-[0.95]
          tracking-tight
          text-white
          sm:text-6xl
          md:text-7xl
          lg:text-[110px]
        "
      >
        Building operational
        <br />
        SaaS systems focused
        <br />
        on real-world workflows.
      </h1>

      {/* Subheadline */}
      <p
        className="
          relative
          mt-8
          max-w-[800px]
          text-base
          leading-relaxed
          text-white/60
          sm:text-lg
          md:text-xl
        "
      >
        Backend-focused engineer building modern SaaS experiences with
        real operational workflows, business rules and scalable
        architecture.
      </p>

      {/* CTA */}
      <div
        className="
          relative
          mt-10
          flex
          flex-wrap
          items-center
          justify-center
          gap-4
        "
      >
        <button
          className="
            rounded-2xl
            bg-white
            px-6
            py-3
            text-sm
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
          "
        >
          Live Demo
        </button>

        <button
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-white/10
          "
        >
          GitHub
        </button>
      </div>

      {/* Mockup Placeholder */}
      <div
        className="
          relative
          mt-24
          w-full
          max-w-[1500px]
          px-2
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/5
            shadow-2xl
            backdrop-blur-xl
          "
          style={{
            transform: "perspective(2000px) rotateX(8deg)",
          }}
        >
          <div
            className="
              aspect-[16/9]
              w-full
              bg-gradient-to-br
              from-white/[0.08]
              to-white/[0.02]
            "
          />

          {/* Floating Glow */}
          <div
            className="
              absolute
              inset-0
              bg-blue-500/5
              blur-3xl
            "
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection