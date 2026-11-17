import Link from 'next/link'
import { COPY } from '@/constants/copy'
import { OfferRow } from '@/components/SpecialOfferCard'
import type { BonusSection } from '@/lib/api'

/**
 * The home page's Bonuses: one card per bonus type, two across on a wide
 * screen, each with its offers as rows.
 *
 * Built in this site's own language rather than the sibling sites' — which is
 * the point, since they all serve the same catalogue and a reader comparing
 * them should not meet the same block four times:
 *
 *  - the head is a BLUE BAR, the same device `SpecialOfferCard` leads with, so
 *    a bonus type and a bonus offer are marked the same way across the site;
 *  - HOW MANY OFFERS of it this site carries rides beside the name on a pink
 *    pill — the treatment the hero's top three give a rating. The count is the
 *    site's own `offers_count`, resolved server-side;
 *  - no border and a 24px radius, lifting off its 2px rule on hover, like
 *    every other card here.
 *
 * There is deliberately no per-type colour here. The types carry their colours
 * in the chip row above (`BonusCategoryNav`); repeating them on a card whose
 * head is already a solid blue bar would put two competing colour systems on
 * one screen.
 *
 * Every type's offers are in the server HTML, and each card keeps the
 * `#bonus-<slug>` anchor the bonus-type grid's cells land on.
 *
 * A GRID, not `columns-2`. CSS multi-column balances the two columns against
 * each other, so the second card began lower than the first and the pair never
 * shared a top edge. Grid cells on one row start together by definition.
 */
export default function BonusGroups({ sections }: { sections: BonusSection[] }) {
  if (sections.length === 0) return null

  return (
    <div className="mt-[26px] grid items-start gap-5 lg:grid-cols-2">
      {sections.map((section) => (
        <section
          key={section.id}
          id={`bonus-${section.slug}`}
          aria-labelledby={`bonus-${section.slug}-heading`}
          className="offer scroll-mt-24 overflow-hidden rounded-[24px]"
        >
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 bg-brand px-5 py-4">
            <h3 id={`bonus-${section.slug}-heading`} className="flex min-w-0 items-center gap-3 font-display text-[20px] leading-tight text-white">
              <span className="[overflow-wrap:anywhere]">{section.name}</span>
              {/* The count on the pink pill the hero's top three give a
                  rating. aria-hidden because the sr-only line beside it
                  already says what the number means. */}
              <span aria-hidden className="shrink-0 rounded-full bg-accent px-2.5 py-0.5 text-[15px] text-accent-ink">{section.offers_count}</span>
              <span className="sr-only"> — {section.offers_count} offers</span>
            </h3>
            <Link
              href={`/bonuses/${section.slug}`}
              /* WHITE, not the accent pink: #FFA8CC on the brand blue is
                 about 4.1:1, under the 4.5 this 14px bold text needs. The pink
                 stays on the count pill beside it, where it is a background
                 carrying dark ink. */
              className="-my-3 inline-flex min-h-11 items-center py-3 text-sm font-bold text-white underline decoration-transparent underline-offset-4 transition-[text-decoration-color] hover:decoration-white"
            >
              {COPY.home.seeMore}<span className="sr-only"> {section.name}</span> <span aria-hidden className="ml-1">→</span>
            </Link>
          </div>
          {section.description && <p className="border-b border-line px-5 py-3 text-sm text-ink-soft">{section.description}</p>}
          <ul role="list">
            {section.offers.map((offer) => <OfferRow key={offer.id} offer={offer} />)}
          </ul>
        </section>
      ))}
    </div>
  )
}
