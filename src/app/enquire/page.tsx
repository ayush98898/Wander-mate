import type { Metadata } from "next";

import { PageHero } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { InstagramIcon, WhatsAppIcon } from "@/components/site/icons";
import { site, whatsappLink } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enquire Now",
  description: "Send WanderMate an enquiry for your Varanasi trip — dates, group size and special requests.",
};

export default async function EnquirePage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string | string[] }>;
}) {
  const { interest } = await searchParams;
  const value = (Array.isArray(interest) ? interest[0] : interest)?.slice(0, 120);

  return (
    <>
      <PageHero
        image="/images/diya.jpg"
        eyebrow="Enquiry form"
        deva="नमस्ते"
        title={
          <>
            Tell us about <em className="text-marigold">your Kashi.</em>
          </>
        }
        intro="Share a few details and a Kashi companion will get back to you with ideas, an itinerary and a quote."
      />
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-[1.5rem] border border-ink/10 bg-card p-6 md:p-10">
            <EnquiryForm interest={value} />
          </div>
          <aside className="space-y-6">
            <div className="rounded-[1.5rem] bg-ink p-8 text-parchment">
              <p className="eyebrow text-marigold">Prefer to chat?</p>
              <p className="mt-3 font-display text-3xl">We reply on WhatsApp.</p>
              <a
                href={whatsappLink("Namaste WanderMate! I'd like to plan a trip to Varanasi.")}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center gap-3 text-lg hover:text-marigold"
              >
                <WhatsAppIcon className="size-6 text-[#25D366]" /> {site.phoneDisplay}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-3 hover:text-marigold"
              >
                <InstagramIcon className="size-6" /> {site.instagramHandle}
              </a>
            </div>
            <blockquote className="rounded-[1.5rem] bg-sand p-8 font-display text-2xl leading-snug italic">
              “Varanasi is older than history, older than tradition, older even than legend.”
              <footer className="eyebrow mt-4 not-italic text-ink-muted">Mark Twain</footer>
            </blockquote>
          </aside>
        </div>
      </section>
    </>
  );
}
