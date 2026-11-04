"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/*
 * Homepage preloader (homepage only, on a full page load; not when
 * navigating back to the homepage from another page of the site).
 *
 *  1. Grainy orange screen. The two cream emblem pieces drift in from a
 *     blur and lock together; "LOVE IS US" fades in and a 000 → 100
 *     counter follows the real loading (fonts + hero video), min ~1.6s,
 *     max ~3s.
 *  2. A fine cream line cracks along the diagonal through the emblem and
 *     the pieces ease apart along it.
 *  3. Each half folds away like paper: a fold line sweeps from the
 *     diagonal to its corner (bottom-left for the left piece, top-right
 *     for the right one), the paper creasing back over itself (darker
 *     underside, soft shadow) until it is folded off the corner.
 *
 * The page can't scroll while it plays. Visitors who prefer reduced
 * motion don't see it. If scripts fail, CSS fades it out after a few
 * seconds so the page is never stuck behind it.
 */

let played = false; // per full page load

const PIECE_A =
  "M27.5478 36.1676L16.8686 36.0913C14.3089 36.0704 12.2458 33.996 12.2668 31.4567L12.3437 20.8624L20.9319 20.9249L20.8829 27.5992L27.6108 27.6478L27.5478 36.1676Z";
const PIECE_B =
  "M40.0874 31.1445L31.4992 31.0821L31.5482 24.4077L24.8203 24.3592L24.8833 15.8394L35.5625 15.9157C38.1222 15.9365 40.1853 18.0109 40.1643 20.5502L40.0874 31.1445Z";

// Clip a convex polygon to the half-plane where f(x, y) >= 0 (f linear).
function clipHalf(poly, f) {
  const out = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const fa = f(a), fb = f(b);
    if (fa >= 0) out.push(a);
    if ((fa >= 0) !== (fb >= 0)) {
      const t = fa / (fa - fb);
      out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    }
  }
  return out;
}
const toClip = (poly) =>
  poly.length < 3
    ? "polygon(0 0, 0 0, 0 0)"
    : `polygon(${poly.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(",")})`;

