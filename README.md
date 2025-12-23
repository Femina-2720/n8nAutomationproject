# 📈 CrowdWisdomTrading – n8n + AI Agent Automation

> **End-to-end automation for generating and publishing TradingView ideas using n8n, AI (Gemini), and browser automation (Playwright).**

---

## 🚀 Project Overview

This project was developed as part of the **CrowdWisdomTrading n8n + AI Agent Internship Assessment**.

The goal is to build a **real-world marketing automation workflow** that:

* Randomly selects trading ideas
* Uses AI to analyze and structure them
* Automatically prepares TradingView posts
* Demonstrates production-ready automation thinking

The solution combines:

* **n8n** for orchestration
* **Google Drive** as a content source
* **Gemini AI** for intelligent analysis
* **Playwright** for TradingView browser automation (due to lack of public API)

---

## 🧠 High-Level Architecture

Google Drive (.txt ideas)
        ↓
      n8n
        ↓
 Random selection (2 of 5)
        ↓
   AI Analysis (Gemini)
        ↓
 Clean structured JSON
        ↓
 Local Playwright Script
        ↓
 TradingView Post Automation



## ✨ Key Features

* ✅ Manual trigger-based workflow
* 🎲 Random selection of **2 ideas out of 5**
* 🤖 AI-powered extraction:

  * Title
  * Ticker
  * Long / Short / Neutral
  * Category
  * Tags
* 🔁 Sequential processing (idea 1 → idea 2)
* 🌐 Browser automation for TradingView
* 🧩 Modular, extensible design
* 🛡️ Safe demo mode (publish disabled)

---

## 🛠️ Tech Stack

| Component       | Technology    |
| --------------- | ------------- |
| Workflow Engine | n8n           |
| AI Model        | Google Gemini |
| Storage         | Google Drive  |
| Automation      | Playwright    |
| Runtime         | Node.js       |
| Browser         | Google Chrome |

---

## 📂 Project Structure

```text
crowdwisdom-tradingview-project/
│
├── n8n/
│   └── TradingView_Auto_Poster.json
│
├── playwright/
│   ├── postIdea.js
│   ├── login.js
│   ├── idea.json
│   ├── auth.json
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

---

## 📝 Assignment Requirements Mapping

### ✔ Manual Trigger

* Implemented using **n8n Manual Trigger node**

### ✔ Random Selection of Ideas

* Five `.txt` files stored in Google Drive
* **Code node** randomly selects **2 ideas per execution**

### ✔ AI-Based Analysis

* Gemini AI extracts:

  * `title`
  * `ticker`
  * `position` (long / short / neutral)
  * `category`
  * `tags`
* Output constrained to **valid JSON**
* JSON cleaned programmatically

### ✔ TradingView Posting

* TradingView does **not provide a public API**
* Implemented via **Playwright browser automation**
* Keyboard-based navigation used for stability
* Ideas are processed **one after the other**

### ✔ Deliverables

* n8n JSON workflow
* End-to-end demo video
* TradingView posting logic demonstration
* Challenges & solutions documentation

---

## 🔄 n8n Workflow Details

### Workflow Steps

1. Manual Trigger
2. Search Google Drive folder
3. Randomly select 2 idea files
4. Download and extract text
5. AI analysis using Gemini
6. JSON cleanup and normalization
7. Export structured idea data

### Why n8n?

* Visual, maintainable workflows
* Strong integration ecosystem
* Ideal for marketing & automation use cases

---

## 🤖 AI Agent Logic (Gemini)

The AI agent:

* Reads unstructured trading ideas
* Infers market bias from text
* Outputs **machine-readable JSON**
* Enables dynamic downstream automation

This allows **auto-adjusting behavior** based on content — a key evaluation criterion.

---

## 🌐 TradingView Automation (Playwright)

### Why Playwright?

* TradingView has **no posting API**
* Browser automation is the only reliable approach
* Playwright provides:

  * Stable browser control
  * Session persistence
  * Keyboard-level automation

### Authentication

* One-time manual login
* Session saved to `auth.json`
* Reused for all future runs

### Safety

* Final **Publish click is disabled** in demo
* Logic is fully implemented and explained
* Prevents accidental public posts during testing

---

## ▶️ How to Run (Local)

### 1️⃣ Install Dependencies

```bash
npm install
npx playwright install
```

### 2️⃣ Login Once

```bash
node login.js
```

### 3️⃣ Run Automation

```bash
node postIdea.js
```

---

## 🎥 Demo Video

The demo video shows:

* n8n workflow execution
* Random idea selection
* AI output
* Sequential TradingView automation
* Explanation of design decisions

> Voice-over is included for clarity and context.

---

## ⚠️ Known Limitations

* TradingView UI changes frequently
* Keyboard-based automation is used to avoid brittle selectors
* Final publish action is disabled in demo for safety

These limitations are **expected and documented**.

---

## 🧩 Challenges & Solutions

```text
• Google Drive OAuth and file format issues were resolved by normalizing all inputs to plain text.
• Random selection logic was implemented using a Code node to avoid duplicate ideas.
• AI output was constrained to structured JSON and cleaned programmatically.
• TradingView does not expose a public posting API, so browser automation via Playwright was used.
• Keyboard-based navigation was chosen to avoid fragile DOM selectors and improve stability.
```

---

## 📈 Production Readiness

* Modular design
* Clear separation of concerns
* Documented limitations
* Easy extensibility (more ideas, platforms, or AI models)

---

## 👩‍💻 Author

**Femina K**
Automation & AI Workflow Developer

---

## 📬 Contact

For questions or improvements, feel free to reach out via GitHub or email.

---

### ⭐ Final Note

This project focuses on **real-world constraints**, **engineering judgment**, and **automation reliability**, rather than unrealistic API assumptions.

