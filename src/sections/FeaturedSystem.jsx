import { motion } from "framer-motion"

function FeaturedSystem() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        flex
        max-w-[1600px]
        flex-col
        gap-16
        px-6
        pt-20 pb-32
        md:px-10
        lg:flex-row
        lg:items-center
        lg:gap-24
      "
    >
      {/* Left Content */}
      <div className="flex-1">
        <div
          className="
            mb-6
            text-xs
            tracking-[0.3em]
            text-white/40
          "
        >
          FEATURED SYSTEM
        </div>

        <h2
          className="
            max-w-[700px]
            text-balance
            font-black
            leading-[0.95]
            tracking-tight
            text-white
            text-[clamp(2.5rem,5vw,5rem)]
          "
        >
          Operational scheduling
          <br />
          software built for
          <br />
          real-world workflows.
        </h2>

        <p
          className="
            mt-8
            max-w-[650px]
            text-base
            leading-relaxed
            text-white/60
            sm:text-lg
            md:text-xl
          "
        >
          A modern SaaS scheduling platform focused on
          operational workflows, availability logic,
          authentication flows and scalable business rules
          for real-world service operations.
        </p>

        {/* Pills */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            gap-3
          "
        >
          {[
            "React",
            "Node.js",
            "PostgreSQL",
            "Session Auth",
            "Business Rules",
            "SaaS Architecture",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-4
                py-2
                text-sm
                text-white/70
                backdrop-blur-xl
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Right Mockup */}
      <div className="relative flex-1">
        {/* Glow */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        {/* Surface */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.04]
            shadow-2xl
            backdrop-blur-2xl
          "
          style={{
            transform:
              "perspective(2200px) rotateY(-6deg) rotateX(6deg)",
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

          {/* Fake Product */}
          <div className="space-y-6 p-6 lg:p-8">
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.05]
                p-6
              "
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="mb-2 h-4 w-24 rounded-full bg-white/20" />
                  <div className="h-8 w-40 rounded-full bg-white/10" />
                </div>

                <div className="h-10 w-28 rounded-2xl bg-green-400/10" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="h-20 rounded-2xl bg-white/[0.05]" />
                <div className="h-20 rounded-2xl bg-white/[0.05]" />
                <div className="h-20 rounded-2xl bg-white/[0.05]" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-5
                "
              >
                <div className="mb-4 h-4 w-28 rounded-full bg-white/20" />

                <div className="space-y-3">
                  <div className="h-3 rounded-full bg-white/10" />
                  <div className="h-3 w-4/5 rounded-full bg-white/[0.08]" />
                  <div className="h-3 w-3/5 rounded-full bg-white/[0.06]" />
                </div>
              </div>

              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-5
                "
              >
                <div className="mb-4 h-4 w-20 rounded-full bg-white/20" />

                <div className="flex h-[90px] items-end gap-2">
                  <div className="h-10 w-full rounded-t-xl bg-white/[0.08]" />
                  <div className="h-16 w-full rounded-t-xl bg-white/[0.12]" />
                  <div className="h-24 w-full rounded-t-xl bg-white/[0.18]" />
                  <div className="h-14 w-full rounded-t-xl bg-white/[0.10]" />
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
              from-white/[0.08]
              via-transparent
              to-transparent
            "
          />
        </div>
      </div>
    </motion.section>
  )
}

export default FeaturedSystem