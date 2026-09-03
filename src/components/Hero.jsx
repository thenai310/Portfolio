import { contact } from "../data/contact.js";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <p className="hero__location">{contact.location}</p>
        <h1 className="hero__name">{contact.name}</h1>
        <p className="hero__tagline">{contact.tagline}</p>
        <p className="hero__lede">
          I move between backend, frontend, and everything in between —
          integrating BI systems in Havana, building APIs and microservices for
          teams in Spain, and now working on a healthcare platform for a company
          in the US.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#experience">
            See my experience
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
