"use client";

import Link from "next/link";

const footerColumns = [
  {
    title: "QUICK LINKS",
    links: [
      { label: "ABOUT US", href: "/about" },
      { label: "SERVICE RECAP", href: "/servicerecap" },
      { label: "PASTOR KAY", href: "/pastorkay" },
      { label: "MESSAGES", href: "/messages" },
      { label: "GIVE", href: "/giving" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "PLAN A VISIT", href: "/visit" },
      { label: "CONTACT US", href: "/contact" },
      { label: "CAREERS", href: "/careers" },
      { label: "EVENTS", href: "/events" },
    ],
  },
  {
    title: "SOCIALS",
    links: [
      { label: "INSTAGRAM", href: "https://instagram.com/", external: true },
      { label: "FACEBOOK", href: "https://facebook.com/", external: true },
      { label: "TELEGRAM", href: "https://t.me/", external: true },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="w-full max-w-[700px] pt-[20px] sm:pt-[30px] md:pt-[40px] lg:pt-[30px]">
      {/* NAVIGATION BOX */}
      <div className="flex flex-col items-center gap-[32px] border border-[#575656] px-[24px] py-[28px] sm:gap-[36px] sm:px-[32px] sm:py-[36px] md:px-[40px] md:py-[42px] lg:grid lg:grid-cols-3 lg:items-start lg:justify-items-center lg:gap-0 lg:px-[58px] lg:py-[52px]">
        {footerColumns.map((column) => (
          <div
            key={column.title}
            className="flex w-[135px] flex-col items-start border-l border-[#ED4823] pl-[10px] text-left sm:pl-[12px]"
          >
            {/* COLUMN HEADING */}
            <div className="mb-[14px] flex items-center justify-start text-left sm:mb-[18px]">
              <span className="mr-[4px] text-[#ED4823]">[</span>
              <span className="heading-font text-[12px] font-semibold uppercase text-[#F5EBDD] sm:text-[14px]">
                {column.title}
              </span>
              <span className="ml-[4px] text-[#ED4823]">]</span>
            </div>

            {/* LINKS */}
            <div className="flex flex-col items-start gap-[10px] text-left sm:gap-[14px]">
              {column.links.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="heading-font text-left text-[11px] font-medium uppercase text-[#F5EBDD] transition-colors duration-200 hover:text-[#ED4823] sm:text-[12px]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="heading-font text-left text-[11px] font-medium uppercase text-[#F5EBDD] transition-colors duration-200 hover:text-[#ED4823] sm:text-[12px]"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* COPYRIGHT */}
      <p className="mt-[12px] text-center text-[9px] font-medium uppercase text-[#F5EBDD] sm:mt-[14px] sm:text-[10px]">
        COPYRIGHT 2026 © LOVESQUADCHURCH
      </p>
    </div>
  );
}