import Image from 'next/image'
import Link from 'next/link'
import { resolveImageUrl } from '@/lib/images'
import { COPY } from '@/constants/copy'
import type { CasinoWithAttachment } from '@shared/types/casino'

/** How many region chips a card shows before collapsing the rest into a count. */
const REGIONS_SHOWN = 3

/** Exported so the home page's podium shows the same stars as a card. */
export function Stars({ rating }: { rating: number }) {
  // `Math.round` rather than a partial star: the ratings are whole or half
  // numbers and a half-filled glyph at 18px reads as a rendering fault. The
  // exact figure is printed beside it either way.
  const filled = Math.round(rating)

  return (
    <span
      className="inline-flex items-center tracking-[1px] text-[15px] leading-none"
      role="img"
      aria-label={`${rating} out of 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < filled ? 'text-gold' : 'text-line-soft'} aria-hidden>
          ★
        </span>
      ))}
    </span>
  )
}

/**
 * The grid the cards sit in — the mockup's final `.list`: WIDE cells
 * (`minmax(min(100%,460px),1fr)`), so two across on a laptop rather than
 * three. Each card puts its logo plate beside its text instead of above it,
 * which is what the extra width buys. Callers render
 * `<ol className={CASINO_LIST}>`; the order of the list is the ranking.
 */
export const CASINO_LIST = 'grid grid-cols-1 gap-[18px] sm:grid-cols-[repeat(auto-fill,minmax(min(100%,460px),1fr))]'

/**
 * A casino as a card — `.ccard` in sites/affliliate.html: a tall logo plate
 * down the left, and beside it the name, the stars, the welcome offer on a
 * pink pill and the regions it accepts. The two actions run full width
 * underneath. No border at all: the card is a white slab with a 2px rule
 * under it, lifting on hover (`.rw` in globals.css).
 *
 * Cards in a WIDE grid, two across on a laptop — see CASINO_LIST.
 *
 * The mockup's own final layer deletes the rank numeral from these cards
 * (`.ccard .rank{display:none!important}`), which is also this network's rule:
 * the `<ol>` order is the ranking. `rank` is still accepted so callers did not
 * have to change. What marks the leader out instead is the blue outline the
 * first card takes (`.rw:first-child`).
 *
 * The chips carry `countries`, real attached data.
 */
export default function CasinoCard({
  casino,
}: {
  casino: CasinoWithAttachment
  rank?: number
}) {
  // The casino's "Image" (logo), NOT the wide "Banner Image" used big on the
  // casino page. Falls back to the banner if there is no Image.
  const image = resolveImageUrl(casino.image_path ?? casino.banner_image)

  const regions = casino.countries ?? []
  const shownRegions = regions.slice(0, REGIONS_SHOWN)
  const extraRegions = regions.length - shownRegions.length

  return (
    <li className="rw grid grid-cols-1 content-start gap-4 rounded-[24px] p-[22px] min-[30rem]:grid-cols-[140px_minmax(0,1fr)]">
      {/* The logo plate. WHITE whenever there IS artwork: operator logos
          arrive with their own white ground baked in, and any other colour
          behind one shows as a hard rectangle. With no artwork the plate
          becomes the mockup's blue tile with the operator's name in pink —
          which is the only case the mockup itself ever draws. */}
      <div
        className={`flex h-[110px] items-center justify-center overflow-hidden rounded-[18px] p-2.5 min-[30rem]:h-[140px] ${
          image ? 'border border-line bg-white' : 'bg-brand'
        }`}
      >
        {image ? (
          <Image src={image} alt={`${casino.name} logo`} width={320} height={200} sizes="(max-width: 480px) 90vw, 140px" className="h-full w-full object-contain" />
        ) : (
          <span className="px-1 text-center font-display text-[17px] leading-tight text-accent [overflow-wrap:anywhere]">
            {casino.name}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-[24px] leading-[1.1] text-ink [overflow-wrap:anywhere]">{casino.name}</h3>

        <p className="mt-1.5 flex items-center gap-2 text-[15px] text-muted">
          <Stars rating={casino.rating} />
          <span aria-hidden className="font-semibold tabular-nums">{casino.rating.toFixed(1)}</span>
        </p>

        {/* The welcome offer on the mockup's pink pill. Dropped entirely when
            the operator has none. Pink carries DARK ink here, never white. */}
        {casino.bonuses && (
          <p className="mt-2.5 inline-block rounded-full bg-accent px-3.5 py-1.5 text-[16px] font-bold leading-snug text-accent-ink [overflow-wrap:anywhere]">
            {casino.bonuses}
          </p>
        )}

        {shownRegions.length > 0 && (
          <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Accepts players from">
            {shownRegions.map((country) => (
              <li key={country.id} className="rounded-full bg-win-bg px-[11px] py-[3px] text-xs font-semibold text-win">
                {country.name}
              </li>
            ))}
            {extraRegions > 0 && (
              /* A count, not a tooltip: the full list is on the review page,
                 and a hover affordance is invisible on a phone. */
              <li className="rounded-full bg-surface px-[11px] py-[3px] text-xs font-semibold text-ink-soft">+{extraRegions} more</li>
            )}
          </ul>
        )}
      </div>

      {/* Full width under both columns, so every card in a row ends on its
          buttons whatever length the name and offer run to. */}
      <div className="grid gap-2.5 min-[30rem]:col-span-2 min-[30rem]:grid-cols-2">
        <a
          href={casino.attachment.affiliate_url}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="btn-or min-h-[46px] whitespace-nowrap px-4 text-sm"
        >
          {COPY.casinos.visitCasino}
        </a>
        <Link href={`/casinos/${casino.slug}`} className="btn-ln min-h-[46px] whitespace-nowrap px-4 text-sm">
          {COPY.casinos.readReview}
        </Link>
      </div>
    </li>
  )
}
