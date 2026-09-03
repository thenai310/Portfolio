import { contact } from "../data/contact.js";
import { Reveal } from "./Reveal.jsx";

export function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal className="section__inner">
        <h2 className="section__heading">Get in touch</h2>
        <p className="section__intro">
          Best reached by email. Based in Madrid, open to remote and full-stack
          roles.
        </p>
        <div className="contact__grid">
          <a className="contact__item" href={`mailto:${contact.email}`}>
            <span className="contact__label">Email</span>
            <span className="contact__value">{contact.email}</span>
          </a>
          <a
            className="contact__item"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__label">LinkedIn</span>
            <span className="contact__value">daniel-valle</span>
          </a>
          <a
            className="contact__item"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact__label">GitHub</span>
            <span className="contact__value">thenai310</span>
          </a>
          <a
            className="contact__item"
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
          >
            <span className="contact__label">Phone</span>
            <span className="contact__value">{contact.phone}</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
