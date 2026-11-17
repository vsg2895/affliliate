type Item = { readonly question: string; readonly answer: string }

/**
 * The home FAQ, from sites/affliliate.html (`.faq`/`.fq` in its final layer):
 * white rounded cards laid out TWO ACROSS, each opening on a round grey mark
 * that turns into a blue × when the card is open. The first is open.
 *
 * `align-self: start` on each card (`self-start`) is load-bearing: grid cells
 * stretch to the tallest in their row by default, so opening one card would
 * otherwise stretch its neighbour's white box to match and leave it with a
 * block of empty paper under its question.
 *
 * The mark is drawn from two pseudo-elements rather than a "+" character.
 * A glyph's cross-bar sits off-centre in most faces, which is invisible until
 * it rotates 45° and the × comes out lopsided.
 *
 * Native `<details>`, no client state: every answer is in the server HTML,
 * open or closed — which the FAQPage schema built from the same array needs.
 * `[&::-webkit-details-marker]:hidden` and `list-none` drop the browser's own
 * triangle so only this mark shows.
 */
export default function FaqAccordion({ items }: { items: readonly Item[] }) {
  return (
    <div className="grid grid-cols-1 gap-3.5 min-[51.25rem]:grid-cols-2">
      {items.map((item, i) => (
        <details key={item.question} open={i === 0} className="group self-start rounded-[20px] bg-paper px-5 shadow-[0_2px_0_var(--color-line)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-[19px] font-semibold leading-[1.3] text-ink [overflow-wrap:anywhere]">{item.question}</h3>
            {/* Decoration: the <summary> already announces its own state. */}
            <span
              aria-hidden
              className="relative grid h-9 w-9 flex-none place-items-center rounded-full bg-surface transition-[transform,background-color] duration-200 group-open:rotate-45 group-open:bg-brand
                before:absolute before:h-[2px] before:w-3.5 before:rounded-sm before:bg-ink before:content-[''] group-open:before:bg-white
                after:absolute after:h-[2px] after:w-3.5 after:rotate-90 after:rounded-sm after:bg-ink after:content-[''] group-open:after:bg-white"
            />
          </summary>
          <p className="max-w-[760px] pb-5 text-[15px] leading-[1.7] text-ink-soft">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
