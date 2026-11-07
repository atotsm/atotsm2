# ATOTSM Visitor Experience V2

## Purpose

Help a first-time visitor understand where they are, what ATOTSM is exploring, and where they can go next—without requiring them to understand the entire intellectual architecture first.

The redesign preserves the substance of the existing inquiry. It changes the way visitors enter, orient themselves and move between its parts.

## Canonical distinction

ATOTSM has **six intellectual territories** and **seven website destinations**. These are different kinds of structure and must never share one page counter.

The six territories are presented on the Explore map:

1. See — systemic awareness / Usurology
2. Understand — investigation and evidence
3. Reconnect — human flourishing / Ikigaiology
4. Reimagine — monetary and social alternatives / Currency Ecology
5. Experiment — practical creation / The Sovereign Laboratory
6. Envision — civilisational possibilities

The seven website destinations are:

| Destination | Purpose |
| --- | --- |
| Start | A concise introduction to ATOTSM and its reason for existing |
| Map | The six-territory intellectual map |
| Usurology | The systemic and monetary inquiry |
| Flourishing | Ikigaiology and human development |
| Currency ecology | Plural monetary arrangements and practical experiments |
| Method | Evidence, scrutiny, claims and revision |
| Participate | Value, contribution and discreet assistance |

## Navigation rules

- Use the same seven destinations, order, labels and URLs on every page.
- Exactly one navigation link has `aria-current="page"`.
- The breadcrumb identifies the current page.
- Every page links back to the six-territory map.
- Do not display a sequential page number or imply that the destinations form a compulsory linear course.
- Use the same orientation message: “Explore at your own pace · No fixed sequence”.
- “On this page” is generated from actual top-level section headings.
- Keep the mobile menu keyboard-operable; Escape and outside clicks close it.
- Keep the skip-to-content link available to keyboard users.

## Visitor journey

The recommended first visit is:

1. Start: understand the purpose and central question.
2. Map: see the complete landscape and choose a point of entry.
3. Go deeper: explore any territory or supporting method.
4. Participate: discover ways to contribute or request assistance.

This is a suggested orientation, not a required sequence. Visitors can enter through a direct link and should still understand their location.

## Naming rule

The menu uses “Currency ecology” as the visitor-facing subject label. The destination is the practical Currency Ecology Laboratory. The page title and opening heading should make both its subject and applied nature clear.

## QA checklist

Before merging or publishing:

- [ ] All seven HTML pages use the exact same seven navigation destinations and order.
- [ ] Exactly one current-page marker appears in each menu.
- [ ] Each page contains one orientation block and one main landmark.
- [ ] No obsolete “PAGE x OF y” counter remains.
- [ ] No sequential previous/next controls imply a fixed route.
- [ ] Internal page links and fragment identifiers resolve.
- [ ] Mobile menu opens, closes by link, closes on Escape and closes on outside click.
- [ ] Keyboard focus remains visible and the skip link reaches the main content.
- [ ] Test at narrow phone width, tablet width and desktop width.
- [ ] Test a first-time visitor journey and at least three topic-led journeys.
- [ ] Verify GitHub Pages after merge; do not describe a branch preview as the live website.

## Scope boundary

This V2 change is a navigation and orientation correction. It does not claim that the entire site has received a full editorial, factual, legal, accessibility or cross-browser audit. Those should be separate review passes, with findings recorded rather than silently changing the underlying philosophy.
