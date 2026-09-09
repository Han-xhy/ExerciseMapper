# ExerciseMapper

ExerciseMapper is a lightweight browser app for building weekly workout plans. It helps users filter exercises by muscle group and equipment, collect exercises into a plan pool, assign them to training days, and export the plan as Markdown for mobile notes.

## Features

- Muscle-group and equipment filters for fast exercise discovery.
- Plan pool for collecting candidate exercises before assigning them to days.
- Weekly schedule builder with local browser persistence.
- Markdown export and preview for note-taking apps.
- Static frontend with no build step or backend dependency.

## Tech Stack

- HTML
- CSS
- JavaScript
- LocalStorage

## Quick Start

Open `index.html` directly in a modern browser, or run a local static server:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project Structure

```text
ExerciseMapper/
  index.html
  styles.css
  app.js
  muscle-diagram.jpg
```

## Notes

The app stores data only in the user's browser through LocalStorage. It does not upload workout data to a server.
