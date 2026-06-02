import { motion } from "framer-motion"

function EngineeringPhilosophy() {
    return (
        <motion.section
            className="
                relative
                mx-auto
                flex
                max-w-[1400px]
                flex-col
                items-center
                px-6
                py-32
                text-center
                md:px-10
            "
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {/* Ambient Glow */}
            <div
                className="
          absolute
          top-1/2
          left-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/5
          blur-[120px]
        "
            />

            {/* Label */}
            <div
                className="
          relative
          mb-8
          text-xs
          tracking-[0.3em]
          text-white/40
        "
            >
                ENGINEERING PHILOSOPHY
            </div>

            {/* Headline */}
            <h2
                className="
          relative
          max-w-[1000px]
          text-balance
          font-black
          leading-[0.95]
          tracking-tight
          text-white
          text-[clamp(2.5rem,6vw,5.5rem)]
        "
            >
                Software is ultimately
                <br />
                about systems, behavior
                <br />
                and human workflows.
            </h2>

            {/* Paragraph */}
            <p
                className="
                    relative
                    mt-10
                    max-w-[850px]
                    text-base
                    leading-relaxed
                    text-white/60
                    sm:text-lg
                    md:text-xl
                    "
            >
                I’m deeply interested in systems thinking, probability,
                philosophy and economics — disciplines that heavily
                influence how I approach software architecture,
                operational workflows and scalable product design.
            </p>
        </motion.section>
    )
}

export default EngineeringPhilosophy