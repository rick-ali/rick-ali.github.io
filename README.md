# Riccardo Ali's website

A static Astro website based on the approved midnight-blue and warm-apricot mockup. Research, teaching, and talks have dedicated pages and featured homepage sections. Content renders as HTML, fonts are self-hosted, and no account, database, or client-side framework is required.

## Preview locally

Use Node.js 24 (or a newer supported version).

```sh
npm ci
npm run dev
```

Open the local address printed by Astro. Changes to content and styling update the preview automatically.

```sh
npm run verify    # Type checking, production build, and exported-link checks
npm run preview   # Preview the production build
```

## Update content

| What to change | Where |
| --- | --- |
| Name, biography, education, portrait, email, social links, section text, colours | `src/data/site.json` |
| Publications | `src/content/research/*.md` |
| Courses and supervision | `src/content/teaching/*.md` |
| Talks and workshops | `src/content/talks/*.md` |
| PDFs and images | `public/files/` and `public/images/` (create as needed) |
| Layout and typography | `src/styles/site.css` |

Each Markdown file has a YAML header between `---` lines and ordinary Markdown below it. The header controls lists and metadata; the Markdown becomes that item's own page. Duplicate a similar file to add an entry.

- The homepage shows up to 10 non-draft publications in reverse chronological order. Change `homepagePublicationCount` in `src/data/site.json` to adjust the limit. The research index shows all publications; publication `featured` flags are ignored.
- For teaching, `featured: true` includes an entry on the homepage. Remove it or use `false` to show only in the full list.
- All non-draft talks appear on the homepage in reverse chronological order; talk `featured` flags are ignored.
- `draft: true` excludes an entry from the website, its detail page, and the sitemap. **The source file is still public if the GitHub repository is public.**
- Research and teaching sort by descending `year`, then ascending `order`. For publications in the same year, give the newest the lowest `order` to retain reverse chronological order. Talks sort by descending `date`.
- The filename determines the URL. `research/entropy-lens.md` becomes `/research/entropy-lens/`. Keep filenames stable after sharing links.
- Add links only when materials exist. There are no placeholder slides, videos, or course-resource buttons.
- Content errors, such as a missing title or an invalid date, stop the build with the filename and field to fix.

### Update your biography, portrait, and contact links

Edit `profile.biography` in `src/data/site.json`: each string becomes a paragraph. `profile.greeting`, `profile.firstName`, and `profile.role` control the introduction and the text under your portrait.

Your supplied photo is stored in `public/images/portrait.jpg`. To replace it, add another photo to `public/images/` and update `profile.portrait` and `profile.portraitAlt`. The site displays it in a circle; a square image with your face near the centre works best.

Your email and social profiles appear as accessible icons below the portrait and in the footer. Edit `email` and the `socials` list; each social link has a `label`, `url`, and `icon` (`scholar`, `github`, `linkedin`, `twitter`, `email`, `document`, or `link`). Unknown icons use a generic link symbol. A configured CV also appears here.

Edit the `education` list in `src/data/site.json` to update the compact list below your biography. Each entry has `degree`, `institution`, and an optional display value in `period` (leave it empty to omit dates). Set the list to `[]` to hide the section.

### Add a publication

Create `src/content/research/my-new-paper.md`:

```yaml
---
title: "My new paper"
authors: ["Riccardo Ali", "Coauthor Name"]
year: 2026
venue: "arXiv preprint"
topic: "Representation learning"
summary: "A sentence explaining the contribution."
featured: true
order: 1
links:
  - label: Paper
    url: https://arxiv.org/abs/REPLACE_WITH_REAL_ID
---

Paste the paper's abstract here. The page supplies the “Abstract” heading automatically.
```

Replace the example paper URL before building. Publications display a venue/year badge, full author list (your name is highlighted), the `summary` as a TL;DR, and every entry in `links`. Add real Paper, PDF, Code, Project, Slides, or Video links as available. An asterisk on an author's name displays an equal-contribution note.

To include the paper's figure, place it in `public/images/publications/` and add:

```yaml
image: /images/publications/my-paper.webp
imageAlt: "Describe the method or result shown in the figure."
imageCaption: "Figure 1: method overview. Credit the paper's authors and license."
imageSource: https://example.org/paper.pdf#page=2
```

