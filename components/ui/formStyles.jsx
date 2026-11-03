// Shared form styles (Contact, First-timers): solid grey fields with cream
// text and placeholders, monospace uppercase labels, orange focus ring,
// extra room on the right so placeholders/arrows never touch the edge.
export const field =
  "w-full bg-[#575656] py-3 pl-3 pr-10 text-sm text-[#F9E9D3] placeholder:text-[#F9E9D3] focus:outline-none focus:ring-2 focus:ring-[#ED4823] sm:pl-4 sm:pr-12";
// Dropdowns: our own cream arrow (see .form-select in globals.css).
export const select = `${field} form-select`;
// Full-width grey submit button.
export const submit =
  "heading-font w-full bg-[#575656] py-3.5 text-base font-bold uppercase tracking-widest text-[#F9E9D3] transition-opacity hover:opacity-90";

export function Label({ children, htmlFor }) {
  const cls = "font-mono text-[14px] font-bold uppercase tracking-wider text-[#575656]";
  return htmlFor ? (
    <label htmlFor={htmlFor} className={cls}>{children}</label>
  ) : (
    <span className={cls}>{children}</span>
  );
}
