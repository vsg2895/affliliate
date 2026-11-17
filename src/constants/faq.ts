/**
 * Frequently asked questions for this site.
 *
 * Rendered VISIBLY on the home page and emitted as FAQPage structured data from
 * this same array. Google requires the two to match; markup-only FAQ is a
 * guidelines violation, which is why the page maps over this constant rather
 * than duplicating the text.
 *
 * The wording is unique to this site: these answers are indexable page content,
 * and they are exactly the kind of text an answer engine quotes. Here they
 * explain DECODING — what a bonus figure means once the conditions are read —
 * because that is what this brand is. Its sibling bettingbetway answers the
 * neighbouring question (which casino to trust) and must not be echoed here.
 *
 * Nothing below claims a figure this site cannot show. The mockup's own FAQ
 * answers "we open real accounts, deposit, claim the bonus and request a
 * withdrawal" and "crypto is often same-day, cards two to five working days".
 * Neither ships: nothing here records a funded account or a timed withdrawal,
 * so the answers say what the site does instead, which is read the terms.
 */
export const FAQ_ITEMS = [
  {
    question: 'What does “decoded” actually mean?',
    answer:
      'That the number on the front of an offer has been worked out in money. “100% up to €500, 40x” is a €500 bonus that takes €20,000 of staking to clear — a figure the banner never prints. Decoding an offer means putting the multiplier, the withdrawal cap, the maximum stake and the expiry next to the headline so the two can be read together.',
  },
  {
    question: 'How is the wagering requirement worked out?',
    answer:
      'By multiplying out whatever the operator says the multiplier applies to. The same 40x is very different on the bonus alone than on deposit plus bonus — the second is twice the staking for the same money. We state which of the two it is, because that single word is the difference between an offer worth claiming and one that is not.',
  },
  {
    question: 'Where do these bonus figures come from?',
    answer:
      "From the operator's own terms page, never from the promotional banner. The two disagree more often than you would expect, and when they do, the terms page is what a player is actually held to.",
  },
  {
    question: 'Why does a withdrawal cap matter so much?',
    answer:
      'Because it is the clause that decides what a good run is allowed to pay. A cap of €100 on a no-deposit offer means a €4,000 win leaves with €100 and the rest is forfeited. Wherever an operator publishes a cap we print it; where it publishes that there is none, we say that too.',
  },
  {
    question: 'Do you earn money from these links?',
    answer:
      'Yes. We may earn a commission when somebody signs up through a link here. It has no bearing on how an offer is decoded or where an operator sits on the board — an offer whose small print does not survive being read is written up that way regardless of what it pays.',
  },
  {
    question: 'Why do some casinos have no offer listed?',
    answer:
      'Because nothing is running that we would put a reader in front of. A lapsed bonus comes off the board rather than sitting there with an expired date on it, and the operator keeps its page without one.',
  },
] as const
