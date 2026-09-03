import { skillGroups } from "../data/skills.js";
import { Reveal } from "./Reveal.jsx";

export function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal className="section__inner">
        <h2 className="section__heading">Skills</h2>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills-group">
              <h3 className="skills-group__label">{group.label}</h3>
              <div className="skills-group__items">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
