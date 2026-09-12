import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Wave } from "@/components/Wave";
import { events, pillars, site } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "PURE3ON — Engaging. Environmental. Education." },
      {
        name: "description",
        content:
          "PURE3ON is a student-led non-profit equipping young minds with the knowledge, skills, and opportunities to create real environmental change. Every action counts.",
      },
      { property: "og:title", content: "PURE3ON — Engaging. Environmental. Education." },
      {
        property: "og:description",
        content:
          "A student-led environmental non-profit shaping the next generation of environmental leaders. Every action counts. Spread awareness.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "PURE3ON",
          description:
            "Student-led non-profit equipping young minds with the knowledge, skills, and opportunities to create real environmental change.",
          email: site.contactEmail,
        }),
      },
    ],
  }),
});

const pillarColor: Record<string, string> = {
  leaf: "text-leaf",
  ocean: "text-ocean",
  emer: "text-emer",
};

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center bg-mist px-6 py-24 text-center">
        <Reveal>
          <p className="mb-6 inline-block rounded-full border border-ocean/20 bg-background px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-ocean">
            Student-Led Environmental Education
          </p>
          <h1 className="font-display text-7xl font-extrabold tracking-tighter text-deep md:text-9xl">
            PURE<span className="text-ocean">3</span>ON
          </h1>
          <p className="mt-4 font-display text-xl font-bold text-mist-foreground md:text-2xl">
            {site.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-body md:text-xl">
            {site.motto} We equip young minds with the knowledge, skills, and opportunities
            to create real change for our planet.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#mission"
              className="rounded-full bg-deep px-8 py-3 font-semibold text-deep-foreground transition-colors hover:bg-ocean"
            >
              Our Mission
            </a>
            <a
              href={`mailto:${site.contactEmail}`}
              className="rounded-full border-2 border-deep px-8 py-3 font-semibold text-deep transition-colors hover:bg-deep hover:text-deep-foreground"
            >
              Get Involved
            </a>
          </div>
        </Reveal>
        <Wave />
      </section>

      {/* Mission */}
      <section id="mission" className="bg-background px-6 py-24">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-mist">
            <svg
              className="h-12 w-12 text-ocean"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <h2 className="mb-6 font-display text-4xl font-extrabold tracking-tight text-ink">
            Our Mission
          </h2>
          {site.mission.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-4 text-lg leading-relaxed text-body">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </section>

      {/* Three Pillars */}
      <section className="bg-cloud px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink">
              Our Three Pillars
            </h2>
            <p className="mt-3 text-lg text-subtle">
              The foundation of everything we do.
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.name} delay={i * 120}>
                <article className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div
                    className={`mb-4 text-lg font-bold uppercase tracking-widest ${pillarColor[pillar.color]}`}
                  >
                    {pillar.name}
                  </div>
                  <p className="leading-relaxed text-body">{pillar.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink">
              Our Events
            </h2>
            <p className="mt-3 text-lg text-subtle">
              Where small habits turn into big impact.
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {events.map((event, i) => (
              <Reveal key={event.name} delay={i * 120}>
                <article className="group">
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
                    <img
                      src={event.photo}
                      alt={event.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-deep/15 transition-colors duration-300 group-hover:bg-deep/0" />
                  </div>
                  <h3 className="text-xl font-bold text-ink">{event.name}</h3>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <p className="inline-block rounded-full bg-mist px-6 py-2.5 font-semibold text-mist-foreground">
              More events coming soon!
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-mist px-6 pt-24 pb-32 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-deep">
            Meet the students behind the wave
          </h2>
          <p className="mt-4 text-lg text-body">
            Dedication. Expertise. Passion. Our board is made up of students and mentors
            working together for a sustainable future.
          </p>
          <Link
            to="/team"
            className="mt-8 inline-block rounded-full bg-deep px-8 py-3 font-semibold text-deep-foreground transition-colors hover:bg-ocean"
          >
            Meet the Team
          </Link>
        </Reveal>
        <Wave />
      </section>
    </div>
  );
}
