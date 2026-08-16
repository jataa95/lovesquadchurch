"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

// Mock data array for 9 message cards
const MESSAGES_DATA = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  title: "MESSAGE TITLE",
  date: "SUN/08",
  image: `/images/messages/msg-${index + 1}.jpg`,
}));

export default function MessageSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="w-full bg-[#F9E9D3] pb-12 text-[#575656] sm:pb-16">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          gap-8
          px-4
          sm:gap-10
          sm:px-6
          md:px-12
        "
      >
        {/* =========================================
            SEARCH CONTAINER BOX
        ========================================== */}

        <div
          className="
            w-full
            border
            border-[#575656]
            p-3
            sm:p-4
            md:p-6
          "
        >
          <form
            onSubmit={handleSearch}
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:gap-4
            "
          >
            {/* Input Field */}
            <input
              type="text"
              placeholder="Type a topic to begin search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="
                body-font
                min-w-0
                w-full
                flex-1
                bg-[#575656]
                px-4
                py-3
                text-sm
                font-medium
                text-white
                placeholder-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-[#ED4823]
                sm:px-5
                sm:py-4
              "
            />

            {/* Search Button */}
            <button
              type="submit"
              className="
                group
                flex
                w-full
                shrink-0
                items-center
                justify-center
                gap-2
                bg-[#575656]
                px-6
                py-3
                heading-font
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-[#F9E9D3]
                transition-colors
                hover:bg-[#434242]
                sm:w-auto
                sm:px-8
                sm:py-4
                sm:text-base
              "
            >
              <Search className="h-4 w-4 shrink-0" />
              <span>SEARCH</span>
            </button>
          </form>
        </div>

        {/* =========================================
            MESSAGES GRID
        ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-x-4
            gap-y-8
            sm:grid-cols-2
            sm:gap-x-5
            sm:gap-y-10
            lg:grid-cols-3
            lg:gap-x-6
          "
        >
          {MESSAGES_DATA.map((item) => (
            <div
              key={item.id}
              className="
                group
                flex
                cursor-pointer
                flex-col
                gap-2.5
                sm:gap-3
              "
            >
              {/* Image Container */}
              <div
                className="
                  relative
                  aspect-[16/10]
                  w-full
                  overflow-hidden
                  bg-[#171515]
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-white/20
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <svg
                    className="h-10 w-10 sm:h-12 sm:w-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Real Image:
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.date}`}
                  fill
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
                */}
              </div>

              {/* Message Label */}
              <h3
                className="
                  heading-font
                  text-sm
                  font-extrabold
                  uppercase
                  tracking-tight
                  text-[#575656]
                  transition-colors
                  group-hover:text-[#ED4823]
                  sm:text-base
                "
              >
                {item.title}
                <span className="mx-1 text-[#575656]/60">|</span>
                {item.date}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}