# Kei-Tech Portfolio

The website of **Kei-Tech**, a one-person studio by Keian Gacillos from Eastern Samar, Philippines.
I build websites, online stores, web systems with mobile apps, and Arduino/IoT solutions for clients in the Philippines and worldwide.

**Live site:** _coming soon_

![Kei-Tech homepage in light mode](docs/screenshots/home-light.png)

## Features

- **Light and dark mode:** follows the visitor's device setting, with a toggle that remembers their choice (no white flash on load)
- **Mobile-first design** with a hamburger menu on small screens
- **Animated splash screen:** a short split-door intro with the Kei-Tech chip logo. Shown once per visit, tap to skip, and skipped for visitors who prefer reduced motion
- **Working contact form:** sends inquiries by email through a small PHP API, with server-side validation and spam protection
- **Accessible:** semantic HTML, labeled form fields, keyboard support, screen-reader announcements
- **Fast:** optimized WebP images, lazy loading, and no heavy animation libraries

## Screenshots

| Dark mode | Mobile |
|---|---|
| ![Dark mode](docs/screenshots/home-dark.png) | ![Mobile view](docs/screenshots/mobile.png) |

## Tech stack

| Part | Tools |
|---|---|
| Frontend | React, TypeScript, Tailwind CSS v4, Vite |
| Backend (contact form) | PHP 8, Composer, PHPMailer, phpdotenv |
| Tooling | ESLint, Git, GitHub |

## Project structure

```
kei-tech-portfolio/
├── api/                  # PHP backend for the contact form
│   ├── public/
│   │   └── contact.php   # the only file served to the web
│   ├── .env.example      # template for settings (copy to .env)
│   └── composer.json
├── public/               # favicon and static files
├── src/
│   ├── assets/           # images
│   ├── components/       # React components (Navbar, Hero, Contact, ...)
│   ├── data/             # page content (services, process steps, contact links)
│   ├── hooks/            # reusable logic (useTheme)
│   └── lib/              # API calls (sendContactMessage)
└── index.html
```

Content such as services and process steps lives in `src/data`, separate from the layout, so text can be updated without touching the components.

## Getting started

### Requirements
- [Node.js](https://nodejs.org/) 20 or newer
- PHP 8.1 or newer (for example from [XAMPP](https://www.apachefriends.org/))
- [Composer](https://getcomposer.org/)

### 1. Install
```bash
git clone https://github.com/ItsmeKeian/Kei-Tech-Portfolio-V2.git
cd Kei-Tech-Portfolio-V2
npm install
cd api
composer install
cd ..
```

### 2. Configure the contact form
Copy the settings template and fill in your own values:
```bash
cp api/.env.example api/.env
```

| Setting | Meaning |
|---|---|
| `SMTP_HOST`, `SMTP_PORT` | Your email provider's SMTP server (for example `smtp.gmail.com`, `587`) |
| `SMTP_USER`, `SMTP_PASS` | The sending account. For Gmail, use an [App Password](https://myaccount.google.com/apppasswords), never your real password |
| `MAIL_TO` | Where inquiries are delivered |
| `ALLOWED_ORIGIN` | The website address allowed to use the API (`http://localhost:5173` for local development) |

> `api/.env` is in `.gitignore` and must never be committed.

### 3. Run locally
Open two terminals:
```bash
# Terminal 1: the website
npm run dev

# Terminal 2: the contact form API
php -S 127.0.0.1:8000 -t api/public
```
Visit **http://localhost:5173**. Vite forwards `/api/*` requests to the PHP server.

### 4. Build for production
```bash
npm run build
```
The finished site is created in the `dist` folder.

## Contact

Interested in working together? Use the contact form on the website, or open an issue in this repository.

---

© 2026 Kei-Tech. All rights reserved.