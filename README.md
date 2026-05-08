# CPAP Mobile Connect

## Overview
CPAP Mobile Connect is a dedicated mobile application designed to transition a web-only e-commerce model into a high-frequency supply renewal ecosystem.

By integrating directly with existing Shopify storefronts and Gorgias support desks, the application minimizes development friction while maximizing customer retention.

The app transforms medical supply maintenance into a frictionless mobile experience through automated logic and AI-driven support.

---

## Core Features

### 1. One-Tap Replenishment
Utilizes the **Shopify Storefront API** to bypass traditional multi-step e-commerce flows:

- **Persistent Order History:** Automatically identifies exact SKUs (e.g., specific mask sizes) from the user's Shopify account history.
- **Zero-Search Interface:** Dynamically surfaces a "Ready to Reorder?" card on the home screen featuring the user's exact setup.
- **Pre-filled Checkout:** Programmatically creates checkout objects with default shipping and payment methods, allowing completion in under 30 seconds.
- **Real-time Availability:** Performs background stock checks via API before presenting reorder options.

### 2. Automated Renewal Reminders
Aligned with clinical guidelines for replacing masks (90 days) and filters (30 days):

- **Event-Based Triggers:** A 60-day countdown begins once a purchase is marked "Fulfilled" in the Shopify backend.
- **Smart Deep-Linking:** Push notifications take users directly to the pre-filled checkout screen.
- **Educational Context:** Notifications include therapy effectiveness notes to reinforce replacement importance.

### 3. Support & AI Ecosystem
- **Native Gorgias Live Chat:** Implementation of the Gorgias Mobile SDK allows for unified ticket history between web and mobile platforms.
- **Grounded AI Assistant:** A RAG-based LLM layer trained on company-specific manuals and FAQs to resolve common queries (tracking, troubleshooting) before human escalation.

---

## Technical Stack

- **Frontend:** React Native / Expo (iOS & Android)
- **Backend Integration:** Shopify Storefront API & Gorgias HTTP Request API
- **AI Layer:** RAG-based LLM (Gemini/OpenAI) using a private knowledge base

---

## Running the Development Build

### Prerequisites
Before starting the app, ensure the following are installed:

- Node.js (LTS recommended)
- npm or yarn
- Expo CLI dependencies
- Android Studio and/or Xcode for emulator support

### Install Dependencies

```bash
npm install
```

### Start the Expo Development Server

```bash
npx expo start
```
This will launch the Expo development server and open the Expo Developer Tools in your browser.

### Running on a Device or Emulator
After starting the server:
* Press `a` to launch the Android Emulator
* Press `i` to launch the iOS (macOS only)
* Or Scan the QR code to use Expo Go on a physical device  

### Clearing the Metro Cache
If you encounter building or dependecy issues:
```bash
npx expo start --clear
```





