import { motion } from "framer-motion";
import { phasePoints } from "../data/resume";

// Signature visual: a "phase diagram" plotting Akshat's growth from metallurgy
// foundations to full-stack + AI systems, drawn on load like a liquidus curve.
export default function PhaseDiagram() {
  const width = 600;
  const height = 320;
  const padding = 40;

  const xs = phasePoints.map((p) => p.x);
  const ys = phasePoints.map((p) => p.y);
  const maxX = Math.max(...xs);
  const maxY = 100;

  const scaleX = (x) => padding + (x / maxX) * (width - padding * 2);
  const scaleY = (y) => height - padding - (y / maxY) * (height - padding * 2);

  const linePath = phasePoints
    .map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(p.x)} ${scaleY(p.y)}`)
    .join(" ");

  const areaPath = `${linePath} L ${scaleX(maxX)} ${height - padding} L ${scaleX(0)} ${height - padding} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* axes */}
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#6B5B8A" strokeWidth="1" />
      <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#6B5B8A" strokeWidth="1" />
      <text x={width - padding} y={height - padding + 20} textAnchor="end" fontSize="10" fill="#6B5B8A" fontFamily="JetBrains Mono, monospace">
        TIME →
      </text>
      <text x={padding - 10} y={padding} textAnchor="end" fontSize="10" fill="#6B5B8A" fontFamily="JetBrains Mono, monospace">
        ↑ COMPLEXITY
      </text>

      {/* filled area under curve */}
      <motion.path
        d={areaPath}
        fill="url(#areaGrad)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />

      {/* animated liquidus-style line */}
      <motion.path
        d={linePath}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />

      {/* phase points */}
      {phasePoints.map((p, i) => (
        <motion.g
          key={p.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.25, duration: 0.4 }}
        >
          <circle cx={scaleX(p.x)} cy={scaleY(p.y)} r="5" fill="#0B0714" stroke="#D946EF" strokeWidth="2" />
          <text
            x={scaleX(p.x)}
            y={scaleY(p.y) - 14}
            textAnchor={i === phasePoints.length - 1 ? "end" : "middle"}
            fontSize="9"
            fill="#EDE9F7"
            fontFamily="JetBrains Mono, monospace"
          >
            {p.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
