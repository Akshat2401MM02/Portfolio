import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia focus-visible:ring-offset-2 focus-visible:ring-offset-void";

function getStyles(variant) {
  return variant === "solid"
    ? "bg-grad-primary text-lavender shadow-glow hover:shadow-[0_0_55px_-6px_rgba(217,70,239,0.55)] hover:-translate-y-0.5"
    : "border border-violet/40 text-lavender hover:border-fuchsia hover:bg-violet/10 hover:-translate-y-0.5";
}

// `to`     -> internal SPA navigation (react-router Link)
// `href`   -> external link (opens in new tab)
// neither  -> acts as a submit/click button
export default function Button({ children, to, href, onClick, type = "button", variant = "solid", className = "", disabled = false }) {
  const styles = `${base} ${getStyles(variant)} ${disabled ? "opacity-60 cursor-not-allowed hover:translate-y-0" : ""} ${className}`;

  if (to) {
    return (
      <motion.div whileTap={{ scale: 0.96 }} className="inline-block">
        <Link to={to} className={styles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a whileTap={{ scale: 0.96 }} href={href} target="_blank" rel="noreferrer" className={styles}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </motion.button>
  );
}
