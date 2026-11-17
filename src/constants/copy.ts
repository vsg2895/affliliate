/**
 * All user-facing and SEO-facing wording for this site.
 *
 * The KEY STRUCTURE is identical across every site in the network — same
 * groups, same keys, same order — so the apps stay interchangeable and a
 * component written for one works on all of them.
 *
 * The WORDS are deliberately unique to this site. That is not decoration: the
 * nine brands are separate domains serving the same catalogue, and if they
 * shipped the same titles, descriptions and headings, Google would treat them as
 * duplicate content and suppress all but one. Every string that reaches a
 * <title>, a meta description, an <h1>/<h2> or a JSON-LD field must therefore
 * read differently here than on the sibling sites.
 *
 * affliliate's angle: THE OFFER, DECODED. Its unit is the bonus, not the
 * operator — a reader arrives holding an offer ("100% up to €500 + 200 spins")
 * and wants to know what it is actually worth once the conditions are read, so
 * the writing is translation: what the multiplier means in money, what the cap
 * does to a win, what the licence line is really saying. Its sibling
 * bettingbetway ranks CASINOS on their terms; this one decodes the OFFERS.
 * Taken from the brief in sites/affliliate.html.
 *
 * ── Three lines this file does not cross ────────────────────────────────────
 * 1. The mockup's lead says "we open real accounts, deposit, claim the bonus
 *    and request a withdrawal", its band says "Real-money tested" and "Fast
 *    payouts", and its cards print a "Min. deposit" per casino. None of it
 *    ships: nothing here records a funded test account, a timed withdrawal or
 *    a deposit minimum, so no wording claims one. What this site can honestly
 *    say is that it reads the conditions rather than the banner, and that is
 *    what the copy says instead — including in the band, whose four phrases
 *    name things the site actually does.
 * 2. The mockup also sells "casinos and sportsbooks". The API serves casinos,
 *    so every line here says casinos.
 * 3. The mockup's review page prints an "Affliliate Score" and an "Avg. payout
 *    time" per operator. There is no column behind the second one, so no
 *    wording here promises a figure of that kind. The vocabulary is the
 *    mockup's; the numbers are only ever `casino.rating`, which is real.
 */
