"use client";

import { useState } from "react";
import AboutSplitSection from "@/components/about/AboutSplitSection";
import { firstTimers } from "@/data/firstTimers";

/*
 * First-timer card: their details, a few questions, and feedback about
 * the service.
 *
 * NOTE: not connected to anything yet. On submit it only shows a thank-you
 * message. To receive responses, send the form data to an email service or
 * form backend in handleSubmit (e.g. Formspree, Resend, Google Sheets, or
 * a church CRM).
 */
const field =
  "w-full border border-[#262626] bg-transparent px-4 py-3 text-[15px] text-[#4A4A4A] placeholder:text-[#8A8989] transition-colors hover:bg-white/15 focus:border-[#ED4823] focus:outline-none";

function Label({ children }) {
  return (
    <span className="heading-font text-[12px] font-semibold uppercase tracking-[0.18em] text-[#575656]">
      {children}
    </span>
  );
}

function GroupTitle({ n, children }) {
  return (
    <div className="flex items-baseline gap-3 border-b border-[#9B9B9B] pb-3">
      <span className="heading-font text-[12px] font-bold text-[#ED4823] sm:text-[14px]">{n}</span>
      <h3
        className="heading-font font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
        style={{ fontSize: "clamp(22px, 2.4vw, 30px)" }}
      >
        {children}
      </h3>
    </div>
  );
}

const NEXT_STEPS = [
  "I'd like someone to call me",
  "I'd like to join a LoveSpot",
  "I'd like to know about membership",
  "I'd like to serve / volunteer",
  "I'd like prayer",
];

export default function ConnectCard() {
  const [sent, setSent] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `new FormData(e.currentTarget)` to the church's form service.
    setSent(true);
  };

  return (
    <AboutSplitSection
      id="connect-card"
      icon="/images/about/our-leaders-icon-dark.svg"
      heading={
        <>
          <span className="block">TELL US</span>
          <span className="block text-[#ED4823]">ABOUT YOU</span>
        </>
      }
    >
      {sent ? (
        <div className="flex flex-col gap-3" role="status">
          <h3
            className="heading-font font-bold uppercase leading-none tracking-[-0.02em] text-[#4A4A4A]"
            style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
          >
            THANK YOU!
          </h3>
          <p className="max-w-[520px] text-[15px] leading-[24px] text-[#555555] lg:text-[16px]">
            We&apos;re so glad you joined us. Someone from our team will reach out soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex max-w-[680px] flex-col gap-12">
          <p className="text-[15px] leading-[24px] text-[#555555] lg:text-[16px]">
            We&apos;d love to get to know you. It only takes a minute.
          </p>

          {/* 1. Details */}
          <fieldset className="flex flex-col gap-5">
            <legend className="mb-5 w-full"><GroupTitle n="01">YOUR DETAILS</GroupTitle></legend>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <Label>Full name *</Label>
                <input name="name" required autoComplete="name" className={field} />
              </label>
              <label className="flex flex-col gap-2">
                <Label>Phone</Label>
                <input name="phone" type="tel" autoComplete="tel" className={field} />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <Label>Email *</Label>
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <Label>Age range</Label>
                <select name="age" defaultValue="" className={field}>
                  <option value="">Prefer not to say</option>
                  <option>Under 18</option>
                  <option>18 – 24</option>
                  <option>25 – 34</option>
                  <option>35 – 49</option>
                  <option>50+</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <Label>Area you live in</Label>
                <input name="area" autoComplete="address-level2" className={field} />
              </label>
            </div>
          </fieldset>

          {/* 2. Questions */}
          <fieldset className="flex flex-col gap-5">
            <legend className="mb-5 w-full"><GroupTitle n="02">A FEW QUESTIONS</GroupTitle></legend>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <Label>Which service did you attend?</Label>
                <select name="service" defaultValue="" className={field}>
                  <option value="" disabled>Choose one</option>
                  {firstTimers.services.map((s) => (
                    <option key={s.name}>{s.name.charAt(0) + s.name.slice(1).toLowerCase()}</option>
                  ))}
                  <option>Online</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <Label>How did you hear about us?</Label>
                <select name="source" defaultValue="" className={field}>
                  <option value="" disabled>Choose one</option>
                  <option>A friend or family member</option>
                  <option>Social media</option>
                  <option>Online search</option>
                  <option>Walked past</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Would you like to visit again?</Label>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-[#4A4A4A]">
                {["Yes", "Maybe", "Just visiting"].map((v) => (
                  <label key={v} className="inline-flex cursor-pointer items-center gap-2">
                    <input type="radio" name="return" value={v} className="h-4 w-4 accent-[#ED4823]" />
                    {v}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label>What would you like next? (tick any)</Label>
              <div className="grid grid-cols-1 gap-2 text-[15px] text-[#4A4A4A] sm:grid-cols-2">
                {NEXT_STEPS.map((v) => (
                  <label key={v} className="inline-flex cursor-pointer items-center gap-2">
                    <input type="checkbox" name="next" value={v} className="h-4 w-4 accent-[#ED4823]" />
                    {v}
                  </label>
                ))}
              </div>
            </div>
          </fieldset>

          {/* 3. Feedback */}
          <fieldset className="flex flex-col gap-5">
            <legend className="mb-5 w-full"><GroupTitle n="03">YOUR FEEDBACK</GroupTitle></legend>
            <div className="flex flex-col gap-3">
              <Label>How was the service?</Label>
              <div className="flex gap-2" role="radiogroup" aria-label="Rate the service from 1 to 5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={rating === n}
                    aria-label={`${n} out of 5`}
                    onClick={() => setRating(n)}
                    className={`heading-font h-11 w-11 border text-[16px] font-bold transition-colors ${
                      n <= rating
                        ? "border-[#ED4823] bg-[#ED4823] text-[#F9E9D3]"
                        : "border-[#262626] text-[#575656] hover:bg-white/15"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              <input type="hidden" name="rating" value={rating || ""} />
            </div>
            <label className="flex flex-col gap-2">
              <Label>What did you enjoy, or what could we do better?</Label>
              <textarea name="feedback" rows={4} className={`${field} resize-y`} />
            </label>
            <label className="flex flex-col gap-2">
              <Label>Anything we can pray about? (optional)</Label>
              <textarea name="prayer" rows={3} className={`${field} resize-y`} />
            </label>
          </fieldset>

          <div>
            <button
              type="submit"
              className="heading-font inline-flex items-center gap-2 text-[16px] font-bold uppercase tracking-[-0.02em] text-[#575656] transition-colors hover:text-[#ED4823] md:text-[20px]"
            >
              <span className="text-[24px] text-[#ED4823]">{"{"}</span>
              SEND
              <span className="text-[24px] text-[#ED4823]">{"}"}</span>
            </button>
          </div>
        </form>
      )}
    </AboutSplitSection>
  );
}
