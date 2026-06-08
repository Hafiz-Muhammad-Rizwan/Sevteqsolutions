# Sevteq Corporate Website

Premium and professional corporate website for **Sevteq**, built with Next.js App Router and TypeScript.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- ESLint

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## Project Structure

```text
src/
	app/
		globals.css
		layout.tsx
		page.tsx
	components/
		common/
			SectionHeading.tsx
		layout/
			Header.tsx
			Footer.tsx
		sections/
			HeroSection.tsx
			CapabilitiesSection.tsx
			MetricsSection.tsx
			IndustriesSection.tsx
			InsightsSection.tsx
			ContactSection.tsx
	data/
		site.ts
	types/
		site.ts
```

## Notes

- Content is currently placeholder-ready for Sevteq and can be replaced with final copy, brand assets, and production contact details.
- The design language is structured to support additional pages such as About, Services, Careers, and Contact.
