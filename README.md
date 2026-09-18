# AegisSec | Application Security & Cybersecurity Portfolio

> Modern, immersive interactive cybersecurity portfolio for **Abinaya S**, featuring WebGL / Three.js 3D security visualizations, full-page cyber dossiers, OWASP assessment showcases, and offensive security methodology.

---

## 🛡️ About

I help businesses identify security vulnerabilities across web applications, APIs, mobile applications, and cloud environments — and provide clear, actionable remediation guidance with proof-of-concept verification.

- **Primary Focus**: Application Security, Penetration Testing, Threat Modeling, DevSecOps
- **Methodology**: OWASP Top 10, OWASP API Security Top 10, OWASP Mobile Top 10, STRIDE
- **Certification**: Certified Penetration Testing (CPT) • RedTeam Hacker Academy

---

## 🚀 Key Features

- **3D Interactive Visualizations**: WebGL-powered 3D Cyber Orb and 3D Coverflow dossiers built with Three.js.
- **Offensive Security Dossiers**: Interactive case studies highlighting vulnerability discovery (BOLA, SQLi, Auth Bypass, Frida APK Hooking).
- **Tactical Skills Matrix**: Categorized toolsets spanning AppSec, Network, Reconnaissance, and Cloud Security.
- **Engagement Lifecycle**: Clear 6-stage testing workflow (Scope ➔ Discover ➔ Test ➔ Validate ➔ Report ➔ Retest).
- **Fully Responsive & Cyber-Themed**: Engineered with Next.js 16 App Router, Framer Motion, and Tailwind CSS.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **3D & Graphics**: [Three.js](https://threejs.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email Service**: [Resend](https://resend.com/)

---

## ⚡ Getting Started

### 1. Prerequisites
Ensure **Node.js** (v18+) and **pnpm** (or **npm**) are installed.

### 2. Install Dependencies
```bash
pnpm install
# or
npm install --legacy-peer-deps
```

### 3. Configure Environment Variables
Copy the sample environment file:
```bash
cp .env.example .env.local
```
Configure your API keys in `.env.local`:
- `RESEND_API_KEY`: API key from [Resend](https://resend.com)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` & `RECAPTCHA_SECRET_KEY`: Google reCAPTCHA v3 keys

### 4. Run Development Server
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

---

## 📁 Project Structure

```bash
portfolio/
├── app/                  # Next.js App Router pages & routes
│   ├── api/contact/      # Contact form submission API route
│   ├── globals.css       # Global styles and cyber design tokens
│   ├── layout.tsx        # Root layout with AegisSec metadata
│   └── page.tsx          # Full-page interactive container
├── components/           # React UI components & 3D canvases
│   ├── sections/         # Hero, About, Skills, Services, Work, Approach, Contact
│   ├── CyberAtmosphere.tsx # Background cyber grid & telemetry
│   ├── CyberCoverflow3D.tsx# 3D project cards showcase
│   ├── CyberOrb3D.tsx    # Interactive 3D particle sphere
│   ├── Header.tsx        # AegisSec top navigation & brand
│   ├── Nav.tsx           # Floating desktop/mobile dock
│   └── Socials.tsx       # Verified social & contact channels
├── public/               # Static assets & illustrations
└── package.json          # Dependencies and scripts
```

---

## 📬 Contact & Connect

- **Author**: Abinaya S
- **Email**: [abinayaselsa@gmail.com](mailto:abinayaselsa@gmail.com)
- **GitHub**: [@abinayasofficial2003-cyber](https://github.com/abinayasofficial2003-cyber)


---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