Thumbnails preserve the full figure without cropping and open the full-size image when clicked. Detail pages show the title, authors, venue/year, resource links, figure, and an Abstract section populated from the Markdown body. The homepage TL;DR comes from `summary`. Figure captions and source URLs remain editable metadata but are not displayed beneath the figure. Omit `image` for a text-only entry. Existing figures were extracted from the papers; the Clifford entry uses Algorithm 1 because the paper has no numbered figure. Source details are in `public/images/publications/ATTRIBUTION.md`.

### Add teaching

Duplicate a file in `src/content/teaching/`. Set `title`, `role`, `institution`, `period`, `year`, and `summary`. Use the Markdown body for your responsibilities, course topics, or teaching materials.

Resources are optional:

```yaml
links:
  - label: Course notes
    url: /files/course-notes.pdf
  - label: Course website
    url: https://example.edu/course
```

### Add a talk

Duplicate a file in `src/content/talks/`. Set `date` to a quoted `YYYY-MM-DD` string, plus `kind`, `event`, `location`, `title`, and `summary`. Add optional `links` labelled `Slides`, `Recording`, or `Workshop materials` using the same format above. The Markdown body can contain an abstract.

Use `## Abstract` for a published talk abstract, or `## Paper abstract` when reusing the associated paper's abstract. Add images with ordinary Markdown, for example `![Descriptive alt text](/images/talks/my-talk.png)`, and credit their sources. Add `thumbnail: /images/talks/my-talk.png` to the YAML header to show a small clickable picture beside the talk on the homepage. Abstracts and full-sized pictures remain on the detail pages. Homepage talks appear on the left, before Teaching on smaller screens.

### Add a CV

Put your PDF at `public/files/cv.pdf` and set `cvUrl` in `src/data/site.json` to `/files/cv.pdf`. This adds a CV navigation link. Leave the value empty to hide it.

### Adjust the design

The three `theme` values in `src/data/site.json` control the main background, panel background, and accent. The remaining palette and responsive rules live in `src/styles/site.css`. Fonts are bundled from Fontsource; visitors do not make Google Fonts requests.

## Publish on GitHub Pages

The site is published from [rick-ali/rick-ali.github.io](https://github.com/rick-ali/rick-ali.github.io). GitHub Pages uses **GitHub Actions** as its source.

1. Edit the source on a branch and open a pull request. The included workflow runs npm run verify; pull requests do not deploy.
2. Merge into master. The workflow checks, builds, and deploys dist/ to https://rick-ali.github.io/.

The previous Jekyll website is preserved on branch codex/backup-jekyll-2026-10-22 and in Git history. Its PDFs, BibTeX files, and images are retained in public/ at their original public URLs.

The same workflow can be run manually from **Actions**. It uses GitHub's built-in token with Pages deployment permissions; no personal access token is needed. Do not commit `node_modules/`, `dist/`, `.astro/`, or `.preview/`.

Routine updates can be made through GitHub's file editor: edit a Markdown file, preview changes in a pull request if desired, then merge. GitHub rebuilds the site automatically.

### Existing links

The original `/publications/`, `/teaching/`, and `/talks/` index URLs remain available. `/publications/` displays the research list and declares `/research/` as its canonical URL. Old publication, course, and talk detail URLs redirect to their new equivalents through src/data/legacy-redirects.json. Old biography and placeholder CV URLs redirect to the homepage. Unknown routes show the custom 404 page.

### Different repository or domain

For a different personal domain, update `url` in `src/data/site.json` and configure the domain in GitHub Pages settings. If required, add `public/CNAME` with that domain.

For a project site at `https://username.github.io/repository/`, set `url` to `https://username.github.io` and set `SITE_BASE=/repository` in both workflow build steps and local commands. For example:

```sh
SITE_BASE=/repository npm run verify
```

Navigation, frontmatter resource links, fonts, images, canonical URLs, and the sitemap use this base. Absolute links written directly in Markdown bodies must also include the project prefix; relative links are usually simpler there.

## Content review before publication

CONTENT-REVIEW.md records content sources and remaining metadata questions. The site includes the biography and design reviewed during development, seven publications reconciled against Scholar, and the updated teaching and talks sections.
