/**
 * Terms of Service and the Refund & Cancellation policy.
 *
 * These are the two documents a payment gateway asks for before it will let a
 * merchant collect money, and they describe what is actually sold in the
 * Newmeric Compass app: time-limited access to reading sections, bought once,
 * with no auto-renewal.
 *
 * They reuse the privacy policy's block vocabulary so all three read alike.
 */

import type { PolicyBlock } from "@/lib/data/privacy";
import { siteConfig } from "@/lib/data/site";

/** Shown under each title; keep in step with the date of the last edit. */
export const LEGAL_UPDATED = "17 September 2026";

const CONTACT_ROWS: PolicyBlock = {
  t: "contact",
  rows: [
    { kind: "email", label: "Email", value: siteConfig.email },
    { kind: "url", label: "Website", value: "www.newmericcompass.in" },
  ],
};

export const TERMS: PolicyBlock[] = [
  { t: "p", text: `These terms govern your use of the Newmeric Compass mobile application and this website, both operated by ${siteConfig.founder}, ${siteConfig.address.line1}, ${siteConfig.address.line2}. By creating an account or making a purchase you agree to them.` },

  { t: "h", text: "1. What we provide" },
  { t: "p", text: "Newmeric Compass is a Vastu compass and analysis application. It reads a direction from your device's sensors, places it in the sixteen-zone Vastu grid, and presents written guidance for that zone." },
  { t: "lead", text: "The app offers:" },
  { t: "list", items: [
    "A compass and pada readout, free to use without an account.",
    "Reading sections covering Vastu essentials, colour alignment, day-wise remedies and related material.",
    "Paid sections — such as the 16 Zone Analysis, the 7D Nexus and the Integrated Vastu Space & Environment Analysis — which open for a fixed period once purchased.",
    "Placement submissions, where you send photographs and a compass bearing for review, subject to the quota on your plan.",
  ] },

  { t: "h", text: "2. Guidance, not professional advice" },
  { t: "callout", text: "The readings in the app are traditional Vastu guidance. They are not architectural, structural, engineering, medical, legal or financial advice." },
  { t: "p", text: "Nothing in the app should be treated as a substitute for a qualified professional. Do not make structural changes to a building, or decisions about your health or finances, on the basis of the app alone. You remain responsible for what you choose to do with the guidance." },
  { t: "p", text: "A compass reading depends on your device's magnetometer and on its surroundings. Metal, electronics and magnetic interference can shift a bearing. Calibrate your device and take a reading away from such sources." },

  { t: "h", text: "3. Your account" },
  { t: "p", text: "You are responsible for keeping your login details private and for everything done through your account. Give us accurate details when you register — a purchase is tied to the email address on the account that made it." },
  { t: "p", text: "One account is for one person. Sharing an account, or reselling access, is not permitted." },
  { t: "p", text: "You may delete your account from within the app at any time. Deleting an account ends any access remaining on it, and that access is not refunded." },

  { t: "h", text: "4. Purchases and pricing" },
  { t: "p", text: "Prices are shown in Indian Rupees on the purchase screen in the app, before you pay, and are inclusive of applicable taxes. The price and the period shown at the moment of purchase are the ones that apply to that purchase." },
  { t: "p", text: "A purchase opens the sections named in that plan, for the period named in that plan. Some plans open several sections together. Payments are one-time: nothing renews automatically, and no payment instrument is stored by us or charged again without you starting a new purchase." },
  { t: "p", text: "Payments are processed by Razorpay. We do not receive or store your card, UPI or banking details at any point." },
  { t: "p", text: "Refunds and cancellations are covered separately in our Refund & Cancellation Policy." },

  { t: "h", text: "5. What you may not do" },
  { t: "list", items: [
    "Copy, record, republish or redistribute the written content in the app.",
    "Resell, sublicense or share paid access with anyone else.",
    "Attempt to bypass a paywall, or to reach content you have not purchased.",
    "Reverse engineer the app, or interfere with the servers it depends on.",
    "Upload anything unlawful, or anything you do not have the right to send us.",
  ] },

  { t: "h", text: "6. Content and ownership" },
  { t: "p", text: "The readings, illustrations, charts and text in the app are our own work and remain our property. A purchase gives you personal access to read them for the period bought — it does not transfer ownership or grant a licence to reuse them." },
  { t: "p", text: "Photographs you submit remain yours. You give us permission to store them and to use them for the purpose of preparing your analysis, and nothing else." },

  { t: "h", text: "7. Availability" },
  { t: "p", text: "We aim to keep the app and its servers running continuously, but we cannot promise uninterrupted service. Maintenance, network failures and app store or device changes can interrupt access. Where an interruption is prolonged and on our side, write to us and we will extend the affected access." },

  { t: "h", text: "8. Changes to these terms" },
  { t: "p", text: "We may update these terms as the app changes. The date below always shows when they were last revised, and continuing to use the app after a change means you accept the revised terms." },

  { t: "h", text: "9. Governing law" },
  { t: "p", text: "These terms are governed by the laws of India. Any dispute arising from them is subject to the jurisdiction of the courts at Karbi-Anglong, Assam." },

  { t: "h", text: "10. Contact" },
  { t: "p", text: "For anything about these terms, or about your account or a purchase, reach us here. We reply within 24 hours on working days." },
  CONTACT_ROWS,

  { t: "byline", text: `Newmeric Compass — last updated ${LEGAL_UPDATED}` },
];

