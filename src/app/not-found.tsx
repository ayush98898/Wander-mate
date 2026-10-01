import { Btn } from "@/components/site/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-end bg-ink pt-32 pb-16 text-bone">
      <div className="wrap">
        <p className="label text-bone/55">404 · Lost in the galis</p>
        <h1 className="display mt-6 max-w-5xl text-6xl md:text-9xl">
          This lane leads <em>nowhere.</em>
        </h1>
        <p className="mt-6 max-w-md text-bone/70">
          Even the lanes of Kashi have dead ends. Let&apos;s get you back to the river.
        </p>
        <div className="mt-10">
          <Btn href="/" variant="light">
            Back to the ghats
          </Btn>
        </div>
      </div>
    </section>
  );
}
