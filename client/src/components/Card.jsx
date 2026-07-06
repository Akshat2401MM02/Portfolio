import { motion } from "framer-motion";

export default function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className={`card-glass rounded-xl p-6 transition-shadow duration-300 hover:shadow-glow hover:border-fuchsia/40 ${className}`}
    >
      {children}
    </motion.div>
  );
}
