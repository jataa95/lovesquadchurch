import Image from "next/image";
import Container from "@/components/ui/Container";
import { leaders } from "@/data/leaders";

/*
 * Leaders: photo, name and role for each person. The first (Senior
 * Pastor) is featured larger: on desktop a 4-column grid where the
 * featured card spans 2x2 and the other four fill the right half;
 * 2 columns on tablets (featured full width); 1 column on phones.
 * Photos are black and white (site-wide) and zoom gently on hover.
 */
export default function LeadersGrid() {
  const [featured, ...rest] = leaders.people;

  return (
    <section id="leaders" className="section-pb">
      <Container>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <Card person={featured} featured />
          {rest.map((person, i) => (
            <Card key={i} person={person} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Card({ person, featured = false }) {
  return (
    <li className={`group flex flex-col ${featured ? "sm:col-span-2 lg:row-span-2" : ""}`}>
      <div
        className={`relative w-full overflow-hidden bg-[#171515] ${
          featured ? "aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:flex-1" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={person.photo}
          alt={`${person.name}, ${person.role}`}
          fill
          sizes={featured ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <p className="heading-font mt-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
        {person.role}
      </p>
      <h3
        className="heading-font mt-1.5 font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
        style={{ fontSize: featured ? "clamp(28px, 3vw, 44px)" : "clamp(20px, 1.8vw, 24px)" }}
      >
        {person.name}
      </h3>
    </li>
  );
}
