import { motion } from "framer-motion"



function HeroSection() {
  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-screen
        flex-col
        items-center
        overflow-hidden
        px-6
        pt-28 md:pt-40
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
          font-black
          leading-[0.95]
          tracking-tight
          text-white
          text-[clamp(2.5rem,7vw,7rem)]
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
          mt-4
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
          mt-8
          flex
          flex-wrap 
          items-center
          justify-center
          gap-4
        "
      >
        <a
          href="https://barber-shop-indol-three.vercel.app"
          className="
            inline-flex
            items-center
            justify-center
            rounded-2xl
            bg-white
            px-6  
            py-3
            text-sm
            font-semibold
            !text-black
            transition-all
            duration-300
            hover:scale-[1.015]
            hover:bg-white/90
          "
        >
          Launch Platform
        </a>

        <a
          href="https://github.com/aboudaherBR"
          target="_blank"
          rel="noopener noreferrer"
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
        </a>
      </div>

      <p
        className="
            mt-4
            text-sm
            tracking-wide
            text-white/40
          "
      >
        Demo credentials available for product exploration.
        Name: [admin] Password: [123]
      </p>
      <p
        className="
            mt-4
            text-sm
            tracking-wide
            text-white/40
          "
      >
        Name: [admin] Password: [123]
      </p>

      {/* Cinematic Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
        relative
        mt-24
        w-full
        max-w-[1600px]
        px-2
      "
      >
        {/* Ambient Glow */}
        <div
          className="
      absolute
      left-1/2
      top-1/2
      h-[400px]
      w-[400px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full  
      bg-blue-500/10
      blur-[120px]
    "
        />

        {/* Floating Card */}
        <div
          className="
      absolute
      -right-4
      top-10
      z-20
      hidden
      w-[260px]
      rounded-3xl
      border
      border-white/10
      bg-white/10
      p-5
      backdrop-blur-2xl
      lg:block
    "
        >
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400" />
            <div className="h-2 w-20 rounded-full bg-white/20" />
          </div>

          <div className="space-y-3">
            <div className="h-14 rounded-2xl bg-white/10" />
            <div className="h-10 rounded-xl bg-white/5" />
            <div className="h-10 rounded-xl bg-white/5" />
          </div>
        </div>

        {/* Main Surface */}
        <div
          className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-white/[0.04]
      shadow-2xl
      backdrop-blur-2xl
    "
          style={{
            transform:
              "perspective(2200px) rotateX(10deg) rotateY(-4deg)",
          }}
        >
          {/* Top Bar */}
          <div
            className="
        flex
        items-center
        gap-2
        border-b
        border-white/10
        px-6
        py-4
      "
          >
            <div className="h-3 w-3 rounded-full bg-red-400/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <div className="h-3 w-3 rounded-full bg-green-400/70" />
          </div>

          {/* Fake Dashboard */}
          <div
            className="
        grid
        aspect-[16/9]
        grid-cols-12
        gap-4
        p-6
        lg:p-10
      "
          >
            {/* Sidebar */}
            <div
              className="
          col-span-3
          hidden
          rounded-3xl
          bg-white/[0.04]
          p-4
          lg:block
        "
            >
              <div className="space-y-4">
                <div className="h-10 rounded-2xl bg-white/10" />
                <div className="h-10 rounded-2xl bg-white/5" />
                <div className="h-10 rounded-2xl bg-white/5" />
                <div className="h-10 rounded-2xl bg-white/5" />
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-9">
              <div className="space-y-4">
                <div
                  className="
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-6
                    "
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="mb-2 h-4 w-28 rounded-full bg-white/20" />
                      <div className="h-8 w-40 rounded-full bg-white/10" />
                    </div>

                    <div className="rounded-2xl bg-green-400/10 px-4 py-2">
                      <div className="h-3 w-16 rounded-full bg-green-400/40" />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div
                      className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          p-4
                        "
                    >
                      <div className="mb-3 h-3 w-16 rounded-full bg-white/20" />

                      <div className="h-8 w-20 rounded-full bg-white/10" />
                    </div>

                    <div
                      className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          p-4
                        "
                    >
                      <div className="mb-3 h-3 w-20 rounded-full bg-white/20" />

                      <div className="h-8 w-24 rounded-full bg-white/10" />
                    </div>

                    <div
                      className="
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          p-4
                        "
                    >
                      <div className="mb-3 h-3 w-14 rounded-full bg-white/20" />

                      <div className="h-8 w-16 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>

                <div className="hidden gap-4 sm:grid sm:grid-cols-2">
                  <div
                    className="
                        rounded-[24px]
                        border
                        border-white/10
                        bg-white/[0.05]
                        p-5
                      "
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-3 w-24 rounded-full bg-white/20" />

                      <div className="h-8 w-8 rounded-xl bg-blue-400/20" />
                    </div>

                    <div className="space-y-3">
                      <div className="h-3 rounded-full bg-white/10" />
                      <div className="h-3 w-4/5 rounded-full bg-white/[0.08]" />
                      <div className="h-3 w-3/5 rounded-full bg-white/[0.06]" />
                    </div>
                  </div>

                  <div
                    className="
                        rounded-[24px]
                        border
                        border-white/10
                        bg-white/[0.05]
                        p-5
                      "
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-3 w-20 rounded-full bg-white/20" />

                      <div className="h-8 w-8 rounded-xl bg-purple-400/20" />
                    </div>

                    <div className="flex h-[90px] items-end gap-2">
                      <div className="h-10 w-full rounded-t-xl bg-white/[0.08]" />
                      <div className="h-16 w-full rounded-t-xl bg-white/[0.12]" />
                      <div className="h-24 w-full rounded-t-xl bg-white/[0.18]" />
                      <div className="h-14 w-full rounded-t-xl bg-white/[0.10]" />
                    </div>
                  </div>
                </div>

                <div
                  className="
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-5
                      "
                >
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="h-4 w-32 rounded-full bg-white/20" />

                    <div className="h-8 w-24 rounded-2xl bg-white/[0.08]" />
                  </div>

                  <div className="space-y-4">
                    <div
                      className="
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.03]
                            px-4
                            py-4
                          "
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-blue-400/20" />

                        <div>
                          <div className="mb-2 h-3 w-28 rounded-full bg-white/20" />
                          <div className="h-3 w-20 rounded-full bg-white/10" />
                        </div>
                      </div>

                      <div className="h-8 w-20 rounded-2xl bg-green-400/10" />
                    </div>

                    <div
                      className="
                              flex
                              items-center
                              justify-between
                              rounded-2xl
                              border
                              border-white/10
                              bg-white/[0.03]
                              px-4
                              py-4
                            "
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-2xl bg-purple-400/20" />

                        <div>
                          <div className="mb-2 h-3 w-24 rounded-full bg-white/20" />
                          <div className="h-3 w-16 rounded-full bg-white/10" />
                        </div>
                      </div>

                      <div className="h-8 w-16 rounded-2xl bg-yellow-400/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div
            className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-br
        from-white/[0.10]
        via-transparent
        to-transparent
      "
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection