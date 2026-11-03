"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/*
 * Site-wide smooth scrolling for links to a section on the same page
 * (href="#id" or "/this-page#id"), mounted once in the layout.
 *
 * The section stops just below the fixed navbar (--nav-h), so its own top
 * padding gives it room and nothing sits under the navbar. Also used when
 * arriving from another page with a #hash (e.g. the menu's About links).
 * Sections with little top padding of their own still get at least
 * MIN_GAP px between the navbar and their first content.
 *
 * Page links (e.g. the footer): a link to the page you're already on
 * glides to the top; a link to another page opens it at the top (Next
 * would otherwise keep roughly the old scroll position).
 *
 * Visitors who prefer reduced motion jump straight there.
 */

const MIN_GAP = 32;

const navHeight = () =>
  parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--nav-h")
  ) || 0;

const scrollToId = (id, smooth = true) => {
  const target = id && document.getElementById(decodeURIComponent(id));
  if (!target) return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targetTop = target.getBoundingClientRect().top;
  // How far the section's first visible content sits below its top edge.
  const first = [...target.querySelectorAll("h1, h2, h3, p, img, a, button")].find(
    (el) => el.getBoundingClientRect().height > 0
  );
  const inset = first ? first.getBoundingClientRect().top - targetTop : MIN_GAP;
  const extra = Math.max(0, MIN_GAP - inset);
  const top = targetTop + window.scrollY - navHeight() - extra;
  window.scrollTo({ top: Math.max(0, top), behavior: smooth && !reduce ? "smooth" : "auto" });
  return true;
};

// Set when the page change came from the browser's Back/Forward buttons,
// so we keep the browser's own scroll restoration in that case.
let fromHistory = false;
if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    fromHistory = true;
  });
}

export default function SmoothAnchors() {
  const pathname = usePathname();

  // Clicks on same-page section links. Capture phase, so this runs before
  // Next's <Link> and stops it doing its own (unoffset) jump.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest?.("a[href]");
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;
      const id = url.hash.slice(1);
      if (id === "top") return;
      // Link to this same page without a section: glide to the top.
      if (!id) {
        if (a.getAttribute("href")?.startsWith("#")) return; // bare "#"
        e.preventDefault();
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        return;
      }
      if (!scrollToId(id)) return;
      e.preventDefault();
      history.replaceState(history.state, "", `#${id}`);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  // Arriving on a page with a #hash: once the page's animations have set up
  // (pinned sections change the layout), glide to the section.
  useEffect(() => {
    if (fromHistory) {
      fromHistory = false;
      return;
    }
    const id = window.location.hash.slice(1);
    if (!id) {
      // New page without a section: start at the very top.
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const t = setTimeout(() => scrollToId(id), 600);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
}