export const COPY = {
  // SEO identity. These three reach the <title>, the meta description and the
  // keywords tag on EVERY page that does not set its own — which is most of
  // them — so they are the strings most likely to be read as duplicate content
  // if a sibling domain ships the same words.
  site: {
    titleTail: 'Casino Offers, Decoded',
    description:
      'reads every casino bonus back in plain English — what the wagering multiplier costs in real money, what the cap does to a win, and which regulator stands behind the offer.',
    keywords: [
      'casino bonus explained',
      'wagering requirement calculator',
      'what casino bonuses are worth',
      'casino offer comparison',
      'bonus small print decoded',
    ],
  },
  nav: {
    casinos: 'Casinos',
    // The page lists every visible bonus, flat and ungrouped, so the menu says
    // what is behind it. winpalack keeps "Special Offers": its page is the
    // grouped bonus-area view and is a different thing.
    specialOffers: 'Bonuses',
    categories: 'Categories',
    // First row inside the header and footer dropdowns: the parent's own page.
    allCasinos: 'All Casinos',
    allOffers: 'All Offers',
  },
  home: {
    bonus: 'Bonuses',
    seeMore: 'See more',
    seeAllBonuses: 'See All Bonuses',
    /**
     * The VISIBLE heading over the bonus-type row.
     *
     * The row used to carry no heading at all — the chips were taken to
     * speak for themselves. They do not: arriving mid-page at a band of
     * unlabelled buttons between the hero and the casino list, there is
     * nothing saying what the set IS, and nothing a screen reader can
     * announce for the landmark beyond a generic label nobody wrote for
     * this page.
     *
     * Worded differently on every domain, like every other <h2> here:
     * eleven sites serve one catalogue, and a shared heading is
     * duplicate content.
     */
    bonusTypesTitle: 'Browse by bonus type',
    heroEyebrow: 'Updated weekly',
    // Split in two so the JSX keeps its emphasised highlight while the words
    // change. The highlight is the brand's own phrase.
    // Split in three so the JSX can set the middle phrase in the serif's TRUE
    // italic, which is the hero's whole device.
    heroHeadline: 'Every casino offer,',
    heroHighlight: 'decoded.',
    heroHeadlineTail: '',
    heroSubtitle:
      'A bonus is a contract with a number on the front. We read the rest of it — the multiplier, the cap, the expiry, the licence — and say what the offer is worth.',
    // The head of the hero's top-three card, and the label over its right-hand
    // column. The mockup's column is "Min. deposit"; nothing in the API holds
    // one, so the slot carries the rating.
    podiumTitle: 'Top picks right now',
    podiumRatingLabel: 'Rating',
    podiumAll: 'Full rankings',
    // The marquee under the hero. Four things this site DOES — the mockup's
    // own "Fast payouts" and "Real-money tested" are claims nothing here
    // records, so they are not among them. See note 1 above.
    bandPhrases: [
      'Wagering, in plain words',
      'Caps stated up front',
      'Licence named, every time',
      'Re-read, not reposted',
    ],
    topCasinosTitle: 'Where the offers are',
    topCasinosSubtitle: 'Operators ordered by what their offers are worth once the conditions are read. Filter by category.',
    featuredCasinos: 'Browse rankings',
    specialOffers: 'See bonus offers',
    viewAll: 'View all',
    // Leads the home <title>; the year and brand are appended in page.tsx.
    homeTitle: 'Casino Bonuses Decoded',
    faqTitle: 'Good questions.',
    faqSubtitle: 'Straight answers on how an offer gets decoded and what we check before it goes on the board.',
    metaDescription:
      'Casino bonuses read back in plain English: what the wagering multiplier costs, what the withdrawal cap does to a win, and who the regulator is.',
    // ── The "How we rank a casino" band ───────────────────────────────────
    // Three steps, numbered, because they ARE a sequence: each one happens
    // after the one before it. Numbering a set that is not ordered is
    // decoration; numbering this one is information.
    methodTitle: 'How an offer gets decoded',
    methodSubtitle: 'Every bonus on this board goes through the same three passes, in the same order.',
    methodSteps: [
      {
        no: '01',
        verb: 'Translate',
        title: 'The number, in money',
        body:
          'A 40x multiplier on a €100 bonus is €4,000 of staking. We work the headline figure out in money, against the operator’s own terms page rather than the promo banner.',
      },
      {
        no: '02',
        verb: 'Weigh',
        title: 'What is attached to it',
        body:
          'The cap on what a bonus win can pay out, the expiry clock, the maximum stake while wagering, and which games count — the four clauses that decide whether the number out front survives.',
      },
      {
        no: '03',
        verb: 'Re-read',
        title: 'Again, later',
        body:
          'Offers change quietly. Lapsed ones come off the board, revised ones are decoded again, and an operator moves when its offers move.',
      },
    ],
    methodLabel: '03 — The method',
    // Under the three stages: the cycle closes back on the first.
    methodLoop: 'And back to the first pass whenever an operator rewrites an offer',
    // ── The hero monitor: what one pass re-reads ─────────────────────────
    // The same three things the FAQ and the method name — no figure this
    // site does not hold.
    monitorTitle: 'What each pass re-reads',
    monitorStatus: 'Weekly',
    monitorReads: [
      { label: '01 · The figure', text: 'Multiplier, and what it applies to' },
      { label: '02 · The clauses', text: 'Cap, expiry, max stake, eligible games' },
      { label: '03 · The licence', text: 'Which regulator the operator names' },
    ],
    monitorNote: 'An operator moves when its offers move. Lapsed bonuses come off the board.',
    rankingLabel: '01 — The board',
    bonusTypesKicker: '02 — By type',
    bonusesLabel: '04 — Decoded',
    faqLabel: '05 — Good questions',
  },
  casinos: {
    pageTitle: 'Every Casino On The Board',
    pageDescription:
      'The full list, each operator shown with the offer it is running, what that offer is worth decoded, and where it places in its category.',
    // H2 over the offers block on a casino page. The literal 'Special Offers'
    // was hardcoded in the component on all six sites — an identical H2 on
    // every review page in the network.
    offersHeading: 'Offers Running Here',
    // Tail of the summary-panel H2: `{casino.name} at a glance`.
    glanceHeadingTail: 'at a glance',
    moreHeading: 'Other operators worth decoding',
    reviewTitleTail: 'Offers Decoded',
    reviewSignature: 'Every offer here decoded from the operator’s own terms.',
    reviewSummary: 'with each of its offers decoded from the operator’s own terms rather than its banner.',
    visitCasino: 'Open Casino',
    readReview: 'Read The Review',
    rating: 'Affliliate score',
    noResults: 'No casinos match this filter yet. Try another category.',
  },
  /**
   * The page behind one bonus type (/bonuses/[slug]).
   *
   * `metaSuffix` is appended to the type's name when the admin wrote no
   * description, so the meta line is still specific to the page rather than
   * boilerplate shared by eight of them.
   */
  bonusCategory: {
    metaSuffix: 'every bonus of this kind on the board right now, decoded — the figure, the clauses attached to it and whose offer it is.',
    countOne: 'bonus',
    countMany: 'bonuses',
  },

  specialOffers: {
    pageTitle: 'Every Offer, Decoded',
    pageDescription:
      'The whole board in one place: each bonus with its wagering multiplier, its withdrawal cap and its expiry stated wherever the operator states them.',
    // Appended to an offer's (shared) bonus text so the sibling sites do not
    // ship an identical meta description for the same offer.
    offerMetaSuffix: 'Decoded from the operator’s own terms page before it went on the board.',
    claim: 'Claim Bonus',
    noResults: 'No bonuses are on the board right now.',
  },
  categories: {
    pageTitle: 'Offers By Category',
    pageDescription:
      'Same decoding behind every list — pick the category you came for.',
    // Meta-description tail for a single category page. Category records are
    // shared master data, so this is what keeps the nine sites distinct there.
    categoryMetaSuffix: 'ordered by what their offers are worth decoded: the multiplier, the clauses attached and the licence behind them.',
    noResults: 'Nothing on the board here yet.',
  },
  newsletter: {
    title: 'New offers, decoded.',
    subtitle: 'One email a week: the bonuses worth claiming, and the ones whose small print killed them.',
    placeholder: 'Email for decoded offers',
    button: 'Subscribe',
    // Shown while the address is being checked. The subscribe request waits on
    // a live address-validation call, so the button has to say so rather than
    // just dimming for a second or two.
    checking: 'Checking…',
    // The spam line is NOT optional wording. This is a double opt-in list: an
    // unconfirmed subscriber never receives anything again, and the verify mail
    // is the single most likely message to be filtered — new sender, one link,
    // no history. Telling people where to look is the difference between a
    // signup and a dead row.
    success:
      'Nearly there — check your inbox and confirm your address to finish. '
      + 'If nothing arrives, it may be sitting in spam or junk.',
    // Shown when the API reports email_sent=false — the site is still
    // collecting addresses but its sending is switched off in the admin.
    // Promising an inbox (and a spam folder to search) for mail that will
    // never arrive is worse than not collecting the address at all.
    successNoEmail:
      'You’re on the list. We are not sending confirmation emails from this site at the moment.',
    error: 'That did not send. Please try again.',
  },
  footer: {
    // Short brand blurb in the footer's first column. The mockup gives that
    // column 1.6fr of a four-track grid — roughly 360px — so this runs to two
    // or three lines there by design, unlike the two-column siblings where the
    // same string had to stay on one.
    tagline:
      'Independent casino reviews and rankings. We may earn a commission from links on this site; it never changes a score or a position.',
    // Registered postal address, shown beside the copyright line. A physical
    // address in the footer is what mailbox providers and the gambling
    // affiliate compliance checks both look for, and it must match the address
    // used in the email templates.
    // Blank until the operator supplies one — the footer omits the whole
    // <address> element rather than printing a placeholder. See layout.tsx.
    postalAddress: '',
    disclaimer:
      'Gambling is for adults aged 18 or over and carries real financial risk. Set deposit limits, never chase losses, and only stake what you can afford to lose.',
  },
  errors: {
    notFound: 'That page is not on the board.',
    apiError: 'Could not load this content. Please try again in a moment.',
  },
  reviews: {
    heading: 'What Players Report',
    empty: 'No reports yet — be the first to say how the offer worked out.',
    formTitle: 'Add Your Report',
    formIntro: 'Your report appears on this page as soon as you post it.',
    nameLabel: 'Your name',
    emailLabel: 'Email (optional, never published)',
    ratingLabel: 'Rating',
    titleLabel: 'Headline (optional)',
    bodyLabel: 'Your report',
    namePlaceholder: 'First name or nickname',
    emailPlaceholder: 'you@example.com',
    titlePlaceholder: 'One line on whether the offer paid out as written',
    bodyPlaceholder: 'How did the bonus actually clear — wagering, cap, verification?',
    submit: 'Post Report',
    // Two outcomes, because the site can run pre- or post-moderation
    // (Sites -> Publish reviews immediately). The API reports which one
    // applied; promising the wrong one is a promise the page then breaks.
    success: 'Thanks — your report is now live. Scroll up to see it.',
    successPending: 'Thanks — your report has been submitted and will appear once approved.',
    error: 'That did not send. Please check the form and try again.',
    ratingSummary: (avg: number, total: number) =>
      `${avg.toFixed(1)} out of 5 from ${total} ${total === 1 ? 'report' : 'reports'}`,
  },
  // Labels on the phone-only hide / show toggle above each chip list.
  collapse: {
    casinoCategories: 'Casino categories',
    bonusTypes: 'Bonus types',
  },
} as const
