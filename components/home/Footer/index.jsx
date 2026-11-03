"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUp } from "lucide-react";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import SpotlightPhoto from "@/components/ui/SpotlightPhoto";
import { footer } from "@/data/footer";

gsap.registerPlugin(useGSAP);

/* Brand icons (lucide no longer ships brand logos). */
const ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.1v3h2.5V21h2.9Z" />
    </svg>
  ),
  Telegram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M21.4 4.3 18.3 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.5.5-1 .5l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.5 13 2 11.6c-1-.3-1-1 .2-1.5l17.9-6.9c.8-.3 1.6.2 1.3 1.1Z" />
    </svg>
  ),
};

/*
 * Footer: full black and white photo, LoveSquad graphic + scrolling text
 * on the left, invitation + address + button on the right, all links in
 * two rows with social icons on the far right.
 *
 * Desktop mouse effect: a soft spotlight follows the cursor and lifts the
 * darkness off the photo around it; the photo and the graphic drift a
 * little in opposite directions (parallax).
 */
export default function Footer() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const mm = gsap.matchMedia();
      mm.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const brand = gsap.utils.selector(root)("[data-foot-brand]");
          const brandX = gsap.quickTo(brand, "x", { duration: 1, ease: "power3.out" });
          const brandY = gsap.quickTo(brand, "y", { duration: 1, ease: "power3.out" });

          // The graphic drifts with the mouse (the photo, in SpotlightPhoto,
          // drifts the other way).
          const onMove = (e) => {
            const r = root.getBoundingClientRect();
            brandX(((e.clientX - r.left) / r.width - 0.5) * 24);
            brandY(((e.clientY - r.top) / r.height - 0.5) * 16);
          };
          const onLeave = () => {
            brandX(0);
            brandY(0);
          };

          root.addEventListener("mousemove", onMove);
          root.addEventListener("mouseleave", onLeave);
          return () => {
            root.removeEventListener("mousemove", onMove);
            root.removeEventListener("mouseleave", onLeave);
          };
        }
      );
      return () => mm.revert();
    },
    { scope: rootRef }
  );

  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={rootRef}
      id="homepage-bottom"
      className="relative isolate overflow-hidden bg-[#0E0E0E] text-[#F9E9D3]"
    >
      {/* Black and white photo with the mouse spotlight (shared with the menu) */}
      <SpotlightPhoto src={footer.photo} />

      <div className="mx-auto max-w-7xl px-8 section-pt pb-8 sm:px-12 lg:px-20 xl:px-28">
        {/* ---------- Top: graphic left, details right */}
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Left: graphic with the scrolling text running off its edges */}
          <div data-foot-brand className="hidden w-[200px] flex-col items-center will-change-transform sm:w-[240px]">
            <div className="relative h-[150px] w-[160px] sm:h-[180px] sm:w-[190px] lg:h-[106px] lg:w-[112px] xl:h-[137px] xl:w-[144px]">
              <Image
                src="/images/footer/lovesquad-graphic-cream.svg"
                alt="LoveSquad Church"
                fill
                className="object-contain"
              />
            </div>
            <div className="footer-marquee mt-5 w-[300px] [mask-image:linear-gradient(90deg,transparent,black_18%,black_82%,transparent)] sm:w-[360px]">
              <div
                className="footer-marquee-track"
                // Slow, calm drift (the shared default is 12s)
                style={{ animationDuration: "40s" }}
              >
                <span className="!pr-[0.3em] !text-[12px] sm:!text-[13px]">{footer.marquee.repeat(4)}</span>
                <span className="!pr-[0.3em] !text-[12px] sm:!text-[13px]">{footer.marquee.repeat(4)}</span>
              </div>
            </div>
          </div>

          {/* Right: invitation, address, button */}
          <div className="flex flex-col items-center text-center">
            <p className="heading-font text-[40px] font-bold uppercase leading-[0.95] tracking-[-0.03em] sm:text-[56px] xl:text-[72px]">
              {footer.lineTop}
              <br />
              <span className="text-[#ED4823]">{footer.lineBottom}</span>
            </p>
            {footer.address && (
              <p className="mt-5 text-[14px] text-[#F9E9D3]/70 sm:text-[15px]">
                {footer.address}
              </p>
            )}
            <div className="mt-8">
              <PrimaryButton href={footer.button.href}>{footer.button.label}</PrimaryButton>
            </div>
          </div>
        </div>

        {/* ---------- Links (two rows) + social icons */}
        <div className="mt-16 flex flex-col items-center gap-8 border-t border-[#F9E9D3]/15 pt-10 lg:mt-20 lg:flex-row lg:items-end lg:justify-between">
          <nav aria-label="Footer" className="flex flex-col items-center gap-4 lg:items-start">
            {footer.links.map((row, i) => (
              <ul key={i} className="flex flex-wrap justify-center gap-x-7 gap-y-3 lg:justify-start lg:gap-x-10">
                {row.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="heading-font group relative text-[13px] font-medium uppercase tracking-[0.08em] text-[#F9E9D3]/85 transition-colors hover:text-[#F9E9D3] sm:text-[14px]"
                    >
                      {l.label}
                      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#ED4823] transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>

          <div className="flex gap-3">
            {footer.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F9E9D3]/30 text-[#F9E9D3] transition-colors duration-300 hover:border-[#ED4823] hover:bg-[#ED4823]"
              >
                {ICONS[s.name]}
              </a>
            ))}
          </div>
        </div>

        {/* ---------- Bottom line */}
        <div className="mt-10 flex flex-col items-center gap-3 text-[12px] text-[#F9E9D3]/55 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} LoveSquad Church</span>
          <a href="#top" onClick={toTop} className="inline-flex items-center gap-1.5 transition-colors hover:text-[#ED4823]">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
