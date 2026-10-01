import { ButtonLink } from "@/components/site/blocks";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-night pt-28 pb-16 text-parchment">
      <div className="container-x text-center">
        <p aria-hidden className="font-deva text-[7rem] leading-none text-marigold/40 sm:text-[10rem]">
          ॐ
        </p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl">This lane leads nowhere.</h1>
        <p className="mx-auto mt-4 max-w-md text-parchment/70">
          Even the galis of Kashi have dead ends. Let&apos;s get you back to the river.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" variant="light">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
