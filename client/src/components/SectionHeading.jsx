import { motion } from "framer-motion";

// A section heading styled like a phase-diagram axis label + tick,
// recolored into the violet/fuchsia system so it reads consistently across the site.
export default function SectionHeading({ eyebrow, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      {eyebrow && <p className="axis-label mb-2">{eyebrow}</p>}
      <div className="flex items-center gap-4">
        <span className="w-3 h-3 border border-fuchsia rotate-45 shrink-0" />
        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-lavender">{title}</h2>
        <span className="flex-1 h-px bg-violet/20" />
      </div>
    </motion.div>
  );
}
