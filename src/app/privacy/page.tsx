import type { Metadata } from "next";
import Link from "next/link";

import { site, whatsappLink } from "@/lib/content";
import { breadcrumbs, JsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How WanderMate collects, uses and protects your personal information when you visit wandermate.in, enquire or travel with us. No cookies, no tracking.",
  path: "/privacy",
});

const UPDATED = "9 October 2026";

/** The policy, section by section. Written to match what the site and the business actually do. */
const sections: { id: string; title: string; body: React.ReactNode }[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          WanderMate is a heritage and cultural travel company based in Varanasi, India. We plan and run journeys in Varanasi and plan private
          journeys across India and abroad. In this policy, &ldquo;we&rdquo; and &ldquo;us&rdquo; mean WanderMate, and &ldquo;you&rdquo;
          means anyone who visits {site.url.replace("https://", "")}, contacts us or travels with us.
        </p>
        <p>
          We are responsible for the personal information described here. Our address is {site.address}.
        </p>
      </>
    ),
  },
  {
    id: "browsing",
    title: "When you browse this website",
    body: (
      <>
        <p>
          You can read this website without telling us who you are. We do not use cookies, analytics, advertising pixels or any other tracking
          on this site, and we do not ask you to create an account.
        </p>
        <p>
          The site is hosted by Vercel. Like any web host, its servers keep short-lived technical logs of requests (such as IP address,
          browser type and the page requested) to deliver the site and keep it secure. We do not use these logs to identify you. Our fonts are
          served from this site, so your browser does not contact a font provider when you visit.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "When you contact us",
    body: (
      <>
        <p>
          The trip builders and &ldquo;Reserve&rdquo; buttons on this site do not send anything to us by themselves. They prepare a message
          and open WhatsApp on your device; nothing is sent until you press send. If you write to us on WhatsApp, Instagram, by email or by
          phone, we receive what you choose to share, typically your name, phone number, email address, travel dates, the number of
          travellers and your preferences.
        </p>
        <p>
          Those conversations also pass through the service you use (for example WhatsApp or Instagram, both run by Meta), which handles
          them under its own privacy policy.
        </p>
      </>
    ),
  },
  {
    id: "booking",
    title: "When you book and travel with us",
    body: (
      <>
        <p>To arrange your journey we may need, and will only ask for, what the trip requires:</p>
        <ul>
          <li>names, ages and contact details of the travellers;</li>
          <li>
            a government photo ID for each traveller, which hotels must record at check-in and which festival and cruise organisers may ask
            for, and for guests from abroad, passport and visa details that hotels are required to report;
          </li>
          <li>arrival and departure details, such as train or flight times;</li>
          <li>dietary needs, and any medical or accessibility needs you choose to tell us about so we can plan around them;</li>
          <li>payment records, such as the amount, date and reference of your advance and balance payments.</li>
        </ul>
        <p>
          We do not collect or store card numbers on this website. Payments are made through your bank or a payment service, which processes
          your payment details under its own terms.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use your information",
    body: (
      <ul>
        <li>to answer your questions and send you a quote;</li>
        <li>to book and deliver your journey: stays, transfers, guides, boats, entry passes and darshan;</li>
        <li>to keep you safe and supported during the trip, including in an emergency;</li>
        <li>to keep accounts and meet our legal and tax obligations;</li>
        <li>to send you information about future journeys, only if you have asked us to, and you can ask us to stop at any time.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>
          We share only what each partner needs to provide your part of the journey: hotels, drivers and transport providers, guides, boat
          operators, and event partners such as the Akashganga festival for Dev Deepawali. We may also share information when the law
          requires it, for example with the authorities.
        </p>
        <p>We do not sell your personal information, and we do not share it with anyone for their own marketing.</p>
      </>
    ),
  },
  {
    id: "photos",
    title: "Photographs and videos on our trips",
    body: (
      <p>
        Some journeys include photographs or video of your trip, which we share with you. We will only post photographs or video in which
        you can be recognised, or your words as a review, on our website or social media with your permission. You can ask us to take any of
        them down at any time.
      </p>
    ),
  },
  {
    id: "keeping",
    title: "How long we keep it",
    body: (
      <p>
        We keep enquiry conversations for as long as they are useful to answer you and to plan a trip you might book. We keep booking and
        payment records for as long as the law requires for accounts and tax, and ID copies only for as long as the trip and the related
        legal requirements need them. After that we delete them or make them anonymous.
      </p>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <p>
        Only the members of our team who are planning or running your trip can see your details, and we share with partners only what they
        need. No method of storing or sending information is completely secure, but we take reasonable care to protect what you give us and
        will tell you if a breach affects you, as the law requires.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Under India&rsquo;s Digital Personal Data Protection Act, 2023, and wherever you live, you can ask us to tell you what personal
          information we hold about you, to correct or update it, or to delete it once we no longer need it for your trip or the law. Where
          we rely on your consent, you can withdraw it at any time. You can also name someone to act for you.
        </p>
        <p>
          To use any of these rights, write to us at <a href={`mailto:${site.email}`}>{site.email}</a>. We will reply within a reasonable
          time, and in any case within the period the law allows.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Our journeys are booked by adults. When a family travels with children, we collect the children&rsquo;s details from the parent or
        guardian who books, and only for the trip.
      </p>
    ),
  },
  {
    id: "links",
    title: "Other websites",
    body: (
      <p>
        This site links to other websites and apps, such as WhatsApp, Instagram and the sources in our Journal. Their privacy practices are
        their own; please read their policies when you use them.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        If we change how we handle personal information, for example by adding an analytics tool or an online booking form, we will update
        this page before the change and show the new date at the top.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact and grievances",
    body: (
      <>
        <p>
          For any question or complaint about your personal information, contact us. We will try to resolve it quickly; if you are not
          satisfied, you may complain to the Data Protection Board of India.
        </p>
        <ul>
          <li>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            WhatsApp:{" "}
            <a href={whatsappLink("Namaste WanderMate, I have a question about my personal information.")} target="_blank" rel="noreferrer">
              {site.phoneDisplay}
            </a>
          </li>
          <li>Post: WanderMate, {site.address}</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([["Privacy policy", "/privacy"]])} />
      <section className="border-b border-ink/12 pt-36 pb-14 md:pt-44 md:pb-20">
        <div className="wrap">
          <p className="label text-ochre">The fine print, in plain words</p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(3rem,8vw,6.5rem)] leading-[0.95]">
            Privacy <em>policy</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-2">
            We collect as little as we can: no cookies, no tracking, no accounts. What you share with us to plan a journey is used for that
            journey, shared only with the people who make it happen, and never sold.
          </p>
          <p className="label mt-8 text-smoke">Last updated {UPDATED}</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="label text-smoke">On this page</p>
            <ol className="mt-4 space-y-2 border-t border-ink/15 pt-4">
              {sections.map((s, i) => (
                <li key={s.id} className="flex gap-3 text-sm">
                  <span className="w-5 shrink-0 tabular-nums text-smoke">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${s.id}`} className="text-ink-2 underline-offset-4 hover:text-ochre hover:underline">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 max-w-[68ch]">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28 border-b border-ink/12 py-10 first:pt-0">
                <p className="label text-smoke tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                <h2 id={`${s.id}-h`} className="display mt-3 text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.1]">
                  {s.title}
                </h2>
                <div className="mt-5 space-y-4 leading-relaxed text-ink-2 [&_a]:text-ochre [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {s.body}
                </div>
              </section>
            ))}
            <p className="mt-10 text-sm text-smoke">
              Planning a trip? <Link href="/plan" className="text-ochre underline underline-offset-4">Plan a journey</Link> or read{" "}
              <Link href="/about" className="text-ochre underline underline-offset-4">about us</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
