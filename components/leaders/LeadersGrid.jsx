import Image from "next/image";
import Container from "@/components/ui/Container";
import { leaders } from "@/data/leaders";

/*
 * Leaders: photo, position and name for each person. The first (Senior
 * Pastor) sits on its own row, centred and only slightly larger than the
 * others; the rest follow in a row of 4 on desktop, 2 on tablets and 1
 * on phones. Photos are black and white (site-wide) and zoom on hover.
 */
export default function LeadersGrid() {
  const [featured, ...rest] = leaders.people;

  return (
    <section id="leaders" className="section-pb">
      <Container>
        <div className="mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[360px]">
          <Card person={featured} featured />
        </div>
        <ul className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {rest.map((person, i) => (
            <li key={i}>
              <Card person={person} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Card({ person, featured = false }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#171515]">
        <Image
          src={person.photo}
          alt={`${person.name}, ${person.role}`}
          fill
          sizes={featured ? "360px" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <p className="heading-font mt-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
        {person.role}
      </p>
      <h3
        className="heading-font mt-1.5 font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
        style={{ fontSize: featured ? "clamp(26px, 2.4vw, 34px)" : "clamp(20px, 1.8vw, 24px)" }}
      >
        {person.name}
      </h3>
    </div>
  );
}
