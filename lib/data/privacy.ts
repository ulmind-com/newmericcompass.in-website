/**
 * The privacy policy, mirrored from the Newmeric Compass app.
 *
 * This is the same policy the app shows (app repo: src/lib/privacy.ts); the
 * two must be kept in step. The block vocabulary is a trimmed version of the
 * app's — only the kinds this policy actually uses.
 */

export type PolicyBlock =
  | { t: "p"; text: string }
  | { t: "callout"; text: string }
  | { t: "h"; text: string }
  | { t: "sub"; text: string }
  | { t: "lead"; text: string }
  | { t: "list"; items: string[] }
  | { t: "pairs"; items: { label: string; text: string }[] }
  | { t: "contact"; rows: { kind: "email" | "url"; label: string; value: string }[] }
  | { t: "byline"; text: string };

/** Shown under the title; keep in step with the date of the last edit. */
export const PRIVACY_UPDATED = "18 September 2026";

export const PRIVACY: PolicyBlock[] = [
  { t: "p", text: "Newmeric Compass is a Vastu compass and analysis app. This policy explains what the app collects, why it collects it, who else sees it, and what you can ask us to do about it." },
  { t: "callout", text: "We do not sell your data, and we do not use it for advertising." },

  { t: "h", text: "1. What we collect" },

  { t: "sub", text: "Your account" },
  { t: "p", text: "When you create an account we store your name and email address. Your password is stored only as a one-way hash — we cannot read it. Signing up and resetting a password are confirmed by a one-time code sent to your email." },
  { t: "p", text: "If you sign in with Google, Google gives us the name, email address and profile picture on that account. We do not receive your Google password." },
  { t: "p", text: "You can use the compass, the daily tips and the reading sections without an account." },

  { t: "sub", text: "What you submit" },
  { t: "lead", text: "When you send a placement for analysis, the app uploads:" },
  { t: "list", items: [
    "the photographs you capture for that placement",
    "the compass bearing in degrees and the pada it falls in",
    "the category you chose, such as Kitchen or Main Entrance",
    "the latitude and longitude recorded at the moment of capture, if you allowed location access",
  ] },
  { t: "p", text: "Nothing is uploaded until you tap to send a submission. Turning the compass, reading a zone or browsing a chapter sends only the bearing needed to look up that zone, with nothing that identifies you attached to it." },

  { t: "sub", text: "Your device" },
  { t: "p", text: "A notification token, so we can send you the daily tip. It is tied to the installation, not to you, and your email is stored beside it only when you are signed in." },

  { t: "sub", text: "Ask Newmeric AI" },
  { t: "p", text: "When you use Ask Newmeric AI, your question is sent to our server and passed to the AI services named in section 4 to be understood and answered. So that it can follow a conversation, your last few questions and its answers go with it. Your name and email are not sent to those services." },
  { t: "p", text: "The conversation itself is kept only on your phone, and “New chat” clears it. We do not store your conversations on our servers, though the opening words of a question may appear for a short time in our service logs while we look into a problem. Please do not put personal details in your questions." },

  { t: "sub", text: "Payments" },
  { t: "p", text: "Payments are handled by Razorpay. Your card, UPI or bank details are entered on Razorpay’s own screen and never pass through this app or our servers. What we receive and store is the order reference, the payment reference and the plan you bought, so we know what you are entitled to." },

  { t: "h", text: "2. Permissions, and why each is asked for" },
  { t: "pairs", items: [
    { label: "Camera", text: "To photograph a placement for analysis, and for the AR overlay. Photos leave the device only in a submission you send." },
    { label: "Location", text: "To record where a placement photo was taken, which is part of reading a site. Asked for only while the app is open, and the app works without it." },
    { label: "Motion sensors", text: "The magnetometer is the compass. Its readings stay on the device." },
    { label: "Notifications", text: "To deliver the daily Vastu tip. You can turn this off in your phone’s settings at any time." },
  ] },

  { t: "h", text: "3. How we use it" },
  { t: "list", items: [
    "To give you the analysis, remedies and readings the app is for.",
    "To keep your account, your submissions and your purchases available to you across sign-ins.",
    "To send the daily tip, if you have allowed notifications.",
    "To answer the questions you ask Ask Newmeric AI.",
    "To answer you when you contact us, and to investigate a problem you report.",
    "To keep the service working and secure.",
  ] },
  { t: "p", text: "We do not profile you, and we do not make automated decisions that have a legal effect on you." },

  { t: "h", text: "4. Who else sees it" },
  { t: "lead", text: "Only the services that make the app work, and only what each of them needs:" },
  { t: "pairs", items: [
    { label: "Google Firebase", text: "Sign-in, and delivery of notifications to your device." },
    { label: "Expo", text: "Routes each notification from our server to your device." },
    { label: "Cloudinary", text: "Stores the photographs you submit." },
    { label: "Razorpay", text: "Takes the payment. They, not we, hold your payment details." },
    { label: "Groq", text: "Runs the AI that reads your question and writes the answer. It receives your question, the recent conversation and the relevant parts of Acharya Pannkaj Kabiraj’s teachings — not your name or email." },
    { label: "Google (Gemini API)", text: "Turns a question into a form that can be matched against the teachings. It receives the question text only." },
    { label: "MongoDB Atlas and Render", text: "Host the database and the server the app talks to." },
  ] },
  { t: "p", text: "We may also disclose information where the law requires it, or to establish or defend a legal claim." },

  { t: "h", text: "5. Where it is kept, and for how long" },
  { t: "p", text: "Your data is stored on servers operated by the providers named above, which may be outside India. We keep your account and submissions for as long as your account exists. If you ask us to delete your account, we remove your profile and submissions; records we are required to keep for tax and accounting — the fact and amount of a payment — are retained for the period the law requires." },

  { t: "h", text: "6. Your choices" },
  { t: "list", items: [
    "Ask for a copy of the data held about you.",
    "Ask us to correct anything that is wrong.",
    "Ask us to delete your account and what is attached to it.",
    "Withdraw camera, location or notification permission at any time in your phone’s settings, without losing access to the rest of the app.",
  ] },
  { t: "p", text: "Write to us at the address at the end of this policy and we will act on your request." },

  { t: "h", text: "7. Payments, subscriptions and refunds" },
  { t: "callout", text: "All payments are final. Subscriptions and one-time purchases are not refundable." },
  { t: "list", items: [
    "A subscription runs for the period you paid for and does not renew by itself. It is not refunded in part or in full if you stop using it before that period ends.",
    "A one-time purchase unlocks its feature permanently and is not refundable once unlocked.",
    "Access already granted is not withdrawn if you cancel; it simply is not extended.",
  ] },
  { t: "p", text: "Where a payment fails or is charged twice, write to us and we will trace it with Razorpay and return anything taken in error." },
  { t: "p", text: "Nothing here limits any right you have under Indian consumer law, and purchases made through Google Play remain subject to Google’s own refund rules." },

  { t: "h", text: "8. Children" },
  { t: "p", text: "The app is not intended for children under 13, and we do not knowingly collect their data. If you believe a child has given us information, write to us and we will remove it." },

  { t: "h", text: "9. Security" },
  { t: "p", text: "Traffic between the app and our servers is encrypted in transit. Passwords are hashed. Access to the admin panel is restricted and requires a sign-in. No system is perfect, and we do not claim otherwise; if a breach affects you we will tell you." },

  { t: "h", text: "10. Changes to this policy" },
  { t: "p", text: "When this policy changes, the date below the title changes with it. Continuing to use the app after a change means you accept the revised policy." },

  { t: "h", text: "11. Contact" },
  { t: "p", text: "For any question about this policy, or to make a request about your data, write to us and we will reply." },
  { t: "contact", rows: [
    { kind: "email", label: "Email", value: "newmericcompass@gmail.com" },
    { kind: "url", label: "Website", value: "www.newmericcompass.in" },
  ] },
  { t: "byline", text: `Newmeric Compass — last updated ${PRIVACY_UPDATED}` },
];
