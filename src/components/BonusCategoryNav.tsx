import Link from 'next/link'
import { resolveImageUrl } from '@/lib/images'
import { COPY } from '@/constants/copy'
import type { BonusSection } from '@/lib/api'

/**
 * The catch-all heading, which the mix deliberately leaves out.
 *
 * Every offer not filed under a real type lands under "Special Offers", so it
 * is not a type at all — it is the whole area, already reachable from the nav
 * and the offers page. Hidden here rather than in the admin: the admin's
 * "Shown" switch would also remove it from the menu and the sections.
 */
export const CATCH_ALL_SLUG = 'special-offers'

/**
 * One colour per bonus type, in order, each with the text colour that reads on
 * it at 4.5:1 or better. The mockup's own six tile colours, the green a shade
 * deeper (white on its #1F8A6E is about 3.4:1), and two more for sites with
 * more types than the mockup drew.
 */
const TYPE_COLOURS: ReadonlyArray<{ bg: string; fg: string }> = [
  { bg: '#1f7a62', fg: '#ffffff' },
  { bg: '#6b5bd6', fg: '#ffffff' },
  { bg: '#c2651f', fg: '#ffffff' },
  { bg: '#2f7fd1', fg: '#ffffff' },
  { bg: '#14808f', fg: '#ffffff' },
  { bg: '#c43e68', fg: '#ffffff' },
  { bg: '#2b3fe0', fg: '#ffffff' },
  { bg: '#8a4e9c', fg: '#ffffff' },
]

/** The catch-all's colour, wherever it does appear (its group on the home page). */
const CATCH_ALL_COLOUR = { bg: 'var(--color-ink-soft)', fg: '#ffffff' }

/**
 * The colour of each section, by slug — shared by the mix bar, its keys and
 * the home page's bonus groups, so a type is the same colour everywhere.
 */
export function bonusTypeColours(sections: BonusSection[]): Map<string, { bg: string; fg: string }> {
  const colours = new Map<string, { bg: string; fg: string }>()
  sections
    .filter((section) => section.slug !== CATCH_ALL_SLUG)
    .forEach((section, i) => colours.set(section.slug, TYPE_COLOURS[i % TYPE_COLOURS.length]))
  colours.set(CATCH_ALL_SLUG, CATCH_ALL_COLOUR)
  return colours
}

/**
 * "Browse by bonus type", from sites/affliliate.html (`.btypes` in its final
 * layer): a wrapped row of white PILLS, each with a round colour tile at its
 * left, the type's name, and how many offers of it this site carries on a
 * grey pill at its right. A pill fills periwinkle and takes a blue edge on
 * hover (`.btype` in globals.css).
 *
 * A flex row rather than a grid, deliberately: the names are of wildly
 * different lengths ("Cashback" against "No Deposit Offers"), and in a grid
 * every pill would be as wide as the longest one, leaving the short ones
 * mostly empty.
 *
 * Each pill opens that type's own page. The counts are the SITE's — active,
 * claimable, owned by a casino attached here — resolved server-side. Renders
 * nothing when the site has no Bonus area or every type is empty.
 */
export default function BonusCategoryNav({ sections }: { sections: BonusSection[] }) {
  const types = sections.filter((section) => section.slug !== CATCH_ALL_SLUG)
  if (types.length === 0) return null

  const colours = bonusTypeColours(sections)
  const total = types.reduce((sum, section) => sum + section.offers_count, 0)

  return (
    <nav aria-labelledby="bonus-types-heading">
      <p className="text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">
        {COPY.home.bonusTypesKicker}
      </p>
      <h2 id="bonus-types-heading" className="mb-[26px] mt-3 font-display text-[32px] leading-[1.05] text-ink sm:text-[clamp(34px,4.2vw,52px)]">
        {COPY.home.bonusTypesTitle}
      </h2>

      <ul className="flex flex-wrap gap-3" role="list">
        {types.map((section) => (
          <li key={section.id} className="min-w-0 max-w-full">
            <Link
              href={`/bonuses/${section.slug}`}
              className="btype flex min-h-[60px] max-w-full items-center gap-3 rounded-full py-2.5 pl-2.5 pr-5 font-display text-base text-ink"
            >
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
                style={{ background: colours.get(section.slug)!.bg }}
              >
                {/* The type's own icon, as in the Bonus menu. A plain <img>:
                    next/image refuses SVG. alt="" because the label names it. */}
                {section.icon_path && (
                  <img src={resolveImageUrl(section.icon_path)!} alt="" width={20} height={20} className="h-5 w-5" />
                )}
              </span>
              <span className="min-w-0 [overflow-wrap:anywhere]">{section.name}</span>
              <span className="shrink-0 rounded-full bg-surface px-2.5 py-0.5 font-sans text-[13px] font-bold text-ink-soft">
                {section.offers_count}
                <span className="sr-only"> {section.offers_count === 1 ? COPY.bonusCategory.countOne : COPY.bonusCategory.countMany}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
