import { Sparkles, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-indigo-700 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-white/5 p-8 text-white ring-1 ring-white/15 sm:flex-row">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/20">
              <Sparkles className="h-4 w-4" /> Beta-Phase geöffnet
            </div>
            <h3 className="mt-4 text-2xl font-bold">Werdet Early Adopter</h3>
            <p className="mt-1 text-white/90">
              Testzugang für Gastgeber und ausgewählte Gäste – jetzt anmelden.
            </p>
          </div>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-indigo-700 shadow hover:shadow-lg transition"
          >
            Zugang anfragen
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
