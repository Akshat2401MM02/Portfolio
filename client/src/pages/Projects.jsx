import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import Button from "../components/Button";
import { getProjects } from "../api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    getProjects()
      .then((data) => {
        setProjects(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <div className="py-16 sm:py-20">
      <SectionHeading eyebrow="Portfolio" title="Projects" />

      {status === "loading" && (
        <p className="text-mist font-mono text-sm">Loading projects from the database…</p>
      )}

      {status === "error" && (
        <p className="text-mist font-mono text-sm">
          Couldn't reach the API. Make sure the server is running and MONGODB_URI is set (see README).
        </p>
      )}

      {status === "ready" && (
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Card key={p._id} delay={i * 0.08} className="flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-mono text-lg text-lavender">{p.title}</h3>
                <span className="axis-label whitespace-nowrap">{p.status}</span>
              </div>
              <p className="text-lavender/80 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack?.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-1 rounded border border-violet/30 text-violet"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {p.link && (
                <Button href={p.link} variant="outline" className="self-start !px-4 !py-2 text-xs">
                  View Code
                </Button>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
