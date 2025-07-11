# LAMBDA CubeSat Mission Control Hub

> **LAMBDA** - *Analyzes Microorganisms' Biological Damage in Anomalous conditions*

A modern web interface for the LAMBDA CubeSat mission developed by Team COREX from Universidad Tecnológica Nacional, Facultad Regional Córdoba for the CubeSat Competition 2025.

![Mission Status](https://img.shields.io/badge/Mission-Development-orange)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC)

## 🚀 Mission Overview

LAMBDA is a groundbreaking CubeSat mission that combines aerospace engineering with biomedical research, studying the viability of *Giardia Lamblia* cells under extreme launch conditions and space environment.

### Mission Objectives
- **Primary**: Environmental monitoring (pressure, temperature, acceleration, rotation)
- **Secondary**: Biological research on *Giardia Lamblia* cellular adaptation mechanisms

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS + shadcn/ui components
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: JetBrains Mono (space theme)

## 📁 Project Structure

```
web/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global CSS styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main homepage
├── components/              # React components
│   └── ui/                  # shadcn/ui component library
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── sidebar.tsx
│       ├── tabs.tsx
│       └── ...              # Other UI components
├── styles/                  # Additional stylesheets
│   └── globals.css          # Tailwind base styles
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── package.json             # Project dependencies
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
├── components.json          # shadcn/ui configuration
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Team-COREX/cubesat-web.git
   cd cubesat-web/web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

This project uses a custom design system built on:
- **Color Palette**: Cyan/blue space theme with dark slate backgrounds
- **Typography**: JetBrains Mono for that technical/space feel
- **Components**: shadcn/ui for consistent, accessible UI components
- **Animations**: Tailwind CSS animations for smooth interactions

### Key Design Elements
- HUD-style header with real-time mission status
- Animated background grid pattern
- Gradient text effects for mission branding
- Card-based layout for information organization
- Responsive design for all device sizes

## 🧑‍🚀 Team COREX

- **Jimena Sofía Adragna** - Software Development & Cybersecurity
- **Luciano Tomás Cortesini Pérez** - Project Manager & Mechanical Design
- **Ignacio Gil** - PCB Design & Electronics
- **Matías Adolfo Koroch** - AI & Data Analysis
- **Dana Carolina Montesinos** - Computational Physics
- **Franco Palombo** - Embedded Systems & Hardware
- **Angelo Prieto** - Embedded Systems & Documentation

## 🔬 Scientific Partnership

This mission is developed in collaboration with:
- **INIMEC-CONICET-UNC** - Biological research expertise
- **UTN Córdoba** - Aerospace engineering and systems development

## 🛰️ Mission Timeline

- **July 2025**: Preliminary Design Review ✅
- **August 2025**: Critical Design Review
- **September 2025**: Hardware Integration
- **October 2025**: Final Testing Phase
- **November 2025**: Launch Window

## 📄 License

This project is part of the CubeSat Competition 2025 and is open source.

## 🤝 Contributing

This is an educational project for the CubeSat Competition 2025. For questions or collaboration inquiries, please contact Team COREX through our GitHub organization.

## 🔗 Links

- **Running on**: [web](https://lambda-mission.vercel.app)
- **GitHub Organization**: [Team-COREX](https://github.com/Team-COREX)
- **Institution**: Universidad Tecnológica Nacional - Facultad Regional Córdoba
- **Competition**: CubeSat Competition 2025

---

*"Exploring the intersection of aerospace engineering and biological research, one cell at a time."*
