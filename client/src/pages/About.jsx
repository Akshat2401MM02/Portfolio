import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { education, leadership, profile } from "../data/resume";

export default function About() {
  return (
    <div className="py-16 sm:py-20">
      <SectionHeading eyebrow="Profile" title="About Me" />
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-16">
        <img
          src="/about.jpeg"
          alt={profile.name}
          className="w-40 h-40 rounded-2xl object-cover border-2 border-violet/40 shadow-glow shrink-0"
        />
        <p className="text-lavender/80 max-w-2xl leading-relaxed">
          I'm {profile.name}, a Metallurgical and Materials Engineering student at IIT Patna. My
          coursework covers phase transformation, mechanical behaviour of materials, welding and
          solidification — and outside the lab, I build full-stack software and solve algorithmic
          problems for fun. Both disciplines reward the same instinct: understand the underlying
          structure before you try to change it.
        </p>
      </div>

      <SectionHeading eyebrow="Timeline" title="Education" />
      <div className="grid sm:grid-cols-3 gap-5 mb-16">
        {education.map((ed, i) => (
          <Card key={ed.school} delay={i * 0.1}>
            <h3 className="font-mono text-sm text-fuchsia mb-2">{ed.school}</h3>
            <p className="text-lavender/90 text-sm mb-1">{ed.detail}</p>
            {ed.meta && <p className="text-mist text-xs font-mono">{ed.meta}</p>}
          </Card>
        ))}
      </div>

      <SectionHeading eyebrow="Beyond Academics" title="Leadership & Positions of Responsibility" />
      <div className="grid sm:grid-cols-2 gap-5">
        {leadership.map((role, i) => (
          <Card key={role.role} delay={i * 0.1}>
            <h3 className="font-mono text-sm text-fuchsia mb-2">{role.role}</h3>
            <p className="text-lavender/85 text-sm leading-relaxed">{role.detail}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
