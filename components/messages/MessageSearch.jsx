"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Container from "@/components/ui/Container";
import { field } from "@/components/ui/formStyles";

// Placeholder messages: swap for real sermons (title, date, speaker, photo).
const MESSAGES = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: "Message title",
  date: "Sun, 08 Month",
  speaker: "Speaker name",
  image: `/images/gallery/gal${i + 1}.jpg`,
}));

export default function MessageSearch() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: filter MESSAGES (or query the sermon library) by `query`.
  };

  return (
    <section id="all-messages" className="section-py w-full bg-cream">
      <Container>
        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col gap-3 border border-[#575656] p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5 md:p-6"
        >
          <input
            type="search"
            aria-label="Search messages"
            placeholder="Type a topic to begin search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`${field} min-w-0 flex-1`}
          />
          <button
            type="submit"
            className="heading-font flex shrink-0 items-center justify-center gap-2 bg-[#575656] px-8 py-3 text-base font-bold uppercase tracking-widest text-[#F9E9D3] transition-opacity hover:opacity-90"
          >
            <Search className="h-4 w-4" />
            SEARCH
          </button>
        </form>

        {/* Messages */}
        <ul className="mt-(--section-gap) grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {MESSAGES.map((m) => (
            <li key={m.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#171515]">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="heading-font mt-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#ED4823] sm:text-[13px]">
                {m.date}
              </p>
              <h3
                className="heading-font mt-1.5 font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A] transition-colors group-hover:text-[#ED4823]"
                style={{ fontSize: "clamp(20px, 1.8vw, 26px)" }}
              >
                {m.title}
              </h3>
              <p className="mt-1.5 text-[15px] leading-[24px] text-[#575656]">{m.speaker}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
