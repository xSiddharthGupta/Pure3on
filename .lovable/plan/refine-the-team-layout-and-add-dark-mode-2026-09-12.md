# Refine the team layout and add dark mode

## Changes

- Center Amy, Janya, and Naren as the final row of the Student Board on larger screens, while preserving the responsive phone layout.
- Rotate Dirgh Kikani’s existing portrait 90° clockwise so it displays upright without changing the subject.
- Add a sun/moon theme control to the site header, including the mobile menu.
- Create a balanced dark palette for backgrounds, cards, text, borders, buttons, portraits, and wave transitions while preserving PURE3ON’s green and blue identity.
- Remember the visitor’s theme choice and default to their device preference when no choice has been made.

## Validation

- Check the home and team pages in light and dark modes at desktop and mobile sizes.
- Confirm the final student row is centered, Dirgh’s portrait is upright, and the theme choice persists.
- Confirm the site builds without errors.

## Technical details

- Use the existing semantic color tokens and a `.dark` theme class.
- Apply theme state only after browser hydration to avoid visual or rendering mismatches.
- Respect reduced-motion preferences for theme transitions.