import { WhatsAppIcon } from "@/components/site/icons";
import { whatsappLink } from "@/lib/content";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Namaste WanderMate! I'd like to plan a trip to Varanasi.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with WanderMate on WhatsApp"
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.45)] transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
