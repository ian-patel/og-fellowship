# The Fellowship

A React rebuild of [icehouseventures.co.nz/the-fellowship](https://www.icehouseventures.co.nz/the-fellowship), built with Vite, React 19 and TypeScript. No UI framework: plain CSS with design tokens in `src/index.css`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Editing content

All copy, links, images and the FAQ list live in `src/data/content.ts`. Components only render what is in that file, so most updates never touch a component.

- `applicationsOpen` toggles the hero "Apply now" button and the status text.
- `links.apply` is the application form URL (currently a placeholder `#`).
- `event.show` hides or shows the information evening banner.
- Images currently point at the Icehouse Ventures Webflow CDN. Drop replacements into `public/` and update the paths when you have final assets.

## Structure

```
src/
  App.tsx              page composition (section order)
  index.css            tokens, base styles, every section's CSS, responsive rules
  data/content.ts      all page content
  components/          one component per section: Nav, Hero, About, EventBanner,
                       Funding, Benefits, Selection, Status, Testimonial, Faq, Footer
```

## Notes

- Headings use Instrument Serif from Google Fonts as a stand-in for the original site's Ivy Journal (an Adobe font). Swap `--font-serif` in `src/index.css` if you license Ivy Journal.
- The newsletter form in the footer only shows a success state. Wire `onSubmit` in `src/components/Footer.tsx` to your email provider.
