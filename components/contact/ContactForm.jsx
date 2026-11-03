"use client";

import { useState } from "react";
import AboutSplitSection from "@/components/about/AboutSplitSection";
import { field, submit, Label } from "@/components/ui/formStyles";

/*
 * Contact form, same look as the First-timers form.
 * NOTE: not connected to anything yet; on submit it only shows a thank-you.
 * Send `new FormData(e.currentTarget)` to the church's form service.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send the form data to the church's form service.
    setSent(true);
  };

  return (
    <AboutSplitSection
      id="contact-form"
      icon="/images/firsttimers/tell-us-icon.svg"
      iconWidth={95}
      iconHeight={95}
      centerOnMobile
      heading={
        <>
          <span className="block">SEND US A</span>
          <span className="block text-[#ED4823]">MESSAGE</span>
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
          <p className="max-w-[520px] text-[15px] leading-[24px] text-[#575656] lg:text-[16px]">
            We&apos;ve got your message and will get back to you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex max-w-[680px] flex-col gap-5 border border-[#575656] p-4 sm:p-5 md:p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="firstName">First name *</Label>
              <input id="firstName" name="firstName" required autoComplete="given-name" placeholder="First name" className={field} />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lastName">Last name *</Label>
              <input id="lastName" name="lastName" required autoComplete="family-name" placeholder="Last name" className={field} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email *</Label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="reason">Reason for your message</Label>
<input id="reason" name="reason" placeholder="e.g. Prayer request" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message *</Label>
            <textarea id="message" name="message" rows={5} required placeholder="How can we help?" className={`${field} resize-y`} />
          </div>
          <button type="submit" className={submit}>SUBMIT</button>
        </form>
      )}
    </AboutSplitSection>
  );
}
