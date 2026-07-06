import { motion } from "framer-motion";
import { profile, skills } from "../data/resume";
import PhaseDiagram from "../components/PhaseDiagram";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="axis-label mb-4">Metallurgical Engineering · IIT Patna</p>
          <h1 className="text-4xl sm:text-5xl font-mono font-extrabold leading-tight mb-6">
            Hi, I'm <span className="gradient-text">{profile.name}</span>.
          </h1>
          <p className="text-lg text-lavender/80 mb-8 max-w-md">
            I study how materials transform under stress — and build software the
            same way: iterate, test, and let structure emerge from strong fundamentals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button to="/projects">View Projects</Button>
            <Button to="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-glass rounded-2xl p-6"
        >
          <PhaseDiagram />
        </motion.div>
      </div>

      <section className="mt-24">
        <p className="axis-label mb-6">Toolkit</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <Card key={category} delay={i * 0.08}>
              <h3 className="font-mono text-sm uppercase tracking-widest text-fuchsia mb-3">{category}</h3>
              <ul className="space-y-1 text-sm text-lavender/85">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
