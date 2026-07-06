import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { getAchievements } from "../api";

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    getAchievements()
      .then((data) => {
        setAchievements(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  const grouped = achievements.reduce((acc, a) => {
    acc[a.category] = acc[a.category] || [];
    acc[a.category].push(a);
    return acc;
  }, {});

  return (
    <div className="py-16 sm:py-20">
      <SectionHeading eyebrow="Track Record" title="Achievements" />

      {status === "loading" && (
        <p className="text-mist font-mono text-sm">Loading achievements from the database…</p>
      )}
      {status === "error" && (
        <p className="text-mist font-mono text-sm">
          Couldn't reach the API. Make sure the server is running and MONGODB_URI is set (see README).
        </p>
      )}

      {status === "ready" && (
        <div className="space-y-10">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-mono text-sm uppercase tracking-widest text-fuchsia mb-4">
                {category}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {items.map((a, i) => (
                  <Card key={a._id} delay={i * 0.06} className="!p-5">
                    <p className="text-lavender/90 text-sm leading-relaxed">{a.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
