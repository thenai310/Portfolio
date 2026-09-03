import { Reveal } from "./Reveal.jsx";

export function About() {
  return (
    <section id="about" className="section">
      <Reveal className="section__inner">
        <h2 className="section__heading">About</h2>
        <div className="about__text">
          <p>
            I&apos;m Daniel, a full-stack engineer currently based in Madrid.
            Over the past five years I&apos;ve worked across BI dashboards,
            backend APIs, and healthcare data systems for companies in Cuba,
            Spain, and the US — usually landing wherever backend meets frontend.
          </p>
          <p>
            I like code that makes you think rather than the kind that makes you
            repeat yourself. I&apos;m currently finishing a Master&apos;s in
            Computer Science at Universidad Carlos III de Madrid, after a
            Bachelor&apos;s from the University of Havana.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
