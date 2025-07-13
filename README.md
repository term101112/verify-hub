# Student Document Verifier

## Inspiration

Verifying student documents and talent show entries is often slow, manual, and prone to errors. We wanted to build a modern, AI-powered portal that makes verification fast, secure, and easy for both students and organizers.

## What it does

- **Student Verification:** Upload a transcript PDF, enter your details, and get instant AI-powered verification. Download a stamped, verified PDF for official use.
- **Talent Show Verification:** Upload lyrics or performance documents, and get originality feedback from Gemini AI, with checks against existing internet data for originality.
- **Modern UI:** Sleek, animated landing page and forms, with confetti celebration on success.
- **Security:** All verification is handled securely, and stamped PDFs include institution branding.
- **Advanced AI:** Uses Google Vertex AI and Document AI for fine-tuned document classification and verification, and agent-based search for talent show originality.

## How we built it

- **Frontend:** React + Vite, Material-UI for components, Framer Motion for animations.
- **PDF Handling:** pdf-lib for reading and stamping PDFs, canvas-confetti for celebration effects.
- **AI Integration:** Gemini AI via @google/generative-ai, Google Vertex AI, and Document AI for document and lyrics verification.
- **Routing:** React Router for navigation between pages.
- **Assets:** Custom logos and icons for branding.

## Challenges we ran into

- Embedding images and stamps into PDFs reliably.
- Handling large PDF files in the browser.
- Integrating Gemini AI, Vertex AI, and Document AI for user-friendly feedback.
- Ensuring a smooth, responsive UI across devices.

## Accomplishments that we're proud of

- Fully client-side PDF verification and stamping.
- Seamless AI integration for instant feedback and originality checks.
- Modern, animated UI with great user experience.
- Secure download links and confetti celebration for verified documents.

## What we learned

- Advanced PDF manipulation in the browser.
- Integrating generative and fine-tuned AI into real-world workflows.
- Building modern UIs with Material-UI and Framer Motion.
- Handling file uploads and downloads securely in React.

## What's next for Untitled

- QR code verification on stamped PDFs.
- More document types and verification modes.
- Admin dashboard for bulk verification and analytics.
- Multi-language support and accessibility improvements.
- Further training and fine-tuning with Vertex AI and Document AI.
- Deploy to production and onboard real institutions.

---

**Setup Instructions**

1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```
2. Add your Gemini API key to `.env`:
   ```
   VITE_GEMINI_API_KEY=your-key-here
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

**Tech Stack:** React, Vite, Material-UI, pdf-lib, Framer Motion, Gemini AI, Google Vertex AI
