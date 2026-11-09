import Image from "next/image";
import PastEventCard from "./components/PastEventCard";
import StepCard from "./components/StepCard";
import CONSTANTS from "./constants";
import Blob from "./components/Blob";

export default function Home() {
  return (
    <main className="site-shell">
      <Blob />
      <header className="site-header">
        <a className="square-logo" href="/" aria-label="Home">
          <Image
            src="/filmfest-logo.png"
            alt="Film Club"
            width={48}
            height={48}
            priority
          />
        </a>

        <a className="instagram-link" href={CONSTANTS.INSTAGRAM_URL} aria-label="Instagram">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </header>

      <section className="hero">
        <h1></h1>
        <Image
          className="wide-logo rough"
          src="/filmfest-wide.png"
          alt="Film Club"
          width={900}
          height={220}
          priority
        />

        <p className="hero-tagline rough">Make a <span className="instrument">movie.</span></p>
        <p className="hero-description">
          SPHS's Tiger Film Festival
        </p>
      </section>

      <section className="steps-section" aria-labelledby="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">Submission info</p>
          <h2 id="how-it-works">Create a film</h2>
        </div>

        <div className="steps-list">
          <StepCard number="📜" title="Read the regulations" actions={[{
            label: <><i className="fas fa-chevron-right"></i> View regulations (SPUSD)</>,
            href: "https://docs.google.com/document/d/1OObgexe2uygSJ3i9I2qxzGVIwhEbbM8_9p6MI7oqryc/edit?usp=sharing"
          }]}>
            Read our basic rules & guidelines for submitting a film.
          </StepCard>

          <StepCard number="🎥" title="Make a film">
            Get a group of friends (or solo) & make any kind of film (regardless of skill level)!
          </StepCard>

          <StepCard number="💻" title="Submit your film" actions={[{
            label: <><i className="fas fa-chevron-right"></i> Opening soon</>,
            variant: "button-soft"
          }]}>
            Submit your film through our Google Form before the deadline.
          </StepCard>

          <StepCard number="🎉" title="Attend the festival">
            Come see the films in person! Details announced closer to the event date (early May 2027).
          </StepCard>
        </div>
      </section>

      <section className="events-section" aria-labelledby="past-events">
        <div className="section-heading">
          <p className="eyebrow">Archive</p>
          <h2 id="past-events">Past events</h2>
        </div>

        <PastEventCard
          title="Tiger Cub Film Festival 26"
          subtitle="SPMS Film Club 2026"
          // href="#films"
          previewImage="/tcff25.jpg"
        />

        <PastEventCard
          title="Tiger Cub Film Festival 25"
          subtitle="SPMS Film Club 2025"
          href="https://drive.google.com/drive/u/1/folders/1VKoPYOZdB1dePAnOqKqxcAByhQvcngVI"
          previewImage="/tcff25.jpg"
        />
      </section>

      <footer className="site-footer" id="instagram">
        <p>Questions, ideas, or films?</p>
        <a href={`mailto:` + CONSTANTS.CONTACT_EMAIL} className="footer-link">
          <i className="fas fa-envelope"></i> gavin@tigerfilmfest.com
        </a>
        <a href={CONSTANTS.INSTAGRAM_URL} className="footer-link">
          <i className="fab fa-instagram"></i> @sphsfilmmakingclub
        </a>
        <a>
          <i className="fas fa-school"></i> gavinfox8@stu.spusd.net
        </a>
      </footer>
    </main>
  );
}