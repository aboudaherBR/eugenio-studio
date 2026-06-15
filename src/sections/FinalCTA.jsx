import { motion } from "framer-motion"

function FinalCTA() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
            }}
            id="cta"    
            className="
                relative
                overflow-hidden
                px-6
                py-40
                text-center
                md:px-10
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
                bg-blue-500/8
                blur-[140px]
            "/>

            {/* Content */}
            <div className="relative mx-auto max-w-[1000px]">
                <h2
                    className="
                    text-balance
                    font-black
                    leading-[0.95]
                    tracking-tight
                    text-white
                    text-[clamp(2.5rem,6vw,5.5rem)]
                    "
                >
                    Let’s build meaningful
                    <br />
                    software systems.
                </h2>

                <p
                    className="
                        mx-auto
                        mt-8
                        max-w-[700px]
                        text-base
                        leading-relaxed
                        text-white/60
                        sm:text-lg
                        md:text-xl
                    "
                >
                    Focused on operational workflows, scalable
                    architecture and modern product engineering.
                </p>

                {/* Links */}
                <div
                    className="
                        mt-14
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-6
                     "
                >
                    <a
                        href="https://github.com/aboudaherBR"
                        target="_blank"
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-5
                            py-3
                            text-sm
                            text-white/70
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:bg-white/[0.08]                            
                            hover:border-white/20
                        "
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/eugenio-boudaher"
                        target="_blank"
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-5
                            py-3
                            text-sm
                            text-white/70
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:bg-white/[0.08]                            
                            hover:border-white/20
                            "
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:eugeniopython@gmail.com"
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-5
                            py-3
                            text-sm
                            text-white/70
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:bg-white/[0.08]
                            hover:border-white/20
                        "
                    >
                        Email
                    </a>
                    <a
                        href="https://wa.me/5585989570528"
                        target="_blank"
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-5
                            py-3
                            text-sm
                            text-white/70
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:bg-white/[0.08]
                            hover:border-white/20
                        "
                    >
                        WhatsApp
                    </a>
                </div>

                {/* Signature */}
                <div
                    className="
            mt-20
            text-xs
            tracking-[0.3em]
            text-white/20
          "
                >
                    EUGENIO BOUDAHER — 2026
                </div>
            </div>
        </motion.section>
    )
}

export default FinalCTA