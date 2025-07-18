# Kids Kreations Website

A modern, responsive website for Kids Kreations, a premium infantwear OEM/ODM manufacturer based in Thailand. Built with Astro and deployed on Vercel.

testi
## Features

- 🎨 Modern, responsive design
- 🚀 Fast performance with Astro
- 📱 Mobile-first approach
- 📧 Contact form with email notifications
- 🖼️ Interactive product gallery
- 🌐 Multi-page structure
- 🔍 SEO optimized

## Tech Stack

- [Astro](https://astro.build/) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Nodemailer](https://nodemailer.com/) - Email handling
- [Vercel](https://vercel.com/) - Deployment

## Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Git


## Project Structure

```
better-binary/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # Reusable components
│   ├── data/        # Data files
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route pages
│   └── styles/      # Global styles
├── .env            # Environment variables
├── astro.config.mjs # Astro configuration
└── package.json    # Project dependencies
```

## Deployment

The site is automatically deployed to Vercel when changes are pushed to the main branch. The deployment process:

1. Push changes to main:
```bash
git add .
git commit -m "your commit message"
git push origin main
```

2. Vercel automatically:
   - Detects the push
   - Builds the project
   - Deploys to production


## License

This project is proprietary and confidential. All rights reserved.

## Contact

For any questions or support, please contact:
- Email: pranav@kidskreationsco.com


```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
