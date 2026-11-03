import Image from "next/image";
import Container from "@/components/ui/Container";

/*
 * The site's standard page hero, centred:
 *
 *   ORANGE grey          ← small two-tone label (`label={["OUR", "CHURCH"]}`)
 *   BIG TITLE            ← the page name (h1)
 *   [ photo ]            ← optional, full container width
 *   intro text           ← optional
 *   { BUTTON }           ← optional `actions`
 *
 * Top padding clears the fixed navbar with room to breathe. There is no
 * bottom padding: the next section's own top padding (section-py) sets
 * the gap, so it matches across pages. Pass `pb` when the hero is followed
 * by something without its own padding.
 */
export default function PageHero({
  id,
  label,
  title,
  image,
  imageAlt = "",
  intro,
  actions,
  children,
  pb = false,
  className = "",
}) {
  const [orange, grey] = Array.isArray(label) ? label : [label, ""];
  return (
    <section
      id={id}
      className={`relative w-full bg-cream pt-[calc(var(--nav-h)+40px)] lg:pt-[calc(var(--nav-h)+56px)] ${
        pb ? "pb-(--section-space)" : ""
      } ${className}`}
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          {label && (
            <p
              className="heading-font font-bold uppercase leading-none tracking-[-0.035em]"
              style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
            >
              <span className="text-[#ED4823]">{orange}</span>
              {grey && <span className="text-[#4A4A4A]"> {grey}</span>}
            </p>
          )}
          <h1
            className="heading-font max-w-full font-bold uppercase leading-[0.82] tracking-[-0.055em] text-[#4A4A4A]"
            style={{ fontSize: "clamp(3.4rem, 13.9vw, 200px)" }}
          >
            {title}
          </h1>

          {image && (
            <div className="relative mt-6 h-[260px] w-full overflow-hidden bg-[#171515] sm:h-[340px] md:h-[380px] lg:mt-8 lg:h-[460px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          )}

          {(intro || actions) && (
            <div className="mt-8 flex max-w-[620px] flex-col items-center lg:mt-10">
              {intro && (
                <p className="text-[15px] leading-[24px] text-[#575656] lg:text-[16px]">{intro}</p>
              )}
              {actions && (
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                  {actions}
                </div>
              )}
            </div>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
