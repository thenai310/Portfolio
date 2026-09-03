import { education, spokenLanguages } from "../data/education.js";
import { Reveal } from "./Reveal.jsx";

export function Education() {
  return (
    <section id="education" className="section">
      <Reveal className="section__inner">
        <h2 className="section__heading">Education</h2>
        <ul className="education-list">
          {education.map((item) => (
            <li key={item.school} className="education-item">
              <div>
                <p className="education-item__school">{item.school}</p>
                <p className="education-item__degree">{item.degree}</p>
              </div>
              <p className="education-item__meta">
                {item.period} — {item.location}
              </p>
            </li>
          ))}
        </ul>
        <div className="languages">
          <h3 className="skills-group__label">Languages</h3>
          <ul className="languages-list">
            {spokenLanguages.map((lang) => (
              <li key={lang.name} className="language-item">
                <span>{lang.name}</span>
                <span className="language-item__level">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
