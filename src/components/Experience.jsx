import { experience } from "../data/experience.js";
import { Reveal } from "./Reveal.jsx";

export function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal className="section__inner">
        <h2 className="section__heading">Experience</h2>
        <p className="section__intro">
          Five years across five companies, moving between backend, frontend,
          and systems integration.
        </p>
        <ol className="experience-list">
          {experience.map((job) => (
            <li key={job.company} className="experience-item">
              <div className="experience-item__head">
                <h3 className="experience-item__role">
                  {job.role} · {job.company}
                </h3>
                <p className="experience-item__meta">
                  {job.period} — {job.location}
                </p>
              </div>
              <p className="experience-item__summary">{job.summary}</p>
              <ul className="experience-item__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="experience-item__stack">
                {job.stack.map((tech) => (
                  <span key={tech} className="stack-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
