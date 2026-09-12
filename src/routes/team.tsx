import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Wave } from "@/components/Wave";
import { adultBoard, alumni, studentBoard, type TeamMember } from "@/lib/content";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Our Team — PURE3ON" },
      {
        name: "description",
        content:
          "Meet the PURE3ON student board, adult board, and alumni — dedicated young leaders and mentors driving environmental education at Walton High School and beyond.",
      },
      { property: "og:title", content: "Our Team — PURE3ON" },
      {
        property: "og:description",
        content:
          "Meet the student leaders and adult mentors behind PURE3ON's environmental education programs.",
      },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
});

function MemberCard({ member, delay = 0 }: { member: TeamMember; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="h-full rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`Portrait of ${member.name}`}
            loading="lazy"
            className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-mist object-cover"
          />
        ) : (
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-mist bg-mist font-display text-2xl font-extrabold text-ocean">
            {member.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
        )}
        <h3 className="font-bold text-ink">{member.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-ocean">{member.role}</p>
        {member.detail && <p className="mt-1 text-sm text-subtle">{member.detail}</p>}
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="mt-2 inline-block text-sm font-medium text-emer underline-offset-2 hover:underline"
          >
            {member.email}
          </a>
        )}
      </article>
    </Reveal>
  );
}

function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-mist px-6 py-24 pb-36 text-center">
        <Reveal>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-deep md:text-6xl">
            Our Team
          </h1>
          <p className="mt-4 text-xl font-medium text-mist-foreground">
            Dedication. Expertise. Passion.
          </p>
        </Reveal>
        <Wave className="fill-cloud" />
      </section>

      {/* Student Board */}
      <section className="bg-cloud px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Student Board
            </h2>
            <p className="mt-2 text-lg text-subtle">Walton High School student leaders</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {studentBoard.map((member, i) => (
              <MemberCard key={member.name} member={member} delay={(i % 4) * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Adult Board */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Adult Board Members
            </h2>
            <p className="mt-2 text-lg text-subtle">
              Mentors guiding the next generation of environmental stewards
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {adultBoard.map((member, i) => (
              <MemberCard key={member.name} member={member} delay={(i % 4) * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Former Student Board */}
      <section className="bg-cloud px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Former Student Board
            </h2>
            <p className="mt-2 text-lg text-subtle">
              Alumni who helped build PURE3ON from the start
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {alumni.map((member, i) => (
              <MemberCard key={member.name} member={member} delay={(i % 4) * 100} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