export default function Preloader() {
  const [show, setShow] = useState(() => !played);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!show) return;
    // Mark as played for this page load (navigating back to the homepage
    // skips it). Safe if React runs this effect twice in development.
    played = true;
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShow(false);
      return;
    }

    // Take over from the CSS fail-safe, lock scrolling, start at the top.
    root.style.animation = "none";
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const q = (s) => root.querySelector(s);
    const panelA = q("[data-pl=a]"), panelB = q("[data-pl=b]");
    const flapA = q("[data-pl=flap-a]"), flapB = q("[data-pl=flap-b]");
    const creaseA = q("[data-pl=crease-a]"), creaseB = q("[data-pl=crease-b]");
    const base = q("[data-pl=base]");
    const pa = q("[data-pl=pa]"), pb = q("[data-pl=pb]");
    const crack = q("[data-pl=crack]"), tag = q("[data-pl=tag]"), count = q("[data-pl=count]");

    let W = 0, H = 0, cx = 0, cy = 0, rect = [];
    const measure = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      cx = W / 2;
      cy = H / 2;
      rect = [[0, 0], [W, 0], [W, H], [0, H]];
      const em = Math.round(Math.max(96, Math.min(180, Math.min(W, H) * 0.24)));
      root.style.setProperty("--em", `${em}px`);
    };
    measure();

    // s > 0: bottom-left of the diagonal (piece A); s < 0: top-right (B).
    const s = ([x, y]) => y - cy - (x - cx);
    const D = cy - cx;

    // Draw both halves for a fold amount f (0 = flat, (W+H)/2 = gone).
    const fold = (f) => {
      // Front of each half: what hasn't folded yet.
      panelA.style.clipPath = toClip(clipHalf(rect, (p) => s(p) - f));
      panelB.style.clipPath = toClip(clipHalf(rect, (p) => -s(p) - f));
      // Underside: the strip between the diagonal and the fold line,
      // mirrored across the fold line onto the half.
      flapA.style.clipPath = toClip(clipHalf(clipHalf(rect, (p) => s(p)), (p) => f - s(p)));
      flapB.style.clipPath = toClip(clipHalf(clipHalf(rect, (p) => -s(p)), (p) => f + s(p)));
      flapA.style.transform = `matrix(0,1,1,0,${-D - f},${D + f})`;
      flapB.style.transform = `matrix(0,1,1,0,${-D + f},${D - f})`;
      // Bright crease along each fold line.
      creaseA.style.transform = `translate(${cx - f / 2}px, ${cy + f / 2}px) rotate(45deg)`;
      creaseB.style.transform = `translate(${cx + f / 2}px, ${cy - f / 2}px) rotate(45deg)`;
    };

    // Real loading: fonts and the hero video.
    const ready = [
      document.fonts?.ready ?? Promise.resolve(),
      new Promise((res) => {
        const v = document.querySelector("video");
        if (!v || v.readyState >= 3) return res();
        v.addEventListener("canplay", res, { once: true });
        v.addEventListener("error", res, { once: true });
      }),
    ];
    let loaded = 0;
    ready.forEach((p) => p.then(() => (loaded += 1 / ready.length)));

    const counter = { v: 0 };
    let killed = false;
    const tl = gsap.timeline({ paused: true });

    const run = async () => {
      fold(0);
      gsap.set([pa, pb], { autoAlpha: 0 });
      gsap.set(crack, { xPercent: -50, yPercent: -50, rotate: 45, scaleX: 0 });
      gsap.set([creaseA, creaseB], { autoAlpha: 0 });

      // 1. Pieces arrive; tagline; counter follows the real loading.
      gsap.fromTo(pa, { autoAlpha: 0, filter: "blur(8px)", x: "-14%", y: "14%", rotate: -12, scale: 0.86 },
        { autoAlpha: 1, filter: "blur(0px)", x: 0, y: 0, rotate: 0, scale: 1, duration: 1.1, ease: "expo.out", delay: 0.25 });
      gsap.fromTo(pb, { autoAlpha: 0, filter: "blur(8px)", x: "14%", y: "-14%", rotate: -12, scale: 0.86 },
        { autoAlpha: 1, filter: "blur(0px)", x: 0, y: 0, rotate: 0, scale: 1, duration: 1.1, ease: "expo.out", delay: 0.37 });
      gsap.fromTo(tag, { autoAlpha: 0, letterSpacing: "0.9em" },
        { autoAlpha: 1, letterSpacing: "0.5em", duration: 1.4, ease: "expo.out", delay: 0.6 });

      const start = performance.now();
      let last = start;
      await new Promise((res) => {
        const tick = (now) => {
          if (killed) return res();
          const t = (now - start) / 1000;
          const dt = Math.min(0.1, (now - last) / 1000);
          last = now;
          // Aim at the loading progress, but never finish before 1.6s and
          // never wait more than 3s. Moves at most ~90 per second.
          const target = t >= 3 ? 100 : Math.min(loaded * 100, (t / 1.6) * 100);
          counter.v = Math.min(target, counter.v + 90 * dt);
          count.textContent = String(Math.floor(counter.v)).padStart(3, "0");
          if (counter.v >= 100) return res();
          requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
      if (killed) return;

      // 2. Crack along the diagonal; pieces ease apart along it.
      tl.to([tag, count], { autoAlpha: 0, duration: 0.4 }, 0)
        .to(crack, { scaleX: 1, duration: 0.65, ease: "power3.inOut" }, 0.1)
        .to(pa, { x: "-5%", y: "5%", duration: 0.45, ease: "power3.inOut" }, 0.75)
        .to(pb, { x: "5%", y: "-5%", duration: 0.45, ease: "power3.inOut" }, 0.75)
        .to(crack, { autoAlpha: 0, duration: 0.3 }, 1.2)
        // 3. Fold each half away to its corner.
        .add(() => (base.style.visibility = "hidden"), 1.2)
        .to([creaseA, creaseB], { autoAlpha: 1, duration: 0.2 }, 1.2);
      const amount = { f: 0 };
      tl.to(amount, {
        f: (W + H) / 2 + 40,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => fold(amount.f),
      }, 1.2)
        .to([creaseA, creaseB], { autoAlpha: 0, duration: 0.3 }, 2.4);
      tl.eventCallback("onComplete", finish);
      tl.play();
    };

    const finish = () => {
      html.style.overflow = prevOverflow;
      setShow(false);
    };

    const onResize = () => {
      measure();
      fold(0);
    };
    window.addEventListener("resize", onResize);
    run();

    return () => {
      killed = true;
      tl.kill();
      window.removeEventListener("resize", onResize);
      html.style.overflow = prevOverflow;
    };
  }, [show]);

  if (!show) return null;

  return (
    <div ref={rootRef} className="preloader" aria-hidden="true">
      {/* One unbroken grainy layer while the screen is whole */}
      <div data-pl="base" className="preloader-paper" />

      {/* Front of each half, with its emblem piece */}
      <div data-pl="a" className="preloader-paper">
        <svg data-pl="pa" className="preloader-piece" viewBox="0 0 52.4 52">
          <path d={PIECE_A} fill="#F9E9D3" />
        </svg>
      </div>
      <div data-pl="b" className="preloader-paper">
        <svg data-pl="pb" className="preloader-piece" viewBox="0 0 52.4 52">
          <path d={PIECE_B} fill="#F9E9D3" />
        </svg>
      </div>

      {/* Undersides that fold over */}
      <div className="preloader-flap-shadow">
        <div data-pl="flap-a" className="preloader-paper preloader-flap" />
      </div>
      <div className="preloader-flap-shadow">
        <div data-pl="flap-b" className="preloader-paper preloader-flap" />
      </div>
      <span data-pl="crease-a" className="preloader-crease" />
      <span data-pl="crease-b" className="preloader-crease" />

      <span data-pl="crack" className="preloader-crack" />
      <div data-pl="tag" className="preloader-tag heading-font">Love is us</div>
      <div data-pl="count" className="preloader-count heading-font" />
    </div>
  );
}
