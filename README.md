# Bharat Raj Dhaka — Portfolio

Live site: https://bharatrajdhaka.github.io/

A fast, single‑page portfolio for an Embedded & VLSI Engineer and STEM educator. It highlights ongoing and completed projects, skills, experience, education, certifications, and a merged Contact + Footer with one‑row action buttons (GitHub, LinkedIn, Download CV, Email, Phone). Built with semantic HTML, modern CSS, and a touch of vanilla JS—no frameworks or build tools.

## Highlights

- Projects section
  - Text‑only project cards (no images) with clear titles, short descriptions, and role/tech lines.
  - Ongoing/Completed tabs and accessible structure.
- Merged Contact + Footer
  - Single row of pill buttons: GitHub, LinkedIn, Download CV, Email, Phone.
  - Lab links: Innovation Centre & Product Design Lab (EI&CE, GECB) and VLSI & AI Design Lab.
- Accessibility & UX
  - Skip‑link, semantic sections, labeled controls, keyboard‑friendly.
  - Responsive grid; wraps gracefully on small screens.
- Simple, static setup
  - Open `index.html` directly in a browser or host from any static server.
  - GitHub Pages ready (served from repository root).

## Selected Projects (as presented on the site)

- Bird Sound Control (Edge AI Node) — Ongoing  
  On‑device classifier detects target bird calls and triggers a humane response only when needed. Fast, private, and low‑power with debounce and cooldown.
  Role/Tech: Embedded + TinyML | ESP32, I2S MEMS mic, MFCC/FFT, TFLite Micro (Edge Impulse), Python (training)

- EcoNav 360 — Embedded Subsystem (Ongoing)  
  MCU firmware and sensor/component interfaces for reliable, timestamped data capture and control. Focus on modular drivers (I2C/SPI/UART), timers/interrupts, and power‑aware operation.
  Role/Tech: Embedded | C/C++, MCU, I2C/SPI/UART, ADC, timers/interrupts

- EQUINES — Smart Stable Monitoring (R&D · Ongoing)  
  Flutter + Firebase app with ESP32 sensor nodes and BLE beacons for per‑horse identification and telemetry.  
  Phase I (done): feed, water, activity + BLE ID → Firebase → Flutter dashboards.  
  Phase II (in progress): Stage 1 Heart Rate • Stage 2 Body Temperature • Stage 3 Respiration Rate • Stage 4 continuous monitoring/alerts.

- ESP32 MQTT Web Control UI (Single‑file)  
  A production‑ready, single `index.html` web UI to control an ESP32 over MQTT via WebSockets (ws/wss). Publishes exact JSON commands (POWER, WINDOW, START/STOP, PLAY1/PLAY2, DELAY, VOLUME, STATUS) and renders live status/telemetry with presets for Mosquitto/EMQX. Uses `mqtt.js` via CDN. (Host via HTTPS requires `wss://`.)

## Tech Stack

- Frontend: HTML, CSS (Space Grotesk), Vanilla JS
- Optional library (for MQTT UI page): [`mqtt.js` (CDN)](https://unpkg.com/mqtt/dist/mqtt.min.js)
- Hosting: GitHub Pages

## Repository Structure

- `index.html` — main page (hero, projects, skills, experience, education, certifications, about, merged contact+footer)
- `css/styles.css` — site styles (responsive grid, tabs, cards, footer layout)
- `js/script.js` — small enhancements (e.g., year, reveal effects, lightbox for certificates)
- `assets/` — images, icons, PDFs (e.g., CV), certificates, and social images

Note: Paths are case‑sensitive on GitHub Pages.

## Run Locally

- Easiest: double‑click `index.html` (opens in your default browser).
- Or serve from a tiny local server:

```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```

## Deploy (GitHub Pages)

This repository name is already correctly set for Pages: `BharatRajDhaka.github.io`.

1) Add/commit your files to the `main` branch.
2) Wait ~1 minute, then visit: https://bharatrajdhaka.github.io/
3) If needed: Settings → Pages → Source: “Deploy from a branch”, Branch: `main`, Folder: `/`.

Cache tip: Hard refresh (Ctrl/Cmd+Shift+R) after updates. Append a version query for stubborn assets: `styles.css?v=2`.

## MQTT over WebSockets (for the ESP32 control page)

- If the page is served over `https://`, browsers require `wss://` (TLS) for MQTT over WebSockets.
- Common presets:
  - Mosquitto (dev/LAN): `ws://YOUR_IP:9001/` (path “/”), MQTT 3.1.1
  - EMQX: `ws://YOUR_IP:8083/mqtt` or `wss://YOUR_HOST:8084/mqtt`, MQTT 5
- Ensure your broker’s WebSocket listener is enabled and that your username has ACL to:
  - publish to the Command topic
  - subscribe to Status and Telemetry topics

## Accessibility & SEO

- Semantic landmarks: `header`, `main`, `section`, `footer`
- Skip‑to‑content link
- Descriptive `alt` text for images
- Meta tags for description and Open Graph
- Mobile‑friendly viewport

## License

© Bharat Raj Dhaka. All rights reserved.  
(If you want to open‑source parts of this site, consider adding an OSI license like MIT.)

## Contact

- Email: bharatrajdhaka5@gmail.com
- Phone: +91 9256506877
- GitHub: https://github.com/BharatRajDhaka
- LinkedIn: https://www.linkedin.com/in/bharat-raj-dhaka-83bb36324

---
If you’d like, I can commit this README.md to the repository for you.
