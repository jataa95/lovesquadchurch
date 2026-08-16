
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Submitted:", formData);
  };

  return (
    <section
      className="
        mt-[80px]
        w-full
        bg-[#F9E9D3]
        py-8
        text-[#575656]
        md:py-12
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          px-4
          sm:px-5
          md:px-12
        "
      >
        {/* =========================================
            1. GIANT "CONTACT" HEADING
        ========================================== */}
        <div className="w-full">
          <h1
            className="
              heading-font
              m-0
              w-full
              uppercase
              font-extrabold
              leading-[0.8]
              tracking-tighter
              text-[#575656]
            "
            style={{
              fontSize: "clamp(4rem, 16vw, 15rem)",
            }}
          >
            CONTACT
          </h1>
        </div>

        {/* Subtitle Description */}
        <p
          className="
            body-font
            mt-4
            max-w-[500px]
            text-[16px]
            leading-relaxed
            text-[#575656]
          "
        >
          Cras Aliquet, Sem Consectetur Condimentum Ultricies, Risus Massa
          Condimentum Quam, A Eleifend Dolor Elit Quis Orci.
        </p>

        {/* =========================================
            2. MAIN GRID (LEFT FORM & RIGHT IMAGE)
        ========================================== */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-8
            sm:gap-10
            md:gap-12
            lg:grid-cols-12
            lg:items-start
          "
        >
          {/* LEFT COLUMN: Bordered Contact Form Box */}
          <div className="w-full lg:col-span-6 xl:col-span-6">
            <div
              className="
                w-full
                border
                border-[#575656]
                p-4
                sm:p-5
                md:p-8
              "
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* First Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="firstName"
                    className="
                      font-mono
                      text-[14px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#575656]
                    "
                  >
                    FIRST NAME
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      bg-[#575656]
                      px-3
                      py-3
                      text-l
                      text-white
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#ED4823]
                      sm:px-4
                    "
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="lastName"
                    className="
                      font-mono
                      text-[14px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#575656]
                    "
                  >
                    LAST NAME
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      bg-[#575656]
                      px-3
                      py-3
                      text-sm
                      text-white
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#ED4823]
                      sm:px-4
                    "
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="
                      font-mono
                      text-[14px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#575656]
                    "
                  >
                    EMAIL
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      bg-[#575656]
                      px-3
                      py-3
                      text-sm
                      text-white
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#ED4823]
                      sm:px-4
                    "
                  />
                </div>

                {/* Reason for Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="reason"
                    className="
                      font-mono
                      text-[14px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#575656]
                    "
                  >
                    REASON FOR YOUR MESSAGE
                  </label>

                  <input
                    type="text"
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="
                      w-full
                      bg-[#575656]
                      px-3
                      py-3
                      text-sm
                      text-white
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#ED4823]
                      sm:px-4
                    "
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="
                      font-mono
                      text-[14px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#575656]
                    "
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      resize-none
                      bg-[#575656]
                      px-3
                      py-3
                      text-sm
                      text-white
                      placeholder-gray-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#ED4823]
                      sm:px-4
                    "
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="
                    heading-font
                    mt-2
                    w-full
                    bg-[#575656]
                    py-3.5
                    text-base
                    font-bold
                    uppercase
                    tracking-widest
                    text-[#F9E9D3]
                    transition-opacity
                    hover:opacity-90
                  "
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: Featured Dark Image Box */}
          <div className="w-full lg:col-span-6 xl:col-span-6">
            <div
              className="
                relative
                aspect-square
                w-full
                bg-[#171515]
              "
            >
              {/* Image Placeholder Visual */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  text-white/20
                "
              >
                <svg
                  className="
                    h-12
                    w-12
                    sm:h-14
                    sm:w-14
                    md:h-16
                    md:w-16
                  "
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

              {/* Real Image Integration Example:
              <Image
                src="/images/contact/hero.jpg"
                alt="Contact Love Squad Church"
                fill
                priority
                className="object-cover"
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
