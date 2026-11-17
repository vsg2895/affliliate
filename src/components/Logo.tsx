import Link from 'next/link'

/**
 * Affliliate brand mark, from sites/affliliate.html: a blue disc with a white
 * peak drawn across it and a pink dot sitting under the apex — a reading
 * climbing to its high point, for "every casino offer, decoded". Then the
 * wordmark, lowercase with the `.com` in the brand blue, over a
 * spaced-capital tagline.
 *
 * Inlined SVG rather than an image: it renders instantly with no extra request
 * and stays crisp at any size. The artwork is aria-hidden; the Link's name is
 * its visible text.
 *
 * `onDark` is for the near-black footer: the disc keeps its blue, which holds
 * up there, and the wordmark turns white with the `.com` in pink. One
 * component, so the header's mark and the footer's can never drift apart.
 *
 * `taglineClassName` exists for the header alone. The header pill carries the
 * brand, the nav AND the subscribe field on one line; below 1280px the tagline
 * is the first thing that has to give, and the layout hides it with
 * `hidden xl:block` rather than shipping a second, shorter logo.
 */
export default function Logo({
  className = '',
  taglineClassName = '',
  onDark = false,
}: {
  className?: string
  taglineClassName?: string
  onDark?: boolean
}) {
  return (
    <Link
      href="/"
      className={`inline-flex min-h-11 shrink-0 items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
        onDark ? 'focus-visible:ring-offset-navy' : 'focus-visible:ring-offset-paper'
      } ${className}`.trim()}
    >
      <svg viewBox="0 0 42 42" className="h-[38px] w-[38px] shrink-0 sm:h-[42px] sm:w-[42px]" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21" cy="21" r="21" fill="var(--color-brand)" />
        <path d="M11 30 L21 12 L31 30" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="25" r="3.5" fill="var(--color-accent)" />
      </svg>

      <span className="flex flex-col leading-none">
        <span className={`font-display text-[20px] tracking-[-0.03em] sm:text-[22px] ${onDark ? 'text-white' : 'text-ink'}`}>
          affliliate<span className={onDark ? 'text-accent' : 'text-brand'}>.com</span>
        </span>
        <span className={`mt-[5px] text-[10.5px] font-semibold uppercase tracking-[0.2em] ${onDark ? 'text-night-muted' : 'text-muted'} ${taglineClassName}`.trim()}>
          Casino offers, decoded
        </span>
        {/* The link's name is its visible text plus this — no aria-label that
            could disagree with what is on screen. */}
        <span className="sr-only"> home</span>
      </span>
    </Link>
  )
}