export const REFUND: PolicyBlock[] = [
  { t: "p", text: "This policy explains when a payment made in the Newmeric Compass app can be refunded, and how to ask for one." },
  { t: "callout", text: "Paid sections are digital content that opens the moment your payment succeeds. Once a section has been opened, that purchase is not refundable." },

  { t: "h", text: "1. Why access is not refundable once opened" },
  { t: "p", text: "What you buy is the right to read a section of the app. There is no physical delivery and nothing to return — the content is available to you in full as soon as the payment is confirmed. For that reason we cannot take it back, and a purchase cannot be reversed once the section has opened." },
  { t: "p", text: "Before you buy, the purchase screen names every section the plan opens and the period it opens them for. Please read it, and write to us first if anything is unclear." },

  { t: "h", text: "2. When we do refund" },
  { t: "lead", text: "We refund in full in these cases:" },
  { t: "list", items: [
    "Money was debited but access did not open. Tell us and we will either open the access or refund the payment, whichever you prefer.",
    "You were charged twice for the same plan. The duplicate payment is refunded in full.",
    "You were charged an amount other than the price shown on the purchase screen. The difference, or the whole payment, is refunded.",
    "A technical fault on our side made a purchased section unusable for a prolonged period and we could not put it right. We will extend the access or refund it.",
  ] },
  { t: "p", text: "A change of mind after a section has opened, or not using access you bought, does not qualify." },

  { t: "h", text: "3. How to ask" },
  { t: "p", text: "Write to us within 7 days of the payment, from the email address on the account that made it. Include the date of the payment, the amount, and the plan you bought. If you have the Razorpay payment reference, include that too — it makes the check immediate." },
  { t: "p", text: "We acknowledge every request within 48 hours and tell you our decision within 5 working days." },

  { t: "h", text: "4. How a refund reaches you" },
  { t: "p", text: "Approved refunds are made through Razorpay to the same payment method used for the purchase. We cannot send a refund anywhere else. Once we issue it, the money usually reaches your account in 5 to 7 working days, depending on your bank." },
  { t: "p", text: "Any access granted by the refunded purchase is withdrawn when the refund is issued." },

  { t: "h", text: "5. Cancellation" },
  { t: "p", text: "Payments in the app are one-time. Nothing renews automatically, no subscription runs in the background, and no payment method is stored for a future charge — so there is no recurring payment to cancel." },
  { t: "p", text: "You can abandon a payment at any point before it is confirmed simply by closing the payment window. Nothing is charged and nothing is unlocked." },
  { t: "p", text: "You may stop using the app, or delete your account, at any time. Deleting an account ends any access remaining on it, and that unused period is not refunded." },

  { t: "h", text: "6. Contact" },
  { t: "p", text: "All refund and cancellation requests go here." },
  CONTACT_ROWS,

  { t: "byline", text: `Newmeric Compass — last updated ${LEGAL_UPDATED}` },
];
