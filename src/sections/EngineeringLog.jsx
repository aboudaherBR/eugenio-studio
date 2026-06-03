import { motion } from "framer-motion"

const updates = [
    {
        week: "Week 01",
        title: "Building operational scheduling workflows",
        description:
            "Designing scalable scheduling flows focused on real-world operational logic and service management.",
    },
    {
        week: "Week 02",
        title: "Availability engine and conflict validation",
        description:
            "Implementing business rules for time conflicts, availability validation and booking consistency.",
    },
    {
        week: "Week 03",
        title: "Authentication flows and protected sessions",
        description:
            "Structuring session-based authentication flows and protected operational dashboards.",
    },
]

function EngineeringLog() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
        relative
        mx-auto
        max-w-[1200px]
        px-6
        py-32
        md:px-10
      "
        >
            {/* Glow */}
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
          bg-blue-500/5
          blur-[140px]
        "
            />

            {/* Header */}
            <div className="relative mb-20 text-center">
                <div
                    className="
            mb-6
            text-xs
            tracking-[0.3em]
            text-white/40
          "
                >
                    ENGINEERING LOG
                </div>

                <h2
                    className="
            mx-auto
            max-w-[900px]
            text-balance
            font-black
            leading-[0.95]
            tracking-tight
            text-white
            text-[clamp(2.5rem,5vw,5rem)]
          "
                >
                    Building systems publicly,
                    <br />
                    one iteration at a time.
                </h2>
            </div>

            {/* Timeline */}
            <div className="relative mx-auto max-w-[900px]">
                {/* Vertical Line */}
                <div
                    className="
            absolute
            left-[11px]
            top-0
            h-full
            w-px
            bg-white/10
          "
                />

                <div className="space-y-16">
                    {updates.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: index * 0.1,
                            }}
                            className="relative flex gap-8"
                        >
                            {/* Dot */}
                            <div
                                className="
                                    relative
                                    z-10  
                                    mt-2
                                    h-6
                                    w-6
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-black
                                    backdrop-blur-xl
                                    "
                            >
                                <div
                                    className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    h-2
                                    w-2
                                    -translate-x-1/2
                                    -translate-y-1/2
                                    rounded-full
                                    bg-blue-400
                                    "
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div
                                    className="
                                    mb-3
                                    text-sm
                                    tracking-wide
                                    text-white/40
                                    "
                                >
                                    {item.week}
                                </div>

                                <h3
                                    className="
                                    text-2xl
                                    font-semibold
                                    tracking-tight
                                    text-white
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                    mt-4
                                    max-w-[700px]
                                    text-base
                                    leading-relaxed
                                    text-white/60
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default EngineeringLog