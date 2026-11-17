import Link from 'next/link'
import { resolveImageUrl } from '@/lib/images'
import type { Category } from '@shared/types/category'

/**
 * Affliliate category tabs, from sites/affliliate.html (`.tabs`/`.tab` in its
 * final layer): ONE segmented control — a lilac PILL group with 5px of
 * padding holding a pill per category, the current one filled near-black ink
 * with its count in pink.
 *
 * The strip scrolls sideways rather than wrapping — the mockup keeps it on a
 * single line at every width, and `flex-1 basis-auto` lets the tabs share the
 * space evenly when they all fit.
 *
 * The tabs NAVIGATE rather than filter in place: always the canonical
 * /categories/<slug> route. The query forms (`/?category=`,
 * `/casinos?category=`) are 301'd to it at the edge (lib/seo/redirects.ts), so
 * linking either would spend a redirect per visitor and crawl budget on URLs
 * that resolve elsewhere.
 */
export default function CategoryNav({
  categories,
  selected,
}: {
  categories: Category[]
  selected: string
}) {
  return (
    <nav aria-label="Casino categories">
      <ul className="no-scrollbar flex gap-0 overflow-x-auto rounded-full bg-surface p-[5px]" role="list">
        {categories.map((c) => {
          const active = c.slug === selected
          return (
            <li key={c.id} className="flex-1 basis-auto">
              <Link
                href={`/categories/${c.slug}`}
                aria-current={active ? 'page' : undefined}
                className={`tab flex min-h-[46px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-[18px] text-[15px] font-semibold ${
                  active ? 'bg-ink text-white hover:bg-ink' : 'text-ink'
                }`}
              >
                {/* The category's own icon, as in the Casinos menu. A plain <img>:
                    next/image refuses SVG. alt="" because the label names it. */}
                {c.logo_path && (
                  <img src={resolveImageUrl(c.logo_path)!} alt="" width={18} height={18} className="h-[18px] w-[18px] shrink-0" />
                )}
                <span>{c.name}</span>
                {typeof c.casinos_count === 'number' && (
                  <span className={`text-[12.5px] font-bold ${active ? 'text-accent' : 'text-muted'}`}>{c.casinos_count}</span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
